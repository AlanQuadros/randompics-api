'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.login = function (req, res){{}{}{}{}{}
  User.findOne({ email: req.body.email, senha : req.body.senha }).exec((err, user) =>{
    if (err) {
      return res.status(400);
    } else if (!user) {
      var err = new Error('User not found.');
      return res.status(400);
    }
    return res.status(200).send(user);
  });
}

exports.mandaFoto = function(req, res) {
  User.findOne({},(err,user)=>{
    User.findOneAndUpdate({email : user.email}, { "$push": { "fotos": {picture : req.body.picture, place : req.body.place}}}, {new: true}, function(err, user) {
      if (err)
        return res.status(400).send(err);
      return res.status(200).send({msg:"ok"});
    });
  });
}

exports.listaFotos = function(req, res) {
  User.findOne({ email: req.params.email}).exec((err, user) => {
    if (err) {
      return res.status(400);
    } else if (!user) {
      var err = new Error('User not found.');
      return res.status(400);
    }
    return res.status(200).send(user.fotos);
  })
}