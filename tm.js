// const n = () => {
//     var crea = document.createElement("div");
//     crea.setAttribute("class", "icon")
//         // crea.innerHTML = "&#xf2ed;";
//         // crea.innerHTML = ' <i class="fas fa-trash-alt"></i>'

//     // const ico = document.getElementById("parent");

//     crea.appendChild("icon");
// }
// n();


// // const ico = document.getElementById("parent");
// // ico.innerText = "&#xf2ed;";



//BLUR SCREEN
const totalblur = () => {
        document.getElementById("blur").style.filter = "blur(8px)";
        document.getElementById("parent").style.filter = "blur(8px)";
        document.getElementById("inner1").style.filter = "blur(8px)";
    }
    //UN BLUR SCREEN
const unBlur = () => {
    document.getElementById("blur").style.filter = "blur(0px)";
    document.getElementById("parent").style.filter = "blur(0px)";
    document.getElementById("inner1").style.filter = "blur(0px)";
}


//Onload Pop-up hidden
var popup = document.getElementById("popup");
popup.style.visibility = "hidden";
document.getElementById("popup1").style.visibility = ("hidden");



//ON Click ADD LIST (TASKS) POP-UP Visible
const addList = () => {
        var popup = document.getElementById("popup");
        popup.style.visibility = "visible";
        totalblur();

    }
    //Creating Object To StoreTasks
const taskList = [];
//Back To home screen
const home = () => {
    popup.style.visibility = "hidden";
    document.getElementById("popup1").style.visibility = ("hidden");
    unBlur();
}



//On Click ADD tasks(Create Boxes)
const add = () => {
    var value = document.getElementById("val").value;
    // console.log(value);

    const tempObj = {
        taskName: value
    }
    taskList.push(tempObj);
    // console.log(taskList);

    addTaskOnScreen();


    if (value != 0) {
        popup.style.visibility = "hidden";


    } else {
        popup.style.visibility = "visible";

    }
}

const addTaskOnScreen = () => {
        //Creating Boxes

        var createBoxes = document.createElement("div");
        createBoxes.setAttribute("class", "box");

        createBoxes.innerText = taskList[taskList.length - 1].taskName;
        // var createindex = taskList[taskList.length - 1].len;
        // createBoxes.setAttribute("id", "createBoxes.innerText")
        // console.log("CreateIndex", document.getElementById("createBoxes"));




        if (createBoxes.innerText != 0) {
            const existingDiv = document.getElementById("parent");
            existingDiv.appendChild(createBoxes);
            console.log(taskList, createBoxes);

            //Creating HR Line in Boxes
            const hrLine = document.createElement("hr");
            hrLine.setAttribute("class", "hrLine");
            createBoxes.appendChild(hrLine);

            //Create DELETE AND ADD ICONS

            let icons = document.createElement("div");
            icons.setAttribute("class", icons);

            // let adIcons = document.getElementsByClassName("icons");
            icons.style.fontSize = "25px"
            createBoxes.appendChild(icons);
            icons.innerHTML = '<div id="icons"><i class = "fas fa-trash-alt icondelete" ></i><i class="fas fa-plus-circle iconadd" style="color: rgb(28, 105, 247);" ></i></div>';
            createBoxes.appendChild(icons);


            ///////////////////////////////////////////////////////////////////
            var createList = document.createElement("div");
            createList.setAttribute("id", "list");
            createBoxes.appendChild(createList);

            unBlur();

        }

        if (taskList.length > 0) {
            var p = document.getElementById("inner1");
            p.style.visibility = "hidden";
        } else {
            var p = document.getElementById("inner1");
            p.style.visibility = "visible";
        }
        //TO Delete NULL Objects
        if (createBoxes.innerText == "") {
            taskList.pop();
            console.log("Object Deleted Since NULL Value");
        }



        const delbtn = createBoxes.querySelector(".icondelete");

        delbtn.addEventListener("click", function() {
            createBoxes.remove()
        })

        const iconaddbtn = createBoxes.querySelector(".iconadd");

        iconaddbtn.addEventListener("click", function() {
            var popup1 = document.getElementById("popup1");
            popup1.style.visibility = "visible";
        })




    }
    // var createBoxes = document.createElement("div");
    // const iconAddInsideBox = createBoxes.querySelector("#insideBoxadd");
    // iconAddInsideBox.addEventListener("click", function() {
    // console.log("iconAddInsideBox");
    // })




// const addInnerList = () => {
//     var popup1 = document.getElementById("popup1");
//     popup1.style.visibility = "visible";
//     // totalblur();
// }

// //Creating Object to Store Tasks Inside List
const taskInsideList = [];

// //On Click Add InsideTasks List
const addInsideList = () => {
    console.log("16543");
    var taskValue = document.querySelector("#valu").value;
    const tempTaskObj = {
        insideTaskName: taskValue
    }
    taskInsideList.push(tempTaskObj);

    addInsideTaskListOnScreen();
    if (taskValue != 0) {
        popup.style.visibility = "hidden";


    } else {
        popup.style.visibility = "visible";

    }
}

const addInsideTaskListOnScreen = () => {
    //Creating Lists

    // const existingDiv = document.getElementById("parent");
    // existingDiv.appendChild(createBoxes);
    // console.log(taskList, createBoxes);
    // var i = document.querySelector(".box");
    // console.log(i.innerText);



    const createList = document.createElement("div");
    var box = document.querySelector(".box");
    console.log(box.innerText);
    box.appendChild(createList);
    createList.setAttribute("class", "list");

    createList.innerText = taskInsideList[taskInsideList.length - 1].insideTaskName;
    if (createList.innerText != 0) {
        const existingListDiv = document.getElementById("list");
        existingListDiv.append(createList);
        // existingListDiv.querySelector.append(createList)

        var done = document.createElement("span");
        done.setAttribute("class", "done");
        done.innerHTML = `<button id="done">Mark as Done</buttton>`;
        existingListDiv.appendChild(done);

        // const done=document.getElementsByClassName

        var popup1 = document.getElementById("popup1");
        popup1.style.visibility = "hidden";


    }
    // //   var createBoxes = document.createElement("div");
    // createList.innerText = document.querySelector("#valu").value;

    // const iconAddInsideBox = createList.querySelector("#insideBoxadd");
    // iconAddInsideBox.addEventListener("click", function() {
    //     console.log("iconAddInsideBox");
    // })



}