import * as opentab from './modules/inbox';
import * as todoItems from './modules/todo-items';

todoItems.localProjects()
todoItems.localTask();

function cleanMain() {
  const main = document.querySelector('.main');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

export function loadProjectPage(){
  const projects = document.querySelectorAll('.project-item')
  projects.forEach(function(item, index) {
    item.addEventListener('click', function(){
      cleanMain();
      opentab.openPage(todoItems.projects[index]);
    })
  })
}

function loadPage(pageName) {
  cleanMain();
  opentab.openPage(pageName);
  opentab.sideBarOn(pageName)
}

(() => {
  const inboxTab = document.querySelector('.inbox');
  const todayTab = document.querySelector('.today');
  const upcomingTab = document.querySelector('.upcoming');
  inboxTab.addEventListener('click', () => {loadPage('inbox')})
  todayTab.addEventListener('click', () => {loadPage('today')});
  upcomingTab.addEventListener('click', () => {loadPage('upcoming')});
  loadProjectPage()
})();

