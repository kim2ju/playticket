export default function PriceFilterModal({isModalOpen, setIsModalOpen, minPrice, setMinPrice, maxPrice, setMaxPrice} : 
    {isModalOpen: boolean, setIsModalOpen: (isModalOpen: boolean) => void, minPrice: number, setMinPrice: (minPrice: number) => void, maxPrice: number, setMaxPrice: (maxPrice: number) => void}) {
    const onChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(parseInt(e.target.value));
    }

    const onChangeMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(parseInt(e.target.value));
    }

    return (
        <>
        {isModalOpen && (
            <>
            <div 
                onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-30">
            </div>
            <div className="fixed left-0 bottom-0 w-full pt-11 pb-6 px-6 flex flex-col gap-4 bg-white rounded-t-[28px] z-40">
                <div className="text-[18px] font-bold pb-2 border-b">가격</div>
                <div className="flex items-center justify-between">
                    <input
                        type="number"
                        value={minPrice}
                        onChange={onChangeMinPrice}
                        className="border w-2/5 p-2 rounded-lg"
                        placeholder="최소 금액" />
                    <div className="text-[18px]">~</div>
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={onChangeMaxPrice}
                        className="border w-2/5 p-2 rounded-lg"
                        placeholder="최대 금액" />
                </div>
            </div>
            </>
        )}
        </>
    )
}
