import moment from 'moment';
import { EToken } from '../constants';
export const checkFocus = (pathName: string, path: string, isExact: boolean = true): boolean => {
  if (isExact) {
    if (pathName === path) {
      return true;
    } else {
      return false;
    }
  }

  return pathName.includes(path);
};

export const logout = () => {
  window.location.replace('/login');
  localStorage.removeItem(EToken.TokenJobs);
};

export const objToQuery = (obj: any): string => {
  if (!obj) return '';

  var query = [];

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      query.push(encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop]));
    }
  }

  return '?' + query.join('&');
};

export const defaultParamsAPI = (currentpage?: number | string, limit?: number | string) => {
  return {
    currentpage: currentpage ? currentpage.toString() : 0,
    currentdate: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    limit: limit ? limit.toString() : 10,
  };
};

export const formatTimeVideo = (timeInSeconds: number): { minutes: string; seconds: string } => {
  const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
};

export const cumulativeOffsetElement = (element: any): { top: number; left: number } => {
  let top = 0,
    left = 0;
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left,
  };
};

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export const detectTouchScreen = () => {
  return 'ontouchstart' in window;
};

export const convertDayFormat = (date: Date | string) => {
  const dayOfWeek = moment(date).weekday() + 1;
  return `${dayOfWeek === 1 ? 'CN' : `T${dayOfWeek}`} ${moment(date).format('DD/MM/YYYY')}`;
};

export const convertDayFromServer = (date: Date | string) => {
  return `${moment(date).format('DD/MM/YYYY')}`;
};

// export const changeDayFormatForm = (date: string) => {
//   const tokens = date.split('/');
//   const newDate = tokens[1] + '/' + tokens[0] + '/' + tokens[2];
//   return newDate;
// };

export const changeDayFormatToServer = (date: string): Date => {
  const tokens = date.split('/');
  return new Date(
    Number.parseInt(tokens[2]),
    Number.parseInt(tokens[1]) - 1,
    Number.parseInt(tokens[0]),
  );
};

export const objToFormData = (object: any): FormData => {
  let fd = new FormData();
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      fd.append(key, object[key]);
    }
  }

  return fd;
};

export const formDate = (time: any): any => {
  return moment(time).format('DD/MM/YYYY');
};

export const autocomplete = (inp: any, arr: any, func: any) => {
  var currentFocus: any;
  const id = 1;

  inp.addEventListener('input', (e: any) => {
    var [a, b, i] = e.target.value;
    const val = e.target.value;
    closeAllLists(e.target);
    if (!val) {
      return false;
    }

    currentFocus = -1;
    a = document.createElement('DIV');
    a.setAttribute('id', id + 'autocomplete-list');
    a.setAttribute('class', 'autocomplete-items');
    e.target.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
        b = document.createElement('DIV');
        b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>';
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener('click', (e: any) => {
          inp.value = e.target.getElementsByTagName('input')[0].value;
          func();
          closeAllLists(e.target);
        });
        a.appendChild(b);
      }
    }
  });

  const closeAllLists = (elmnt: any) => {
    var x: any = document.getElementsByClassName('autocomplete-items');
    for (var i = 0; i < x.length; i++) {
      x[i].parentNode.removeChild(x[i]);
    }
  };
};

export const readMore = (string?: string, length?: number): string => {
  if (string && length && string.length > length) {
    const newStirng = string.substring(0, length) + '...';
    return newStirng;
  }
  return string || '';
};

export const ConvertTextToURL = (url: any) => {
  var pattern = /^((http|https|ftp):\/\/)/;

  if (!pattern.test(url)) {
    url = 'http://' + url;
  }
  return url;
};

export const formatCurrency = (amount: string) => {
  if (amount.length === 0) return '';
  amount = amount.replace(/\./g, '');
  const result = parseFloat(amount)
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  if (result === 'NaN') return '';
  return result;
};
