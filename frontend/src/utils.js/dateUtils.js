import format from 'date-fns/format';

const formatDate = (datetime, dateFormat) =>
  format(new Date(datetime), dateFormat);

export { formatDate };
