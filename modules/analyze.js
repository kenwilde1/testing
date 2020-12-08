const analyze = (arr) => {
  const avg = (array) => {
    let sum = arr.reduce((cur, prev) => cur + prev, 0);
    let average = sum / arr.length;
    return average;
  };

  const object = {
    average: avg(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  console.log(object);
  return object;
};

export default analyze;
