export const authReducer = (state = { name: 'Harry', role: 'seller'}, action) => {
    // { type: 'LOGGED_IN_USER', payload: { name: 'Harry', role: 'Seller } }
    switch(action.type) {
      case 'LOGGED_IN_USER':
        return { ...state, ...action.payload };
      case 'LOGOUT':
        return action.payload;
      default:
        return state;
    }
  };