// Complete pipeline script

'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'Data/LF14000NN.xlsx'
});

const data = result['Sheet1']

for (let val of data) {
  if (typeof val['A'] == 'number') {
    val['A'] = val['A'].toString(); // ensure all Part Numbers are strings
  }
}

/**
 * Use to generate random ID for each cross reference
 * @returns random ID (string)
 */
function idGen(): string {
    var S4 = function() {
       return (((1+Math.random())*0x100)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const mainPartNumber = data[1]['A']; // get original part number

console.log('----------') 


const tabData = data.slice(3); // get cross references

// data type of all cross references
// A: Part Number, B: Empty, C: Manufacturer, D: Description
interface Item {
    partNumber: string;
    manufacturer: string;
    description: string;
}

const formatData: Item[] = [];

for (let i in tabData) {
    const item: Item = {
        partNumber: tabData[i]['A'],
        manufacturer: tabData[i]['C'],
        description: tabData[i]['D']
    };
    formatData.push(item) // Push formated data in array
}

const partNumberData: string[] = [];
const manufacturerData: string[] = [];
const descriptionData: string[] = [];
const ids: string[] = [];

for (let i in formatData) {
    partNumberData.push(formatData[i]['partNumber'])
    manufacturerData.push(formatData[i]['manufacturer'])
    descriptionData.push(formatData[i]['description'])
    ids.push(idGen())
}   
function printData(): void { 
    
    console.log('IDs:', ids);
    console.log('All Data:', formatData);
    console.log('Part Numbers:', partNumberData);
    console.log('Manufacturers:', manufacturerData);
    console.log('Descriptions:', descriptionData);
}

printData()