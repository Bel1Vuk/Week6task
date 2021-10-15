class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement, display) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.display = display
      this.clear()
    }
  
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.displayText = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
      this.displayText = this.currentOperand.toString() + this.previousOperand.toString()
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
      this.displayText =  this.previousOperand.toString() + this.currentOperand.toString()
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
      this.displayText =  this.previousOperand.toString() + this.currentOperand.toString()
    }
  ////////////////////////////////////////////////////////////
    compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case 'x':
          computation = prev * current
          break
        case '/':
          computation = prev / current
          break
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
      this.displayText =  this.previousOperand.toString() + this.currentOperand.toString()
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
        
      this.currentOperandTextElement =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
          this.display.innerText = this.previousOperandTextElement +" "+ this.getDisplayNumber(this.currentOperand)
      } else {
        this.previousOperandTextElement = ''
        this.display.innerText = this.previousOperandTextElement +" "+ this.getDisplayNumber(this.currentOperand)
      }
    //   this.display.innerText =this.getDisplayNumber(this.currentOperand)  //this.previousOperandTextElement + this.currentOperandTextElement
    }
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  const display = document.querySelector('[data-display]')
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement, display)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })

  var theme__class = document.getElementById("random");
  theme__class.classList.toggle("theme2");
  theme__class.classList.toggle("theme3");

  function toggleTheme(){
      var theme__class = document.getElementById("random");
    var toggle_theme = document.getElementById("theme__change");
    var change_number;
    if(theme__class.classList.contains("theme1")){
    theme__class.classList.toggle("theme1");
    theme__class.classList.toggle("theme2");
    document.getElementById("theme__change").style.transform = "translateX(23px)"; 
}else if(theme__class.classList.contains("theme2")){
    theme__class.classList.toggle("theme2");
    theme__class.classList.toggle("theme3");
    document.getElementById("theme__change").style.transform = "translateX(45px)"; 

}else{
    theme__class.classList.toggle("theme3");
    theme__class.classList.toggle("theme1");
    document.getElementById("theme__change").style.transform = "translateX(0px)"; 
}




    //   var toggle = document.getElementById("theme__change");
    //   if (toggle.color == "white"){
    //     document.getElementById("theme__change").style.cssText` color:"blue";`;
    //   } else{
    //   if(toggle == "color:blue;"){
    //     document.getElementById("theme__change").style.cssText` color:"pink";`
    //   }else{
    //   if(toggle == "color:pink"){
    //     document.getElementById("theme__change").style.cssText` color:"white";`
    //   }}
//     }

//   }
//   function toggleTheme(){
//     var toggle = document.getElementById("theme__change").getAttribute("style");
//     if (toggle == "transform : translateX(0px);"){
//       document.getElementById("theme__change").style.transform = "translateX(23px)";
//     } else{
//     if(toggle == "transform : translateX(23px);"){
//       document.getElementById("theme__change").style.transform= "translateX(45px)";
//     }else{
//     if(toggle == "transform : translateX(45px);"){
//       document.getElementById("theme__change").style.transform= "translateX(0px)";
//     }}
//   }

 }