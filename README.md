# model-rest

**model-rest** extends [model](https://github.com/satisfeet/model)
with statics to support a HTTP Rest interface.

## Install

With [component](https://github.com/component/component)

		$ component install satisfeet/model-rest

With [npm](https://github.com/npm/npm)

    $ npm install --save satisfeet-model-rest

## Documentation

Use modal as used to but load **model-rest** with `statics`.

		var model = require('satisfeet-model');
    var rest  = require('satisfeet-model-rest');

		var Customer = model('Customer')
			.schema({
				name: String,
				email: String,
				address: {
					street: String,
					city: String
				}
			})
      .use(rest);

    Customer.find({ search: 'bla' }, function(err, result) {
      // result is a component/collection
      result
        .select(function(item) {
          // select something
        })
        .each(function(item) {
          // do something with them
        })
    });

Following statics are added (the url is generated from the model name):

### Model.find([query], callback)

    Customer.find(function(err, results) {
      // you can also omit "query" parameters
    });

Does a `GET /customers`.

### Model.findOne(param, callback)

Does a `GET /customers/<model.id>`.

### Model.create(model, callback)

    Customer.create(model, function(err) {
      // if no err is passed everything went fine
      // model is automatically updated with response body
    });

Does a `POST /customers`.

### Model.update(model, callback)

Does a `PUT /customers/<model.id>`.

### Model.remove(model, callback)

Does a `DELETE /customers/<model.id>`.

## License

Copyright 2014 Bodo Kaiser <i@bodokaiser.io>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
