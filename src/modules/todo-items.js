import * as openTab from './inbox';
import * as inbox from './inbox';

const tasks = [];
const projects =[]
export { projects }

function loadProject() {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = '';
    for(let i = 0; i < projects.length; i++) {
        const item = document.createElement('div');
        const title = document.createElement('div');
        title.textContent = projects[i];
        item.appendChild(title)
        item.classList.add('project-item');
        projectContainer.appendChild(item);
        const deleteItem = document.createElement('img')
        deleteItem.classList.add('delete-project')
        deleteItem.src = "../../dist/img/icons/trash-can-outline.svg"
        item.appendChild(deleteItem)
        item.addEventListener('click', function() {
            const currentSelected = document.querySelector('.on-tab');
            if (currentSelected) {
                currentSelected.classList.remove('on-tab');
            }
            item.classList.add('on-tab');
        });
    }
    removeProject() 
    localStorage.setItem('Projects', JSON.stringify(projects));
}

export function addProject() {
    const btn = document.querySelector('.add-project-btn');
    const project = document.querySelector('.project');
    btn.addEventListener('click', function() {
        const projectName = document.querySelector('.project-name').value;
        if(projectName != '') {
            projects.push(projectName);
            localStorage.setItem('Projects',JSON.stringify(projects));
            loadProject()
            while(project.firstChild) {
                project.removeChild(project.firstChild);
              }
              inbox.projectSection();
        } else {
            return;
        }
    })
}



export function localProjects(){
    const storedLocalProjects = localStorage.getItem('Projects');
    if (localStorage.getItem('Projects') !== null) {
        const localProjets= JSON.parse(storedLocalProjects);
        localProjets.forEach(item => {
            projects.push(item);
        })
        loadProject()  
    }
}
export function localTask() {
    const storedLocalTasks = localStorage.getItem('taskInfo');
    if (localStorage.getItem('taskInfo') !== null) {
        const localTasks = JSON.parse(storedLocalTasks);
        localTasks.forEach(item => {
            tasks.push(item);
        })  
    } 
}

class CreateItem{
    constructor(title,date,priority,project){
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.project = project;
    };
};

function removeTask() {
    const btn = document.querySelectorAll('.task-remove');
    btn.forEach(function(item, index){
        item.addEventListener('click', function() {
            tasks.splice(index, 1);
            addTaskToMain();
        });
    });
}

function removeProject() {
    const projectBtn = document.querySelectorAll('.delete-project');
    projectBtn.forEach(function(item, index){
        item.addEventListener('click', function() {
            projects.splice(index, 1);
            loadProject();
        });
    });
}

export function loadTasks() {
    const title = document.querySelector('.title').textContent
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);  
    const mainTasks = document.querySelector('.task');
    for(let i = 0; i < tasks.length; i++){
        const task = tasks[i]
        const date = new Date(task.date);
        if(title === task.project || title === 'Inbox' || 
        (date.toDateString() === new Date().toDateString() && title === 'Today') || 
        (date.getTime() >= new Date().getTime() && date.getTime() <= oneWeekFromNow.getTime() && title === 'Upcoming')) { 
            const task = document.createElement('div');
            task.classList.add('task-item');
            task.value = `item ${[i]}`
            mainTasks.appendChild(task);
            const checkBox = document.createElement('div');
            checkBox.classList.add('check-box');
            task.appendChild(checkBox);
            const taskTitle = document.createElement('div');
            taskTitle.textContent = `${tasks[i].title}`;
            taskTitle.classList.add('task-title');
            task.appendChild(taskTitle);
            const taskDate = document.createElement('div');
            taskDate.textContent = `${tasks[i].date}`;
            taskDate.classList.add('task-date');
            task.appendChild(taskDate);
            const taskEdit = document.createElement('img')
            taskEdit.src = '../../dist/img/icons/square-edit-outline.svg'
            taskEdit.classList.add('task-edit');
            task.appendChild(taskEdit);
            const taskRemove = document.createElement('img')
            taskRemove.src = '../../dist/img/icons/trash-can-outline.svg'
            taskRemove.classList.add('task-remove');
            task.appendChild(taskRemove);
        }
        
    }
    removeTask();
    localStorage.setItem('taskInfo', JSON.stringify(tasks));
}

function editTask() {
    const btn = document.querySelectorAll('.task-edit');
    btn.forEach(function(item, index){
        item.addEventListener('click', function() {
            const task = document.querySelectorAll('.task-item');
            const taskNum = task[index];
            while(taskNum.firstChild){
                taskNum.removeChild(taskNum.firstChild);
            }
            const title = document.createElement('input');
            title.type = 'text';
            title.classList.add('title-edit')
            taskNum.appendChild(title);
            const date = document.createElement('input');
            date.type = 'date';
            date.classList.add('date-edit')
            taskNum.appendChild(date);
            const confirmBtn = document.createElement('button');
            confirmBtn.textContent = 'Confirm'
            taskNum.appendChild(confirmBtn);
            confirmBtn.addEventListener('click', function() {
                const title = document.querySelector('.title-edit').value;
                const date = document.querySelector('.date-edit').value;
                if (title != '' && date != '') {
                tasks[index].title = title;
                tasks[index].date = date;
                addTaskToMain();
                } else return
            } )

        });
    });
}


export function addTaskToMain() {
    inbox.reAddTask();
    loadTasks();
    editTask();
}


function addProperties(){
    const formTitle = document.querySelector('.form-title').value;
    const formDate = document.querySelector('.form-date').value;
    const formPriority = document.querySelector('.form-priority').value;
    const formProject = document.querySelector('.form-project').value;
    if(formTitle === '' || formDate === '' || formPriority === 'Select a Priority') {
        return
    };
    const newTask = new CreateItem(formTitle,formDate,formPriority,formProject);
    tasks.push(newTask);
    openTab.reAddTask();
    addTaskToMain();
}



export function addTask(){
    document.querySelector('.form-add-btn').addEventListener('click', addProperties);
    document.querySelector('.form-cancel-btn').addEventListener('click', addTaskToMain);
};
