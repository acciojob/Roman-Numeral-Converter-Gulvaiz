function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your
    let romanValue = '';

    // Iterate over the symbols and values
    for (let [symbol, value] of romanSymbols) {
        // While the number is greater than or equal to the current value
        while (num >= value) {
            // Add the symbol to the result
            romanValue += symbol;
            // Subtract the value from the number
            num -= value;
        }
    }

    return romanValue;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
