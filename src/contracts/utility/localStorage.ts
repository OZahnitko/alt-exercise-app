import { Exercise } from "..";

export interface BaseLocalStorageData {
  exercises: Exercise[];
  lastEdited: string;
}

export interface LocalStorageData extends BaseLocalStorageData {
  username?: string;
}
