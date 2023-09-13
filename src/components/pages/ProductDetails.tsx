
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IProduct } from '../../interface';
const ProductDetails = () => {
  const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
            // Handle the successful response here
            console.log(response.data);
            setProduct(response.data)
        })
        .catch((error) => {
            // Handle any errors here
            console.error('Error:', error);
        });
    },[id])
    return (
      <div className="mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src={product?.images[1]} alt="" className="w-full md:h-auto" />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
            <h1 className="text-3xl font-semibold">{product?.title}</h1>
            <h3 className="text-xl">Brand: {product?.brand}</h3>
            <h4 className="text-xl">Category: {product?.category}</h4>
            <h4 className="text-xl">Rating: {product?.rating}</h4>
            <h4 className="text-xl">Stock: {product?.stock}</h4>
            <h4 className="text-xl">Price: {product?.price}</h4>
            <h4 className="text-xl">Discount: {product?.discountPercentage}%</h4>
            <p className="text-xl">Description: {product?.description}</p>
          </div>
        </div>
      </div>
    </div>  
    
    );
};

export default ProductDetails;