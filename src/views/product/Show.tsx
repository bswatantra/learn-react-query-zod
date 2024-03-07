import { useNavigate, useParams } from "react-router-dom"

import { productShow } from "../../apis/product"
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query"

interface ErrorResponse {
    response?: {
        status?: number;
    };
}

const ShowProduct = () => {
    const navigate = useNavigate()

    const { id } = useParams();

    const { data: product, isLoading, error } = useQuery({ queryKey: ['product'], queryFn: () => productShow(Number(id)) })

    useEffect(() => {
        if ((error as ErrorResponse)?.response?.status === 404) {
            navigate("/errors/not-found")
        }
    })

    return (
        <>
            {
                isLoading && <h1>loading</h1>
            }

            {product &&
                <div> {product.title}</div>
            }
        </>
    )
}

export default ShowProduct