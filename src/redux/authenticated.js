export const AUTHENTICATE = 'AUTHENTICATE';
export const SIGN_OUT = 'SIGN_OUT';

const authenticatedReducer = (state = false, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return true;
		case SIGN_OUT:
			return false;
		default:
			return state;
	}
}

export default authenticatedReducer;
