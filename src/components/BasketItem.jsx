import { Close } from '@mui/icons-material'
import { IconButton, ListItem, Typography } from '@mui/material'

const BasketItem = ({ removeFromOrder, name, price, quantity, id }) => {
  return (
    <ListItem>
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        {name} {price}руб x{quantity}
      </Typography>
      <IconButton onClick={() => removeFromOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  )
}

export default BasketItem
