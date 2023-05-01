import React from "react";
import Canvas from "./components/Canvas";
import {Grid} from '@mui/material';
import Actions from "./components/Actions";


const App = () => {
  return(
    <Grid container>

     <Grid lg={2} item>
       <Actions/>
     </Grid>

     <Grid lg={10} item>
       <Canvas/>
     </Grid>
    </Grid>

  )
};
export default App;