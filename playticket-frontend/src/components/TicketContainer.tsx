import { EllipsisVerticalIcon } from "@heroicons/react/24/outline"

export default function TicketContainer() {
    return (
        <div className="flex gap-2 my-3">
            <div className="w-[120px] h-[120px] bg-gray-100 rounded-md" />
            <div className="flex-grow h-[120px] flex flex-col justify-center">
                <div className="flex justify-between">
                    <div className="text-[16px] tracking-tighter">뮤지컬 웨스턴 스토리</div>
                    <button>
                        <EllipsisVerticalIcon className="w-[16px] h-[16px] text-gray-400" />
                    </button>
                </div> 
                <div className="text-[12px] text-gray-400 tracking-tighter">5/11 (토) 14:00 | R석 1층 13열 중블 13-16</div>
                <div className="text-[12px] text-gray-400 tracking-tighter">전민지 정욱진 정민 한보라 김승용 박세훈 김현기</div>
                <div className="text-[16px] pt-0.5 pb-2.5 tracking-tighter">직장인 할인 20% 72,400원</div>
                <div className="flex gap-1">
                    <div className="bg-gray-100 text-[10px] py-0.5 px-1.5 rounded-2xl w-fit">#증빙필요</div>
                    <div className="bg-gray-100 text-[10px] py-0.5 px-1.5 rounded-2xl w-fit">#자할가능</div>
                </div>
            </div>
        </div>
    )
}