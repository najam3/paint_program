import React from "react";
import Canvas from "./components/Canvas";
import {Grid} from '@mui/material';
import Actions from "./components/Actions";
import CanvasTest from "./components/CanvasTest";
import SketchPad from "./components/SketchPad";


const App = () => {
  return(
    <Grid container>

     <Grid lg={2} item>
       <Actions/>
     </Grid>

     <Grid lg={10} item>
       <CanvasTest />
     </Grid>
    </Grid>
  
  )
};
export default App;