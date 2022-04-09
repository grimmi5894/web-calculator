function calculate() {
  const num1 = parseInt(document.getElementById("number1").value)
  const num2 = parseInt(document.getElementById("number2").value)
  const operatorDropdown = document.getElementById("operator")
  const operator = operatorDropdown.options[operatorDropdown.selectedIndex].value
  
  switch(operator) {
    case "add":
      var result = num1 + num2
      break
    case "subtract":
      var result = num1 - num2
      break
    case "multiply":
      var result = num1 * num2
      break
    case "divide":
      var result = num1 / num2
      break
    default:
      var result = "Error, please try again!"   
  }

  document.getElementById("result").innerHTML = result
}