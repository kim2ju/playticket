import { CheckIcon } from "@heroicons/react/24/outline"

export default function GenreFilterModal({isModalOpen, setIsModalOpen, selectedGenres, setSelectedGenres} : 
    {isModalOpen: boolean, setIsModalOpen: (isModalOpen: boolean) => void, selectedGenres: string, setSelectedGenres: (selectedGenres: string) => void}) {
    const selectedOption = (label: string) => {
        return (
            <button className="flex gap-2.5 items-center">
                <CheckIcon className="w-[16px] h-[16px] text-purple-500" />
                <div className="text-[16px] text-purple-500">{label}</div>
            </button>
        )
    }
    
    const unselectedOption = (label: string) => {
        return (
            <button
                onClick={() => setSelectedGenres(label)}
                className="flex gap-2.5 items-center">
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
                <div className="text-[18px] font-bold pb-2 border-b">장르</div>
                {selectedGenres == '전체' ? selectedOption('전체') : unselectedOption('전체')}
                {selectedGenres == '뮤지컬' ? selectedOption('뮤지컬') : unselectedOption('뮤지컬')}
                {selectedGenres == '연극' ? selectedOption('연극') : unselectedOption('연극')}
            </div>
            </>
        )}
        </>
    )
}
