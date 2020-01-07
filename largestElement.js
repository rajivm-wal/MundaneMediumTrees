var list = [1, 2, 3, 4, 5, 6];

function largest(_list) {
  var l = _list[0];
  for (i = 0; i < _list.length; i++) {
    if (_list[i] > l)
      l = _list[i];
  }
  return l;
}

function testLargest() {
  return largest(list);
}

module.exports = { testLargest }
