/*
* 用户操作
* */
const{query}=require('../utils/async-db')


module.exports = {
	async newUser(){},
	// async newUsers(){},
	//查-返回
	async getAllUsers(ctx){
		let selectAllSql='SELECT * FROM user',
			userDatas=await query(selectAllSql)
		ctx.body={
			code:200,
			data: userDatas,
			message:'查询成功'
		}
		// let sql='SELECT * FROM user'
		// //执行添加
		// console.log(sql)
		// let _ctx=ctx
		// return new Promise((resolve,reject) =>{
		// 	connectionPool.getConnection((err,connection)=>{
		// 		if (err) throw err;
		// 		connection.query(sql,(err,row,fields)=>{
		// 			// 如果有错误就抛出
		// 			if (err) throw err;
		// 			console.log(row)
		// 			_ctx.body={
		// 				status:true,
		// 				data:row,
		// 				message:'查询成功',
		// 			}
		// 			connection.release();
		// 			resolve()
		// 		})
		// 	})
		// }).then(()=>{
		// 	console.log('查询成功')
		// })
	},
	// 增
	async addUser(ctx){
		let  addSql = 'INSERT INTO user(name) VALUES(?)',
			 param = ctx.request.body
		await query(addSql,param.name)
		ctx.body={
			code:200,
			message:"添加成功"
		}
		// return new Promise((resolve,reject)=>{
		// 	connectionPool.getConnection((err,connection)=>{
		// 		connection.query(addSql,param.name,(err,row)=>{
		// 			if(err){
		// 				console.log('error......');
		// 				return
		// 			}
		// 			ctx.body={
		// 				status:true,
		// 				message:'插入成功',
		// 			}
		// 			connection.release();
		// 			resolve()
		// 		})
		// 	})
		//
		// }).then(()=> {
		// 	console.log('....插入成功........')
		// })
	},
	//改
	async updateUserInfo(ctx){
		let updatSql='UPDATE user SET name=? WHERE id=?',
		    params=ctx.request.body
	    await query(updatSql,[params.name,params.id])
		ctx.body={
			message:'更新成功',
			code:200
		}
		// return new Promise((resolve,reject)=>{
		// 	connectionPool.getConnection((err,connection)=>{
		// 		connection.query(updatSql,[params.name,params.id],(err,data)=>{
		// 			if(err){
		// 				console.log('......update error.....')
		// 				return
		// 			}
		// 			ctx.body={
		// 				message:'更新成功',
		// 				data:data,
		// 				code:200
		// 			}
		// 			connection.release();
		// 			resolve()
		// 		})
		// 	})
		// }).then(()=>{
		// 	console.log('....更新成功........')
		// })
	},
	//删
	async deleteUserById(ctx){
		let delSql= 'DELETE FROM user where id=?',
		    delParam=ctx.request.body,
			data=await query(delSql,delParam.id)
		ctx.body={
			message:'更新成功',
			data:data,
			code:200
		}
		// return new Promise((resolve,reject)=>{
		// 	connectionPool.getConnection((err,connection)=>{
		// 		connection.query(delSql,delParam.id,(err,data)=>{
		// 			if(err){
		// 				console.log('......delete error.....')
		// 				return
		// 			}
		// 			ctx.body={
		// 				message:'删除成功',
		// 				code:200
		// 			}
		// 			connection.release();
		// 			resolve()
		// 		})
		// 	})
		//
		// }).then(()=>{
		// 	console.log('....删除成功........')
		// })
	}
}
