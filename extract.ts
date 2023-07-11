'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'Data/LF14000NN.xlsx'
});

const data = result['Sheet1']

for (let val of data) {
  if (typeof val['A'] == 'number') {
    val['A'] = val['A'].toString();
  }
}


console.log('----------') // 10558156

// A: Part Number, B: Empty, C: Manufacturer, D: Description

const tabData = data.slice(3);

console.log(tabData[0]['C']); 
