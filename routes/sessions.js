const { new: _new, create, delete: _delete } = require('../controllers/SessionsController');


function auth (req, res, next) {
  if (!req.isAuthenticated()) {
    req.flash('Danger!', 'You need to login first.');
    return res.redirect('/login');
  }
  next();
}

module.exports = router => {
  router.get('/login', _new);
  router.post('/authenticate', create);
  router.get('/logout', _delete);
};