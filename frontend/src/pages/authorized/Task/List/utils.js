import { forEach, groupBy, map, split, toInteger, uniqueId } from 'lodash';
import { DATE_FORMAT, TIME_FORMAT } from 'consts/dateFormats';
import { formatDate } from 'utils/dateUtils';

const getMappedTasks = (tasks) => {
  const groupedByDate = groupBy(tasks, (task) =>
    formatDate(task.datetime, DATE_FORMAT)
  );

  const result = [];
  forEach(groupedByDate, (value, key) => {
    const [day, month, year] = split(key, '-');
    const tasks = map(value, (task) => ({
      ...task,
      time: formatDate(task.datetime, TIME_FORMAT),
    }));

    result.push({
      id: uniqueId(),
      date: new Date(toInteger(year), toInteger(month) - 1, toInteger(day) - 1),
      tasks,
    });
  });

  return result;
};

export { getMappedTasks };
