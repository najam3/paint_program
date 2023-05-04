import React, { useState } from 'react'
import {BrushOutlined, Interests, AspectRatio, Clear} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { getActions, getColor, getThickness } from '../redux/actions/actions';
import { Box, Card, CardContent, IconButton, Input, Stack, Typography } from '@mui/material';
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
            
          <div className='list' style={{display:'flex', alignItems:'center'}}>
            <>
              <IconButton>
              <Interests /> 
             </IconButton>
            </>
            <span>Shapes</span>
                <Card sx={{width:'110px'}}>
                  <CardContent>
                  <Typography variant='p' fontSize='12px'>Choose Shape</Typography>
                      <Stack sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:'1em', justifyContent:'center'}}>
                     <Box id='square'  onClick={getShape} sx={{cursor:'pointer'}} marginTop='0.3em' border='1px solid black' width='15px' height='15px'></Box>
                     <Box id='circle' onClick={getShape} sx={{cursor:'pointer'}}  borderRadius='50%' marginTop='0.3em' border='1px solid black' width='15px' height='15px'></Box>
                     <Box id='triangle' onClick={getShape} sx={{cursor:'pointer'}} width='0' height='0' borderLeft='10px solid transparent' borderRight='10px solid transparent' borderBottom='20px solid black'  ></Box>
                     <Box id='line' onClick={getShape} sx={{cursor:'pointer', transform:'rotate(45deg)', marginTop:'0.5em'}} width='20px' height={0} border={'1px solid black'}></Box>
                    </Stack>
                    
                  </CardContent>
                </Card>
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