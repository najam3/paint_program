import React from "react";
import { useSelector } from "react-redux";
import Sketch from "react-p5";

const CanvasTest = () => {
 const toolSelected = useSelector(state => state.tool);
 const thickness = useSelector(state => state.thickness);
 const brushColor = useSelector(state => state.color);
  let x, y, rad = 0;
 const setup = (p5, canvasParentRef ) => {
     p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
     p5.background(0);
 }

const draw = (p5) => {
   if(toolSelected === 'brush' && p5.mouseIsPressed) {
        p5.noStroke();
        p5.fill(brushColor);
        p5.circle(p5.mouseX, p5.mouseY, thickness);
   } else if( toolSelected === 'circle' ) {
        p5.mousePressed = () => {
           x = p5.mouseX;
           y = p5.mouseY;  
        }
      p5.mouseDragged = () => {
         rad+=10;
      } 
      p5.mouseReleased = () => {
        rad = 0;
      }
      p5.noStroke();
      p5.fill('red');
      p5.circle(x, y, rad);
   }
}



            
  
    
  return (
    <div>
      <Sketch setup={setup} draw={draw}/>
    </div>
      )
  }

export default CanvasTest;
