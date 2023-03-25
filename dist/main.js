/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadProjectPage\": () => (/* binding */ loadProjectPage)\n/* harmony export */ });\n/* harmony import */ var _modules_inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/inbox */ \"./src/modules/inbox.js\");\n/* harmony import */ var _modules_todo_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todo-items */ \"./src/modules/todo-items.js\");\n\n\n\n_modules_todo_items__WEBPACK_IMPORTED_MODULE_1__.localProjects()\n_modules_todo_items__WEBPACK_IMPORTED_MODULE_1__.localTask();\n\nfunction cleanMain() {\n  const main = document.querySelector('.main');\n  while (main.firstChild) {\n    main.removeChild(main.firstChild);\n  }\n}\n\nfunction loadProjectPage(){\n  const projects = document.querySelectorAll('.project-item')\n  projects.forEach(function(item, index) {\n    item.addEventListener('click', function(){\n      cleanMain();\n      _modules_inbox__WEBPACK_IMPORTED_MODULE_0__.openPage(_modules_todo_items__WEBPACK_IMPORTED_MODULE_1__.projects[index]);\n    })\n  })\n}\n\nfunction loadPage(pageName) {\n  cleanMain();\n  _modules_inbox__WEBPACK_IMPORTED_MODULE_0__.openPage(pageName);\n  _modules_inbox__WEBPACK_IMPORTED_MODULE_0__.sideBarOn(pageName)\n}\n\n(() => {\n  const inboxTab = document.querySelector('.inbox');\n  const todayTab = document.querySelector('.today');\n  const upcomingTab = document.querySelector('.upcoming');\n  inboxTab.addEventListener('click', () => {loadPage('inbox')})\n  todayTab.addEventListener('click', () => {loadPage('today')});\n  upcomingTab.addEventListener('click', () => {loadPage('upcoming')});\n  loadProjectPage()\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/inbox.js":
/*!******************************!*\
  !*** ./src/modules/inbox.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openPage\": () => (/* binding */ openPage),\n/* harmony export */   \"projectSection\": () => (/* binding */ projectSection),\n/* harmony export */   \"reAddTask\": () => (/* binding */ reAddTask),\n/* harmony export */   \"sideBarOn\": () => (/* binding */ sideBarOn)\n/* harmony export */ });\n/* harmony import */ var _todo_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-items */ \"./src/modules/todo-items.js\");\n\nconst main = document.querySelector('.main');\n\nfunction createTitle(name) {\n  const div = document.createElement('div');\n  div.classList.add('title');\n  div.textContent = name.charAt(0).toUpperCase() + name.slice(1);\n  main.appendChild(div);\n  const task = document.createElement('div');\n  task.classList.add('task');\n  main.appendChild(task);\n}\n\nfunction projectSection() {\n  const project = document.querySelector('.project');\n  const projectTitle = document.createElement('div');\n  const projectAdd = document.createElement('img');\n  projectAdd.classList.add('project-add');\n  projectAdd.src = '../../dist/img/icons/plus.svg'\n  projectTitle.textContent = 'Projects';\n  project.appendChild(projectTitle);\n  project.appendChild(projectAdd);\n  projectAdd.addEventListener('click', projectAdds);\n}\n\nfunction projectAdds() {\n  const project = document.querySelector('.project');\n  while(project.firstChild) {\n    project.removeChild(project.firstChild);\n  }\n  const projectName = document.createElement('input');\n  projectName.classList.add('project-name')\n  project.appendChild(projectName);\n  const addBtn = document.createElement('button');\n  addBtn.textContent = 'Add';\n  addBtn.classList.add('add-project-btn')\n  const cancelBtn = document.createElement('button');\n  cancelBtn.textContent = 'Cancel';\n  project.appendChild(addBtn);\n  project.appendChild(cancelBtn);\n  _todo_items__WEBPACK_IMPORTED_MODULE_0__.addProject();\n  cancelBtn.addEventListener('click', function () {\n    while(project.firstChild) {\n      project.removeChild(project.firstChild);\n    }\n    projectSection();\n  });\n}\n\n(function() {\n  const sidebar = document.querySelector('.sidebar');\n  const bottomSidebar = document.createElement('div');\n  bottomSidebar.classList.add('bottom-sidebar');\n  const projectContainer = document.createElement('div');\n  projectContainer.classList.add('project-container');\n  const project = document.createElement('div');\n  project.classList.add('project');\n  sidebar.appendChild(bottomSidebar);\n  bottomSidebar.appendChild(project);\n  bottomSidebar.appendChild(projectContainer);\n  projectSection()\n})();\n\nfunction createButton() {\n  const task = document.querySelector('.task');\n  const btn = document.createElement('div');\n  btn.classList.add('btn');\n  btn.id = 'btn';\n  const text = document.createElement('div');\n  text.textContent = 'Add Task';\n  const img = document.createElement('img');\n  img.src = '../../dist/img/icons/plus.svg';\n  btn.appendChild(img);\n  btn.appendChild(text);\n  task.appendChild(btn);\n}\n\nfunction addOptions(e, c) {\n  const option = document.createElement('option');\n  option.textContent = e;\n  option.value = e;\n  c.appendChild(option);\n}\nfunction formProject(c) {\n  for(let i = 0; i < _todo_items__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++){\n    addOptions(_todo_items__WEBPACK_IMPORTED_MODULE_0__.projects[i],c)\n  }\n}\n\nfunction taskSection() {\n  const form = document.querySelector('.add-task-form');\n  const topForm = document.createElement('div');\n    topForm.classList.add('top-form');\n    form.appendChild(topForm);\n    const title = document.createElement('input');\n    title.classList.add('form-title');\n    title.placeholder = 'Task Info';\n    topForm.appendChild(title);\n    const date = document.createElement('input');\n    date.classList.add('form-date');\n    date.type = 'date';\n    topForm.appendChild(date);\n    const project = document.createElement('select');\n    project.classList.add('form-project');\n    addOptions('None', project);\n    formProject(project)\n    topForm.appendChild(project);\n    const bottomForm = document.createElement('div');\n    bottomForm.classList.add('bottom-form');\n    form.appendChild(bottomForm);\n    const priority = document.createElement('select');\n    priority.classList.add('form-priority');\n    bottomForm.appendChild(priority);\n    addOptions('Select a Priority', priority);\n    addOptions('Low', priority);\n    addOptions('Mid', priority);\n    addOptions('High', priority);\n    const addBtn = document.createElement('button');\n    addBtn.classList.add('form-add-btn');\n    addBtn.textContent = 'Add';\n    bottomForm.appendChild(addBtn);\n    const cancelBtn = document.createElement('button');\n    cancelBtn.classList.add('form-cancel-btn');\n    cancelBtn.textContent = 'Cancel';\n    bottomForm.appendChild(cancelBtn);\n    _todo_items__WEBPACK_IMPORTED_MODULE_0__.loadTasks()\n}\n\nfunction addTask() {\n  const btn = document.getElementById('btn');\n  btn.addEventListener('click', () => {\n    const task = document.querySelector('.task');\n    const addTasks = document.createElement('div');\n    addTasks.classList.add('add-task');\n    task.innerHTML = '';\n    task.appendChild(addTasks);\n    const form = document.createElement('form');\n    form.classList.add('add-task-form');\n    addTasks.appendChild(form);\n    form.addEventListener('submit', (e) => {\n      e.preventDefault();\n    });\n    taskSection();\n    _todo_items__WEBPACK_IMPORTED_MODULE_0__.addTask();\n  });\n}\n\nfunction reAddTask(){\n  const taskBar = document.querySelector('.task');\n  while(taskBar.firstChild){\n      taskBar.removeChild(taskBar.firstChild)\n  }\n  createButton()\n  addTask()\n}\n\nfunction sideBarOn(pageName){\n  const tab = document.querySelector(`.${pageName}`);\n  const currentSelected = document.querySelector('.on-tab');\n  if (currentSelected) {\n      currentSelected.classList.remove('on-tab');\n  }\n  tab.classList.add('on-tab');\n}\n\nfunction openPage(pageName) {\n  createTitle(pageName);\n  createButton();\n  addTask();\n  _todo_items__WEBPACK_IMPORTED_MODULE_0__.addTaskToMain();\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/inbox.js?");

