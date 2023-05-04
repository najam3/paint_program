import React from "react";
import {Grid} from '@mui/material';
import Actions from "./components/Actions";
import Canvas from "./components/Canvas";



const App = () => {
  return(
    <Grid container>

     <Grid lg={2} item>
       <Actions/>
     </Grid>

     <Grid lg={10} item>
       <Canvas />
     </Grid>
    </Grid>
  )
};
export default App;