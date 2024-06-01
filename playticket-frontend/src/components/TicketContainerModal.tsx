import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function TicketContainerModal({isModalOpen, setIsModalOpen} : {isModalOpen: boolean, setIsModalOpen: (isModalOpen: boolean) => void}) {
    return (
        <>
        {isModalOpen && (
            <>
            <div 
                onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-30">
            </div>
            <div className="fixed left-0 bottom-0 w-full pt-11 pb-6 px-6 flex flex-col gap-4 bg-white rounded-t-[28px] z-40">
                <button className="flex gap-2.5 items-center">
                    <PencilSquareIcon className="w-[24px] h-[24px]" />
                    <div className="text-[16px]">수정하기</div>
                </button>
                <button className="flex gap-2.5 items-center text-red-500">
                    <XMarkIcon className="w-[24px] h-[24px]" />
                    <div className="text-[16px]">삭제하기</div>
                </button>
            </div>
            </>
        )}
        </>
    )
}