/***/ }),

/***/ "./src/modules/todo-items.js":
/*!***********************************!*\
  !*** ./src/modules/todo-items.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"addTaskToMain\": () => (/* binding */ addTaskToMain),\n/* harmony export */   \"loadTasks\": () => (/* binding */ loadTasks),\n/* harmony export */   \"localProjects\": () => (/* binding */ localProjects),\n/* harmony export */   \"localTask\": () => (/* binding */ localTask),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox */ \"./src/modules/inbox.js\");\n\n\n\nconst tasks = [];\nconst projects =[]\n\n\nfunction loadProject() {\n    const projectContainer = document.querySelector('.project-container');\n    projectContainer.innerHTML = '';\n    for(let i = 0; i < projects.length; i++) {\n        const item = document.createElement('div');\n        const title = document.createElement('div');\n        title.textContent = projects[i];\n        item.appendChild(title)\n        item.classList.add('project-item');\n        projectContainer.appendChild(item);\n        const deleteItem = document.createElement('img')\n        deleteItem.classList.add('delete-project')\n        deleteItem.src = \"../../dist/img/icons/trash-can-outline.svg\"\n        item.appendChild(deleteItem)\n        item.addEventListener('click', function() {\n            const currentSelected = document.querySelector('.on-tab');\n            if (currentSelected) {\n                currentSelected.classList.remove('on-tab');\n            }\n            item.classList.add('on-tab');\n        });\n    }\n    removeProject() \n    localStorage.setItem('Projects', JSON.stringify(projects));\n}\n\nfunction addProject() {\n    const btn = document.querySelector('.add-project-btn');\n    const project = document.querySelector('.project');\n    btn.addEventListener('click', function() {\n        const projectName = document.querySelector('.project-name').value;\n        if(projectName != '') {\n            projects.push(projectName);\n            localStorage.setItem('Projects',JSON.stringify(projects));\n            loadProject()\n            while(project.firstChild) {\n                project.removeChild(project.firstChild);\n              }\n              _inbox__WEBPACK_IMPORTED_MODULE_0__.projectSection();\n        } else {\n            return;\n        }\n    })\n}\n\n\n\nfunction localProjects(){\n    const storedLocalProjects = localStorage.getItem('Projects');\n    if (localStorage.getItem('Projects') !== null) {\n        const localProjets= JSON.parse(storedLocalProjects);\n        localProjets.forEach(item => {\n            projects.push(item);\n        })\n        loadProject()  \n    }\n}\nfunction localTask() {\n    const storedLocalTasks = localStorage.getItem('taskInfo');\n    if (localStorage.getItem('taskInfo') !== null) {\n        const localTasks = JSON.parse(storedLocalTasks);\n        localTasks.forEach(item => {\n            tasks.push(item);\n        })  \n    } \n}\n\nclass CreateItem{\n    constructor(title,date,priority,project){\n        this.title = title;\n        this.date = date;\n        this.priority = priority;\n        this.project = project;\n    };\n};\n\nfunction removeTask() {\n    const btn = document.querySelectorAll('.task-remove');\n    btn.forEach(function(item, index){\n        item.addEventListener('click', function() {\n            tasks.splice(index, 1);\n            addTaskToMain();\n        });\n    });\n}\n\nfunction removeProject() {\n    const projectBtn = document.querySelectorAll('.delete-project');\n    projectBtn.forEach(function(item, index){\n        item.addEventListener('click', function() {\n            projects.splice(index, 1);\n            loadProject();\n        });\n    });\n}\n\nfunction loadTasks() {\n    const title = document.querySelector('.title').textContent\n    const oneWeekFromNow = new Date();\n    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);  \n    const mainTasks = document.querySelector('.task');\n    for(let i = 0; i < tasks.length; i++){\n        const task = tasks[i]\n        const date = new Date(task.date);\n        if(title === task.project || title === 'Inbox' || \n        (date.toDateString() === new Date().toDateString() && title === 'Today') || \n        (date.getTime() >= new Date().getTime() && date.getTime() <= oneWeekFromNow.getTime() && title === 'Upcoming')) { \n            const task = document.createElement('div');\n            task.classList.add('task-item');\n            task.value = `item ${[i]}`\n            mainTasks.appendChild(task);\n            const checkBox = document.createElement('div');\n            checkBox.classList.add('check-box');\n            task.appendChild(checkBox);\n            const taskTitle = document.createElement('div');\n            taskTitle.textContent = `${tasks[i].title}`;\n            taskTitle.classList.add('task-title');\n            task.appendChild(taskTitle);\n            const taskDate = document.createElement('div');\n            taskDate.textContent = `${tasks[i].date}`;\n            taskDate.classList.add('task-date');\n            task.appendChild(taskDate);\n            const taskEdit = document.createElement('img')\n            taskEdit.src = '../../dist/img/icons/square-edit-outline.svg'\n            taskEdit.classList.add('task-edit');\n            task.appendChild(taskEdit);\n            const taskRemove = document.createElement('img')\n            taskRemove.src = '../../dist/img/icons/trash-can-outline.svg'\n            taskRemove.classList.add('task-remove');\n            task.appendChild(taskRemove);\n        }\n        \n    }\n    removeTask();\n    localStorage.setItem('taskInfo', JSON.stringify(tasks));\n}\n\nfunction editTask() {\n    const btn = document.querySelectorAll('.task-edit');\n    btn.forEach(function(item, index){\n        item.addEventListener('click', function() {\n            const task = document.querySelectorAll('.task-item');\n            const taskNum = task[index];\n            while(taskNum.firstChild){\n                taskNum.removeChild(taskNum.firstChild);\n            }\n            const title = document.createElement('input');\n            title.type = 'text';\n            title.classList.add('title-edit')\n            taskNum.appendChild(title);\n            const date = document.createElement('input');\n            date.type = 'date';\n            date.classList.add('date-edit')\n            taskNum.appendChild(date);\n            const confirmBtn = document.createElement('button');\n            confirmBtn.textContent = 'Confirm'\n            taskNum.appendChild(confirmBtn);\n            confirmBtn.addEventListener('click', function() {\n                const title = document.querySelector('.title-edit').value;\n                const date = document.querySelector('.date-edit').value;\n                if (title != '' && date != '') {\n                tasks[index].title = title;\n                tasks[index].date = date;\n                addTaskToMain();\n                } else return\n            } )\n\n        });\n    });\n}\n\n\nfunction addTaskToMain() {\n    _inbox__WEBPACK_IMPORTED_MODULE_0__.reAddTask();\n    loadTasks();\n    editTask();\n}\n\n\nfunction addProperties(){\n    const formTitle = document.querySelector('.form-title').value;\n    const formDate = document.querySelector('.form-date').value;\n    const formPriority = document.querySelector('.form-priority').value;\n    const formProject = document.querySelector('.form-project').value;\n    if(formTitle === '' || formDate === '' || formPriority === 'Select a Priority') {\n        return\n    };\n    const newTask = new CreateItem(formTitle,formDate,formPriority,formProject);\n    tasks.push(newTask);\n    _inbox__WEBPACK_IMPORTED_MODULE_0__.reAddTask();\n    addTaskToMain();\n}\n\n\n\nfunction addTask(){\n    document.querySelector('.form-add-btn').addEventListener('click', addProperties);\n    document.querySelector('.form-cancel-btn').addEventListener('click', addTaskToMain);\n};\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todo-items.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;