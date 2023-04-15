const ButtonType = {
  number: "number",
  operator: "operator",
}

// main calculator class
class Calculator3 {
  constructor (nodeId) {

    this.screen = new CalculatorScreen(nodeId)
    this.actions = new ButtonList(
      nodeId,
      [
        new CalculatorButton(ButtonType.operator, "AC", () => { }),
        new CalculatorButton(ButtonType.operator, "C", () => { }),
        new CalculatorButton(ButtonType.operator, "%", () => { }),
        new CalculatorButton(ButtonType.operator, "+", () => { }),
        new CalculatorButton(ButtonType.number, "7", () => { }),
        new CalculatorButton(ButtonType.number, "8", () => { }),
        new CalculatorButton(ButtonType.number, "9", () => { }),
        new CalculatorButton(ButtonType.operator, "-", () => { }),
        new CalculatorButton(ButtonType.number, "4", () => { }),
        new CalculatorButton(ButtonType.number, "5", () => { }),
        new CalculatorButton(ButtonType.number, "6", () => { }),
        new CalculatorButton(ButtonType.operator, "x", () => { }),
        new CalculatorButton(ButtonType.number, "1", () => { }),
        new CalculatorButton(ButtonType.number, "2", () => { }),
        new CalculatorButton(ButtonType.number, "3", () => { }),
        new CalculatorButton(ButtonType.operator, "÷", () => { }),
        new CalculatorButton(ButtonType.number, "0", () => { }),
        new CalculatorButton(ButtonType.number, ".", () => { }),
        new CalculatorButton(ButtonType.operator, "=", () => { }),
      ]
    )
  }
}

// calculator screem class
class CalculatorScreen {
  constructor (parentId) {
    const parentElement = document.getElementById(parentId)

    const screenElement = document.createElement("div")

    parentElement.appendChild(screenElement)
  }

}

// a class for rendering calcultor buttons
class ButtonList {
  constructor (parentId, actions) {
    const parentElement = document.getElementById(parentId)

    const listElement = document.createElement("div")

    parentElement.appendChild(listElement)

    for (const action of actions) {
      listElement.appendChild(action.render())
    }
  }
}


// calculator button class
class CalculatorButton {
  constructor (type, text, onClickHandler) {
    this.type = type
    this.text = text
    this.onClickHandler = onClickHandler
  }

  // create calculator button
  render() {
    const buttonElement = document.createElement("button")

    buttonElement.innerText = this.text

    buttonElement.addEventListener("click", this.onClickHandler)

    return buttonElement
  }
}

// new Calculator3("calculator3")