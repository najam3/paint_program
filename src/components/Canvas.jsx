import React from "react";
import { useSelector } from "react-redux";
import Sketch from "react-p5";

const Canvas = () => {
  const toolSelected = useSelector((state) => state.tool);
  const thickness = useSelector((state) => state.thickness);
  const brushColor = useSelector((state) => state.color);

  //* "CIRCLE VARIABLES"
  let x,
    y,
    rad = 0,
    //* "RECT VARIABLES"
    x1,
    y1,
    width = 0,
    height = 0,
    //* "LINE VARIABLES"
    lx1,
    ly1,
    lx2,
    ly2;

  

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.background(255);
  };

  const draw = (p5) => {
    //*  New Tool

    if (toolSelected === "brush") {
      //? "Draw strokes on drag"
      p5.mouseDragged = () => {
        p5.noStroke();
        p5.fill(brushColor);
        p5.circle(p5.mouseX, p5.mouseY, thickness);
      };
      //! "End statement"
    }

    //* "New tool"
    else if (toolSelected === "circle") {
      //? "Get mouse coordinates intial"
      p5.mousePressed = () => {
        x = p5.mouseX;
        y = p5.mouseY;
      };

      //? "Get mouse coordinates current"

      p5.mouseDragged = () => {
        rad += 10;
      };

      //? "Reset Variables"

      p5.mouseReleased = () => {
        rad = 0;
        x = 0;
        y = 0;
      };

      p5.stroke("black");
      p5.fill("white");
      p5.circle(x, y, rad);

      //! "End statement"
    }

    //* "New tool"
    else if (toolSelected === "square") {
      //? "Get mouse coordinates intial"

      p5.mousePressed = () => {
        x1 = p5.mouseX;
        y1 = p5.mouseY;
      };

      //? "Get mouse coordinates current"

      p5.mouseDragged = () =>
        //* Getting distance

        {
          width = p5.mouseX - x1;
          height = p5.mouseY - y1;
        };

      //? "Reset variables"
      p5.mouseReleased = () => {
        x1 = 0;
        y1 = 0;
        width = 0;
        height = 0;
      };

      //* "Drawing on canvas"
      p5.stroke("black");
      p5.fill("white");
      p5.rect(x1, y1, width, height);
    } 

     //* "New tool" 
    else if (toolSelected === "line") {
      //* "Get the initial mouse coordinates"
      p5.mousePressed = () => {
        lx1 = p5.mouseX;
        ly1 = p5.mouseY;
      };

      //? "Get the Current mouse coordinates"
      p5.mouseDragged = () => {
        lx2 = p5.mouseX;
        ly2 = p5.mouseY;

         p5.line(lx1, ly1, lx2, ly2);
      };

      //?   "Reset mouse coordinates"
      p5.mouseReleased = () => {
        lx1 = 0;
        lx2 = 0;
        ly1 = 0;
        ly2 = 0;
      };
       //! "End Statement"
    }

  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default Canvas;
