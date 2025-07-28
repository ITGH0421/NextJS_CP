import { m } from 'framer-motion';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function AboutVision({ sx, ...other }) {

  return (
    // <Box
    //   component="section"
    //   sx={[
    //     () => ({
    //       pb: 10,
    //       position: 'relative',
    //       bgcolor: 'background.neutral',
    //       '&::before': {
    //         top: 0,
    //         left: 0,
    //         width: 1,
    //         content: "''",
    //         position: 'absolute',
    //         height: { xs: 80, md: 120 },
    //         bgcolor: 'background.default',
    //       },
    //     }),
    //     ...(Array.isArray(sx) ? sx : [sx]),
    //   ]}
    //   {...other}
    // >
    <Container component={MotionViewport}>
      <Box
        sx={{
          borderRadius: 2,
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          my: 5,
          py: 5
        }}
      >
        <Typography
          component={m.h6}
          variants={varFade('inUp')}
          variant="h5"
          color="primary"
          sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}
        >
          We strongly believe new mothers can greatly benefit by getting more rest, instead of feeling the need to bounce right back after childbirth.

        </Typography>
      </Box>
    </Container>
    // </Box>
  );
}
