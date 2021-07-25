
const ArraySlicer = (arr) => {
  if (arr == null) return [];
  let slicedArr = [];
  let buffer = [];
  let counter = 0;
  arr.forEach((item, index) => {
    buffer.push(item);
    if (buffer.length % 5 === 0) {
      slicedArr.push(buffer);
      buffer = [];
      counter += 5;
    }
  });
  if (arr.length % 5 !== 0) slicedArr.push(arr.slice(counter));
  return slicedArr;
};

export default ArraySlicer;
