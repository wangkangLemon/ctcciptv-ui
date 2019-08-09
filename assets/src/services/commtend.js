
// import * as http from './http'
import * as api from './api'
import config from '../utils/config'
const urlPre = config.apiHost + '/tv'
class AdminService {
  //导航列表接口
  getNav(params) {
    let newUrl = urlPre + '/nav/v1'
    return api.get(newUrl, params).then(ret => {
      return ret.data
    })
  }
  //首页信息列表
  homepage(params) {
    let newUrl = urlPre + '/index/v1'
    return api.get(newUrl, params).then(ret => {
      return ret.data
    })
  }
  //栏目课程列表
  categoryCourseList(params) {
    let newUrl = urlPre + '/categorycourse/v1'
    return api.get(newUrl, params).then(ret => {
      return ret.data
    })
  }
  //栏目列表
  categoryList(params) {
    let newUrl = urlPre + '/categorylist/v1'
    return api.get(newUrl, params).then(ret => {
      return ret.data
    })
  }
  //课程信息
  courseInfo(params) {
    let newUrl = urlPre + '/courseinfo/v1'
    return api.get(newUrl, params).then(ret => {
      return ret.data
    })
  }
  //栏目全部课程
  categoryallcourseList(params) {
    let newUrl = urlPre + '/categoryallcourse/v1'
    return api.get(newUrl, params).then(ret => {
      return ret.data
    })
  }
  courseList(params) {
    let newUrl = urlPre + '/courselist/v1'
    return api.get(newUrl, params).then(ret => {
      return ret.data
    })
  }
}
export default new AdminService()