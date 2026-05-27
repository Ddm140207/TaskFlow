/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { generateId } from './helpers.js';
import { StorageService } from '../assets/js/storage.js';

export class TaskManager {
  constructor() {
    this.tasks = [];
    this.loadFromStorage();
  }

  /**
   * Loads tasks database from persistent storage
   */
  loadFromStorage() {
    this.tasks = StorageService.getTasks();
  }

  /**
   * Writes current state of tasks to persistent storage
   */
  saveToStorage() {
    StorageService.saveTasks(this.tasks);
  }

  /**
   * Retrieves all loaded tasks
   * @returns {Array} - Array of task definitions
   */
  getAllTasks() {
    return [...this.tasks];
  }

  /**
   * Retrieves an individual task details
   * @param {string} id - Task ID
   * @returns {Object|undefined} - Found task object
   */
  getTaskById(id) {
    return this.tasks.find(task => task.id === id);
  }

  /**
   * Creates and inserts a brand new task.
   * @param {Object} draft - Fields representation of new task
   * @returns {Object} - Created task object
   */
  addTask({ title, description = '', status = 'Pending', duedate = '', priority = 'medium' }) {
    const newTask = {
      id: generateId(),
      title: title.trim(),
      description: description.trim(),
      status: status || 'Pending',
      createdAt: new Date().toISOString(),
      dueDate: duedate || '',
      priority: priority || 'medium'
    };
    
    this.tasks.unshift(newTask); // Insert at first index for immediate visual feedback
    this.saveToStorage();
    return newTask;
  }

  /**
   * Modifies columns or values of an existing task.
   * @param {string} id - Target task ID
   * @param {Object} updates - Segment of properties to update
   * @returns {Object|null} - Updated task object
   */
  updateTask(id, updates) {
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) return null;

    const updatedTask = {
      ...this.tasks[taskIndex],
      ...updates,
      title: updates.title !== undefined ? updates.title.trim() : this.tasks[taskIndex].title,
      description: updates.description !== undefined ? updates.description.trim() : this.tasks[taskIndex].description
    };

    this.tasks[taskIndex] = updatedTask;
    this.saveToStorage();
    return updatedTask;
  }

  /**
   * Transition of state status specifically with smooth callbacks.
   * @param {string} id - Target task ID
   * @param {string} status - New target status ('Pending' | 'In Progress' | 'Completed')
   * @returns {Object|null} - Updated task
   */
  updateTaskStatus(id, status) {
    return this.updateTask(id, { status });
  }

  /**
   * Erases a task entirely from memory/data array.
   * @param {string} id - Target task ID
   * @returns {boolean} - Success boolean
   */
  deleteTask(id) {
    const originalLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.id !== id);
    
    if (this.tasks.length < originalLength) {
      this.saveToStorage();
      return true;
    }
    return false;
  }

  /**
   * Query filter and sort helper for tasks grid.
   * @param {Object} filters - Search query, status, priority, and sorting rules
   * @returns {Array} - Filtered and sorted tasks
   */
  getFilteredTasks({ search = '', status = 'All', priority = 'All', sortBy = 'newest' }) {
    let result = [...this.tasks];

    // 1. Search filter (case-insensitive for title & description)
    if (search && search.trim().length > 0) {
      const query = search.toLowerCase().trim();
      result = result.filter(task => 
        (task.title && task.title.toLowerCase().includes(query)) ||
        (task.description && task.description.toLowerCase().includes(query))
      );
    }

    // 2. Status filter
    if (status && status !== 'All') {
      result = result.filter(task => task.status === status);
    }

    // 3. Priority filter
    if (priority && priority !== 'All') {
      result = result.filter(task => task.priority === priority);
    }

    // 4. Sort selection
    result.sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (sortBy === 'oldest') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
      if (sortBy === 'alphabetical') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'due-date') {
        const dateA = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
        const dateB = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
        return dateA - dateB;
      }
      if (sortBy === 'priority') {
        const priorityWeight = { high: 3, medium: 2, low: 1 };
        return (priorityWeight[b.priority] || 0) - (priorityWeight[a.priority] || 0);
      }
      return 0;
    });

    return result;
  }

  /**
   * Computes clean numerical aggregates.
   * @returns {Object} - Counts for different statuses
   */
  aggregateStats() {
    const stats = {
      total: this.tasks.length,
      pending: 0,
      inProgress: 0,
      completed: 0,
      completionRate: 0
    };

    if (stats.total === 0) return stats;

    this.tasks.forEach(task => {
      switch (task.status) {
        case 'Pending':
          stats.pending++;
          break;
        case 'In Progress':
          stats.inProgress++;
          break;
        case 'Completed':
          stats.completed++;
          break;
      }
    });

    stats.completionRate = Math.round((stats.completed / stats.total) * 100) || 0;
    return stats;
  }
}
