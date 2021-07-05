import { currDate } from './../constants';
import moment from 'moment';
import { ChangeEvent } from 'react';

export const isLeapYear = (year: any) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};

export const getFebDays = (year: any) => {
  return isLeapYear(year) ? 29 : 28;
};

export const daysOfMonth = (month: any, year: any) => {
  let first_day = new Date(year, month, 1);
  let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let arrayDays = [];

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 2; i++) {
    const timeData = {
      day: i - first_day.getDay() + 2,
      month,
      year,
    };
    arrayDays.push(timeData);
  }

  return arrayDays;
};

export const checkEqualDate = (time: Date) => {
  if (
    time.getFullYear() === currDate.getFullYear() &&
    time.getDate() === currDate.getDate() &&
    time.getMonth() === currDate.getMonth()
  ) {
    return true;
  }
  return false;
};

export const generateYearNextPerivous = (year?: number) => {
  let currYear = year || currDate.getFullYear();
  const years = [];

  for (let i = 0; i < 6; i++) {
    years.push(currYear + i);
    years.unshift(currYear - i);
  }

  return years;
};

export const checkDaysOfMonth = (day: any, month: any, year: any) => {
  let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (day > days_of_month[month - 1]) return false;
  return true;
};
export const translateDay = (date: Date) => {
  const day = moment(date).format('dddd');

  if (day === 'Monday') {
    return 'Thứ Hai';
  }
  if (day === 'Tuesday') {
    return 'Thứ Ba';
  }
  if (day === 'Wednesday') {
    return 'Thứ Tư';
  }
  if (day === 'Thursday') {
    return 'Thứ Năm';
  }
  if (day === 'Friday') {
    return 'Thứ Sáu';
  }
  if (day === 'Saturday') {
    return 'Thứ Bảy';
  }
  if (day === 'Sunday') {
    return 'Chủ Nhật';
  }
  return day;
};

export const has31Days = (month: number) => {
  if (month === 1) {
    return true;
  }
  if (month === 3) {
    return true;
  }
  if (month === 5) {
    return true;
  }
  if (month === 7) {
    return true;
  }
  if (month === 8) {
    return true;
  }
  if (month === 10) {
    return true;
  }
  if (month === 12) {
    return true;
  }

  return false;
};

export const regDate = new RegExp('^[0-9]+$');

// const getDate = (value: string): number => {
//   const date = Number.parseInt(value.substring(0, 2));
//   return date;
// };
// const getMonth = (value: string): number => {
//   const month = Number.parseInt(value.substring(3, 5));
//   return month;
// };
// const getYear = (value: string): number => {
//   const year = Number.parseInt(value.substring(6, 10));
//   return year;
// };
export const checkDateInput = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  if (!value) {
    return;
  }
  const splitValue = value.split('/');

  if (!splitValue[0].includes('_')) {
    const date = parseInt(splitValue[0]);
    if (date > 31) {
      e.target.value = '31/';
      return;
    }
  }

  if (!splitValue[1].includes('_')) {
    const month = parseInt(splitValue[1]);
    const date = parseInt(splitValue[0]);

    const sliceDate = value.slice(0, 3);
    if (month === 2 && date > 29) {
      e.target.value = `29/0${month}/`;
      return;
    }
    if (!has31Days(month) && date > 30) {
      if (month < 10) {
        e.target.value = `30/0${month}/`;
      } else {
        e.target.value = `30/${month}/`;
      }
    }
    if (month > 12) {
      e.target.value = sliceDate + `12/`;
    }
  }

  if (!splitValue[2].includes('_')) {
    const month = parseInt(splitValue[1]);
    const date = parseInt(splitValue[0]);
    const year = parseInt(splitValue[2]);

    if (isLeapYear(year) && month === 2 && date > 29) {
      e.target.value = `29/02/${year}`;
    }
    if (!isLeapYear(year) && month === 2 && date > 28) {
      e.target.value = `28/02/${year}`;
    }
  }
};

export const checkTimeInput = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  if (!value) {
    return;
  }
  const valueSplit = value.split(':');

  if (!valueSplit[0].includes('_')) {
    const hour = Number.parseInt(valueSplit[0]);
    if (hour > 23) {
      e.target.value = '23:';
      return;
    }
  }

  if (!valueSplit[1].includes('_')) {
    const munite = Number.parseInt(valueSplit[1]);
    if (munite > 58) {
      const muniteSlice = value.substring(0, 3);
      e.target.value = muniteSlice + '59';
    }
  }
};

export const calcDistanceDateTime = (time: string) => {
  const prevTime = moment(time);
  const today = moment(new Date());
  const diff = today.diff(prevTime, 'minutes');

  var numdays = Math.floor(diff / 1440);
  var numhours = Math.floor(diff / 60);
  var numminutes = diff;

  if (numdays) return numdays + ' ngày trước';
  else if (numhours) return numhours + ' giờ trước';
  else if (numminutes) return numminutes + ' phút trước';
  else return 'Bây giờ';
};

export const fromNowTranslation = (date = moment().fromNow(), now: any) => {
  let result = moment(date).from(moment(now));

  let output = '';
  if (result.indexOf('a few seconds') >= 0 || result.indexOf('in a minute') >= 0) {
    output = 'Vài giây trước';
  }

  if (result.indexOf('a minute ago') >= 0) output = result.replace('a minute ago', '1 phút trước');

  if (result.indexOf('minutes ago') >= 0) output = result.replace('minutes ago', 'phút trước');

  if (result.indexOf('an hour ago') >= 0) output = result.replace('an hour ago', '1 giờ trước');

  if (result.indexOf('hours ago') >= 0) output = result.replace('hours ago', 'giờ trước');

  if (result.indexOf('a day ago') >= 0) output = result.replace('a day ago', 'hôm qua');

  if (result.indexOf('days ago') >= 0) output = result.replace('days ago', 'ngày trước');

  if (result.indexOf('a month ago') >= 0) output = result.replace('a month ago', '1 tháng trước');

  if (result.indexOf('months ago') >= 0) output = result.replace('months ago', 'tháng trước');

  return output;
};
