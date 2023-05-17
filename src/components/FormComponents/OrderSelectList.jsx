import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const OrderSelectList = () => {
  const [order, setOrder] = React.useState('');

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120}} size="small">
        <InputLabel
          id="order-type-label"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Select (1)
        </InputLabel>
        <Select
          className={`shadow appearance-none rounded bg-slate-200 w-full py-2 px-3 border-2 ${errors.order && touched.order ? "border-torch-red" : "border-gray-100 border-b-gray-400 hover:border-b-gray-600"}`}
          variant='filled'
          labelId="order-type-label"
          id="order-type"
          value={order}
          label="Select (1)"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={PI}>PI</MenuItem>
          <MenuItem value={RI}>RI</MenuItem>
          <MenuItem value={RC}>RC</MenuItem>
          <MenuItem value={RO}>RO</MenuItem>
          <MenuItem value={CC}>CC</MenuItem>
          <MenuItem value={CD}>CD</MenuItem>
        </Select>
        <FormHelperText>Order Type</FormHelperText>
      </FormControl>
    </div>
  );
}

export default OrderSelectList