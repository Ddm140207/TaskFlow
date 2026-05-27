/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { getIcon, formatDate, escapeHTML } from '../../logic/helpers.js';
import { StorageService } from './storage.js';
import { ValidationService } from './validation.js';

export class UIManager {
  /**
   * @param {TaskManager} taskManager - Active logic instance
   */
  constructor(taskManager) {
    this.taskManager = taskManager;
    
    // UI state trackers
    this.activeFilters = {
      search: '',
      status: 'All',
      priority: 'All',
      sortBy: 'newest'
    };
    this.editingTaskId = null;
    this.isDarkMode = false;

    // Cache DOM references
    this.initDOMCache();
    // Start listeners
    this.initListeners();
    // Initialize initial theme settings
    this.initTheme();
    // Render initial tasks dashboard
    this.render();
  }

  initDOMCache() {
    this.dom = {
      taskContainer: document.getElementById('task-container'),
      
      // Control Inputs
      searchBar: document.getElementById('search-bar'),
      statusFilter: document.getElementById('status-filter'),
      priorityFilter: document.getElementById('priority-filter'),
      sortBy: document.getElementById('sort-by'),
      clearFiltersBtn: document.getElementById('clear-filters-btn'),

      // Modal Elements
      taskModal: document.getElementById('task-modal'),
      modalTitle: document.getElementById('modal-main-title'),
      modalForm: document.getElementById('task-modal-form'),
      closeModalBtn: document.getElementById('close-modal-btn'),
      cancelModalBtn: document.getElementById('cancel-modal-btn'),
      newTaskBtn: document.getElementById('new-task-btn'),
      createTaskNavBtn: document.getElementById('create-task-nav-btn'),
      emptyStateCreateBtn: null, // set dynamically

      // Modal Fields
      fieldTitle: document.getElementById('task-field-title'),
      fieldDescription: document.getElementById('task-field-description'),
      fieldStatus: document.getElementById('task-field-status'),
      fieldPriority: document.getElementById('task-field-priority'),
      fieldDueDate: document.getElementById('task-field-duedate'),
      
      // Validation Feedbacks
      errorTitle: document.getElementById('error-field-title'),
      errorDescription: document.getElementById('error-field-description'),

      // Theme toggle
      themeToggle: document.getElementById('theme-toggle'),

      // Counters & Stats
      countTotal: document.getElementById('stats-total'),
      countPending: document.getElementById('stats-pending'),
      countInProgress: document.getElementById('stats-in-progress'),
      countCompleted: document.getElementById('stats-completed'),
      progressPercentage: document.getElementById('stats-progress-percentage'),
      progressBar: document.getElementById('stats-progress-bar'),

      // Toast Notification
      toast: document.getElementById('toast-notification'),
      toastMessage: document.getElementById('toast-message'),

      // Keyboard Help Modal
      kbdToggle: document.getElementById('kbd-help-toggle'),
      kbdModal: document.getElementById('kbd-help-modal'),
      kbdClose: document.getElementById('kbd-help-close')
    };
  }

