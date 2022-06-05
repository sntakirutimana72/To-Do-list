import { $select, $attrib, $is, $prop } from './selectors.js';

const propClearTaskTrigger = (enforce) => {
  const trigger = $select('.to-do-clear-btn');
  const isDisabled = $is(trigger, 'disabled');

  if (isDisabled) {
    $prop(trigger, 'disabled');
  } else if (!enforce) $attrib(trigger, 'disabled', true);
};

export default propClearTaskTrigger;
