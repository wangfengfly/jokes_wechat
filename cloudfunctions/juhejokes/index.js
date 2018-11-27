// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

var request = require('sync-request')

// 云函数入口函数
exports.main = (event, context) => {
  const wxContext = cloud.getWXContext()

  var res = request('GET', 'http://m.haha.sogou.com/getMore/index?key=text&page=1')
  var jokes = JSON.parse(res.getBody())

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    jokes: jokes
  }


}