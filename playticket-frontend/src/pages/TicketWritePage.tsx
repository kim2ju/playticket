import { useState } from "react";
import TicketWriteNav from "../components/nav/TicketWriteNav";
import { collection, addDoc } from "firebase/firestore"; 
import { db, storage } from "../utils/fbase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const TicketWritePage = () => {
    const [genre, setGenre] = useState('');
    const [title, setTitle] = useState('');
    const [datetime, setDatetime] = useState('');
    const [seatRank, setSeatRank] = useState('');
    const [seat, setSeat] = useState('');
    const [seatImg, setSeatImg] = useState<string | Blob>('' as unknown as Blob);
    const [cast, setCast] = useState('');
    const [discount, setDiscount] = useState('');
    const [price, setPrice] = useState('');
    const [tags, setTags] = useState<string []>([]);
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log({genre, title, datetime, seatRank, seat, seatImg, cast, discount, price, tags, description});

        try {
            const storageRef = ref(storage, `${uuidv4()}`);
            await uploadBytesResumable(storageRef, seatImg as Blob).then((uploadTaskSnapshot) => {
                console.log('Uploaded a blob or file!');
                getDownloadURL(uploadTaskSnapshot.ref).then((downloadURL) => {
                    addDoc(collection(db, "tickets"), {
                        genre: genre,
                        title: title,
                        datetime: datetime,
                        seatRank: seatRank,
                        seat: seat,
                        seatImg: downloadURL,
                        cast: cast,
                        discount: discount,
                        price: price,
                        tags: tags,
                        description: description
                    });
                });
            });
            alert("성공적으로 등록되었습니다.")
        } catch (e) {
            alert("등록에 실패했습니다.")
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <TicketWriteNav />
            <div className="mt-[64px] mb-[50px] px-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-[14px] text-gray-700">공연 장르</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-lg"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            placeholder="뮤지컬, 연극"
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[14px] text-gray-700">공연 제목</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-lg"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[14px] text-gray-700">날짜와 시간</label>
                        <input
                            type="datetime-local"
                            className="w-full mt-1 p-2 border rounded-lg"
                            value={datetime}
                            onChange={(e) => setDatetime(e.target.value)}
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[14px] text-gray-700">좌석 등급</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                className="w-2/3 mt-1 p-2 border rounded-lg"
                                value={seatRank}
                                onChange={(e) => setSeatRank(e.target.value)}
                                placeholder="VIP, R, S, A, B"
                                required />
                            <div className="text-[16px]">석</div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-[14px] text-gray-700">좌석</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-lg"
                            value={seat}
                            onChange={(e) => setSeat(e.target.value)}
                            placeholder="1층 M열 중블 9-12"
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[14px] text-gray-700">좌석 사진</label>
                        <input
                            type="file"
                            className="w-full mt-1 p-2 border rounded-lg"
                            value={seatImg as string | undefined}
                            onChange={(e) => setSeatImg(e.target.value)}
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[14px] text-gray-700">캐스팅</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-lg"
                            value={cast}
                            onChange={(e) => setCast(e.target.value)}
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[14px] text-gray-700">할인명</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-lg"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            placeholder="예) 청소년 할인"
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[14px] text-gray-700">가격</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                className="w-2/3 mt-1 p-2 border rounded-lg"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required />
                            <div className="text-[16px]">원</div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-[14px] text-gray-700">태그</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-lg"
                            value={tags}
                            onChange={(e) => setTags(e.target.value.split(','))}
                            placeholder="(선택) ', '로 구분하여 적어주세요" />
                        <div className="flex gap-1 mt-1">
                            {tags.map((tag, index) => (
                                <div key={index} className="bg-gray-100 text-[10px] py-0.5 px-1.5 rounded-2xl w-fit">#{tag}</div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-[14px] text-gray-700">설명</label>
                        <textarea
                            className="w-full mt-1 p-2 border rounded-lg"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-400">
                        <div className="text-[16px]">등록</div>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TicketWritePage;