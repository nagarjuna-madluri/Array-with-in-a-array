let arra = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
var newarray = [];

let startarray = (arrayValues) => {
  arrayValues.forEach((el) => {
    if (typeof el != 'object') {
      newarray.push(el);
    } else {
      startarray(el);
    }
  });
};
startarray(arra);

console.log(newarray);
