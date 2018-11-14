const {ccclass, property} = cc._decorator;

@ccclass
export default class API4399{
	private h5api:any=(<any>window).h5api;
	
	
	/**
	 * 获得是否可以播放广告及剩余次数
	 * @param {func} callback function(data:any):void 回调函数
	 * @return boolean 是否可播放
	 */
	public canPlayAd(callback:Function):Boolean{
		/*function callback(data) {
			console.log("是否可播放广告", data.canPlayAd, "剩余次数", data.remain)
		}*/
		return this.h5api.canPlayAd(callback);
	}
	/**
	 * 播放全屏广告
	 * @param callback function(data:any):void 播放广告时的广告状态回调函数
	 */
	public playAd(callback:Function):void{
		/*function callback(data){
			console.log('代码:' + data.code + ',消息:' + data.message)
			if(data.code === 10000){
				console.log('开始播放')
			} else if(data.code === 10001){
				console.log('播放结束')
			} else {
				console.log('广告异常')
			}
		}*/
		this.h5api.playAd(callback);
	}
	
	
	
	/**
	 * 调用分享
	 */
	public share():void{
		this.h5api.share();
	}
	
	
	/**
	 * 是否登录
	 */
	public isLogin():boolean{
		return this.h5api.isLogin();
	}
	/**
	 * 打开用户登录面板
	 * @param {func} callback function(data:any):void 回调函数
	 */
	public login(callback:Function):void{
		/*function(data) {
			data = {
				uId: 1234567, // 用户编号
				userName: '昵称', // 用户昵称
			}
		}*/
		this.h5api.login(callback);
	}
	/**
	 * 获得用户头像地址，高宽为120*120像素
	 * @param {String} uid 用户编号
	 */
	public getUserAvatar(uid:string):string{
		return this.h5api.getUserAvatar(uid);
	}
	/**
	 * 获得用户小头像地址，高宽为48*48像素
	 * @param {String} uid 用户编号
	 */
	public getUserSmallAvatar(uid:string):string{
		return this.h5api.getUserSmallAvatar(uid)
	}
	/**
	 * 获得用户大头像地址，高宽为200*200像素
	 * @param {String} uid 用户编号
	 */
	public getUserBigAvatar(uid:string):string{
		return this.h5api.getUserBigAvatar(uid);
	}
	
	
	
	/**
	 * 展示排行榜列表面板
	 */
	public showRanking():void{
		this.h5api.showRanking();
	}
	/**
	 * 获得排行榜排名列表
	 * @param {func} callback function(data:any):void 回调函数
	 * @param {int} page 页码 从1开始（选填，默认为1）
	 * @param {int} step 每页条数（选填，默认为10）
	 */
	public getRanking(callback:Function,page:number=1,step:number=10):void{
		/*function(data) {
			data = {
			code: 10000, // 10000代表获取成功，10001为获取失败
			data: {
				currentPage: 0, // 当前页码，从0开始
				totalPage: 50, // 总页数
				hasNext: true, // 是否还有下一页
				list: [
				{
					uId: 1234567, // 用户编号
					userName: '昵称', // 用户昵称
					rank: 1, // 当前的排名 -1为未进入排行榜（排行榜只统计前500名）
					score: 100 // 当前的分数
				},
				///...
				]
			}
			} 
		}*/
		this.h5api.getRanking(callback,page,step);
	}
	/**
	 * 提交玩家分数到排行榜 PS：该方法强制要求账号登录
	 * @param {int} score 分数
	 * @param {func} callback function(data:any):void 回调函数
	 */
	public submitRanking(score:number,callback:Function):void{
		/*function(data) {
			data = {
				code: 10000, // 10000代表提交成功，10001为提交失败
				my: { // 当前用户信息
					uid: 1234567, // 用户编号
					userName: '用户昵称'// 用户昵称
				},
				history: { // 分数提交后的历史最好成绩
					rank: -1, // 历史最好分数的排名 -1为未进入排行榜（排行榜只统计前500名）
					score: 0 // 历史最好分数
				}
			} 
		}*/
		this.h5api.submitRanking(score,callback);
	}
	
	
	/**
	 * 获取当前玩家的排名 PS：该方法强制要求账号登录
	 * @param {func} callback function(data:any):void 回调函数
	 */
	public getMyRanking(callback:Function):void{
		/*function(data) {
			data = {
				code: 10000, // 10000代表获取成功，10001为获取失败
				data: {
					uId: 1234567, // 用户编号
					userName: '昵称', // 用户昵称
					rank: 1, // 当前的排名 -1为未进入排行榜（排行榜只统计前500名）
					score: 100 // 当前的分数
				}
			} 
		}*/
		this.h5api.getMyRanking(callback);
	}
	/**
	 * 获得我排名附近的排名列表 PS：该方法强制要求账号登录。
	 * @param {func} callback function(data:any):void 回调函数
	 * @param {int} step 需要条数（选填，默认为10）
	 */
	public getNearRanking(callback:Function,step:number=10):void{
		/*function(data) {
			data = {
				code: 10000, // 10000代表获取成功，10001为获取失败
				data: {
					// 排行榜只统计前500名，当前玩家没有进入排行榜时将返回空数组[]
					// 排行榜排名总数不足所需条数时返回当前所有排名
					// 当前玩家的排名将尽量居中，例如：
					// 玩家排名第3名，返回第1~10名数据
					// 玩家排名第10名，返回第5~14名数据
					// 玩家排名第499名，返回第490~500名数据
					list: [
					{
						uId: 1234567, // 用户编号
						userName: '昵称', // 用户昵称
						isMe: 1, // 1为当前玩家，否则为其他玩家
						rank: 1, // 当前的排名
						score: 100 // 当前的分数
					},
					//...
					]
				}
			} 
		}*/
		this.h5api.getNearRanking(callback,step);
	}
	
	private static _instance:API4399=null;
	public static getInstance():API4399{
		if(API4399._instance==null){
			API4399._instance=new API4399();
		}
		return API4399._instance;
	}
	
}
