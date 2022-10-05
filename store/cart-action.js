import { cartActions } from "./cart-slice";
import useHttp from "../hooks/use-http";

const url =
  "https://react-http-3d73c-default-rtdb.firebaseio.com/orangecart.json";

//read
const fetchingCartData = () => {
  const { isLoading, error, sendRequest } = useHttp();

  //會自動 export action({type:'addToCart',ammount:1}) 也可以直接export方法出去
  return async (dispatch) => {
    const applyData = (data) => {
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
      //當物件全刪，firebase totalQuantity=0 items 會消失，重刷執行replaceCart會map不到items，因此給預設值空[]
    };
    const reqeustData = {
      url: url,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    sendRequest(reqeustData, applyData);
  };
};

//update
export const updateCartData = (cartData) => {
  const { isLoading, error, sendRequest } = useHttp();

  return async (dispatch) => {
    const applyData = (data) => {
        console.log('Sent cart successfully')
    };

    const reqeustData = {
      url: url,
      method: "PUT",
      body: {
        items: cartData.items,
        totalQuantity: cartData.totalQuantity,
      },
    };

    sendRequest(reqeustData, applyData)
  };
};

export default fetchingCartData;
