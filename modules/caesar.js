const caesar = (string, shift) => {
  // Ensures the shift is between 0-25
  let calculatedShift;
  shift > 25 ? (calculatedShift = shift % 26) : (calculatedShift = shift);

  let encryptedString = "";
  for (let i = 0; i < string.length; i++) {
    let alphaPosition = string.charCodeAt(i) - 97;
    let encryptedLetter = String.fromCharCode(
      97 + ((alphaPosition + calculatedShift) % 26)
    );
    encryptedString += encryptedLetter;
  }
  return encryptedString;
};

export default caesar;
