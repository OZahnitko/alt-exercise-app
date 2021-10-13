import { DateTime } from "luxon";
export const getCurrentWeek = (currentDate: string) => {
  const startOfWeek = DateTime.fromISO(currentDate).startOf("week").toISO();

  return Array.from({ length: 7 }).map((_, index) =>
    DateTime.fromISO(startOfWeek).plus({ days: index }).toISO()
  );
};
