import { Button } from '@mui/material'
import React from 'react'

const FormNavigation = (props) => {
  return (
    <div style={{
      display: 'flex',
      marginTop: 50,
      justifyContent: "space-between",
    }}>
      {props.hasPrevious && (
        <Button
          variant="contained"
          type="button"
          onClick={props.onBackClick}
        >
          Back
        </Button>
      )}

      <Button
        type="submit"
        color="primary"
        variant="contained"
      >
        {props.isLastStep ? 'Submit' : 'Next'}
      </Button>
    </div>
  )
}
export default FormNavigation