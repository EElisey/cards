import { Box, Skeleton } from '@mui/material'

export const SkeletonCard = () => (
  <Box sx={{ width: 200, height: 200, display: 'flex', flexDirection: 'column', padding: 2 }}>
    <Skeleton width="80%" />
    <Skeleton width="100%" height="60%" sx={{ marginTop: 1 }} />
  </Box>
)