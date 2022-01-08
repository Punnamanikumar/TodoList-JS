function addMain() {
  document.getElementById("blur").style.filter = "blur(10px)";
  document.getElementById("popup").style.display = "block";
  const cardvalueEmpty = document.getElementById("cardvalue");
  cardvalueEmpty.value = "";
}

function home() {
  document.getElementById("blur").style.filter = "none";
  document.getElementById("popup").style.display = "none";
  document.getElementById("popup1").style.display = "none";
}

const cardsList = [];

function addBox() {
  const cardName = document.getElementById("cardvalue").value;

  if (cardName.length > 1) {
    // console.log(boxName);
    const tempList = {
      id: Date.now(),
      name: cardName,
      subTask: [],
    };
    cardsList.push(tempList);
    console.log(cardsList);
    document.getElementById("popup").style.display = "none";
    addCardOnScreen();
    addTaskOnScreen();
  }
}

function addCardOnScreen() {
  document.getElementById("inner1").style.display = "none";
  document.getElementById("blur").style.filter = "none";

  let icons_Task = "";
  cardsList.forEach((element, index) => {
    icons_Task += `
        <div id="${element.id}" class="boxs">
            <p onclick="viewBox(${element.id})"><b>${element.name}</b></p>
            <hr class="line">
            <ul class="task-container" id="${"id" + element.id}"></ul>
            <div class="bothIcon">
                <span class="deleteIcon"><i class="fas fa-trash-alt icondelete" onclick="deleteCard(${
                  element.id
                })"></i></span>
                <span class="addIcon"><i class="fas fa-plus-circle iconadd" onclick="addInnerTask(${
                  element.id
                })"></i></span>
            </div>
        </div>`;
  });

  let box = document.getElementById("parent");
  box.innerHTML = icons_Task;
}

function viewBox(view) {
  //   document.getElementById()
  cardsList.forEach((element, index) => {
    if (element.id === view) {
      console.log("viwe22");
      document.getElementById("par").innerText = `${element.name}`;
      document.getElementById("disnon").style.display = "none";
      document.getElementById("trip").style.display = "block";
      document.getElementById("parent").style.marginLeft = "45%";
      document.getElementById("parent").style.marginTop = "10%";
      document.getElementById("goback").style.display = "block";
    }
  });
}

//TO DELETE THE BOXES

function deleteCard(deleteId) {
  cardsList.forEach((element, index) => {
    if (element.id === deleteId) {
      cardsList.splice(index, 1);
    }
  });
  addCardOnScreen();
  addTaskOnScreen();
}

function goBack() {
  document.getElementById("disnon").style.display = "block";
  document.getElementById("trip").style.display = "none";
  document.getElementById("parent").style.marginLeft = "8%";
  document.getElementById("parent").style.marginTop = "5%";
  document.getElementById("goback").style.display = "none";
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
          taskID: Date.now(),
          taskName: TaskName,
        };
        cardsList[index].subTask.push(tempTask);
      }

      addTaskOnScreen();
    });

    document.getElementById("popup1").style.display = "none";
    document.getElementById("blur").style.filter = "none";
  };
}

function addTaskOnScreen() {
  cardsList.forEach((element, index) => {
    let taskContainer = document.getElementById("id" + element.id);

    let taskTag = "";
    element.subTask.forEach((task) => {
      taskTag += `
      <dl>
      <span class="task-name" id="${"tid" + task.taskID}">${
        task.taskName
      }</span>
      <button class="donecheck" id="${"iid" + task.taskID}" onclick=markdone(${
        task.taskID
      })>Markdone</button>
  </dl>`;
    });
    taskContainer.innerHTML = taskTag;
  });
}

//Task Completed
function markdone(id) {
  cardsList.forEach((element) => {
    element.subTask.forEach((task) => {
      if (task.taskID === id) {
        document.getElementById("tid" + task.taskID).style.textDecoration =
          "line-through";
        document.getElementById("iid" + task.taskID).style.visibility =
          "hidden";
      }
    });
  });
  console.log("Task DONE");
}
