import {
	USER_NAME,
	USER_PHONE
} from './mutationType'

export default {
	[USER_NAME] (state, name) {
		state.userInfo.name = name
	},
	[USER_PHONE] (state, phone) {
		state.userInfo.phone = phone
	}
}
