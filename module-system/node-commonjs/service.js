function add(a,b) {
  return a+b;
}
function say(name) {
  return 'Hello ' + name + '!';
}

// exports.add = add;
// exports.say = say;

module.exports = {
  add,
  say
}
