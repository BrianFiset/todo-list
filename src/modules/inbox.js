import * as todoItems from './todo-items';
const main = document.querySelector('.main');

function createTitle(name) {
  const div = document.createElement('div');
  div.classList.add('title');
  div.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  main.appendChild(div);
  const task = document.createElement('div');
  task.classList.add('task');
  main.appendChild(task);
}

export function projectSection() {
  const project = document.querySelector('.project');
  const projectTitle = document.createElement('div');
  const projectAdd = document.createElement('img');
  projectAdd.classList.add('project-add');
  projectAdd.src = '../../dist/img/icons/plus.svg'
  projectTitle.textContent = 'Projects';
  project.appendChild(projectTitle);
  project.appendChild(projectAdd);
  projectAdd.addEventListener('click', projectAdds);
}

function projectAdds() {
  const project = document.querySelector('.project');
  while(project.firstChild) {
    project.removeChild(project.firstChild);
  }
  const projectName = document.createElement('input');
  projectName.classList.add('project-name')
  project.appendChild(projectName);
  const addBtn = document.createElement('button');
  addBtn.textContent = 'Add';
  addBtn.classList.add('add-project-btn')
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  project.appendChild(addBtn);
  project.appendChild(cancelBtn);
  todoItems.addProject();
  cancelBtn.addEventListener('click', function () {
    while(project.firstChild) {
      project.removeChild(project.firstChild);
    }
    projectSection();
  });
}

(function() {
  const sidebar = document.querySelector('.sidebar');
  const bottomSidebar = document.createElement('div');
  bottomSidebar.classList.add('bottom-sidebar');
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');
  const project = document.createElement('div');
  project.classList.add('project');
  sidebar.appendChild(bottomSidebar);
  bottomSidebar.appendChild(project);
  bottomSidebar.appendChild(projectContainer);
  projectSection()
})();

function createButton() {
  const task = document.querySelector('.task');
  const btn = document.createElement('div');
  btn.classList.add('btn');
  btn.id = 'btn';
  const text = document.createElement('div');
  text.textContent = 'Add Task';
  const img = document.createElement('img');
  img.src = '../../dist/img/icons/plus.svg';
  btn.appendChild(img);
  btn.appendChild(text);
  task.appendChild(btn);
}

function addOptions(e, c) {
  const option = document.createElement('option');
  option.textContent = e;
  option.value = e;
  c.appendChild(option);
}
function formProject(c) {
  for(let i = 0; i < todoItems.projects.length; i++){
    addOptions(todoItems.projects[i],c)
  }
}

function taskSection() {
  const form = document.querySelector('.add-task-form');
  const topForm = document.createElement('div');
    topForm.classList.add('top-form');
    form.appendChild(topForm);
    const title = document.createElement('input');
    title.classList.add('form-title');
    title.placeholder = 'Task Info';
    topForm.appendChild(title);
    const date = document.createElement('input');
    date.classList.add('form-date');
    date.type = 'date';
    topForm.appendChild(date);
    const project = document.createElement('select');
    project.classList.add('form-project');
    addOptions('None', project);
    formProject(project)
    topForm.appendChild(project);
    const bottomForm = document.createElement('div');
    bottomForm.classList.add('bottom-form');
    form.appendChild(bottomForm);
    const priority = document.createElement('select');
    priority.classList.add('form-priority');
    bottomForm.appendChild(priority);
    addOptions('Select a Priority', priority);
    addOptions('Low', priority);
    addOptions('Mid', priority);
    addOptions('High', priority);
    const addBtn = document.createElement('button');
    addBtn.classList.add('form-add-btn');
    addBtn.textContent = 'Add';
    bottomForm.appendChild(addBtn);
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('form-cancel-btn');
    cancelBtn.textContent = 'Cancel';
    bottomForm.appendChild(cancelBtn);
    todoItems.loadTasks()
}

function addTask() {
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    const task = document.querySelector('.task');
    const addTasks = document.createElement('div');
    addTasks.classList.add('add-task');
    task.innerHTML = '';
    task.appendChild(addTasks);
    const form = document.createElement('form');
    form.classList.add('add-task-form');
    addTasks.appendChild(form);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    taskSection();
    todoItems.addTask();
  });
}

export function reAddTask(){
  const taskBar = document.querySelector('.task');
  while(taskBar.firstChild){
      taskBar.removeChild(taskBar.firstChild)
  }
  createButton()
  addTask()
}

export function sideBarOn(pageName){
  const tab = document.querySelector(`.${pageName}`);
  const currentSelected = document.querySelector('.on-tab');
  if (currentSelected) {
      currentSelected.classList.remove('on-tab');
  }
  tab.classList.add('on-tab');
}

export function openPage(pageName) {
  createTitle(pageName);
  createButton();
  addTask();
  todoItems.addTaskToMain();
}