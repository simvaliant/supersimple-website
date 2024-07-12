const color = document.getElementById('color');
const createBtn = document.getElementById('createBtn');
const list = document.getElementById('list');
const closeBtn = document.querySelectorAll('.close');
let distance = 260;
let noteNum = 1;

createBtn.onclick = () => {
    let newNote = document.createElement('div');
    

    newNote.innerHTML = `
    <span class="close">x</span>
        <textarea placeholder="Write content" rows="10" cols="30">
        </textarea>
    `;
    newNote.classList.add('note');
    newNote.style.left = `${distance}px`;
    newNote.style.borderColor = color.value;
    list.append(newNote);

    distance+=250;
}

document.addEventListener('click', (event) => {
    if(event.target.classList.contains('close')){
        event.target.parentElement.remove();
    }
})

let cursor = {
    x: null,
    y: null
}

let note = {
    dom: null,
    x: null,
    y: null
}

document.addEventListener('mousedown', (event) => {
    if(event.target.classList.contains('note')){
        cursor = {
            x: event.clientX,
            y: event.clientY
        }

        note = {
            dom: event.target,
            x: event.target.getBoundingClientRect().left,
            y: event.target.getBoundingClientRect().top
        }
    }

})

document.addEventListener('mousemove', (event) => {
    if(note.dom == null) return;

    let currentCursor = {
        x: event.clientX,
        y: event.clientY
    }

    let distance = {
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y
    }

    note.dom.style.left = `${note.x + distance.x}px`;
    note.dom.style.top = `${note.y + distance.y}px`;

    note.dom.style.cursor = 'grab';
})

document.addEventListener('mouseup', () => {
    if(note.dom == null) return;
    note.dom.style.cursor = 'auto';
    note.dom = null;
})


