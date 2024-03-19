export const toProperCase = (string) => {
  if (/^[mM][cC]/.test(string)) {
    return (
      string.charAt(0).toUpperCase() +
      string.charAt(1).toLowerCase() +
      string.charAt(2).toUpperCase() +
      string.slice(3).toLowerCase()
    );
  } else if (!string) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
