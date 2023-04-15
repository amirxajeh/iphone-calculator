// const ActionTypes = {
//   number: "number",
//   operator: "operator"
// }

// class Calculator2 {
//   constructor (parentId) {

//     new ScreenView2(parentId)
//     new Actions2(
//       parentId,
//       [
//         new Action2(ActionTypes.operator, "AC", () => { }),
//         new Action2(ActionTypes.operator, "AC", () => { }),
//         new Action2(ActionTypes.operator, "C", () => { })
//       ]
//     )

//   }
// }

// class ScreenView2 {
//   constructor (parentId) {
//     const parentElement = document.getElementById(parentId)

//     const screenViewElement = document.createElement("div")

//     parentElement.appendChild(screenViewElement)
//   }
// }

// class Actions2 {
//   actionsElement
//   actions = []

//   constructor (parentId, actions) {
//     this.actions = actions

//     const parentElement = document.getElementById(parentId)

//     this.actionsElement = document.createElement("div")

//     parentElement.appendChild(this.actionsElement)

//     this.renderActions()
//   }

//   renderActions = () => {
//     this.actionsElement.innerHTML = ""

//     for (const action of this.actions) {
//       this.actionsElement.appendChild(action.render())
//     }
//   }
// }

// class Action2 {

//   constructor (type, text, onChangeCallback) {
//     this.type = type
//     this.text = text
//     this.onChangeCallback = onChangeCallback
//   }

//   render = () => {
//     const actionElement = document.createElement("button")

//     actionElement.innerText = this.text

//     actionElement.addEventListener("click", this.onChangeCallback)

//     return actionElement
//   }

// }

// new Calculator2("calculator2")