  initListeners() {
    // 1. Task Filtering & Searching Inputs
    if (this.dom.searchBar) {
      this.dom.searchBar.addEventListener('input', (e) => {
        this.activeFilters.search = e.target.value;
        this.render();
      });
    }

    if (this.dom.statusFilter) {
      this.dom.statusFilter.addEventListener('change', (e) => {
        this.activeFilters.status = e.target.value;
        this.render();
      });
    }

    if (this.dom.priorityFilter) {
      this.dom.priorityFilter.addEventListener('change', (e) => {
        this.activeFilters.priority = e.target.value;
        this.render();
      });
    }

    if (this.dom.sortBy) {
      this.dom.sortBy.addEventListener('change', (e) => {
        this.activeFilters.sortBy = e.target.value;
        this.render();
      });
    }

    if (this.dom.clearFiltersBtn) {
      this.dom.clearFiltersBtn.addEventListener('click', () => {
        this.resetFilters();
      });
    }

    // 2. Modals Visibility Toggle
    if (this.dom.newTaskBtn) {
      this.dom.newTaskBtn.addEventListener('click', () => this.openModal(null));
    }
    if (this.dom.createTaskNavBtn) {
      this.dom.createTaskNavBtn.addEventListener('click', () => this.openModal(null));
    }
    if (this.dom.closeModalBtn) {
      this.dom.closeModalBtn.addEventListener('click', () => this.closeModal());
    }
    if (this.dom.cancelModalBtn) {
      this.dom.cancelModalBtn.addEventListener('click', () => this.closeModal());
    }

    // Modal submit handler
    if (this.dom.modalForm) {
      this.dom.modalForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    // 3. Theme Toggling Trigger
    if (this.dom.themeToggle) {
      this.dom.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // 4. Keyboard Shortcuts Help Modal
    if (this.dom.kbdToggle) {
      this.dom.kbdToggle.addEventListener('click', () => this.showKbdHelp(true));
    }
    if (this.dom.kbdClose) {
      this.dom.kbdClose.addEventListener('click', () => this.showKbdHelp(false));
    }

    // Close overlays when clicking outside
    window.addEventListener('click', (e) => {
      if (e.target === this.dom.taskModal) {
        this.closeModal();
      }
      if (e.target === this.dom.kbdModal) {
        this.showKbdHelp(false);
      }
    });

    // 5. Global Keyboard Shortcuts Handler
    window.addEventListener('keyup', (e) => {
      // Avoid firing when focusing a text input fields
      const activeEl = document.activeElement;
      const isInput = activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable;
      
      if (isInput) {
        if (e.key === 'Escape') {
          activeEl.blur();
        }
        return;
      }

      switch (e.key.toLowerCase()) {
        case 'n': // 'N' to trigger new task item modal
          e.preventDefault();
          this.openModal(null);
          break;
        case '/': // '/' to auto focus searching input
          e.preventDefault();
          if (this.dom.searchBar) {
            this.dom.searchBar.focus();
            this.dom.searchBar.select();
          }
          break;
        case 'escape': // ESC to close active modal
          if (!this.dom.taskModal.classList.contains('hidden')) {
            this.closeModal();
          }
          if (!this.dom.kbdModal.classList.contains('hidden')) {
            this.showKbdHelp(false);
          }
          break;
        case 'k': // 'K' keys display help sheet
          this.showKbdHelp(this.dom.kbdModal.classList.contains('hidden'));
          break;
        case 'd': // 'D' toggle color theme
          this.toggleTheme();
          break;
      }
    });
  }

  /**
   * Recovers persistent choice of UI Theme and formats the target tags.
   */
  initTheme() {
    const cachedTheme = StorageService.getTheme();
    
    if (cachedTheme === 'dark' || (!cachedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.setDarkThemeState(true);
    } else {
      this.setDarkThemeState(false);
    }
  }

  setDarkThemeState(isDark) {
    this.isDarkMode = isDark;
    const documentRoot = document.documentElement;
    
    if (isDark) {
      documentRoot.classList.add('dark');
      StorageService.saveTheme('dark');
      if (this.dom.themeToggle) {
        this.dom.themeToggle.innerHTML = `${getIcon('sun', 'size-5')} <span class="sr-only">Light Mode</span>`;
      }
    } else {
      documentRoot.classList.remove('dark');
      StorageService.saveTheme('light');
      if (this.dom.themeToggle) {
        this.dom.themeToggle.innerHTML = `${getIcon('moon', 'size-5')} <span class="sr-only">Dark Mode</span>`;
      }
    }
  }

  toggleTheme() {
    this.setDarkThemeState(!this.isDarkMode);
    this.showToast(this.isDarkMode ? '🌙 Dark Mode Activated' : '☀️ Light Mode Activated');
  }

  showKbdHelp(visible) {
    if (!this.dom.kbdModal) return;
    if (visible) {
      this.dom.kbdModal.classList.remove('hidden');
      setTimeout(() => {
        this.dom.kbdModal.querySelector('.modal-content-box')?.classList.add('scale-100', 'opacity-100');
        this.dom.kbdModal.querySelector('.modal-content-box')?.classList.remove('scale-95', 'opacity-0');
      }, 10);
    } else {
      this.dom.kbdModal.querySelector('.modal-content-box')?.classList.add('scale-95', 'opacity-0');
      this.dom.kbdModal.querySelector('.modal-content-box')?.classList.remove('scale-100', 'opacity-100');
      setTimeout(() => {
        this.dom.kbdModal.classList.add('hidden');
      }, 200);
    }
  }

  resetFilters() {
    this.activeFilters = {
      search: '',
      status: 'All',
      priority: 'All',
      sortBy: 'newest'
    };

    if (this.dom.searchBar) this.dom.searchBar.value = '';
    if (this.dom.statusFilter) this.dom.statusFilter.value = 'All';
    if (this.dom.priorityFilter) this.dom.priorityFilter.value = 'All';
    if (this.dom.sortBy) this.dom.sortBy.value = 'newest';

    this.render();
    this.showToast('🧹 Search filters cleared');
  }

  /**
   * Triggers the custom task editor overlay modal.
   * @param {string|null} taskId - Target task model or null for a brand-new entity
   */
  openModal(taskId = null) {
    this.editingTaskId = taskId;
    this.clearModalInputs();

    if (this.dom.taskModal) {
      this.dom.taskModal.classList.remove('hidden');
      
      // Animate modal wrapper
      setTimeout(() => {
        this.dom.taskModal.querySelector('.modal-content-box')?.classList.add('scale-100', 'opacity-100');
        this.dom.taskModal.querySelector('.modal-content-box')?.classList.remove('scale-95', 'opacity-0');
      }, 10);
    }

    if (this.editingTaskId) {
      // Load details of editing task
      const task = this.taskManager.getTaskById(this.editingTaskId);
      if (task) {
        if (this.dom.modalTitle) this.dom.modalTitle.textContent = 'Edit Task';
        if (this.dom.fieldTitle) this.dom.fieldTitle.value = task.title;
        if (this.dom.fieldDescription) this.dom.fieldDescription.value = task.description;
        if (this.dom.fieldStatus) this.dom.fieldStatus.value = task.status;
        if (this.dom.fieldPriority) this.dom.fieldPriority.value = task.priority;
        if (this.dom.fieldDueDate) this.dom.fieldDueDate.value = task.dueDate || '';
      }
    } else {
      if (this.dom.modalTitle) this.dom.modalTitle.textContent = 'New Task';
      if (this.dom.fieldStatus) this.dom.fieldStatus.value = 'Pending';
      if (this.dom.fieldPriority) this.dom.fieldPriority.value = 'medium';
    }

    if (this.dom.fieldTitle) {
      setTimeout(() => this.dom.fieldTitle.focus(), 150);
    }
  }

  closeModal() {
    if (!this.dom.taskModal) return;

    this.dom.taskModal.querySelector('.modal-content-box')?.classList.add('scale-95', 'opacity-0');
    this.dom.taskModal.querySelector('.modal-content-box')?.classList.remove('scale-100', 'opacity-100');
    
    setTimeout(() => {
      this.dom.taskModal.classList.add('hidden');
      this.editingTaskId = null;
      this.clearModalInputs();
    }, 200);
  }

  clearModalInputs() {
    if (this.dom.fieldTitle) this.dom.fieldTitle.value = '';
    if (this.dom.fieldDescription) this.dom.fieldDescription.value = '';
    if (this.dom.fieldStatus) this.dom.fieldStatus.value = 'Pending';
    if (this.dom.fieldPriority) this.dom.fieldPriority.value = 'medium';
    if (this.dom.fieldDueDate) this.dom.fieldDueDate.value = '';

    // Remove red borders
    ValidationService.applyUIFeedback(this.dom.fieldTitle, this.dom.errorTitle, { isValid: true });
    ValidationService.applyUIFeedback(this.dom.fieldDescription, this.dom.errorDescription, { isValid: true });
  }

  /**
   * Action validating and saving task details on modal form submit.
   * @param {Event} e 
   */
  handleFormSubmit(e) {
    e.preventDefault();

    const titleVal = this.dom.fieldTitle ? this.dom.fieldTitle.value : '';
    const descVal = this.dom.fieldDescription ? this.dom.fieldDescription.value : '';
    const statusVal = this.dom.fieldStatus ? this.dom.fieldStatus.value : 'Pending';
    const priorityVal = this.dom.fieldPriority ? this.dom.fieldPriority.value : 'medium';
    const dueDateVal = this.dom.fieldDueDate ? this.dom.fieldDueDate.value : '';

    // Conduct validation
    const titleCheck = ValidationService.validateTitle(titleVal);
    const descCheck = ValidationService.validateDescription(descVal);

    ValidationService.applyUIFeedback(this.dom.fieldTitle, this.dom.errorTitle, titleCheck);
    ValidationService.applyUIFeedback(this.dom.fieldDescription, this.dom.errorDescription, descCheck);

    if (!titleCheck.isValid || !descCheck.isValid) {
      this.showToast('⚠️ Please review input validation errors.', 'warning');
      return;
    }

    const payload = {
      title: titleVal,
      description: descVal,
      status: statusVal,
      priority: priorityVal,
      duedate: dueDateVal
    };

    if (this.editingTaskId) {
      // Submit custom details modifications
      this.taskManager.updateTask(this.editingTaskId, payload);
      this.showToast('✏️ Task details modified successfully.');
    } else {
      // Add fresh entity
      this.taskManager.addTask(payload);
      this.showToast('✨ Task created successfully.');
    }

    this.closeModal();
    this.render();
  }

  /**
   * Triggers elegant confirmation dialog for task deletion.
   * @param {string} taskId 
   */
  confirmDeleteTask(taskId) {
    const task = this.taskManager.getTaskById(taskId);
    if (!task) return;

    const confirmed = window.confirm(`Are you sure you want to delete this task?\n"${task.title}"`);
    if (confirmed) {
      const card = document.querySelector(`[data-task-id="${taskId}"]`);
      if (card) {
        // Animate deletion exit
        card.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
          this.taskManager.deleteTask(taskId);
          this.render();
          this.showToast('🗑️ Task removed.');
        }, 300);
      } else {
        this.taskManager.deleteTask(taskId);
        this.render();
        this.showToast('🗑️ Task removed.');
      }
    }
  }

  /**
   * Quickly marks a task as Completed or Pending directly from checkbox click.
   * @param {string} taskId 
   * @param {boolean} checked 
   */
  toggleTaskCompletion(taskId, checked) {
    const newStatus = checked ? 'Completed' : 'Pending';
    this.taskManager.updateTaskStatus(taskId, newStatus);
    this.render();
    
    if (checked) {
      this.showToast('🎉 Task completed! Keep it up!');
    } else {
      this.showToast('⏳ Task set back to Pending.');
    }
  }

  /**
   * Direct change dropdown modifier inside individual cards.
   * @param {string} taskId 
   * @param {string} newStatus 
   */
  inlineStatusChange(taskId, newStatus) {
    this.taskManager.updateTaskStatus(taskId, newStatus);
    this.render();
    this.showToast(`Updated status to: ${newStatus}`);
  }

  /**
   * Renders the entire dashboard panel, task counter bars, and task grids.
   */
  render() {
    // 1. Recover matching filtered elements and counters
    const currentTasks = this.taskManager.getFilteredTasks(this.activeFilters);
    const aggregates = this.taskManager.aggregateStats();

    // 2. Refresh top level statistic counters
    this.updateStatsUI(aggregates);

    // 3. Populate dynamic grid
    if (!this.dom.taskContainer) return;

    if (currentTasks.length === 0) {
      this.renderEmptyState();
    } else {
      this.dom.taskContainer.innerHTML = '';
      const grid = document.createElement('div');
      grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

      currentTasks.forEach((task, index) => {
        const cardMarkup = this.generateTaskCardHTML(task);
        const cardWrapper = document.createElement('div');
        cardWrapper.innerHTML = cardMarkup;
        const cardElement = cardWrapper.firstElementChild;
        
        // Setup direct state callbacks inside card
        this.attachCardEvents(cardElement, task);
        grid.appendChild(cardElement);
      });

      this.dom.taskContainer.appendChild(grid);
    }
  }

  /**
   * Dynamic stats refresher
   * @param {Object} stats
   */
  updateStatsUI(stats) {
    if (this.dom.countTotal) this.dom.countTotal.textContent = stats.total;
    if (this.dom.countPending) this.dom.countPending.textContent = stats.pending;
    if (this.dom.countInProgress) this.dom.countInProgress.textContent = stats.inProgress;
    if (this.dom.countCompleted) this.dom.countCompleted.textContent = stats.completed;
    
    if (this.dom.progressPercentage) {
      this.dom.progressPercentage.textContent = `${stats.completionRate}%`;
    }
    if (this.dom.progressBar) {
      this.dom.progressBar.style.width = `${stats.completionRate}%`;
    }
  }

  /**
   * Empty state display generator using clean, minimalist vector graphics.
   */
  renderEmptyState() {
    const hasAnyTask = this.taskManager.getAllTasks().length > 0;
    
    let content = '';
    
    if (hasAnyTask) {
      // Filter result is empty
      content = `
        <div class="flex flex-col items-center justify-center text-center py-16 px-4 shrink-0 transition-all duration-300">
          <div class="h-28 w-28 bg-slate-50 dark:bg-slate-850 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 mb-6 border border-dashed border-slate-200 dark:border-slate-800 antialiased transform hover:scale-105 duration-300">
            ${getIcon('search', 'size-10 stroke-1.5')}
          </div>
          <h3 class="font-sans font-medium text-lg text-slate-800 dark:text-slate-200 tracking-tight">No tasks match filters</h3>
          <p class="font-sans text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm leading-relaxed">
            Try correcting your search Query or adjusting priority levels and status filter bars.
          </p>
          <button id="empty-state-reset" class="mt-6 flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 drop-shadow-xs hover:bg-slate-50 dark:hover:bg-slate-850 px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 font-sans font-medium hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
            🧹 Reset all filters
          </button>
        </div>
      `;
    } else {
      // Database has no records
      content = `
        <div class="flex flex-col items-center justify-center text-center py-20 px-4 shrink-0 transition-all duration-300">
          <div class="h-32 w-32 bg-slate-50 dark:bg-slate-850 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 mb-6 border border-dotted border-slate-200 dark:border-slate-800 antialiased relative hover:rotate-3 duration-500">
            ${getIcon('smile', 'size-12 stroke-1.2')}
          </div>
          <h3 class="font-sans font-medium text-xl text-slate-800 dark:text-slate-200 tracking-tight">Your workspaces are empty</h3>
          <p class="font-sans text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm leading-relaxed">
            Welcome to TaskFlow! Enjoy this clean minimal environment designed to help you organize study tasks and university milestones.
          </p>
          <button id="empty-state-create" class="mt-8 flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 rounded-lg text-sm font-sans font-semibold hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
            ${getIcon('plus', 'size-4 stroke-3')} Create Your First Task
          </button>
        </div>
      `;
    }

    this.dom.taskContainer.innerHTML = content;

    // Attach callbacks inside empty-state triggers
    const resetBtn = document.getElementById('empty-state-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.resetFilters());
    }

    const createBtn = document.getElementById('empty-state-create');
    if (createBtn) {
      createBtn.addEventListener('click', () => this.openModal(null));
    }
  }

  /**
   * Outputs HTML visual representation for tasks list card.
   * @param {Object} task
   * @returns {string} - Task Grid Card
   */
  generateTaskCardHTML(task) {
    const isCompleted = task.status === 'Completed';
    const isHigh = task.priority === 'high';
    const isLow = task.priority === 'low';
    
    // Status visual colors
    let statusClass = 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-850 dark:text-slate-400 dark:border-slate-800';
    let statusIcon = 'circle';
    if (task.status === 'In Progress') {
      statusClass = 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30';
      statusIcon = 'clock';
    } else if (task.status === 'Completed') {
      statusClass = 'bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30';
      statusIcon = 'check';
    }

    // Priority color matching
    let priorityClass = 'bg-slate-100 text-slate-500 dark:bg-slate-850 dark:text-slate-400';
    if (task.priority === 'high') {
      priorityClass = 'bg-rose-50 text-rose-600 dark:bg-rose-950/20 dark:text-rose-450';
    } else if (task.priority === 'medium') {
      priorityClass = 'bg-amber-50 text-amber-600 dark:bg-amber-950/20 dark:text-amber-450';
    }

    const escapedTitle = escapeHTML(task.title);
    const escapedDesc = escapeHTML(task.description);
    
    return `
      <div class="task-card flex flex-col justify-between p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850 rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)] dark:hover:border-slate-800 transition-all duration-300 opacity-100 relative ${isCompleted ? 'task-card-completed' : ''}" 
           data-task-id="${task.id}"
           id="${task.id}-card-layout">
        
        <div>
          <!-- Header: Priority & Action Tools -->
          <div class="flex items-center justify-between mb-4">
            <span class="font-sans text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md ${priorityClass}">
              ${task.priority} priority
            </span>
            
            <div class="flex items-center gap-1.5 opacity-90">
              <button class="btn-card-edit p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 rounded-lg transition-colors cursor-pointer" title="Edit details">
                ${getIcon('edit', 'size-3.5')}
                <span class="sr-only">Edit Details</span>
              </button>
              <button class="btn-card-delete p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-lg transition-colors cursor-pointer" title="Remove Task">
                ${getIcon('trash', 'size-3.5')}
                <span class="sr-only">Remove Task</span>
              </button>
            </div>
          </div>

          <!-- Main Layout: Checkbox and Title -->
          <div class="flex items-start gap-3">
            <label class="relative flex items-center justify-center mt-1 select-none pointer-events-auto cursor-pointer" title="Toggle quick completion">
              <input type="checkbox" class="cb-complete sr-only" ${isCompleted ? 'checked' : ''} />
              <div class="checkbox-box size-4.5 rounded border border-slate-300 dark:border-slate-755 hover:border-slate-400 dark:hover:border-slate-600 flex items-center justify-center bg-white dark:bg-slate-900 transition-all">
                ${getIcon('check', 'size-3.5 text-white stroke-[3.5] opacity-0 scale-75 transition-all')}
              </div>
            </label>
            
            <div class="flex-1 min-w-0">
              <h4 class="font-sans font-medium text-slate-800 dark:text-slate-100 tracking-tight leading-tight mb-2 select-text ${isCompleted ? 'line-through text-slate-400 dark:text-slate-500' : ''}">
                ${escapedTitle}
              </h4>
              <p class="font-sans text-xs text-slate-550 dark:text-slate-400 leading-relaxed break-words mb-4 select-text max-h-24 overflow-y-auto custom-scrollbar">
                ${escapedDesc || '<span class="italic text-slate-350 dark:text-slate-550">No description provided.</span>'}
              </p>
            </div>
          </div>
        </div>

        <!-- Footer Segment: Date stamps & Status badges dropdown selector -->
        <div class="border-t border-slate-100 dark:border-slate-850/60 pt-4 mt-2 flex items-center justify-between text-slate-400 dark:text-slate-500 font-sans text-[11px]">
          <div class="flex flex-col gap-1 text-[10px]">
            <div class="flex items-center gap-1">
              ${getIcon('tag', 'size-3 text-slate-400/80')}
              <span>Created on ${formatDate(task.createdAt)}</span>
            </div>
            ${task.dueDate ? `
              <div class="flex items-center gap-1 ${new Date(task.dueDate) < new Date() && !isCompleted ? 'text-red-500 font-semibold' : ''}">
                ${getIcon('calendar', 'size-3')}
                <span>Due on ${formatDate(task.dueDate)} ${new Date(task.dueDate) < new Date() && !isCompleted ? '(Overdue)' : ''}</span>
              </div>
            ` : ''}
          </div>

          <!-- Interactive dropdown for quick status change -->
          <div class="relative inline-block pointer-events-auto">
            <select class="sel-card-status font-sans text-[11px] font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 rounded-lg pl-2.5 pr-6 py-1 text-slate-650 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800 appearance-none cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-slate-400" title="Set task current status">
              <option value="Pending" ${task.status === 'Pending' ? 'selected' : ''}>⏳ Pending</option>
              <option value="In Progress" ${task.status === 'In Progress' ? 'selected' : ''}>⚡ In Progress</option>
              <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>✅ Completed</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-slate-400">
              <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    `;
  }

  /**
   * Safe mapping of direct DOM click handlers to elements inside card item.
   * @param {HTMLElement} cardElement - Rendered DOM node
   * @param {Object} task
   */
  attachCardEvents(cardElement, task) {
    // 1. Checkbox quick toggler
    const checkbox = cardElement.querySelector('.cb-complete');
    if (checkbox) {
      checkbox.addEventListener('change', (e) => {
        this.toggleTaskCompletion(task.id, e.target.checked);
      });
    }

    // 2. Editing action click
    const editBtn = cardElement.querySelector('.btn-card-edit');
    if (editBtn) {
      editBtn.addEventListener('click', () => {
        this.openModal(task.id);
      });
    }

    // 3. Deleting action click
    const deleteBtn = cardElement.querySelector('.btn-card-delete');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', () => {
        this.confirmDeleteTask(task.id);
      });
    }

    // 4. Status change quick dropdown
    const statusSelect = cardElement.querySelector('.sel-card-status');
    if (statusSelect) {
      statusSelect.addEventListener('change', (e) => {
        this.inlineStatusChange(task.id, e.target.value);
      });
    }
  }

  /**
   * Visual feedback notifications toast.
   * @param {string} msg 
   * @param {string} type - 'info' | 'warning'
   */
  showToast(msg, type = 'info') {
    if (!this.dom.toast || !this.dom.toastMessage) return;

    // Reset styles
    this.dom.toast.className = 'fixed bottom-6 right-6 z-[100] flex items-center gap-2 px-4 py-3 rounded-xl border font-sans text-xs font-medium shadow-md transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-none';
    
    // Style by type
    if (type === 'warning') {
      this.dom.toast.classList.add('bg-rose-50', 'text-rose-800', 'border-rose-200', 'dark:bg-rose-950/90', 'dark:text-rose-100', 'dark:border-rose-900/40');
    } else {
      this.dom.toast.classList.add('bg-slate-900', 'text-white', 'border-slate-800', 'dark:bg-white', 'dark:text-slate-900', 'dark:border-slate-100');
    }

    this.dom.toastMessage.textContent = msg;

    // Slide up and reveal toast
    this.dom.toast.classList.remove('translate-y-2', 'opacity-0', 'pointer-events-none');
    this.dom.toast.classList.add('translate-y-0', 'opacity-100');

    // Automatically hide toast
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.dom.toast.classList.remove('translate-y-0', 'opacity-100');
      this.dom.toast.classList.add('translate-y-2', 'opacity-0', 'pointer-events-none');
    }, 2800);
  }
}
