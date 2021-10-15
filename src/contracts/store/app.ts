export declare namespace App {
  export interface AppState {
    currentDate: string;
    initializing: Initializing;
    selectedDate: SelectedDate;
  }

  export type Initializing = boolean;

  export type SelectedDate = string;
}
