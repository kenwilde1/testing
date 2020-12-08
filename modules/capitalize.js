const capitalize = (string) => {
  const firstLetter = string[0].toUpperCase();
  const restOfString = string.slice(1).toLowerCase();
  return firstLetter + restOfString;
};

export default capitalize;
