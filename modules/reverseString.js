const reverseString = (string) => {
  let characterArray = [];

  for (let i = string.length - 1; i >= 0; i--) {
    characterArray.push(string[i]);
  }
  let reversedString = "";
  for (let j = 0; j < characterArray.length; j++) {
    reversedString += characterArray[j];
  }
  return reversedString;
};

export default reverseString;
