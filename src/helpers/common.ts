
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

// export const logout = () => {
//   window.location.replace('/login');
//   localStorage.removeItem(EToken.TokenJobs);
// };

