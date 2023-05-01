 export const getActions = ( shape ) => ({
              type: 'GET_SHAPE',
              payload: { shape }
   });
 

   export const getThickness = ( thickness ) => ({
            type: 'GET_THICKNESS',
            payload: { thickness }
   })


   export const getColor = ( color ) => ({
       type: 'GET_COLOR',
       payload: { color }
   });


   export const getCircleData = ( circles ) => ({
      type: 'GET_DATA',
      payload: { circles }
   })