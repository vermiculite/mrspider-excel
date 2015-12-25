var chai = require('chai');
var should = chai.should();
var sinon = require('sinon');

var mrspiderExcel = require('..');
var XMLWriter = require('../XMLWriter');


describe('mrspider excel', function () {

    var validPage;
    var validSpider;
    var validOptions;

    beforeEach(function () {
        validPage = {
            data: {
                name: 'sean',
                age: 42
            }
        };
        validOptions = {
            savePath: '.',
            saveFile: 'example.xls'
        };
        validSpider = {};
    });


    it('should throw an error if no savePath is defined in the options', function () {
        delete validOptions.savePath;
        (function () {
            var excel = mrspiderExcel(validOptions);
        }).should.throw(Error);
    });

    it('should throw an error if no saveFile is given in the options.', function() {
        delete validOptions.saveFile;
        (function () {
            var excel = mrspiderExcel(validOptions);
        }).should.throw(Error);
    });


    it('should call next', function (done) {
        var excel = mrspiderExcel(validOptions);
        excel(validPage, validSpider, done);
    });

    describe('XMLWriter#appendData', function() {
        var fakeMsExcelBuilder = {
            createWorkbook: sinon.spy()
        };
        var xmlWriter = new XMLWriter(fakeMsExcelBuilder, validOptions);


    });
});
