
import { Link } from 'react-router-dom';
import { IProduct } from '../../interface';


type IProductProps = {
  product: IProduct
}

const Product = ({ product }: IProductProps) => {
  return (
    <div>
      <Link to={`/product-details/${product.id}`}>
        <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
          <img src={product?.images[1]} alt="product" className="w-full h-60 object-cover" />
          <h1 className="text-xl font-semibold">{product?.title}</h1>
          <p>category: {product?.category}</p>
          <p>Rating: {product?.rating}</p>
          <p className="text-sm">
            Availability: {product?.stock}
          </p>
          <p className="text-sm">Price: {product?.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;