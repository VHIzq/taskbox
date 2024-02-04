export interface Task {
  id?: string;
  title?: string;
  state?: string;
}

export interface ActionsData {
  onPinTask: any;
  onArchiveTask: any;
}