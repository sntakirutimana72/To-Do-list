import {
  create, populate, remove, enableEdit, setDescription,
} from './modules/CRUD.js';
import setState from './modules/set-state.js';
import { $select } from './modules/selectors.js';
import './index.css';

window.addEventListener('DOMContentLoaded', () => {
  populate().then(() => {});

  document.forms[0].addEventListener('submit', create);

  $select('.to-do-clear-btn').onclick = () => remove();

  document.body.addEventListener('click', ({ target }) => {
    if (target.classList.contains('rm-btn')) enableEdit(target);
  });

  document.body.addEventListener('change', ({ target }) => {
    if (target.classList.contains('field-desc')) setDescription(target);

    else if (target.classList.contains('toggler')) setState(target);
  });
});
