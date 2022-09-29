import { Button } from '@mui/material'
import React from 'react'

function ResButton({classBtn,BtnName}) {
  return (
    <div>
      <Button className={classBtn} variant="Contained">{BtnName}</Button>
    </div>
  )
}

export default ResButton