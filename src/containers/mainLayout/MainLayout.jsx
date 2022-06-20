import { Box, Stack } from "@mui/material";
import { Sidebar } from "components/Sidebar";
import { Navbar } from "components/Navbar";
import { useState } from 'react';
import { Outlet } from "react-router-dom";

const MainLayout = () => {

  let mediaQuery = window.matchMedia('(min-width: 800px)');
  const [open, setOpen] = useState(mediaQuery.matches || false);
  mediaQuery.addEventListener('change', e => setOpen(e.matches))

  return (
    <Stack
      direction="row"
      spacing={0}
    >
      <Sidebar open={open} setOpen={setOpen} />
      <Box sx={{
        flexGrow: 1,
        overflow: "hidden"
      }}>
        <Navbar open={open} setOpen={setOpen} />
        <Outlet />
      </Box>
    </Stack>
  );
};

export default MainLayout;
