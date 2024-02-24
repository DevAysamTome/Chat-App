import {
    Avatar,
    Box,
    Divider,
    IconButton,
    Stack,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { StyledBadge } from "../../pages/dashboard/Chats";
  import { faker } from "@faker-js/faker";
  import {
    ArrowDown,
    MagnifyingGlass,
    PhoneCall,
    VideoCamera,
  } from "phosphor-react";
  import { useTheme } from "@mui/material/styles";

function Header() {
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
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%", height: "100%" }}
        >
          <Stack direction={"row"} spacing={2}>
            <Box>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt={faker.name.fullName()}
                  src={faker.image.avatar()}
                />
              </StyledBadge>
            </Box>
            <Stack spacing={0.2}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              <Typography variant="caption">online</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <IconButton>
              <VideoCamera />
            </IconButton>
            <IconButton>
              <PhoneCall />
            </IconButton>
            <IconButton>
              <MagnifyingGlass />
            </IconButton>
            <Divider orientation="vertical" sx={{ height: "48px" }} flexItem />
            <IconButton>
              <ArrowDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
  )
}

export default Header
