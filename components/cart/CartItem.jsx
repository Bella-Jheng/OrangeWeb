import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, price, img, size, quantity, totalPrice} = props.item;

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart({id,size}));
  };

  return (
    <ListItem key={1} sx={{ borderBottom: "1px solid #e0e0e0" }}>
      <ListItemAvatar>
        <Avatar>
          <img className={classes.productImage} src={img} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`${name} ${size?`size : ${size}` :' '}`} secondary={`${quantity} x NT$ ${price}`} />
      <IconButton onClick={removeFromCartHandler}>
        <DeleteOutlineIcon fontSize="small" />
      </IconButton>
    </ListItem>
  );
};

export default CartItem;
