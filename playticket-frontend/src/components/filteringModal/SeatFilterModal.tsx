import { CheckIcon } from "@heroicons/react/16/solid"

const seatData = [
    'VIP석',
    'R석',
    'S석',
    'A석',
    'B석',
    '기타',
];

export default function SeatFilterModal({isModalOpen, setIsModalOpen, selectedSeats, setSelectedSeats} : 
    {isModalOpen: boolean, setIsModalOpen: (isModalOpen: boolean) => void, selectedSeats: string[], setSelectedSeats: (selectedSeats: string[]) => void}) {
    const selectedOption = (label: string) => {
        return (
            <button
                onClick={() => setSelectedSeats(selectedSeats.filter(seat => seat !== label))}
                className="flex gap-2.5 items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-sm">
                    <CheckIcon className="w-[16px] h-[16px] text-white" />
                </div>
                <div className="text-[16px] text-purple-500">{label}</div>
            </button>
        )
    }
    
    const unselectedOption = (label: string) => {
        return (
            <button
                onClick={() => setSelectedSeats([...selectedSeats, label])}
                className="flex gap-2.5 items-center">
                <div className="w-4 h-4 border-[1px] border-gray-500 rounded-sm" />
                <div className="text-[16px]">{label}</div>
            </button>
        )
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
                <div className="text-[18px] font-bold pb-2 border-b">좌석</div>
                {seatData.map((seat) => (
                    selectedSeats.includes(seat) ? selectedOption(seat) : unselectedOption(seat)
                ))}
            </div>
            </>
        )}
        </>
    )
}
