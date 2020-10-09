import Util from 'util'

class Statistic {
  getHomeCount() {
    return Util.request({
      type: 'get',
      url: '/api/statistic/count'
    })
  }
}

export default Statistic
