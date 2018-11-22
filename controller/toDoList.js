/*
*
* */
const{query}=require('../utils/async-db')
module.exports={
	async getAllCase(ctx){
		let sql='select * from demo.to_do_list',
			listData=await query(sql)
		ctx.body={
			message:'success',
			data:listData,
			code:200
		}
	},
	async addCase(ctx){
		let addsql='INSERT INTO to_do_list(case_name,case_status) VALUES(?,?)',
			reqParams=ctx.request.body,
			addedData=await query(addsql,[reqParams.caseName,reqParams.caseStatus])
		ctx.body={
			message:'success',
			data:addedData,
			code:200
		}
	},
	async updateCaseStatus(ctx){
		console.log(ctx.request.body)
		let updatesql='update demo.to_do_list set case_status=? where case_name=?',
			reqParams=ctx.request.body,
			updateddData=await query(updatesql,[reqParams.caseStatus,reqParams.caseName])

		ctx.body={
			message:'success',
			data:updateddData,
			code:200
		}
	},
	async delCase(ctx){
		let delsql='DELETE FROM demo.to_do_list where case_id=?',
			delParams=ctx.request.body,
			delData=await query(delsql,delParams.caseId)
		ctx.body={
			message:'success',
			data:delData,
			code:200
		}
	},
}
