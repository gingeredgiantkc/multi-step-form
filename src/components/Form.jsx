import Stepper from './Stepper';
import FormInputs from './FormInputs'
import { Card, CardContent, Box } from '@mui/material';

const Form = () => {
  const content = (
    <Card
      sx={{
        m: 0,
        mx: 'auto',
        width: {
          xs: "100%",
          md: "50%",
        },
        height: "75%",
        borderRadius: 2,
      }}
    >    
      <CardContent>
        <Box paddingBottom={2}>
          <Stepper />
        </Box>
        <Box>
          <FormInputs />
        </Box>
      </CardContent>
    </Card>
  )
  return content
};

export default Form