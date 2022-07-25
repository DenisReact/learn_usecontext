
const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "setLogin":
        return {
          ...state,
          login: action.payload
        }  
      default:
        return state
    }
}

export default reducer