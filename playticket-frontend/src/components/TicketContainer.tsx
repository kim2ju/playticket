import { EllipsisVerticalIcon } from "@heroicons/react/24/outline"
import TicketContainerModal from "./TicketContainerModal"
import { useState } from "react";
import { TicketContainerProps } from "../types";

export default function TicketContainer({data} : {data: TicketContainerProps}) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
    return (
        <>
        <div className="flex gap-2 my-3">
            <div className="w-[120px] h-[120px] bg-gray-100 rounded-md" />
            <div className="flex-grow h-[120px] flex flex-col justify-center">
                <div className="flex justify-between">
                    <div className="text-[16px] tracking-tighter">{data.type} {data.title}</div>
                    <button onClick={() => setIsModalOpen(true)}>
                        <EllipsisVerticalIcon className="w-[16px] h-[16px] text-gray-400" />
                    </button>
                </div> 
                <div className="text-[12px] text-gray-400 tracking-tighter">{data.datetime} | {data.seatRank} {data.seat}</div>
                <div className="text-[12px] text-gray-400 tracking-tighter">{data.cast}</div>
                <div className="text-[16px] pt-0.5 pb-2.5 tracking-tighter">
                    {data.discountName} {data.discountRate}%{data.additionalDiscount > 0 && ' + 자할'} {new Intl.NumberFormat().format(data.discountPrice)}원
                </div>
                <div className="flex gap-1">
                    {data.tags.map((tag, index) => (
                        <div key={index} className="bg-gray-100 text-[10px] py-0.5 px-1.5 rounded-2xl w-fit">#{tag}</div>
                    ))}
                </div>
            </div>
        </div>
        <TicketContainerModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    )
}