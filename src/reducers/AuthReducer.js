const INITIAL_STATE = {user: null, isNotify:false , loading: false, message: '' , success:false };

export default (state = INITIAL_STATE, action) => {
	switch (action.type){
		case ('login_user') :
			return ({...state, loading: true});
		case ('login_failed') :
			return ({...state, loading: false , message: action.error.message, success: action.error.success });
		case ('login_success') :
			return ({...state, loading: false, user: action.data , isNotify:action.data.data.isNotify , message: action.data.message , success: action.data.success});
		case ('active_account') :
			return ({...state, loading: false, user: action.data , isNotify:action.data.data.isNotify , message: action.data.message , success: action.data.success});
		case ('profile_data'):
			return ({...state, loading: false, user: action.data , isNotify:action.data.data.isNotify , message: action.data.message , success: action.data.success});
		case ('update_profile') :
			return ({...state, loading: false, user: action , message: action.data.message , success: action.data.success});
		case ('isNotify') :
			return ({...state, isNotify: !state.isNotify});
		case ('user_logout') :
			return ({...state, user: null});
		case ('register') :
			return ({...state, loading: false, message: action.payload.message});
		case ('temp_auth') :
			return ({...state, user: null});
		default :
			return state;
	}

}
