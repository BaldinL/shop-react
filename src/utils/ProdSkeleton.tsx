import { Skeleton } from "@mui/material"

function ProdSkeleton() {
    return (
        <div className="bg-darker rounded-xl w-full h-full p-5 flex gap-5">
            <div className="flex-1/3">
                <Skeleton variant="rounded" animation="wave" width={400} height={400} />
            </div>
            <div className="flex gap-5 flex-2/3">
                <div className="flex flex-col gap-5">
                    <Skeleton variant="rounded" animation="wave" width={120} height={120} />
                    <Skeleton variant="rounded" animation="wave" width={120} height={120} />
                    <Skeleton variant="rounded" animation="wave" width={120} height={120} />
                </div>
                <div className="flex flex-col">
                    <Skeleton variant="text" width={300} animation="wave" height={50} />
                    <Skeleton variant="text" width={80} animation="wave" height={50} />
                </div>
            </div>
        </div>
    )
}

export default ProdSkeleton
