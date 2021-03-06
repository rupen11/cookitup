import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { IconButton, Input, Box, Drawer, Typography } from "@mui/material";
import { useRouter } from 'next/router';

const SearchDD = () => {
  // drawer top
  const router = useRouter();
  const [showDrawer2, setShowDrawer2] = useState(false);
  const [recipeName, setRecipeName] = useState("");

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };

  const handleSearch = () => {
    router.push('/search/' + recipeName);
    handleDrawerClose2();
  }
  return (
    <>
      <IconButton
        aria-label="show 4 new mails"
        color="inherit"
        aria-controls="search-menu"
        aria-haspopup="true"
        onClick={() => setShowDrawer2(true)}
        size="large"
      >
        <FeatherIcon icon="search" width="20" height="20" />
      </IconButton>

      <Typography variant="h5">Search "Aloo Paratha"</Typography>

      <Drawer
        anchor="top"
        open={showDrawer2}
        onClose={() => setShowDrawer2(false)}
        sx={{
          "& .MuiDrawer-paper": {
            padding: "15px 30px",
          },
        }}
      >
        <Box display="flex" alignItems="center">
          <Input placeholder="Search here" aria-label="description" fullWidth onChange={(e) => setRecipeName(e.target.value)} />
          <Box
            sx={{
              ml: "auto",
            }}
          >
            <Typography variant="div" style={{ display: 'flex' }}>

              <IconButton
                color="inherit"
                sx={{
                  color: (theme) => theme.palette.grey.A200,
                }}
                onClick={handleSearch}
              >
                <FeatherIcon icon="search" />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{
                  color: (theme) => theme.palette.grey.A200,
                }}
                onClick={handleDrawerClose2}
              >
                <FeatherIcon icon="x-circle" />
              </IconButton>
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SearchDD;
