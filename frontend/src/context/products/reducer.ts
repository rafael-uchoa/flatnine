export default (state: any, action: any) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
