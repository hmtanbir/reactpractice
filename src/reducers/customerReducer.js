const defaultState = {
  customers: [],
  customer:{
    id: '',
    name:'',
    city: ''
  },
  loading: false

}

export default (state = defaultState, action={}) => {
  switch (action.type){
    case 'FETCH_CUSTOMERS_PENDING':
    {
      return {
        ...state,
        loading: false
      }
    }

    case 'FETCH_CUSTOMERS_REJECTED':
    {
      console.log(action.payload.data)
      return {
        ...state,        
        loading: false
      }
    }

    case 'FETCH_CUSTOMERS_FULFILLED':
    {
      return {
        ...state,
        loading: false,
        customers: action.payload.data
      }
    }

    default:
      return state;
  }
}
