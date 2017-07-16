'user strict';

module.exports = function(done){
  $.router.post('/api/login', function(req, res, next){
    const user = $.method('user.get').call(req.body);
    if(!user) return next(new Error('user does not exists'));

    if(!$.utils.validatePassword(req.body.password, user.password)){
      return next(new Error('incorrect password'));
    }

    res.json({success: true});
  });

  $.router.post('/api/login', function(req, res, next){

  });

  $.router.post('/api/signup', function(req, res, next){

  });

}
