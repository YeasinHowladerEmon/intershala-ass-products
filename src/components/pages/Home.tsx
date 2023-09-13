import axios from 'axios';
import { useEffect, useState } from 'react';
import { Input } from '../ui/input';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { IProduct } from '../../interface';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import Product from './Product';
type Input = {
    searchValue: string
}
const Home = () => {
    const { register, handleSubmit } = useForm<Input>();
    const [products, setProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<string[]>([])
    // const categories = Array.from(new Set(products?.map((product: IProduct) => product.category)))

    const onSubmit = (data: Input) => {

        axios.get(`https://dummyjson.com/products/search?q=${data.searchValue}`)
            .then((response) => {
                // Handle the successful response here
                console.log(response.data);
                setProducts(response.data.products)
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error:', error);
            });
        console.log(data)
    };

    const onChange = (value: string) => {
        axios.get(`https://dummyjson.com/products/category/${value}`)
            .then((response) => {
                // Handle the successful response here
                console.log(response.data);
                setProducts(response.data.products)
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((response) => {
                // Handle the successful response here
                console.log(response.data);
                setProducts(response.data.products)
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error:', error);
            });
    }, [])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((response) => {
                // Handle the successful response here
                console.log(response.data);
                setCategories(response.data)
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error:', error);
            });
    }, [])


    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 max-w-7xl mx-auto">

            <div className="col-span-1 md:col-span-1 lg:col-span-6 mt-10 md:mt-32">
                <h1>Search</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                    <Input placeholder="Search for what you want" required {...register("searchValue")} />
                    <Button type="submit">Submit</Button>
                </form>
            </div>

            <div className="col-span-1 md:col-span-1 lg:col-span-6 mt-5 md:mt-28 md:ml-10">
                <div className="space-y-3 ">
                    <h1 className="text-xl ">Filter</h1>
                    <div className="max-w-xl">
                        <Select onValueChange={onChange}>
                            <SelectTrigger className="w-[250px] ">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Category</SelectLabel>
                                    {
                                        categories.map((category: string) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 md:mt-28">

                {products && products.length > 0 ? (
                    products.map((product: IProduct) => (<Product key={product.id} product={product} />))
                ) : (
                    <>
                        <div>
                            <h2>Book is not found</h2>
                        </div>
                    </>
                )}

            </div>
        </div >



    );
};

export default Home;