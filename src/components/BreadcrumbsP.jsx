import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
const BreadcrumbsP = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          MUI
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={handleClick}
        >
          Core
        </Link>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
          Breadcrumb
        </Typography>,
      ];
    
      return (
        <Stack spacing={2}>
          
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      );
}

export default BreadcrumbsP