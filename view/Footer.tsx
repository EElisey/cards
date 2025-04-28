import { Box, Typography } from "@mui/material";

export const Footer = () => (
  <Box
    component="footer"
    sx={{
      width: "100%",
      textAlign: "center",
      padding: 2,
      backgroundColor: 'primary.main',
      marginTop: 'auto',
    }}
  >
    <Typography variant="body2" color="white">
      © 2025 Test Project
    </Typography>
  </Box>
);