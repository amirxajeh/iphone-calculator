const ActionType = {
    number: "number",
    operator: "operator"
}

class Calculator {
    inputs = []
    currentNumber = ""

    constructor () {
        this.screen = new ScreenView()
        this.actions = new Actions(
            [
                new Action(ActionType.number, "AC", this.clear, "gray"),
                new Action(ActionType.operator, "C", this.clearLastInput, "gray"),
                new Action(ActionType.operator, "%", this.inputOperator, "gray"),
                new Action(ActionType.operator, "+", this.inputOperator, "orange"),
                new Action(ActionType.number, "1", this.inputNumber),
                new Action(ActionType.number, "2", this.inputNumber),
                new Action(ActionType.number, "3", this.inputNumber),
                new Action(ActionType.operator, "-", this.inputOperator, "orange"),
                new Action(ActionType.number, "4", this.inputNumber),
                new Action(ActionType.number, "5", this.inputNumber),
                new Action(ActionType.number, "6", this.inputNumber),
                new Action(ActionType.operator, "x", this.inputOperator, "orange", "*"),
                new Action(ActionType.number, "7", this.inputNumber),
                new Action(ActionType.number, "8", this.inputNumber),
                new Action(ActionType.number, "9", this.inputNumber),
                new Action(ActionType.operator, "÷", this.inputOperator, "orange", "/"),
                new Action(ActionType.number, "0", this.inputNumber, "expanded"),
                new Action(ActionType.number, ".", this.inputNumber),
                new Action(ActionType.operator, "=", this.inputOperator, "orange"),
            ]
        )
    }

    render(nodeId) {
        const nodeElement = document.getElementById(nodeId)
        nodeElement.classList.add("calculator")

        nodeElement.appendChild(this.screen.render())
        nodeElement.appendChild(this.actions.render())
    }

    inputNumber = (numberAction) => {

        if (isNaN(this.currentNumber + numberAction.text)) return

        this.currentNumber += numberAction.text
        this.inputs.push(numberAction)

        this.screen.show(this.currentNumber)
    }

    inputOperator = (operatorAciton) => {

        if (!this.inputs.length) return

        this.currentNumber = ""
        if (this.lastInput && this.lastInput.type === ActionType.operator) {
            this.inputs[this.lastInputIndex] = operatorAciton

            this.currentOprtator = operatorAciton
            return
        }

        if (operatorAciton.text === "=") {
            this.screen.show(this.calculate())

        } else {

            if (this.operatorsCount > 0) {
                this.screen.show(this.calculate())
            }

            this.inputs.push(operatorAciton)
        }

    }

    get lastInput() {
        return this.inputs[this.inputs.length - 1]
    }

    get lastInputIndex() {
        return this.inputs.length ? (this.inputs.length - 1) : 0
    }

    get operatorsCount() {
        return this.inputs.filter(input => input.type === ActionType.operator).length
    }

    get lastActiveOperator() {
        return this.lastInput.type === ActionType.operator ? this.lastInput : undefined
    }

    calculate = () => {
        const currentInput = this.inputs.map(input => input.value || input.text)

        const result = eval(currentInput.join(""))

        this.inputs = [new Action(ActionType.number, result, () => { })]

        return result
    }

    clear = () => {
        this.inputs = []
        this.currentNumber = ""
        this.screen.show("")
    }

    clearLastInput = () => {
        this.inputs.pop()
        this.currentNumber = this.currentNumber.split("")
        this.currentNumber.pop()
        this.currentNumber = this.currentNumber.join("")

        this.screen.show(this.currentNumber)
    }

}

class ScreenView {
    constructor () {
        this._element = document.createElement("div")
        this._element.id = "calculator-screen"

        this._element.className = "calculator__screen"
    }

    render() {
        return this._element
    }

    show(value = "") {
        this._element.innerHTML = value
    }

    clear = () => {
        this._element.innerHTML = ""
    }
}

class Actions {

    constructor (actions) {
        this.actions = actions
    }

    render() {
        const actionsElement = document.createElement("div")
        actionsElement.id = "calculator-actions"
        actionsElement.className = "calculator__actions"

        for (const action of this.actions) {
            actionsElement.appendChild(action.render())
        }

        return actionsElement
    }
}

class Action {

    constructor (type, text = "", onChangeCallback, className = undefined, value = undefined,) {
        this.type = type
        this.text = text
        this.value = value
        this.onChangeCallback = onChangeCallback
        this.className = className
    }

    render = () => {
        const actionNode = document.createElement("button")
        actionNode.className = `calculator__action calculator__action--${this.type} ${this.className}`
        actionNode.innerText = this.text

        actionNode.addEventListener("click", () => this.onChangeCallback(this))

        return actionNode
    }

}

new Calculator().render("calculator")