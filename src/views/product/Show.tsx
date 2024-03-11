import Detail from "../../components/product/detail";
import { productShow } from "../../apis/product"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

const ShowProduct = () => {

    const { id } = useParams();

    const { data: product, isLoading } = useQuery({ queryKey: ['product'], queryFn: () => productShow(Number(id)) })

    return (
        <>
            {
                isLoading && <h1>loading</h1>
            }

            {product &&
                <Detail product={product} />
            }

        </>
    )
}

export default ShowProduct