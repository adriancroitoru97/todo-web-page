let todos = []
let elementsContainer = document.getElementById('elementsContainer')

function deleteElement(i) {
    todos.splice(i, 1);
    render();
}

function checkElement(element, ind) {
    if (element.checked == true) {
        element.checked = false;
    } else {
        element.checked = true;
    }

    console.log(todos);
}

const render = () => {
    // clean elementsContainer
    elementsContainer.innerHTML =''

    todos.forEach((element, ind) => {
        let list_element = document.createElement('div')
        list_element.classList.add('list_element')

        

        let round = document.createElement('div');
        round.classList.add('round');
        round.id = 'round' + ind;

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = "checkbox" + ind;

        var label = document.createElement('label');
        label.htmlFor = "checkbox" + ind;

        round.appendChild(checkbox);
        round.appendChild(label);

        checkbox.addEventListener('click', function() {
            checkElement(element, ind);
        });
  
        

        let element_of_list = document.createElement('div')
        element_of_list.classList.add('element_of_list')
        // if (element.checked == false) {
            element_of_list.innerHTML = element["text"];
        // } else {
        //     element_of_list.innerHTML = element["text"].strike();
        // }
        


        let button = document.createElement('div')
        button.classList.add('xButton')
        button.addEventListener('click', function() {
            deleteElement(ind);
        });
        button.innerHTML = `<i class="fa fa-times fa-2x" aria-hidden="true"></i>`


        list_element.appendChild(round)
        list_element.appendChild(element_of_list)
        list_element.appendChild(button)


        elementsContainer.appendChild(list_element)



        if (element.checked == true) {
            document.getElementById("checkbox" + ind).checked = 1;
        }
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

