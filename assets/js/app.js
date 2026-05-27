/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TaskManager } from '../../logic/taskManager.js';
import { UIManager } from './ui.js';

/**
 * Initializes TaskFlow application on DOM Content Loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  try {
    // 1. Instantiate Core Tasks State Manager Client
    const taskManager = new TaskManager();

    // 2. Instantiate Direct CSS/DOM UI Controller Binding
    const uiManager = new UIManager(taskManager);

    // 3. Keep global handle on uiManager for potential playground debugging
    window.TaskFlow = {
      taskManager,
      uiManager
    };

    console.log('🚀 TaskFlow (Student Assignment Edition) Booted Successfully.');
  } catch (error) {
    console.error('TaskFlow failed to initialize:', error);
  }
});
