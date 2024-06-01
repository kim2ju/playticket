import HomeNav from "../components/HomeNav";
import TicketContainer from "../components/TicketContainer";
import TicketContainerData from "../data/TicketContainerData.json";
import { TicketContainerProps } from "../types";

const data = TicketContainerData.data;

const HomePage = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <HomeNav />
            <div className="px-6 mt-[52px] mb-[70px]">
            {data.map((item : TicketContainerProps, index : number) => (
                <>
                    <TicketContainer key={index} data={item} />
                    <div className="h-[1px] bg-gray-100" />
                </>
            ))}
            </div>
        </div>
    )
}

export default HomePage;