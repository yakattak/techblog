const router = require('express').Router();
const { Contributor, Blog_Post } = require('../../models');

// router.post('/login', (req, res) => {
//     console.log(req.body);
//     res.json('login info');
// });

// router.post('/', (req, res) => {
//     console.log(req.body);
//     res.json('signup info');
// });

// get all Contributors
router.get('/', (req, res) => {
  Contributor.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Contributor.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    // include: [
    //   {
    //     model: Blog_Post,
    //     attributes: ['id', 'title', 'post_url', 'created_at']
    //   },
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'created_at'],
    //     include: {
    //       model: Post,
    //       attributes: ['title']
    //     }
    //   },
    //   {
    //     model: Post,
    //     attributes: ['title'],
    //     through: Vote,
    //     as: 'voted_posts'
    //   }
    // ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {"username": "Lernantino", "email": "lernantino@gmail.com", "password": "password1234"}
  Contributor.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbContributorData => {
      req.session.save(() => {
        req.session.contributor_id = dbContributorData.id;
        req.session.username = dbContributorData.username;
        req.session.loggedIn = true;
  
        res.json(dbContributorData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  Contributor.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.contributor_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json({ Contributor: dbUserData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});


module.exports = router;
