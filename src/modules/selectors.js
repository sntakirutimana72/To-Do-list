export const $select = (selector, all, parentTree) => {
  parentTree = document.body;

  if (!parentTree) parentTree = document.body;

  if (all === true) return parentTree.querySelectorAll(selector);

  return parentTree.querySelector(selector);
};

