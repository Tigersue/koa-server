const Router =require('koa-router')
const router =new Router()
const user = require('../controller/user')


//查询所有用户
router.get('/getAllUsers',user.getAllUsers)
//增加一条用户数据
router.post('/addUser',user.addUser)
//删除一条数据
router.post('/deleteUserById',user.deleteUserById)
// 更改一条数据
router.post('/updateUserInfo',user.updateUserInfo)






module.exports = router
