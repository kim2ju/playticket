import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import GenreFilterModal from "./filteringModal/GenreFilterModal";
import DateFilterModal from "./filteringModal/DateFilterModal";
import ActorFilterModal from "./filteringModal/ActorFilterModal";
import SeatFilterModal from "./filteringModal/SeatFilterModal";

export default function FilteringTab() {
    const [isGenreModalOpen, setIsGenreModalOpen] = useState<boolean>(false);
    const [isDateModalOpen, setIsDateModalOpen] = useState<boolean>(false);
    const [isActorModalOpen, setIsActorModalOpen] = useState<boolean>(false);
    const [isSeatModalOpen, setIsSeatModalOpen] = useState<boolean>(false);
    const [selectedGenre, setSelectedGenre] = useState<string>('전체');
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedActors, setSelectedActors] = useState<string[]>([]);
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

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
            name: selectedActors.length === 0 ? '배우' : selectedActors.slice(0,2).join(', ') + (selectedActors.length > 2 ? ` 외 ${selectedActors.length - 2}명` : ''),
            onClick: () => {setIsActorModalOpen(true)}
        },
        {
            name: selectedSeats.length === 0 ? '좌석' : selectedSeats.slice(0,2).join(', ') + (selectedSeats.length > 2 ? ` 외 ${selectedSeats.length - 2}개` : ''),
            onClick: () => {setIsSeatModalOpen(true)}
        },
        {
            name: '가격',
            onClick: () => {}
        }
    ];

    return (
        <>
        <div className="flex gap-3 items-center px-6 mt-3 mb-4 overflow-scroll scrollbar-hide">
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
        <ActorFilterModal
            isModalOpen={isActorModalOpen}
            setIsModalOpen={setIsActorModalOpen}
            selectedActors={selectedActors}
            setSelectedActors={setSelectedActors} />
        <SeatFilterModal
            isModalOpen={isSeatModalOpen}
            setIsModalOpen={setIsSeatModalOpen}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats} />
        </>
    )
}