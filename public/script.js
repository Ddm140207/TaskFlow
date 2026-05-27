// Estado global
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'Todas';

// Elementos del DOM
const taskInput = document.getElementById('taskInput');
const statusSelect = document.getElementById('statusSelect');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const filterBtns = document.querySelectorAll('.filter-btn');

// --- Lógica de Datos ---

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateStats();
}

function updateStats() {
    taskCount.textContent = tasks.length;
}

// --- Acciones ---

function addTask() {
    const title = taskInput.value.trim();
    const status = statusSelect.value;

    if (title === "") {
        showToast("Escribe una tarea válida");
        return;
    }

    const newTask = {
        id: Date.now(),
        title: title,
        status: status
    };

    tasks.unshift(newTask); // Agregar al inicio
    taskInput.value = "";
    saveTasks();
    renderTasks();
    showToast("Tarea agregada con éxito");
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
    showToast("Tarea eliminada");
}

function toggleTaskStatus(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.status = (task.status === 'Completada') ? 'Pendiente' : 'Completada';
        saveTasks();
        renderTasks();
    }
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    const newTitle = prompt("Modificar tarea:", task.title);
    
    if (newTitle !== null && newTitle.trim() !== "") {
        task.title = newTitle.trim();
        saveTasks();
        renderTasks();
        showToast("Tarea actualizada");
    }
}

// --- Interfaz de Usuario ---

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(t => {
        if (currentFilter === 'Todas') return true;
        return t.status === currentFilter;
    });

    if (filteredTasks.length === 0) {
        taskList.innerHTML = `<li style="text-align:center; padding: 40px; color: #64748b; font-size: 14px; font-weight: 500;">No hay tareas en esta categoría</li>`;
        return;
    }

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.status === 'Completada' ? 'is-completed' : ''}`;
        
        // Formatear el nombre del status para la clase del badge (reemplazar espacios)
        const badgeClass = `badge-${task.status.replace(/\s+/g, '_')}`;

        li.innerHTML = `
            <div class="task-content">
                <span class="task-title">${task.title}</span>
                <span class="task-badge ${badgeClass}">${task.status}</span>
            </div>
            <div class="task-actions">
                <button class="action-btn" onclick="editTask(${task.id})" title="Editar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4L18.5 2.5z"></path></svg>
                </button>
                <button class="action-btn" onclick="toggleTaskStatus(${task.id})" title="Completar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </button>
                <button class="action-btn delete" onclick="deleteTask(${task.id})" title="Eliminar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// --- Event Listeners ---

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // UI
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Data
        currentFilter = btn.getAttribute('data-filter');
        renderTasks();
    });
});

// Carga inicial
window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    setTimeout(() => {
        splash.classList.add('fade-out');
    }, 1500); // Duración de la pantalla de bienvenida
});

renderTasks();
updateStats();
