 export const getActions = ( tool ) => ({
              type: 'GET_TOOL',
              payload: { tool }
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
   });

   export const getStrokeData = ( stroke ) => ({
    type: 'GET_STROKE_PROPERTIES',
    payload: { stroke }
   })