'use strict'

const router = require('express').Router()
const Candy = require('../db/models/Candy');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

router.get('/candies', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.send(candies);
  } catch (err)  {
    next(err);
  }
});

// not sure if this works yettttt
// router.post('/candies', async (req, res, next) => {
//   try {
//     const newCandy = Candy.create({
//       name: req.body.name,
//       description: req.body.description,
//       quantity: req.body.quantity,
//       imageUrl: req.body.imageUrl
//     });
//   } catch (err) {
//     next(err)
//   }
// });

router.get('/candies/:candyId', async (req, res, next) => {
  try {
    const oneCandy = await Candy.findOne({
      where: {
        id: req.params.candyId
      }
    });
    if (oneCandy === null) {
      res.status(404).send()
    } else {
      res.send(oneCandy);
    }
  } catch (err) {
    next(err)
  }
});

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
