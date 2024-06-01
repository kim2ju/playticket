import { CheckIcon } from "@heroicons/react/16/solid"

const actorData = [
    '박새힘',
    '박은석',
    '박정복',
    '이지연',
    '전민지',
    '정가희',
    '정민',
    '정욱진',
    '최재웅',
    '한보라',
];

export default function ActorFilterModal({isModalOpen, setIsModalOpen, selectedActors, setSelectedActors} : 
    {isModalOpen: boolean, setIsModalOpen: (isModalOpen: boolean) => void, selectedActors: string[], setSelectedActors: (selectedActors: string[]) => void}) {
    const selectedOption = (label: string) => {
        return (
            <button
                onClick={() => setSelectedActors(selectedActors.filter(actor => actor !== label))}
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
                onClick={() => setSelectedActors([...selectedActors, label])}
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
                <div className="text-[18px] font-bold pb-2 border-b">배우</div>
                {actorData.map((actor) => (
                    selectedActors.includes(actor) ? selectedOption(actor) : unselectedOption(actor)
                ))}
            </div>
            </>
        )}
        </>
    )
}
