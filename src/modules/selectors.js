/**
 *
 * @param {String} selector
 * @param {Boolean | undefined} all
 * @param {HTMLElement | undefined} parentTree
 * @returns
 */
export const $select = (selector, all, parentTree) => {
  parentTree = document.body;

  if (!parentTree) parentTree = document.body;

  if (all === true) return parentTree.querySelectorAll(selector);

  return parentTree.querySelector(selector);
};

/**
 *
 * @param {HTMLElement} element
 * @param {String} attribute
 * @param {String | Boolean | undefined} value
 * @returns
 */
export const $attrib = (element, attribute, value) => {
  if (value === undefined) return element.getAttribute(attribute);

  element.setAttribute(attribute, value);
};

/**
 *
 * @param {HTMLElement} element
 * @param {String} attribute
 * @returns
 */
export const $is = (element, attribute) => element.hasAttribute(attribute);

/**
 *
 * @param {HTMLElement} element
 * @param {String} attribute
 * @returns
 */
 export const $prop = (element, attribute) => element.removeAttribute(attribute);

/**
 *
 * @param {String} tagName
 * @returns
 */
export const createElement = (tagName) => document.createElement(tagName);
