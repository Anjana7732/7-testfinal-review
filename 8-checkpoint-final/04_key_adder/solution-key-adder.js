/* eslint-disable no-unused-vars, no-prototype-builtins */
function keyAdder() {
  const values = Object.keys(this);
  const res = values.map(key => this[key])
    .filter(item => typeof item === 'number')
    .reduce((acc, curr) => acc + curr, 0);
  return res;
}
