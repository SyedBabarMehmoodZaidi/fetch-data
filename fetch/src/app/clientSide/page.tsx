"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Define the type for a product
type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  images: string[];
};

const Page = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const result = await data.json();
      console.log(result);
      setProduct(result.products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-[28px] font-bold relative inline-block">
        Client Side Product List
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
      </h1>
      <div className="m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {product.map((item) => (
          <div
            className="border-2 border-black rounded-2xl p-8 bg-white text-black"
            key={item.id}
          >
            {item.images.slice(0, 1).map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${item.title} - Image ${index + 1}`}
                width={150}
                height={150}
                className="w-[150px] h-[150px] object-cover mb-4 mx-auto"
              />
            ))}
            <h3 className="text-lg font-semibold text-center">{item.title}</h3>
            <p className="text-sm text-center"><span className='text-gray-500'>Category : </span>{item.category}</p>
            <p className="text-sm font-bold text-gray-600 hover:text-orange-500 text-center">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
