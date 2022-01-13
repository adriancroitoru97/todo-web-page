let todo1 = {
    id: 1,
    text: "PRIMUL TODO",
    checked: true
}

let todo2 = {
    id: 2,
    text: "AL DOILEA TODO",
    checked: true
}

let todo3 = {
    id: 3,
    text: "AL TREILEA TODO",
    checked: true
}

let todo4 = {
    id: 4,
    text: "Al patrulea TODO",
    checked: true
}

let todos = []
let elementsContainer = document.getElementById('elementsContainer')

const render = () => {
    // clean elementsContainer
    elementsContainer.innerHTML =''

    todos.forEach(element => {
        // console.log(element)
        let list_element = document.createElement('div')
        list_element.classList.add('list_element')

        let checkbox = document.createElement('div')
        checkbox.classList.add('round')
        checkbox.innerHTML = `<input type="checkbox" unchecked id="checkbox" />
        <label for="checkbox"></label>`
        
        let element_of_list = document.createElement('div')
        element_of_list.classList.add('element_of_list')
        element_of_list.innerHTML = element["text"]
        
        let button = document.createElement('div')
        button.classList.add('x_button')
        button.innerHTML = `<i class="fa fa-times fa-2x" aria-hidden="true"></i>`

        list_element.appendChild(checkbox)
        
        list_element.appendChild(element_of_list)
        list_element.appendChild(button)

        elementsContainer.appendChild(list_element)
    });
}

const main = () => {
    todos.push(todo1)
    render()
    todos.push(todo2)
    render()
    todos.push(todo3)
    render()
    todos.push(todo4)
    render()


    // todos.splice(1, 1)
    // render()
}

main()
