var http = require('superagent')
var base = require('./base').default
var url = base.root + "auth/"
var urlUser = base.root + "user/"


export default {
    async login(username, password) {
        var resp = await http.post(url + 'login').query({
            username: username,
            password: password,
            src: 'web'
        })
		console.log(resp);
        if (resp.body && resp.body.status == 1000) {
            return resp.body.data
        } else {
            return resp.body.status
        }
    },

    async logout() {
        var resp = await http.post(url + 'logout');
        return null
    },

    async register(username, password) {
        var resp = await http.post(urlUser + 'register').query({
            username: username,
            password: password
        })
        if (resp.body) {
            if (resp.body.status == 1000)
                return null
            else if (resp.body.status == 1011) {
                return '用户名已被占用'
            }
        } else {
            return resp.msg
        }
    },

    async changPsw(oldPassword, password) {
        var resp = await http.post(urlUser + 'password').query({
            oldpassword: oldPassword,
            password: password
        })
        if (resp.body) {
            if (resp.body.status == 1000)
                return null
            else if (resp.body.status == 1011)
                return '用户名已被占用'
            else if (resp.body.status == 1026)
                return '旧密码输入错误'
        } else {
            return resp.msg
        }
    }
}