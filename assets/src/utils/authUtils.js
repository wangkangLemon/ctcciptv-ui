const KEY_AUTHTOKEN='KEY_AUTH_UTILS_TOKEN' //jwt的token
const KEY_AUTHUSERINFO='KEY_AUTH_UTILS_USERINFO'//用户信息
const KEY_AUTHTOKEN_TTL = 3600 // jwt的token 有效期，过期作废，一个小时
const KEY_PUSHDOCUMENT='KEY_PUSHDOCUMENT'//跳转点击的节点
const KEY_NAVCURRENT='KEY_NAVCURRENT'//记录导航焦点
//身份凭证操作
let authUtils={
    getAuthToken(){
        let str=localStorage.getItem(KEY_AUTHTOKEN)
        if(str==''){
           return null
        }
        try{
            str=JSON.parse(str)
            if(str && str.ttl>Date.now()){
                return str.token
            }
            return null
        }catch(e){
            return null
        }
    },
    setAuthToken(token){
        localStorage.setItem(KEY_AUTHTOKEN,JSON.stringify({token:token,ttl:Date.now()+KEY_AUTHTOKEN_TTL*1000}))
    },
    //获取跳转点击的节点
    getDownCurrent(){
       let str=localStorage.getItem(KEY_PUSHDOCUMENT) 
       return JSON.parse(str);
    },
    //存储跳转点击的节点
    setDownCurrent(document){
        localStorage.setItem(KEY_PUSHDOCUMENT,JSON.stringify(document))
    },
    //存储导航的焦点
    setNavCurrent(document){
        localStorage.setItem(KEY_NAVCURRENT,JSON.stringify(document))
    },
    //获取导航存储的焦点
    getNavCurrent(){
        let str=localStorage.getItem(KEY_NAVCURRENT)
        return JSON.parse(str);
    },
    //清除存储
    clearCurrent(key){
        localStorage.removeItem(key)
    }
}
export default authUtils

