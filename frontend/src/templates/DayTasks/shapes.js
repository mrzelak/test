import PropTypes from 'prop-types';
import { severityShape } from 'components/TaskRow/shapes';

const taskShape = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  time: PropTypes.string,
  isDone: PropTypes.bool,
  severity: severityShape,
});

const tasksShape = PropTypes.arrayOf(taskShape);

export { tasksShape };
