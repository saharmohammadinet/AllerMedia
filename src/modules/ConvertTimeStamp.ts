import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

export function convertTimeStamp(time: number): string {
  TimeAgo.addDefaultLocale(en);
  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");
  const date = new Date(time * 1000);
  return timeAgo.format(date);
}
