/**
 * Kalkulačka 
 */
class Calculator {
    /**
     * 
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     */
    add(a, b){

        return a+b 
    }
    
}

let calc = new Calculator();
calc.add(5, 5);
calc.add("5", "5");

console.log(calc);

// jdos jmenoScriptu.js

// uděla složku out - index.html

// Set-ExecutionPolicy RemoteSigned     - zapnout spouštění
// Set-ExecutionPolicy Restricted       - vypnout spouštění