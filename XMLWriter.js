'use strict';

class XMLWriter {

    constructor(excelBuilder, options) {
        this.excelBuilder = excelBuilder;
        if(!options.saveFile) {
            throw new Error('A save file is required.');
        }
        this.workbook = excelBuilder.createWorkbook(options.savePath, options.saveFile);
        this.sheet = this.workbook.createSheet();
        this.currentRow = 0;
    }

    appendData(data) {

    }
}

module.exports = XMLWriter;
