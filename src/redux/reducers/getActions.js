
  const initialState = { shape: [], thickness: '30', color: '#fff', data:[] }
  
 
   export const actionReducer = (state = initialState, action) => {
              switch(action.type) {
                case 'GET_SHAPE':
                  return{
                    ...state,
                    shape: action.payload.shape
                  };
              
               case 'GET_THICKNESS' :
                return {
                  ...state,
                  thickness: action.payload.thickness
                }
                 
                case 'GET_COLOR' : 
                 return {
                  ...state,
                  color: action.payload.color
                 }
                
                case 'GET_DATA':
                  return {
                    ...state,
                    data: action.payload.circles
                  }

                default: 
                  return state;
              }
              
   }