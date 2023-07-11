'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'Data/LF14000NN.xlsx'
});

console.log(typeof result)