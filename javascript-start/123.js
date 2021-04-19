function isFirstLoad () {
  var _list = []
  return function (id) {
    if(_list.indexOf(id)<0){
      _list.push(id)
      return true
    } else {
      return false
    }

  }

}

var inquery = new isFirstLoad()

console.log(inquery(1))
console.log(inquery(2))
console.log(inquery(1))
