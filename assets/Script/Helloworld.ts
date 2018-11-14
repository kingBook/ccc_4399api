import API4399 from "./API4399";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
	
	@property(cc.Label)
	private label:cc.Label=null;
	
	
	private _uId:string;
	
	public clickCanPlayAd(evetData:any):void{
		API4399.getInstance().canPlayAd((data:any):void=>{
			this.label.string=(" 是否可播放广告 "+ data.canPlayAd+" 剩余次数 "+data.remain)
		});
	}
	
	public playAd(evetData:any):void{
		API4399.getInstance().playAd((data:any):void=>{
			this.label.string=('代码:' + data.code + ',消息:' + data.message)
		});
	}
	
	public share(eventData:any):void{
		API4399.getInstance().share();
	}
	
	public isLogin(eventData:any):void{
		this.label.string=(API4399.getInstance().isLogin()+"");
	}
	
	public login(evetData:any):void{
		API4399.getInstance().login((data:any):void=>{
			this.label.string=('用户编号:' + data.uId + ',用户昵称:' + data.userName)
			
			this._uId=data.uId;
		});
	}
	
	public getUserAvatar(evetData:any):void{
		this.label.string=(API4399.getInstance().getUserAvatar(this._uId));
	}
}
