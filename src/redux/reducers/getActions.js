
  const initialState = { tool: [], thickness: '30', color: '#fff', data: null, strokeData: null, coordinates: [] }
  
  
   export const actionReducer = (state = initialState, action) => {
              switch(action.type) {
                case 'GET_TOOL':
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
                case 'GET_STROKE_PROPERTIES':
                  return {
                    ...state, 
                    strokeData: action.payload.stroke
                  }

                  case 'GET_COORDINATES':
                    return {
                      ...state,
                      coordinates: action.payload.coords
                    }
                default: 
                  return state;
              }
              
   }