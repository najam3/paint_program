import React, { useState } from "react";
import Sketch from "react-p5";

function SketchPad() {
  const [tool, setTool] = useState("pen");

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.background(255);
  };

  const draw = (p5) => {
    if (tool === "pen" && p5.mouseIsPressed) {
      p5.strokeWeight(5);
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    } else if (tool === "rectangle" && p5.mouseIsPressed) {
      p5.strokeWeight(1);
      p5.noFill();
      p5.rect(p5.mouseX, p5.mouseY, 50, 50);
    } else if (tool === "circle" && p5.mouseIsPressed) {
      p5.strokeWeight(1);
      p5.noFill();
      p5.circle(p5.mouseX, p5.mouseY, 50);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setTool("pen")}>Pen</button>
        <button onClick={() => setTool("rectangle")}>Rectangle</button>
        <button onClick={() => setTool("circle")}>Circle</button>
      </div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default SketchPad;
