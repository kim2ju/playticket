import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function TicketWriteNav() {
    const navigate = useNavigate(); 

    return (
        <nav className="fixed w-full h-[52px] flex items-center justify-start bg-white px-4 border-b gap-4">
            <button onClick={() => navigate(-1)}>
                <ChevronLeftIcon className="w-[24px] h-[24px]" />
            </button>
            <div className="text-[16px]">티켓 양도하기</div>
        </nav>
    )
}