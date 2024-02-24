import { Avatar, Box, Button, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { SettingsContext } from "../../contexts/SettingsContext";
import useSettings from "../../hooks/useSettings";
const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings(SettingsContext);
  return (
    <>
    <Stack direction={"row"} >
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack
          direction="column"
          sx={{ width: "100%", height: "100%" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={3}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt="Chat App" />
            </Box>

            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems={"center"}
              spacing={3}
            >
              {Nav_Buttons.map((el) => (
                <Box
                  onClick={() => setSelected(el.index)}
                  sx={{
                    backgroundColor:
                      selected === el.index
                        ? theme.palette.primary.main
                        : theme.palette.background.paper,
                    borderRadius: 1.5,
                  }}
                  size="large"
                >
                  <IconButton
                    key={el.index}
                    onClick={() => setSelected(el.index)}
                    sx={{
                      color:
                        selected === el.index
                          ? theme.palette.common.white
                          : theme.palette.common.black,
                    }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ))}

              <Divider orientation="horizontal" sx={{ width: "48px" }} />
              {selected === 3 ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{
                      width: "max-content",
                      color: selected === 3 ? "#fff" : "#000",
                    }}
                  >
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton onClick={() => setSelected(3)}>
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems={"center"}
            spacing={4}
          >
            <Button
              sx={{ color: theme.palette.common.black }}
              onClick={onToggleMode}
            >
              {theme.palette.mode === "dark" ? (
                <NightsStayIcon />
              ) : (
                <WbSunnyIcon />
              )}
            </Button>
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>

      <Outlet />
    </Stack>
    
    </>
  );
};

export default DashboardLayout;
