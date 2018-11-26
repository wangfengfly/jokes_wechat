// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  var Fly = require("flyio/dist/npm/wx")
  var fly = new Fly
  var jokes = {}
  fly.get('m.haha.sogou.com/getMore/index?key=text&page=1')
  .then(function (response) {
     jokes = response
  })
  .catch(function (error) {
    console.log(error)
  })

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    jokes: jokes
  }
}