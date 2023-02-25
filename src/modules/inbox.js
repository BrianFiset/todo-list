const main = document.getElementsByClassName('main')[0];

function createTitle(name){
    const div = document.createElement('div');
    div.className = `title`;
    const text = name.charAt(0).toUpperCase() + name.slice(1);
    div.innerText = `${text}`;
    main.appendChild(div);
}

function createButton(){
    const task = document.createElement('div');
    task.className = 'task';

    const btn = document.createElement('div');
    btn.className = 'btn';

    const text = document.createElement('div');
    text.textContent = 'Add Task'

    const img = document.createElement('img');
    img.setAttribute('src', '../../dist/img/icons/plus.svg');
    
    main.appendChild(task)
    btn.appendChild(img);
    btn.appendChild(text);
    task.appendChild(btn);
}

export function openInbox(){
    createTitle('inbox')
    createButton()
}


export function openToday(){
    createTitle('Today')
    createButton()
}


export function openUpcoming(){
    createTitle('upcoming')
    createButton()
}