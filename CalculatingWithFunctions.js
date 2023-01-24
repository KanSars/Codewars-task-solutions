function zero(operation) {
  const value = 0;
  if (typeof (operation) === 'undefined') return value;
  return operation(value)
}
function one(operation) {
  const value = 1;
  if (typeof (operation) === 'undefined') return value;
  return operation(value)
}
function two(operation) {
  const value = 2;
  if (typeof (operation) === 'undefined') return value;
  return operation(value)
}
function three(operation) {
  const value = 3;
  if (typeof (operation) === 'undefined') return value;
  return operation(value)
}
function four(operation) {
  const value = 4;
  if (typeof (operation) === 'undefined') return value;
  return operation(value)
}
function five(operation) {
  const value = 5;
  if (typeof (operation) === 'undefined') return value;
  return operation(value)
}
function six(operation) {
  const value = 6;
  if (typeof (operation) === 'undefined') return value;
  return operation(value)
}
function seven(operation) {
  const value = 7;
  if (typeof (operation) === 'undefined') return value;
  return operation(value)
}
function eight(operation) {
  const value = 8;
  if (typeof (operation) === 'undefined') return value;
  return operation(value)
}
function nine(operation) {
  const value = 9;
  if (typeof (operation) === 'undefined') return value;
  return operation(value)
}

function plus(x) {
  return function (y) {
    return y + x;
  }
}
function minus(x) {
  return function (y) {
    return y - x;
  }
}
function times(x) {
  return function (y) {
    return y * x;
  }
}
function dividedBy(x) {
  return function (y) {
    return Math.floor(y / x);
  }
}