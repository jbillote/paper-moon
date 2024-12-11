import { Html } from "@elysiajs/html"

function ServantListSkeleton({ showSearch }: { showSearch: boolean }): JSX.Element {
    return (
        <div class='flex w-full h-5/6 flex-col gap-4 items-center my-5'>
            {showSearch && 
                <div class='skeleton h-4 w-11/12' />
            }
            <div class='skeleton h-32 w-11/12' />
        </div>
    )
}

export { ServantListSkeleton }
