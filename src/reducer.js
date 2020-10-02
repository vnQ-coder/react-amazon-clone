export const initialState = {
  basket : [
    {
      id : 121213123141,
      title : "1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction, Plug and Play, for Windows Mac OS, for Video Streaming, Conference, Gaming, Online Classes",
      rating : 3,
      price : 116.12,
      image : "camera.jpg"
    },

  ],
  user : null
}

export const getBaskettotal = (basket) => (
    basket?.reduce((amount , item) => item.price + amount , 0)
)

const reducer = (state , action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
        // Logic for adding items in basket
        return {
          ...state,
          basket : [ ...state.basket , action.item ]
        };
        break;

        case 'REMOVE_FROM_BASKET':
        // Logic for removing items from basket

        // let new basket initializing it with old basket with spread operator
        let newBasket = [...state.basket];
        
        // find the index of id which is getting by clicking on remove item button
        const index = state.basket.findIndex( 
          (basketItem) =>  basketItem.id === action.id
          );

        // check if index found then remove it
        if(index >= 0){

          // use splice() method to remove index
          newBasket.splice(index , 1);
        }else{
          console.warn(
            `cant remove product ${action.id} as its not found`
          )
        }
        // at the end set previous state with newbasket value or update
        return {
          ...state,
          basket : newBasket
        };
        break;
        default:
         return state;

    }

}

export default reducer;