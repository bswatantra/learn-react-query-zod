import { Input, Select, SelectItem } from "@nextui-org/react";

import { HoverEffect } from "../ui/card-hover-effect";
import ProductListSkeleton from "../skeletons/product/product-list-skeleton";
import { products as fetchProducts } from "../../apis/product"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react";

const List = () => {

    const [filters, setFilters] = useState({})


    const { data: products, isLoading, isError, error } = useQuery({ queryKey: ['products', filters], queryFn: () => fetchProducts(filters) })

    if (!isLoading && isError) {
        return <p>Error: {error?.message || 'Failed to fetch products'}</p>;
    }

    const handleFilters = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setFilters({ ...filters, [event.target.name]: event.target.value });
    }

    return (
        <>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 shadow-md p-4 rounded-lg border border-zinc-300">
                <Input size={'sm'} type="text" label="Search"
                    name="search"
                    onChange={handleFilters}
                />
                <Select
                    size={'sm'}
                    label="Skip"
                    className="max-w-xs"
                    name="skip"
                    onChange={handleFilters}
                >
                    <SelectItem key={10} value={10}>
                        10
                    </SelectItem>
                    <SelectItem key={20} value={20}>
                        20
                    </SelectItem>
                </Select>
                <Select
                    size={'sm'}
                    label="Per Page"
                    className="max-w-xs"
                    name="limit"
                    onChange={handleFilters}
                >
                    <SelectItem key={5} value={5}>
                        5
                    </SelectItem>
                    <SelectItem key={10} value={10}>
                        10
                    </SelectItem>
                    <SelectItem key={20} value={20}>
                        20
                    </SelectItem>
                </Select>
            </div>

            {
                isLoading && <ProductListSkeleton length={6} />
            }

            {products &&
                <HoverEffect items={products?.products} />
            }
        </>
    )
}

export default List