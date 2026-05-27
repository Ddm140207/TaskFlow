/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Modern task inputs validation module.
 * Provides live or submit-time styling and clean user notifications.
 */

export const ValidationService = {
  /**
   * Validates task title input.
   * @param {string} title - The title of the task
   * @returns {Object} - Result containing isValid and message
   */
  validateTitle(title) {
    const trimmed = title ? title.trim() : '';
    
    if (trimmed.length === 0) {
      return {
        isValid: false,
        message: 'Task title is required.'
      };
    }
    
    if (trimmed.length < 3) {
      return {
        isValid: false,
        message: 'Task title must be at least 3 characters long.'
      };
    }
    
    if (trimmed.length > 80) {
      return {
        isValid: false,
        message: 'Title is too long (maximum 80 characters).'
      };
    }

    return { isValid: true, message: '' };
  },

  /**
   * Validates task description length.
   * @param {string} description - Task description
   * @returns {Object} - Result containing isValid and message
   */
  validateDescription(description) {
    const trimmed = description ? description.trim() : '';
    
    if (trimmed.length > 500) {
      return {
        isValid: false,
        message: 'Description must not exceed 500 characters.'
      };
    }

    return { isValid: true, message: '' };
  },

  /**
   * Helper to append or clean styling of input elements based on validation result.
   * @param {HTMLElement} inputElement - The HTML input/textarea to apply classes to
   * @param {HTMLElement} feedbackElement - The span or paragraph displaying the actual message
   * @param {Object} result - Direct validation result
   */
  applyUIFeedback(inputElement, feedbackElement, result) {
    if (!inputElement) return;

    if (!result.isValid) {
      // Apply error borders and states
      inputElement.classList.add('border-rose-500', 'focus:ring-rose-500', 'focus:border-rose-500', 'bg-rose-50/10');
      inputElement.classList.remove('border-slate-200', 'dark:border-slate-850', 'bg-white', 'dark:bg-slate-900');
      
      if (feedbackElement) {
        feedbackElement.textContent = result.message;
        feedbackElement.classList.remove('opacity-0', 'pointer-events-none');
        feedbackElement.classList.add('opacity-100', 'text-rose-500');
      }
    } else {
      // Restore natural borders
      inputElement.classList.remove('border-rose-500', 'focus:ring-rose-500', 'focus:border-rose-500', 'bg-rose-50/10');
      inputElement.classList.add('border-slate-200', 'dark:border-slate-850');
      
      if (feedbackElement) {
        feedbackElement.textContent = '';
        feedbackElement.classList.add('opacity-0', 'pointer-events-none');
        feedbackElement.classList.remove('opacity-100', 'text-rose-500');
      }
    }
  }
};
