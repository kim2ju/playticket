import HomeNav from "../components/HomeNav";
import TicketContainer from "../components/TicketContainer";

const HomePage = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between px-6">
            <HomeNav />
            Home Page
            <TicketContainer />
        </div>
    )
}

export default HomePage;