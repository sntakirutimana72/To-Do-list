const propClearTaskTrigger = () => {
  const trigger = document.body.querySelector('.to-do-clear-btn');

  if (trigger.hasAttribute('disabled')) {
    trigger.removeAttribute('disabled');
  } else trigger.setAttribute('disabled', 'true');
};

export default propClearTaskTrigger;
