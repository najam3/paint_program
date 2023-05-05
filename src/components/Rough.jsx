import React from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import rough from 'roughjs/bundled/rough.esm';

const generator = rough.generator();

const createElement = (id, x1, y1, x2, y2, type) => {
const roughElement = 
  type === 'rectangle' ?  generator.rectangle(x1, y1, x2-x1, y2-y1) : generator.line(x1, y1, x2, y2);
  
  return {id, x1, y1, x2, y2, type, roughElement }
}

const getElementAtPosition = (x, y, elements) => {
   return  elements.find(element => isWithinElement(x, y, element));
}

const isWithinElement = (x, y, element) => {
   const { x1, y1, x2, y2, type } = element;
    if(type === 'rectangle') {
        const maxX = Math.max(x1, x2);
        const minX = Math.min(x1, x2);
        const maxY = Math.max(y1, y2);
        const minY = Math.min(y1, y2);

        return x >= minX && x <= maxX && y >= minY && y <= maxY;
    } else {
        const a = { x: x1, y: y1 };
        const b = { x: x2, y: y2 };
        const c = { x, y }
        const offset = distance(a, b) - (distance(a, c) + distance(b, c));
        return Math.abs(offset) < 1;
    }
}


const distance = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

const Rough = () => {
  const [elements, setElements] = useState([]);
  const [tool, setTool] = useState(null);
  const [action, setAction] = useState('none');
  const [selectedElement, setSelectedElement] = useState(null);

   useLayoutEffect(() => {
   const canvas = document.getElementById("canvas");
   const ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   const roughCanvas = rough.canvas(canvas);
   
   elements.forEach(( { roughElement }) =>  roughCanvas.draw(roughElement) )

}, [elements])

 const updatedElement = (id, x1, y1, x2, y2, type) => {
    const updatedElement = createElement(id, x1, y1, x2, y2, type);
    const elementsCopy = [...elements]
    elementsCopy[id] = updatedElement;  
    setElements(elementsCopy);
 }

  const handleMouseMove = (event) => {
   if(!action) return;

   const { clientX, clientY } = event;
   if(action === 'drawing') {
       const index = elements.length - 1;
       const { x1, y1 } = elements[index];
       updatedElement(index, x1, y1, clientX, clientY, tool);
    
   } else if(action === 'moving') {
    const {id, x1, y1, x2, y2, type, offsetX, offsetY} = selectedElement;
    const width = x2 - x1;
    const height = y2 - y1;
    const newX1 = clientX - offsetX;
    const newY1 = clientY - offsetY;
    updatedElement(id, newX1, newY1, newX1 + width, newY1 + height, type);
   }
}


  const handeMouseUp = () => {
    setAction('none');
    setSelectedElement(null)
  }
  

  const handleMouseDown = (event) => {
    
      const { clientX, clientY } = event;
    if(tool === 'selection') {
     const element = getElementAtPosition(clientX, clientY, elements);
     if(element) {
       const offsetX = clientX - element.x1;
       const offsetY = clientY - element.y1;

       setSelectedElement({...element, offsetX, offsetY});
        setAction('moving');
     }
      
    } else {
        const id = elements.length;
        const element = createElement(id, clientX, clientY, clientX, clientY, tool); 
        setElements((prev) => [...prev, element]);
        setAction('drawing');
    }
  }





  return (
     <div>
      <div style={{position:'absolute', top:'0', display:'flex', alignItems:'center', gap:'1em', padding:'1em'}}>
          <input type="radio" checked={tool === 'rectangle'} onChange={(e) => setTool(e.currentTarget.name)} name="rectangle" id="rectangle" />
          <label htmlFor="rectangle">Rectangle</label>
          <input type="radio" checked={tool === 'line'} onChange={(e) => setTool(e.currentTarget.name)} name="line" id="line" />
          <label htmlFor="line">Line</label>
          <input type="radio" checked={tool === 'selection'} onChange={(e) => setTool(e.currentTarget.name)} name="selection" id="selection" />
          <label htmlFor="selection">Selection</label>
      </div>

     <canvas
      id='canvas'
      width={window.innerWidth} 
      height={window.innerHeight}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handeMouseUp}
      >

   </canvas>
   </div>


  )
}

export default Rough;