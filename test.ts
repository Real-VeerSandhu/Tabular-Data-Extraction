// Generate id

/**
 * Function to generate data ids
 * @returns Unique random ID
 */
function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x100)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

let x = guidGenerator()

if (x!==undefined) {
    console.log(`${guidGenerator()}`)
}

console.log(x)