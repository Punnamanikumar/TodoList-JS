function addMain() {
    document.getElementById("blur").style.filter = "blur(10px)"
    document.getElementById("popup").style.display = "block"
    const cardvalueEmpty = document.getElementById("cardvalue");
    cardvalueEmpty.value = "";


}

function home() {
    document.getElementById("blur").style.filter = "none"
    document.getElementById("popup").style.display = "none"
    document.getElementById("popup1").style.display = "none"
}

const cardsList = [];

function addBox() {
    const cardName = document.getElementById("cardvalue").value;
    if (cardName.length > 1) {
        // console.log(boxName);
        const tempList = {
            id: Date.now(),
            name: cardName,
            subTask: []
        }
        cardsList.push(tempList);
        console.log(cardsList);
        document.getElementById("popup").style.display = "none";
        addCardOnScreen();
        addTaskOnScreen();

    }

}

function addCardOnScreen() {
    document.getElementById("inner1").style.display = "none";
    document.getElementById("blur").style.filter = "none"

    let icons_Task = '';
    cardsList.forEach((element, index) => {
        icons_Task += `
        <div id="${element.id}" class="boxs">
            <p><b>${element.name}</b></p>
            <hr class="line">
            <ul class="task-container" id="${'id' + element.id}"></ul>
            <div class="bothIcon">
                <span class="deleteIcon"><i class="fas fa-trash-alt icondelete" onclick="deleteCard(${element.id})"></i></span>
                <span class="addIcon"><i class="fas fa-plus-circle iconadd" onclick="addInnerTask(${element.id})"></i></span>
            </div>
        </div>`
    })

    let box = document.getElementById("parent");
    box.innerHTML = icons_Task;
}

//TO DELETE THE BOXES

function deleteCard(deleteId) {
    cardsList.forEach((element, index) => {
        if (element.id === deleteId) {
            cardsList.splice(index, 1);
        }
    })
    addCardOnScreen();
    addTaskOnScreen();
}

//FUNCTION TO ADD TASKS INSIDE CARD

function addInnerTask(id) {

    document.getElementById("popup1").style.display = "block";
    document.getElementById("blur").style.filter = "blur(10px)";

    const addTaskBtn = document.getElementById("insideBoxadd");
    const taskValue = document.getElementById("taskValue");

    taskValue.value = ""; //for cleaning the textbox

    addTaskBtn.onclick = () => {
        let TaskName = taskValue.value;

        cardsList.forEach((element, index) => {
            if (element.id === id) {
                const tempTask = {
                    taskId: Date.now(),
                    taskName: TaskName
                }
                cardsList[index].subTask.push(tempTask);
            }

            addTaskOnScreen();
        })

        document.getElementById("popup1").style.display = "none";
        document.getElementById("blur").style.filter = "none";
    }
}

function addTaskOnScreen() {
    cardsList.forEach((element, index) => {

        let taskContainer = document.getElementById('id' + element.id);

        let taskTag = '';
        element.subTask.forEach(task => {
            taskTag += `
             <li >
                <span class="task-name" id="${'tid'+task.taskID}">${task.taskName}</span>
             </li>
            `
        })
        taskContainer.innerHTML = taskTag;
    })
}