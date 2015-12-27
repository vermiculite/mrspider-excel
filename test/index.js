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

    it('should throw an error if no saveFile is given in the options.', function () {
        delete validOptions.saveFile;
        (function () {
            var excel = mrspiderExcel(validOptions);
        }).should.throw(Error);
    });


    it('should call next', function (done) {
        var excel = mrspiderExcel(validOptions);
        excel(validPage, validSpider, done);
    });

    describe('XMLWriter#appendData', function () {

        it('should setup the writer with saveFile and savePath', function () {
            var stub = sinon.stub();
            var workbookSpy = {
                createSheet: sinon.spy()
            };
            stub.returns(workbookSpy);
            var fakeMsExcelBuilder = {
                createWorkbook: stub
            };
            var xmlWriter = new XMLWriter(fakeMsExcelBuilder, validOptions);
            fakeMsExcelBuilder.createWorkbook.called.should.equal(true);
            fakeMsExcelBuilder.createWorkbook.firstCall.args[0].should.equal('.');
            fakeMsExcelBuilder.createWorkbook.firstCall.args[1].should.equal('example.xls');
        });

        it('should create a worksheet called sheet1', function () {
            var stub = sinon.stub();
            var workbookSpy = {
                createSheet: sinon.spy()
            };
            stub.returns(workbookSpy);
            var fakeMsExcelBuilder = {
                createWorkbook: stub
            };
            var xmlWriter = new XMLWriter(fakeMsExcelBuilder, validOptions);
            workbookSpy.createSheet.called.should.equal(true);
        });

    });
});
