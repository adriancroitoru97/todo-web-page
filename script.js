let todos = []
let elementsContainer = document.getElementById('elementsContainer')

function deleteElement(i) {
    todos.splice(i, 1);
    render();
}

function checkElement(ind) {
    console.log(todos);
    console.log(document.getElementById("checkbox" + ind));
    document.getElementById("checkbox" + ind).click();
    console.log(document.getElementById("checkbox" + ind));
    // e.classList.add('round label:after');
    render();
}

const render = () => {
    // clean elementsContainer
    elementsContainer.innerHTML =''

    todos.forEach((element, ind) => {
        let list_element = document.createElement('div')
        list_element.classList.add('list_element')


        let checkbox = document.createElement('div')
        checkbox.classList.add('round')
        checkbox.addEventListener('click', function() {
            if (element.checked == true)
                element.checked = false;
            else
                element.checked = true;
            checkElement(ind);
        });
        checkbox.innerHTML = `<input type="checkbox" unchecked id="checkbox` + ind + `" />
        <label for="checkbox` + ind + `"></label>`
        

        let element_of_list = document.createElement('div')
        element_of_list.classList.add('element_of_list')
        element_of_list.innerHTML = element["text"]
        

        let button = document.createElement('div')
        button.classList.add('xButton')
        button.addEventListener('click', function() {
            deleteElement(ind);
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

    // var allButtons = document.getElementsByClassName("xButton");
    // for (var i = 0; i < allButtons.length; i++) {
    //     allButtons[i].outerHTML.addEventListener('click', render);
    // }

    // var allChecks = document.getElementsByClassName("chck");
    // console.log(allChecks);
    // for (var i = 0; i < allChecks.length; i++) {
    //     allChecks[i].outerHTML.addEventListener('click', render);
    // }
}

main()

