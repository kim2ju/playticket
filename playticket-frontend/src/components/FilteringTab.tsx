import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import GenreFilterModal from "./filteringModal/GenreFilterModal";

export default function FilteringTab() {
    const [isGenreModalOpen, setIsGenreModalOpen] = useState<boolean>(false);
    const [selectedGenres, setSelectedGenres] = useState<string>('전체');

    const filterings = [
        {
            name: '전체',
            onClick: () => {setIsGenreModalOpen(true)}
        },
        {
            name: '날짜',
            onClick: () => {}
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
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres} />
        </>
    )
}