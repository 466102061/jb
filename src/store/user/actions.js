import {
	USER_NAME,
	USER_PHONE
} from './mutationType'

export function setUserName ({commit}, name) {
	commit(USER_NAME, name)
}

export function setUserPhone ({commit}, phone) {
	commit(USER_PHONE, phone)
}
