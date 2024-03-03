import { HoverEffect } from "../ui/card-hover-effect";
import { products as fetchProducts } from "../../apis/product"
import { useQuery } from "@tanstack/react-query"
const List = () => {
    const { data: products, isLoading, isError, error } = useQuery({ queryKey: ['products'], queryFn: fetchProducts })
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError || !products) {
        return <p>Error: {error?.message || 'Failed to fetch skills'}</p>;
    }

    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={products.products} />
        </div>
    )
}

export default List