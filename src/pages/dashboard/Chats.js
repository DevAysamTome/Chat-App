import {
  Box,
  IconButton,
  Stack,
  Typography,
  TextField,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import { ArchiveBox, CircleDashed } from "phosphor-react";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { ChatList } from "../../data/index";
import {SimpleBarStyle} from '../../components/Scrollbar'
export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Chatlists = ({ id, name, img, unread, msg, time, pinned, online }) => {
  const theme = useTheme()
  return (
    <Box
      p={2}
      sx={{
        width:"100%",
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        alignItems: "center",
        position:"relative"

      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Chats = () => {
   const theme = useTheme();
  return (
      <Box
      height={'100%'}
        sx={{
          width: 320,
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          position:"relative"
        }}
      >
        {/** Header Chats Start : Typography + Icon */}
        <Stack p={2} spacing={2} sx={{height:"100%"}}>
        <Stack
          
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        {/** Header Chats End : Typography + Icon */}

        {/** Body Chats Start : Search Field */}
        <Stack
         
          direction="row"
          alignItems="center"
          justifyContent={"center"}
          spacing={2}
          width={"100%"}
        >
          <TextField
            size="small"
            sx={{ mr: 2, width: "max-content", alignItems: "center" }}
            id="search-field"
            label="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <SearchIcon
                  fontSize="medium"
                  sx={{ mr: 1, cursor: "pointer" }}
                />
              ),
            }}
          />
        </Stack>
        {/** Body Chats End : Search Field */}

        {/** Body Chats Start : Archive + Archive Icon */}
        <Stack p={2} spacing={1}>
        <Stack  direction={"row"} alignItems={"center"} spacing={1.5}>
          <ArchiveBox size={24} cursor={"pointer"} />
          <Button>Archive</Button>
        </Stack>
        {/** Body Chats End : Archive + Archive Icon */}

        <Divider sx={{ boxShadow: "0px 0px 8px rgba(0,0,0,0.25)" }} />
        </Stack>
        
        {/** Body Chats Start : List of Chats */}
        <Stack  direction={"column"} sx={{flexGrow:1 ,height:"100%" , overflow:"scroll"}} >
            <SimpleBarStyle clickOnTrack={false}>
              <Stack spacing={2}>
          <Stack spacing={2.4} p={1}>
            <Typography variant="subtitle2" sx={{ color: theme.palette.mode.light }}>
              Pinned
            </Typography>
            {ChatList.filter((el) => el.pinned).map((el) => {
              return <Chatlists {...el} />;
            })}
          </Stack>
          <Stack spacing={2.4} p={1}>
            <Typography variant="subtitle2" sx={{ color: theme.palette.mode.light }}>
              All Chats
            </Typography>
            {ChatList.filter((el) => !el.pinned).map((el) => {
              return <Chatlists {...el} />;
            })}
          </Stack>    
          </Stack>
          </SimpleBarStyle>
          
        </Stack>
        </Stack>
        
        {/** Body Chats End : List of Chats */}
      </Box>
  );
};

export default Chats;
