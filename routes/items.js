const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Item = require('../models/Item');

// @route     GET api/items
// @desc      Get all users calorie items
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const items = await Item.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/items
// @desc      Add new calorie item
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, calories } = req.body;

    try {
      const newItem = new Item({
        name,
        calories,
        user: req.user.id
      });

      const item = await newItem.save();

      res.json(item);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/items/:id
// @desc      Update calorie item
// @access    Private
router.put('/:id', auth, async (req, res) => {
    const { name, calories } = req.body;

  // Build calorie item object
  const itemFields = {};
  if (name) itemFields.name = name;
  if (calories) itemFields.calories = calories;

  try {
    let item = await Item.findById(req.params.id);

    if (!item) return res.status(404).json({ msg: 'Calorie item not found' });

    // Make sure user owns calorie item
    if (item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    item = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: itemFields },
      { new: true }
    );

    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/items/:id
// @desc      Delete calorie item
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);

    if (!item) return res.status(404).json({ msg: 'Calorie item not found' });

    // Make sure user owns calorie item
    if (item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Item.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Calorie item removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;