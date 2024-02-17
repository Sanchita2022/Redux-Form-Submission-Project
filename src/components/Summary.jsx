import * as React from "react";
import "./Summary.css";
import { Box, Typography, Button, Link } from "@mui/material";
import { ChevronRight, Warning } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { connect } from "react-redux";


const Summary = ({
  fullName,
  dob,
  mobile,
  email,
  salutation,
  weight,
  feet,
  inch,
  city,
  pincode,
  job,
  address,
  preExistingDisease=[]
}) => {
  const nav = useNavigate()
  const handleSubmit = ()=>{
    if( (fullName && dob && mobile && email &&salutation&&weight&&feet&&inch&&city&&pincode&&job&&address&&preExistingDisease.join('')!="")){
      nav("/data");

    }
    else{
      alert("Pleae fill all the details first !")
    }
  }
  return (
    <Box  sx={{ m:2, width:"calc(100% - 4)", background:"#f3f3f3", borderRadius:4, overflow:"hidden" }}>
      {/* Blue Header */}
      <Box sx={{ py:2, px:3, color:"#ffffff", background:"#1050aa" }}>
        <Typography variant="h6" fontWeight={"bold"}>Summary</Typography>
      </Box>

      {/* Body, row-wise */}
      <Box sx={{ p:2, justifyContent:"space-between", display:"flex"}}>
        <Box>
          <Typography variant="body1">Base Premium - 1 year</Typography>
        </Box>
        <Box pr={2}>
          <Typography variant="body1">₹<span style={{fontWeight:"bold"}}>9,166</span></Typography>
        </Box>
      </Box>

      <Box p={2}>
        <Box mb={1}>
          <Typography variant="body1" fontWeight={"bold"}>Select Rider(s)</Typography>
        </Box>
        <Box sx={{ p:1, background:"#e0fff5", border:"#44aa66 2px dotted", justifyContent:"space-between", display:"flex", alignItems:"center"}}>
          Missing out on benefits
          <Link sx={{ color:"orangered", ":hover":{color:"orange"}, display:"flex", alignItems:"center", textDecoration:"none"}}>
            View riders <ChevronRight/>
          </Link>
        </Box>
      </Box>

      <Box p={2}>
        <Box mb={1}>
          <Typography variant="body1" fontWeight={"bold"}>Select Add-ons</Typography>
        </Box>
        <Box sx={{ p:1, background:"#e0fff5", border:"#44aa66 2px dotted", justifyContent:"space-between", display:"flex", alignItems:"center"}}>
          No add-ons selected
          <Link sx={{ color:"orangered", ":hover":{color:"orange"}, display:"flex", alignItems:"center", textDecoration:"none"}}>
            View add-ons <ChevronRight/>
          </Link>
        </Box>
      </Box>

      {/* Warning area */}
      <Box sx={{ p:2, display:"flex", alignItems:"center"}}>
        <Warning sx={{color:"orangered", fontSize:40, mr:1 }}></Warning>
        <Typography variant="body1">
          Port option is only available from ₹10 Lakh or above cover amount
        </Typography>
      </Box>

      <Box sx={{ py:2, px:3, my:2, color:"#1050aa", background:"#dee8ff", justifyContent:"space-between", display:"flex"}}>
        <Typography variant="body1" fontWeight={"bold"}>Total premium</Typography>
        <Typography variant="body1">₹<span style={{fontWeight:"bold"}}>12,936</span></Typography>
      </Box>

      <Box sx={{p:2}}>
        <Box sx={{ p:1, background:"#e0fff5", border:"#44aa66 2px dotted", justifyContent:"space-between", display:"flex", alignItems:"center"}}>
          Get upto ₹5,881 in benefits
          <Link sx={{ color:"orangered", ":hover":{color:"orange"}, display:"flex", alignItems:"center", textDecoration:"none"}}>
            See how<ChevronRight/>
          </Link>
        </Box>
      </Box>
      
      <Box sx={{px:2, pb:4}}>
        <Button onClick={handleSubmit} sx={{p:2, width:"100%", background:"orange", color:"black", fontWeight:"bold", textTransform:"none", ":hover":{background:"green", color:"white"}}} variant="contained">
          Proceed to proposal
        </Button>
      </Box>
    </Box>
  );
};
const mapStateToProps = (state) => ({
  fullName: state.fullName,
  dob: state.dob,
  mobile: state.mobile,
  email: state.email,
  salutation: state.salutation,
  weight: state.weight,
  feet: state.feet,
  inch: state.inch,
  city: state.city,
  pincode: state.pincode,
  job: state.job,
  address: state.address,
  preExistingDisease:state.checkbox.preExistingDisease
});

export default connect(mapStateToProps)(Summary);
// export default Summary;
