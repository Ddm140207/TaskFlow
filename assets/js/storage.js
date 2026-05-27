/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Storage management service for TaskFlow.
 * Leverages localStorage with fully managed fallbacks for private/incognito browsing.
 */

const STORAGE_KEY = 'taskflow_tasks_data';
const THEME_KEY = 'taskflow_theme';

// Default tasks to populate on very first load for demonstration purposes
const DEFAULT_TASKS = [
  {
    id: 'task_default_1',
    title: '💻 Complete Web Programming Assignment',
    description: 'Finalize the TaskFlow repository architecture, document the AI usage, and verify vanilla Javascript operations.',
    status: 'In Progress',
    createdAt: new Date(Date.now() - 4 * 3600 * 1000).toISOString(), // 4 hours ago
    dueDate: new Date(Date.now() + 2 * 24 * 3600 * 1000).toISOString().split('T')[0], // 2 days in future
    priority: 'high'
  },
  {
    id: 'task_default_2',
    title: '📚 Review Computer Science Lecture Notes',
    description: 'Study advanced DOM tree lifecycle manipulation, asynchronous modules, and custom visual interaction designs.',
    status: 'Pending',
    createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(), // 1 day ago
    dueDate: new Date(Date.now() + 5 * 24 * 3600 * 1000).toISOString().split('T')[0],
    priority: 'medium'
  },
  {
    id: 'task_default_3',
    title: '🎨 Design Neumorphic & Minimalist Mockups',
    description: 'Create beautiful low-fidelity design wireframes utilizing generous spacing, Inter, and neutral grey card backgrounds.',
    status: 'Completed',
    createdAt: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(), // 3 days ago
    dueDate: new Date(Date.now() - 1 * 24 * 3600 * 1000).toISOString().split('T')[0],
    priority: 'low'
  }
];

export const StorageService = {
  /**
   * Safe check if localStorage is available and accessible
   */
  isAvailable() {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  },

  /**
   * Retrieves all tasks. Defaults to default seeding tasks if empty.
   * @returns {Array} - Array of task objects
   */
  getTasks() {
    if (!this.isAvailable()) {
      console.warn('StorageService: localStorage not available, using in-memory fallback.');
      return window.__taskflow_fallback_db || DEFAULT_TASKS;
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // First load seeding
        this.saveTasks(DEFAULT_TASKS);
        return DEFAULT_TASKS;
      }
      return JSON.parse(stored);
    } catch (error) {
      console.error('StorageService: Failed parsing tasks, returning defaults.', error);
      return DEFAULT_TASKS;
    }
  },

  /**
   * Saves task list directly to storage
   * @param {Array} tasks - Array of task objects
   */
  saveTasks(tasks) {
    if (!this.isAvailable()) {
      window.__taskflow_fallback_db = tasks;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('StorageService: Failed writing to localStorage', error);
    }
  },

  /**
   * Saves preferred interface color theme
   * @param {string} theme - 'light' | 'dark'
   */
  saveTheme(theme) {
    if (!this.isAvailable()) return;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      console.error('StorageService: Failed to save theme preferred mode', error);
    }
  },

  /**
   * Retrieves the preferred interface color theme
   * @returns {string|null} - 'light' | 'dark' or null
   */
  getTheme() {
    if (!this.isAvailable()) return 'light';
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (error) {
      return 'light';
    }
  }
};
