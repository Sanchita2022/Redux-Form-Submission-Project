import React from 'react';
import "./HomePage.css";
import ProposalForm from '../components/ProposalForm'
import Summary from '../components/Summary'
// import FilterBar from '../components/FilterBar'
import { Box, Button } from '@mui/material'
import { EditNote } from '@mui/icons-material'

const HomePage = () => {
  return (
    <div className='header-mid'>
        <Box sx={{display:"flex", p:2, justifyContent:"center"}}>
            <Box sx={{borderRadius:"10px 0 0 10px", p:2, background:"#f3f3f3", pr:6}}>1 Plans found for You at Howrah (712203)</Box>
            <Button sx={{borderRadius:"0 10px 10px 0", background:"#dee8ff", textTransform:"none", color:"black", fontWeight:"bold", pr:2}}>
            <EditNote sx={{pr:1}}></EditNote> Edit Details</Button>
        </Box>
        {/* <FilterBar></FilterBar> */}
      <div className='body-mid'>
      <div className='header-mid-left'>
            <ProposalForm></ProposalForm>
        </div>
        <div className='header-mid-right'>
            <Summary></Summary>
        </div>
      </div>
    </div>
  )
}

export default HomePage