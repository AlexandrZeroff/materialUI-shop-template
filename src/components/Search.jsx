import { TextField } from '@mui/material'

const Search = (props) => {
  const { onChange, value } = props

  return (
    <TextField
      type="search"
      value={value}
      onChange={onChange}
      label="Search"
      variant="standard"
      fullWidth
      sx={{ mb: '1rem' }}
    />
  )
}

export default Search
