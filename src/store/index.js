import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import { DEBUG } from './../config/index.js'


Vue.use(Vuex)
//console.log('vue-store:',process.env,DEBUG)
export default new Vuex.Store({
	strict : DEBUG,
	modules : {
		user
	}
})
