let initialState = {
    lunchOrDinner : [],
    business : [],
    modalVisible: false
  }
  
  const kmpReducer = (state = initialState, action)=>{
    if (action.type==='SET_STORE_WITH_DATA_CATEGORY1') {
      return {
        ...state,
        lunchOrDinner: state.lunchOrDinner.concat(action.payload)
      }
    }
    if (action.type==='SET_STORE_WITH_DATA_BUSSINESS') {
        console.log(action.payload)
        return {
          ...state,
          business: state.business.concat(action.payload)
        }
    }
    if (action.type==='SET_STATE_MODAL') {
        return {
          ...state,
          modalVisible: true
        }
    }
    else {
      return {
        ...state
      }
    }
  }
  export default kmpReducer