var superagent = require('superagent');
var collection = require('collection');

exports.find = function(query, callback) {
  var self = this;

  superagent.get(url(this)).accept('json')
    .end(function(err, res) {
      if (err) return callback(err);

      var result = new collection();

      res.body.forEach(function(item) {
        result.push(new self(item));
      });

      callback(null, result);
    });
};

exports.findOne = function(param, callback) {
  var self = this;

  superagent.get(url(this, param))
    .accept('json')
    .end(function(err, res) {
      if (err) return callback(err);

      callback(null, new self(res.body));
    });
};

exports.create = function(model, callback) {
  var self = this;

  superagent.post(url(this))
    .accept('json')
    .send(model)
    .end(function(err, res) {
      if (err) return callback(err);
      if (!res.ok) return callback(new Error(res.body.error));

      model.set(res.body);

      callback(null);
    });
};

exports.update = function(model, callback) {
  var self = this;

  superagent.put(url(this, model))
    .accept('json')
    .send(model)
    .end(function(err, res) {
      if (err) return callback(err);
      if (!res.ok) return callback(new Error(res.body.error));

      model.set(res.body);

      callback(null);
    });
};

exports.remove = function(model, callback) {
  var self = this;

  superagent.del(url(this, model))
    .accept('json')
    .end(function(err, res) {
      if (err) return callback(err);
      if (!res.ok) return callback(new Error(res.body.error));

      callback(null);
    });
};

function url(self, model) {
  if (!model) return self.route;

  if (model instanceof self) {
    return self.route + '/' + model.id;
  } else {
    return self.route + '/' + model;
  }
}
