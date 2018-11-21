const Koa = require('koa')
const app = new Koa()
const router=require('../router/router')
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// const staticPath = '../static'
// app.use(Static(
// 	path.join( __dirname,  staticPath)
// ))



app
	.use(router.routes())
	.use(router.allowedMethods())

app.on('error', (err, ctx) => {
	log.error('server error', err, ctx)
})

app.listen(3000,function () {
	console.log('app is running at http://localhost:3000')
})
