import React, { useEffect, useState } from "react";
import { ReactP5Wrapper } from 'react-p5-wrapper';
import { useDispatch, useSelector } from "react-redux";
import { getCircleData } from "../redux/actions/actions";

const Canvas = () => {
  const [state, setState] = useState([]);
  const toolSelected = useSelector(state => state.tool);
  const thickness = useSelector(state => state.thickness);
  const color = useSelector(state => state.color);
  const circleData = useSelector(state => state.data);
  
  const dispatch = useDispatch();
  let rad = 0;
  let x = 0, y = 0


  
useEffect(() => {
dispatch(getCircleData(state));
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [toolSelected])

  function sketch(p) {
   
      p.setup = () => {
         p.createCanvas(p.windowWidth ,p.windowHeight);
         p.background(0);
       };
    
       if(toolSelected) {
         p.draw = () => {
           circleData.map(circle => {
               return p.circle(circle.posX, circle.posY, circle.radius);
             });
         
         }
       }
      
         const drawCircle = () => {
           
             p.draw = () => {
                state.map(prop => {
                   return p.circle(prop.posX, prop.posY, prop.radius)
                });
             };

           p.mousePressed = () => {
              x = p.mouseX;
              y = p.mouseY;
            };
      
              p.mouseDragged = () => {
                rad += 10; 
               p.circle(x, y, rad);
              };

             p.mouseReleased = () => {
              setState([...state, { posX: x, posY: y,  radius: rad } ])
               rad = 0;
               x = 0;
               y = 0;
             }
          }
         
         
         const drawStroke = () => {  
          let x1, y1;
          //  p.draw = () => {
          //   stroke.map(str => {
          //     return p.circle(str.posX, str.posY, str.radius);
          //   })
          //  }

            p.mouseDragged = () => {
                 x1 = p.mouseX;
                 y1 = p.mouseY;
               
                 p.noStroke();
                 p.fill(color);
                 p.circle(x1, y1, thickness);
              }; 

           
       
         }

          const clearCanvas = () => {
             p.draw = () => {
              setState([]);
              p.clear();
              p.background(0);
             }
         }

         if(toolSelected === 'brush') {
             drawStroke();
         } else if( toolSelected === 'circle' ) {
             drawCircle();          
         } else if (toolSelected === 'erase') {
            clearCanvas();
         }  
  };


  return(
    <div>
        <ReactP5Wrapper sketch={sketch}/>
    </div> 
  )

}
export default Canvas;

