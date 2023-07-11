'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'Data/LF14000NN.xlsx'
});

const data = result['Sheet1']

for (let val of data) {
  if (typeof val['A'] == 'number') {
    val['A'] = val['A'].toString()
  }
}


console.log('----------') // 10558156

const tabData = data.slice(3)


console.log(tabData);
