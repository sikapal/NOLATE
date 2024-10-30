import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
 
}

const BreadcrumbsP = ({ breadcrumbs }) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          breadcrumb.href ? (
            <Link
              key={index}
              underline="hover"
              color="black"
              fontWeight="bold"
              href={breadcrumb.href}
              onClick={breadcrumb.onClick || handleClick}
            >
              {breadcrumb.label}
            </Link>
          ) : (
            <Typography key={index} color="text.primary ">
              {breadcrumb.label}
            </Typography>
          )
        ))}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadcrumbsP;
