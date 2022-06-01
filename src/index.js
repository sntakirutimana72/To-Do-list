import {
  create, populate, remove, setState, enableEdit, disableEdit
} from './modules/to-do-manager.js';
import './index.css';

window.addEventListener('DOMContentLoaded', () => {
  populate().then(() => {
    const clearButton = document.body.querySelector('.to-do-clear-btn');

    if (clearButton.hasAttribute('disabled')) {
      clearButton.removeAttribute('disabled');
    } else clearButton.setAttribute('disabled', 'true');
  });

  document.forms[0].addEventListener('submit', create);

  document.body.querySelector('.to-do-clear-btn').onclick = () => remove();

  document.body.addEventListener('click', ({ target }) => {
    if (target.classList.contains('toggler')) setState(target);

    else if (target.classList.contains('rm-btn')) enableEdit(target);
  });

  document.body.addEventListener('change', ({ target }) => {
    if (target.classList.contains('field-desc')) disableEdit(target);
  });
});
