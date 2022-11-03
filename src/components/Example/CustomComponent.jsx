import { Box, Button } from '@material-ui/core';
import React from 'react'

function CustomComponent() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <label>
          File Upload
          <Button variant="contained">Upload File</Button>
        </label>
      </div>   
    </Box>
  )
}

export default CustomComponent;