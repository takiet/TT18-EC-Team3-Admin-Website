import moment from "moment";
export const checkFocus = (
  pathName: string,
  path: string,
  isExact: boolean = true
): boolean => {
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
  window.location.replace("/login");
  window.localStorage.clear();
};

// export const logout = () => {
//   window.location.replace('/login');
//   localStorage.removeItem(EToken.TokenJobs);
// };

// export const objToQuery = (obj: any): string => {
//   // if (!obj) return "";

//   // var query = [];

//   // for (var prop in obj) {
//   //   if (obj.hasOwnProperty(prop)) {
//   //     query.push( encodeURIComponent(obj) + '=' + encodeURIComponent(obj[prop]));
//   //   }
//   // }
//   // return "?" + query.join("&");
// };

export const defaultParamsAPI = (
  currentpage?: number | string,
  limit?: number | string
) => {
  return {
    currentpage: currentpage ? currentpage.toString() : 0,
    currentdate: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    limit: limit ? limit.toString() : 10,
  };
};

export const formatTimeVideo = (
  timeInSeconds: number
): { minutes: string; seconds: string } => {
  const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
};

export const cumulativeOffsetElement = (
  element: any
): { top: number; left: number } => {
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
  timeout: number
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
  return "ontouchstart" in window;
};

export const convertDayFormat = (date: Date | string) => {
  const dayOfWeek = moment(date).weekday() + 1;
  return `${dayOfWeek === 1 ? "CN" : `T${dayOfWeek}`} ${moment(date).format(
    "DD/MM/YYYY"
  )}`;
};

export const convertDayFromServer = (date: Date | string) => {
  return `${moment(date).format("DD/MM/YYYY")}`;
};

// export const changeDayFormatForm = (date: string) => {
//   const tokens = date.split('/');
//   const newDate = tokens[1] + '/' + tokens[0] + '/' + tokens[2];
//   return newDate;
// };

export const changeDayFormatToServer = (date: string): Date => {
  const tokens = date.split("/");
  return new Date(
    Number.parseInt(tokens[2]),
    Number.parseInt(tokens[1]) - 1,
    Number.parseInt(tokens[0])
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
  return moment(time).format("DD/MM/YYYY");
};

export const isAuth = () => {
  if (!localStorage.getItem("localStorage@access")) {
    return true;
  }
  return false;
};
