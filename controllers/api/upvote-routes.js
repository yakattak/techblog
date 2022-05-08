const router = require('express').Router();
const { Contributor, Blog_Post, Upvote } = require('../../models');

// router.post('/login', (req, res) => {
//     console.log(req.body);
//     res.json('login info');
// });

// router.post('/', (req, res) => {
//     console.log(req.body);
//     res.json('signup info');
// });

// get all Upvote
router.get('/', (req, res) => {
  Upvote.findAll()
    .then(dbUpvoteData => res.json(dbUpvoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;