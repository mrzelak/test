import PropTypes from 'prop-types';
import { tasksShape } from 'templates/DayTasks/shapes';

const tasksWithDateShape = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    tasks: tasksShape,
  })
);

export { tasksWithDateShape };
