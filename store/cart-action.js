import { cartActions } from "./cart-slice";
import useHttp from "../hooks/use-http";

const url =
  "https://react-http-3d73c-default-rtdb.firebaseio.com/orangecart.json";

//read
export const fetchingCartData = () => {
  //會自動 export action({type:'addToCart',ammount:1}) 也可以直接export方法出去
  // const { isLoading, error, sendRequest } = useHttp();

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Fetching data failed!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const fetchingData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
          totalPrice: data.totalPrice,
        })
      );
      //當物件全刪，firebase totalQuantity=0 items 會消失，重刷執行replaceCart會map不到items，因此給預設值空[]
    } catch (error) {
      console.log(error.message);
    }
  };
};

//update
export const sendingCartData = (cartData) => {
  // const { isLoading, error, sendRequest } = useHttp();
  return async (dispatch) => {
    const sendingCart = async () => {
      const response = await fetch(url, {
        method: "PUT",
        //put=override, post=add
        body: JSON.stringify({
          items: cartData.items,
          totalQuantity: cartData.totalQuantity,
          totalPrice: cartData.totalPrice,
        }),
        //avoid the property 'isChanged'
      });
      if (!response.ok) {
        console.log("Request failed");
      }
    };
    try {
      await sendingCart();
    } catch (error) {
      console.log("Request failed");
    }
  };
};
