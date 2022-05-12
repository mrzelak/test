import addDays from 'date-fns/addDays';
import isToday from 'date-fns/isToday';
import { DATE_FORMAT } from 'consts/dateFormats';
import { formatDate } from 'utils/dateUtils';

const getDateText = (dateString) => {
  const date = new Date(dateString);
  if (isToday(date)) {
    return 'Dzisiaj';
  }

  if (isToday(addDays(date, -1))) {
    return 'Jutro';
  }

  return formatDate(date, DATE_FORMAT);
};

export { getDateText };
