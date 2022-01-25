let todos = []
let elementsContainer = document.getElementById('elementsContainer')

function leftItems() {
    var items = 0;
    for (var j = 0; j < todos.length; j++) {
        if (todos[j].checked == false) {
            items++;
        }
    }

    return items;
}

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

    render();
}

const render = () => {
    // clean elementsContainer
    elementsContainer.innerHTML ='';

    todos.forEach((element, ind) => {
        if (element.seenable == true) {

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
            if (element.checked == false) {
                element_of_list.innerHTML = element["text"];
            } else {
                element_of_list.innerHTML = element["text"].strike();
                element_of_list.style.color = '#D9D9D9';
            }
            


            let button = document.createElement('div')
            button.classList.add('xButton')
            button.addEventListener('click', function() {
                deleteElement(ind);
            });
            list_element.addEventListener('mouseover', function() {
                button.style.visibility = 'visible';
            });
            list_element.addEventListener('mouseout', function() {
                button.style.visibility = 'hidden';
            });
            button.innerHTML = `<i class="fa fa-times fa-2x" aria-hidden="true"></i>`;



            list_element.appendChild(round)
            list_element.appendChild(element_of_list)
            list_element.appendChild(button)

            elementsContainer.appendChild(list_element)



            if (element.checked == true) {
                document.getElementById("checkbox" + ind).checked = 1;
            }
        }
    });



    let nrOfItems = document.getElementById("itemsLeft");
    if (leftItems() == 1) {
        nrOfItems.innerHTML = leftItems() + " item left";
    } else {
        nrOfItems.innerHTML = leftItems() + " items left";
    }


    if (leftItems() == todos.length) {
        document.getElementsByClassName("clear_completed")[0].style.visibility = 'hidden';
    } else {
        document.getElementsByClassName("clear_completed")[0].style.visibility = 'visible';
    }

    if (todos.length > 0) {
        document.getElementsByClassName("box_footer")[0].style.display = 'flex';
        document.getElementsByClassName("fa-angle-down")[0].style.visibility = 'visible';
    } else {
        document.getElementsByClassName("box_footer")[0].style.display = 'none';
        document.getElementsByClassName("fa-angle-down")[0].style.visibility = 'hidden';
    }
    
}

    const main = () => {
        document.querySelector(".inputBox").addEventListener('keypress', function (e) {

            if (e.key === 'Enter') {
                var inputText = document.getElementById("myInput").value
                if (inputText.length > 0 && inputText.trim().length)
                    {
                        let todo = {
                            id: todos.length,
                            text: inputText,
                            checked: false,
                            seenable: true
                        }
                        todos.push(todo);
                        render();
                        
                        if (document.getElementById("fAll").classList.contains("selected")) {
                            document.getElementById("fAll").click();
                        } else if (document.getElementById("fActive").classList.contains("selected")) {
                            document.getElementById("fActive").click();
                        } else if (document.getElementById("fCompleted").classList.contains("selected")) {
                            document.getElementById("fCompleted").click();
                        }
        
                        document.getElementById("myInput").value = "";
                    }
            }
        });

        document.querySelector(".fa-angle-down").addEventListener('click', function() {
        
            if (leftItems() == 0) {
                todos.forEach((element, ind) => {
                    element.checked = false;
                    document.getElementById("checkbox" + ind).checked = 0;
                });
            } else {
                todos.forEach((element, ind) => {
                    element.checked = true;
                    document.getElementById("checkbox" + ind).checked = 1;
                });
            }

            render();
        });

        document.querySelector(".clear_completed").addEventListener('click', function() {

            for (var i = 0; i < todos.length; i++) {
                if (todos[i].checked == true) {
                    deleteElement(i);
                    i--;
                }
            }
        });



        document.getElementById("fAll").addEventListener('click', function() {

            document.getElementById("fAll").classList.add("selected");
            document.getElementById("fActive").classList.remove("selected");
            document.getElementById("fCompleted").classList.remove("selected");

            for (var i = 0; i < todos.length; i++) {
                todos[i].seenable = true;
            }

            render();
        });

        document.getElementById("fActive").addEventListener('click', function() {

            document.getElementById("fAll").classList.remove("selected");
            document.getElementById("fActive").classList.add("selected");
            document.getElementById("fCompleted").classList.remove("selected");

            for (var i = 0; i < todos.length; i++) {
                if (todos[i].checked == true) {
                    todos[i].seenable = false;
                } else {
                    todos[i].seenable = true;
                }
            }

            render();
        });

        document.getElementById("fCompleted").addEventListener('click', function() {

            document.getElementById("fAll").classList.remove("selected");
            document.getElementById("fActive").classList.remove("selected");
            document.getElementById("fCompleted").classList.add("selected");

            for (var i = 0; i < todos.length; i++) {
                if (todos[i].checked == true) {
                    todos[i].seenable = true;
                } else {
                    todos[i].seenable = false;
                }
            }

            render();
        });

}

main()
