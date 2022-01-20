let todos = []
let elementsContainer = document.getElementById('elementsContainer')

function deleteElement(i) {
    todos.splice(i , i + 2);
}

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
        button.classList.add('xButton')
        // button.addEventListener('click', deleteElement);
        button.addEventListener('click', function() {
            deleteElement(element.id);
        });
        button.innerHTML = `<i class="fa fa-times fa-2x" aria-hidden="true"></i>`

        list_element.appendChild(checkbox)
        
        list_element.appendChild(element_of_list)
        list_element.appendChild(button)

        elementsContainer.appendChild(list_element)
    });

    let nrOfItems = document.getElementById("itemsLeft");
    nrOfItems.innerHTML = todos.length + " items left";
}

const main = () => {
    document.querySelector(".inputBox").addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            var inputText = document.getElementById("myInput").value
            if (inputText.length > 0)
                {
                    let todo = {
                        id: todos.length,
                        text: inputText,
                        checked: false
                    }
    
                    todos.push(todo);
                    render();
    
                    document.getElementById("myInput").value = "";
                }
        }
    });

    var allButtons = document.getElementsByClassName("xButton");
    console.log(allButtons);
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].outerHTML.addEventListener('click', render)
    }
}

main()

