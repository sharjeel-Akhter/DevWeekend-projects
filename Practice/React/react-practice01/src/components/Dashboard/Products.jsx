import { useParams } from "react-router";

const productDetaisl = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        description: "This is product 1",
        imgUrl: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        description: "This is product 2",
        imgUrl: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        description: "This is product 3",
        imgUrl: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
        id: 4,
        name: "Product 4",  
        price: 400,
        description: "This is product 4",
        imgUrl: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
]

function Products() {
    const {productId} = useParams();
    let product = productDetaisl.find((product) => product.id === parseInt(productId));

    // if(!product) {
    //     return(
    //         <h3 className='text-5xl text-center text-gray-50 mt-44'>Product not found</h3>
    //     ) 
    // }
    return (
        <div className=' bg-gray-900 h-screen flex justify-center items-center mt-5'>

            <div >
                <div className="w-80 bg-gray-300 rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center">
                    <img
                        className="w-50 h-50 object-contain mb-6 rounded-md border border-gray-300"
                        src={product.imgUrl}
                        alt={product.name}
                    />

                    <h2 className="text-2xl font-bold text-black mb-3">
                        {product.name}
                    </h2>

                    <p className="text-xl font-semibold text-black mb-3">
                        ${product.price}
                    </p>

                    <p className="text-gray-700 text-center">
                        {product.description}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Products;