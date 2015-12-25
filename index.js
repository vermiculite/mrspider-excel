var excelbuilder = require('msexcel-builder');
var XmlWriter = require('./XMLWriter');
module.exports = function(options) {
    var xmlWriter = new XmlWriter(excelbuilder, options);
    return function(page, spider, next) {
        if(page.data && page.valid) {

        }
        setImmediate(next);
    }
}
