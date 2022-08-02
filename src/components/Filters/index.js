import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import 'components/Filters/index.scss'

const Filters = (props) => {
  const {
    name,
    data,
    value,
    onChange,
  } = props;

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">{name}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={onChange}
        label={name}
      >
        <MenuItem value='Default'>Default</MenuItem>
        {data.map(({ id, name }) => {
          return (
            <MenuItem value={name} key={id}>{name}</MenuItem>
          )
        })}
      </Select>
    </FormControl >
  )
}

export default Filters