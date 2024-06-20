import dayjs, { Dayjs } from "dayjs";

export const formatDate = (date: string) => {
  return dayjs(date).format(`YYYY MMM DD HH:mm:ss`);
};

// Import the 'fromNow' method directly
import "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const dateFromNow = (date: Dayjs) => {
  dayjs.locale("en");
  const currentDate = dayjs();
  const providedDate = dayjs(date);

  const diff = providedDate.diff(currentDate, "day");

  if (diff > 0) {
    return providedDate.fromNow(); // Date is in future, display in "from now" format
  } else {
    return providedDate.from(currentDate); // Date is in past, display in "ago" format
  }
  // return dayjs().to(date);
};
