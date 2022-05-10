import { filter, includes, map } from 'lodash';

const getUniqueAvailableTasks = (allTasks, formTasks, currentFieldValue) => {
  const ids = map(formTasks, ({ id }) => id);

  return filter(
    allTasks,
    (task) => !includes(ids, task.value) || task.value === currentFieldValue
  );
};

export { getUniqueAvailableTasks };
