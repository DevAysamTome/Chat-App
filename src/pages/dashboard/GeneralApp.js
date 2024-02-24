import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversiation from "../../components/Conversation";


const GeneralApp = () => {

  return (
    <Stack direction={'row'} height={"100%"} spacing={2} sx={{position:"relative"}}>
    {/**Chats */}
    
      <Chats  />
      
      {/**Conversiation */}
      <Box sx={{width:'calc(100vw - 450px)' , backgroundColor:'#fff' }}>
        <Conversiation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
