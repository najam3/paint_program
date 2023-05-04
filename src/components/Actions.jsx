import React, { useState } from 'react'
import {BrushOutlined, Interests, AspectRatio, Clear} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { getActions, getColor, getThickness } from '../redux/actions/actions';
import { Box, IconButton, Input, Typography } from '@mui/material';
import '../components/css/Actions.css';

const Actions = () => {
const dispatch = useDispatch();
const [show, setShow] = useState(false);



function getShape(e) {
  const shape = e.currentTarget.id
   dispatch(getActions(shape));
   setShow(true)   
}



function getProperties(e) {
  dispatch(getThickness(e.currentTarget.id));

}

  return (

       <div className='wrapper'>
          <div className='list' id='brush' onClick={getShape}>
            <IconButton >
             <BrushOutlined />
            </IconButton>
            <span>Brush</span>
          </div>
          {
            show ? <div className='cus-brush'>
               <Typography fontSize='12px' variant='p'>Brush size</Typography>
               
             <div style={{display:'flex', alignItems:'center', gap:'0.5em'}}>
               
              <Box onClick={getProperties} id='30' sx={{borderRadius:'50%', backgroundColor:'black', height:'20px', width:'20px'}}></Box>
              <Box onClick={getProperties} id='20' sx={{borderRadius:'50%', backgroundColor:'black', height:'15px', width:'15px'}}></Box>
              <Box onClick={getProperties} id='10' sx={{borderRadius:'50%', backgroundColor:'black', height:'10px', width:'10px'}}></Box>
              </div>
              <div style={{display:'flex', flexDirection:'column'}}>
               <Typography fontSize='12px' variant='p'>Choose Color</Typography>
               <Input onChange={(e) => dispatch(getColor(e.target.value))} type='color' />   
              </div>           
          </div> : ''
          }
            
          <div className='list' id='circle' onClick={getShape}>
            <IconButton>
           <Interests /> 
          </IconButton>
          <span>Shapes</span>
          </div>

           <div onClick={getShape} id='erase' className='list'>
            <IconButton>
            <Clear />
            </IconButton>
            <span>Clear</span>
           </div>

           <div className='list'>
            <IconButton>
           <AspectRatio id='aspectRatio' />
           </IconButton>
          <span>Aspect Ratio</span>
           </div>

          </div>
  )
};

export default Actions;