
  const initialState = { tool: [], thickness: '30', color: '#fff', data: null, strokeData: null }
  
  
   export const actionReducer = (state = initialState, action) => {
              switch(action.type) {
                case 'GET_SHAPE':
                  return{
                    ...state,
                    tool: action.payload.tool
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