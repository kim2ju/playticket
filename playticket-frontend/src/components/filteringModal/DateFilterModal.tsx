export default function DateFilterModal({isModalOpen, setIsModalOpen, selectedDate, setSelectedDate} : 
    {isModalOpen: boolean, setIsModalOpen: (isModalOpen: boolean) => void, selectedDate: string, setSelectedDate: (selectedDate: string) => void}) {
    const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
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
                <div className="text-[18px] font-bold pb-2 border-b">날짜</div>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={onChangeDate}
                    className="border rounded-lg p-2 text-lg"
                />
            </div>
            </>
        )}
        </>
    )
}
