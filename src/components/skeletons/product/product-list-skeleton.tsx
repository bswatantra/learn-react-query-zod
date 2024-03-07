import { Card, Skeleton } from "@nextui-org/react"

const ProductListSkeleton = ({ length }: { length: number }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-6">
            {Array.from({ length: length }).map((_, idx) => (
                <Card className="w-[300px] space-y-5 p-4 my-6" radius="lg" key={idx}>
                    <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <div className="space-y-3 py-4">
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>
                </Card>
            ))}
        </div>

    )
}

export default ProductListSkeleton