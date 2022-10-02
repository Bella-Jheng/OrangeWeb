import classes from "./CartItem.module.css";
import Button from "../UI/Button";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from "@mui/icons-material/Close";

const CartItem = (props) => {
  return (
    <Box sx={{ width: "250px" }} >
      <List>
      <ListItem sx={{ justifyContent: "right" }} disablePadding>
        <IconButton onClick={props.onCloseCart}>
            <CloseIcon />
        </IconButton>
        </ListItem>
        <ListItem key={1} sx={{ borderBottom: "1px solid #e0e0e0" }}>
          <ListItemAvatar>
            <Avatar>
              <img
                className={classes.productImage}
                src="https://www.owlting.com/business/item/p/480_0/item_14528_92eef9462dfed51c7fd76f64eb9a88ad"
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="香甜茂谷禮盒" secondary="1 x NT$500" />
          <IconButton>
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </ListItem>
        <ListItem key={2} sx={{ borderBottom: "1px solid #e0e0e0" }}>
          <ListItemAvatar>
            <Avatar>
              <img
                className={classes.productImage}
                src="https://www.owlting.com/business/item/p/480_0/item_13825_95c2229d3374ab069e2c8ff8a6acdbfe"
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="牛奶芭樂" secondary="1 x NT$600" />
          <IconButton>
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </ListItem>
      </List>
      <List sx={{ position: "absolute", bottom: "0", width: "100%" }}>
        <ListItem>
          <Button title="訂單結帳" width="100%" />
        </ListItem>
      </List>
    </Box>
  );
};

export default CartItem;
