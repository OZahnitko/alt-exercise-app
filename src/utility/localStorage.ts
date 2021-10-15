import localForage from "localforage";
import { DateTime } from "luxon";

import {
  Exercise,
  BaseLocalStorageData,
  LocalStorageData,
  User,
} from "../contracts";
import data from "../data/data.json";

export const checkLocalStorageData = async () => {
  const localStorageData = await fetchLocalStorageData();

  if (!localStorageData) {
    await setLocalStorageData(data);
  } else {
    if (
      DateTime.fromISO(localStorageData.lastEdited) <
      DateTime.fromISO(data.lastEdited)
    ) {
      await setLocalStorageData({
        ...localStorageData,
        exercises: data.exercises,
        lastEdited: data.lastEdited,
      });
    }
  }
};

export const fetchLocalStorageData =
  async (): Promise<LocalStorageData | null> => localForage.getItem("data");

export const setLocalStorageData = async (
  data: BaseLocalStorageData
): Promise<void> => {
  await localForage.setItem("data", data);
};

export const fetchLocalStorageExercises = async (): Promise<Exercise[]> => {
  const data: { exercises: Exercise[] } | null = await localForage.getItem(
    "data"
  );

  return data?.exercises || [];
};

export const fetchLocalStorageUsername = async (): Promise<
  string | undefined
> => {
  const data: { username: string } | null = await localForage.getItem("data");
  return data?.username;
};

export const setLocalStorageUsername = async (
  username: User.Username
): Promise<void> => {
  const localStorageData = await fetchLocalStorageData();

  await localForage.setItem("data", { ...localStorageData, username });
};
