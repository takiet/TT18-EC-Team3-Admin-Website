export enum EventListener {
  click = 'click',
  touchend = 'touchend',
  scroll = 'scroll',
  input = 'input',
  pause = 'pause',
  play = 'play',
}

export const monthNames = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
];
export let currDate = new Date();

export enum Ecolors {
  greenColor = '#00ffbc',
}

export enum EToken {
  TokenJobs = 'localStorage@TOKEN_JOBS',
}

export enum EFormtDate {
  paramsFormat = 'YYYY-MM-DD HH:mm:ss',
}

export const regDateInput = /^[0-9/]+$/;

export enum Elimit {
  COMMON_LIMIT = 30,
  JOBLIST = 3,
  EXPIRED_JOB_LIST = 5,
  JOB_LIMIT = 5,
}

export enum FieldInput {
  EMAIL = 'email',
  PASSWORD = 'password',
}


