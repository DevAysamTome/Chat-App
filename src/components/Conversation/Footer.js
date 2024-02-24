import {
    Box,
    IconButton,
    Stack,
    TextField,
  } from "@mui/material";
  import React from "react";
  import {
    PaperPlaneTilt,
    Paperclip,
    Smiley,
  } from "phosphor-react";
  import { useTheme } from "@mui/material/styles";

function Footer() {
    const theme = useTheme();

  return (
    <Box
        p={2}
        sx={{
          width: "100%",
         
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} height={"100%"} spacing={5}>
          <TextField
            placeholder="Type a message..."
            fullWidth
            InputProps={{
              startAdornment: (
                <IconButton>
                  <Paperclip
                    fontSize="xlarge"
                    sx={{ mr: 1, cursor: "pointer" }}
                  />
                </IconButton>
              ),
              endAdornment: (
                <IconButton>
                  <Smiley fontSize="xlarge" sx={{ mr: 1, cursor: "pointer" }} />
                </IconButton>
              ),
            }}
          />
          <IconButton
            aria-label="send"
            sx={{
              backgroundColor: theme.palette.mode.light,
              color: theme.palette.primary.main,
            }}
          >
            <PaperPlaneTilt fontSize="xlarge" />
          </IconButton>
        </Stack>
      </Box>
  )
}

export default Footer
