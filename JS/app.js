
const noteListDiv = document.querySelector(".side");
let deleteAllbtn = document.getElementById('delete-all-btn');
alert("When creating a note, to input body text press Enter twice");

function Dark_mode_Function() {
    // button to toggle dark mode and light mode. 
    let element = document.body;
     element.classList.toggle("dark-mode");
  }

//create new elements for the input and created buttons 
let txt_area = document.createElement("textarea");
txt_area.rows = 5;
txt_area.cols = 30;
let save_btn = document.createElement('button')
let cancel_btn = document.createElement('button')
save_btn.innerHTML= 'Save';
cancel_btn.innerHTML= 'Cancel';

// joined/appended the textarea and buttons with the create note button('+')
function noteFunction() {
    document.querySelector('.main-part').after(txt_area, save_btn, cancel_btn);
    const html = `<textarea class = "main-part" placeholder="placeholder text"> </textarea>`
}

save_btn.addEventListener('click',()=>{
    //get the data in text area and created an array by spliting it.
    const text_data = txt_area.value
    const notearr = text_data.split('\n\n')
    title = notearr[0]
    body = notearr[1]

    //assign the title and body to an object
    newObject = {title, body}
    noteitem = {title,body}

    // to remove everything from screen but '+' btn
    when_savebtn_clicked()

    //to display the created notes on the sidebar. 
    DisplayNotes(newObject);
})

function when_savebtn_clicked(){
    // when savebtn is clicked remove all from main screen but the '+' btn
    txt_area.value = ""
    txt_area.remove()
    save_btn.remove()
    cancel_btn.remove()
}

cancel_btn.addEventListener('click',()=>{
    // when cancel btn is clicked remove all everything from screen but '+'btn.
    txt_area.remove()
    save_btn.remove()
    cancel_btn.remove()
    txt_area.value = ""
})

function DisplayNotes(newObject){
    //create a new div in side the sidebar
    const div = document.createElement('div');

    // give the div a class
    div.classList.add('note-item');

    // format the div
    div.innerHTML = `
    <h3>${title}</h3>
    <p>${body}</p>`

    //join/append the created div to the element with .side class
    noteListDiv.appendChild(div)
}

deleteAllbtn.addEventListener('click',()=>{
    //select the notes in the sidebar and delete them all, if used wanted to. 
    let noteList = document.querySelectorAll('.note-item');
    if (noteList.length>0){
        noteList.forEach(div=>{
            noteListDiv.removeChild(div);
        })
    }
})
