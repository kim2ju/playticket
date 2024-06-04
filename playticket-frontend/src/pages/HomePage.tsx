import { PlusIcon } from "@heroicons/react/24/solid";
import FilteringTab from "../components/FilteringTab";
import HomeNav from "../components/nav/HomeNav";
import TicketContainer from "../components/TicketContainer";
import { TicketContainerProps } from "../types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../utils/fbase";
import { getDocs, query, collection, orderBy } from "firebase/firestore";

const HomePage = () => {
    const[data, setData] = useState<TicketContainerProps[]>([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const q = query(collection(db, "tickets"), orderBy("createdAt", "desc"));
        const newData: TicketContainerProps[] = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            return newData.push(doc.data() as TicketContainerProps);
        });
        console.log(newData);
        setData(newData);
    }

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <HomeNav />
            <div className="mt-[52px] mb-[70px]">
                <FilteringTab />
                {data.map((item : TicketContainerProps, index : number) => (
                    <>
                        <TicketContainer key={index} data={item} />
                        <div className="h-[1px] bg-gray-100 mx-6" />
                    </>
                ))}
            </div>
            <Link to="/ticket-write">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 fixed bottom-[86px] right-4 shadow-lg shadow-stone-400">
                    <PlusIcon className="w-[24px] h-[24px] text-white" />
                </div>
            </Link>
        </div>
    )
}

export default HomePage;