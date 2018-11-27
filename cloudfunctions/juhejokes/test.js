var request = require('sync-request')

var res = request('GET', 'http://m.haha.sogou.com/getMore/index?key=text&page=1')
var jokes = JSON.parse(res.getBody())

console.log(jokes)
