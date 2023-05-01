import React from "react";
import { ReactP5Wrapper } from 'react-p5-wrapper';
import { useDispatch, useSelector } from "react-redux";
import { getCircleData } from "../redux/actions/actions";

const Canvas = () => {
  const shapeSelected = useSelector(state => state.shape);
  const thickness = useSelector(state => state.thickness);
  const color = useSelector(state => state.color);

  let rad = 0;
  let x = 0, y = 0;
  let circProps = [];



  function sketch(p) {
   
      p.setup = () => {
         p.createCanvas(p.windowWidth ,p.windowHeight);
         p.background(0);
       };
    
       const drawCircle = () => {
          
         p.draw = () => {
              circProps.map(prop => {
                  return p.circle(prop.posX, prop.posY, prop.radius)
               })
             }

           p.mousePressed = () => {
              x = p.mouseX;
              y = p.mouseY;
            }
      
              p.mouseDragged = () => {
               rad += 10; 
               circProps.push( { posX: x, posY: y,  radius: rad});
               
             }

             p.mouseReleased = () => {
               rad = 0;
               x = 0;
               y = 0;
             }
          }
         
         
         const drawStroke = () => {  
           p.mouseDragged = () => {
                let  x1 = p.mouseX;
                let y1 = p.mouseY;
                p.noStroke();
                p.fill(color);
                p.circle(x1, y1, thickness)
              }; 
         }
         
        
         
         
         if(shapeSelected === 'brush') {
             drawStroke();
         } else if( shapeSelected === 'circle' ) {
             drawCircle();          
         }
  };


  return(
    <div>
        <ReactP5Wrapper sketch={sketch}/>
    </div> 
  )

}
export default Canvas;

