const router = require('express').Router();
// don't need to require sequelize here because it's already required in our candy model
const Candy = require('../db/models/Candy');

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    // sending via res.json() because this is an API
    res.json(candies);
  } catch (err)  {
    next(err);
  }
});

router.get('/:candyId', async (req, res, next) => {
  try {
    const oneCandy = await Candy.findOne({
      where: {
        id: req.params.candyId
      }
    });
    if (oneCandy === null) {
      res.status(404).send()
    } else {
      res.json(oneCandy);
    }
  } catch (err) {
    next(err)
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

module.exports = router
