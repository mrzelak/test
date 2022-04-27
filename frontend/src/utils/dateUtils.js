import format from 'date-fns/format';

const formatDate = (datetime, dateFormat) => {
  if (!datetime) {
    return '-';
  }

  return format(new Date(datetime), dateFormat);
};

export { formatDate };
