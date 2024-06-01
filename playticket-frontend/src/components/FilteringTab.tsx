import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import GenreFilterModal from "./filteringModal/GenreFilterModal";
import DateFilterModal from "./filteringModal/DateFilterModal";

export default function FilteringTab() {
    const [isGenreModalOpen, setIsGenreModalOpen] = useState<boolean>(false);
    const [isDateModalOpen, setIsDateModalOpen] = useState<boolean>(false);
    const [selectedGenre, setSelectedGenre] = useState<string>('전체');
    const [selectedDate, setSelectedDate] = useState<string>('');

    const filterings = [
        {
            name: selectedGenre,
            onClick: () => {setIsGenreModalOpen(true)}
        },
        {
            name: selectedDate == '' ? '날짜' : selectedDate,
            onClick: () => {setIsDateModalOpen(true)}
        },
        {
            name: '배우',
            onClick: () => {}
        },
        {
            name: '좌석',
            onClick: () => {}
        },
        {
            name: '가격',
            onClick: () => {}
        }
    ];

    return (
        <>
        <div className="flex gap-3 items-center px-6 my-3 overflow-scroll scrollbar-hide">
            {filterings.map((filtering, index) => (
                <button 
                    key={index}
                    onClick={filtering.onClick}
                    className="flex items-center min-w-fit bg-gray-100 pl-[18px] pr-3 py-1 rounded-2xl gap-2.5">
                    <div className="text-[14px]">{filtering.name}</div>
                    <ChevronDownIcon className="w-[16px] h-[16px]" />
                </button>
            ))}
        </div>
        <GenreFilterModal
            isModalOpen={isGenreModalOpen}
            setIsModalOpen={setIsGenreModalOpen}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre} />
        <DateFilterModal
            isModalOpen={isDateModalOpen}
            setIsModalOpen={setIsDateModalOpen}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate} />
        </>
    )
}