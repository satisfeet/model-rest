var statics = require('./statics');

module.exports = function(model) {
  model.route = '/' + model.model.toLowerCase() + 's';

  model.statics(statics);
};
