import {
  Box,
  Stack,
 
} from "@mui/material";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversiation = () => {
  
  

  return (
    <Stack height={"100%"}  width={"auto"}>
      {/**Chat Header */}
      <Header />
      {/**Chat Msg */}
      <Box
        width={"100%"}
        sx={{ flexGrow: 1}}
      >
     <Message />
      </Box>
      {/**Chat Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversiation;
