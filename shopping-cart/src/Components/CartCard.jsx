import useCartContext from "../contexts/useCartContext";

export const CartCard = ({product}) => {
  const {name, price, image, cartItemId} = product;
  let {cartItems, setCartItems, RemoveItem, setProductCount} = useCartContext();

  RemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.cartItemId !== id);
    setCartItems(updatedCartItems);
    setProductCount((prevCount) => prevCount - 1);
  };
  return (
    <>
    <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg shadow-md mb-4">
      <img src={image} alt={name} className="w-20 h-20 object-cover rounded" />

      <div className="flex-1">
        <p className="text-lg font-medium">{name}</p>
        <p className="text-sm text-gray-500">Product description or variant</p>
      </div>

      <div className="text-right">
        <p className="text-xl font-semibold text-gray-700">${price}</p>
        <button onClick={()=>RemoveItem(cartItemId)} className="px-4 py-2 rounded-lg mt-2 bg-blue-600 text-white hover:bg-blue-500 duration-200">Remove From Cart</button>
      </div>
    </div>
    </>
  )
}