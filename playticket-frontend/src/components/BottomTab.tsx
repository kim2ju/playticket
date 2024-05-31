import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { HomeIcon, CalendarIcon, MagnifyingGlassIcon, ChatBubbleLeftRightIcon, UserIcon } from "@heroicons/react/24/outline";

export default function BottomTab() {
  const [nowMenu, setNowMenu] = useState(0);
  
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == '/') {
      setNowMenu(0);
    } else if (location.pathname == '/calendar') {
      setNowMenu(1);
    } else if (location.pathname == '/search') {
      setNowMenu(2);
    } else if (location.pathname == '/chat') {
      setNowMenu(3);
    } else if (location.pathname == '/myinfo') {
      setNowMenu(4);
    }
  }, [location.pathname])

  return (
    <>
      <Outlet />
      <nav className="w-full h-[70px] fixed -bottom-px z-100 grid grid-rows-1 grid-cols-5 px-[23px] py-2 bg-white shadow-[0px_0px_8px_0px] shadow-[#000000]/10">
        <Link to='/' onClick={() => setNowMenu(0)}>
          <div className="w-full h-full flex flex-col justify-center items-center gap-0.5">
            <HomeIcon className={`w-[28px] h-[28px] ${nowMenu == 0 ? 'text-purple-400' : 'text-black'}`} />
            <p className={`text-[11px] font-semibold leading-normal -tracking-[0.165] ${nowMenu == 0 ? 'text-purple-400' : 'text-black'}`}>
              홈
            </p>
          </div>
        </Link>
        <Link to='/calendar' onClick={() => setNowMenu(1)}>
          <div className="w-full h-full flex flex-col justify-center items-center gap-0.5">
            <CalendarIcon className={`w-[28px] h-[28px] ${nowMenu == 1 ? 'text-purple-400' : 'text-black'}`} />
            <p className={`text-[11px] font-semibold leading-normal -tracking-[0.165] ${nowMenu == 1 ? 'text-purple-400' : 'text-black'}`}>
              달력
            </p>
          </div>
        </Link>
        <Link to='/search' onClick={() => setNowMenu(2)}>
          <div className="w-full h-full flex flex-col justify-center items-center gap-0.5">
            <MagnifyingGlassIcon className={`w-[28px] h-[28px] ${nowMenu == 2 ? 'text-purple-400' : 'text-black'}`} />
            <p className={`text-[11px] font-semibold leading-normal -tracking-[0.165] ${nowMenu == 2 ? 'text-purple-400' : 'text-black'}`}>
              검색
            </p>
          </div>
        </Link>
        <Link to='/chat' onClick={() => setNowMenu(3)}>
          <div className="w-full h-full flex flex-col justify-center items-center gap-0.5">
            <ChatBubbleLeftRightIcon className={`w-[28px] h-[28px] ${nowMenu == 3 ? 'text-purple-400' : 'text-black'}`} />
            <p className={`text-[11px] font-semibold leading-normal -tracking-[0.165] ${nowMenu == 3 ? 'text-purple-400' : 'text-black'}`}>
              채팅
            </p>
          </div>
        </Link>
        <Link to='/myinfo' onClick={() => setNowMenu(4)}>
          <div className="w-full h-full flex flex-col justify-center items-center gap-0.5">
            <UserIcon className={`w-[28px] h-[28px] ${nowMenu == 4 ? 'text-purple-400' : 'text-black'}`} />
            <p className={`text-[11px] font-semibold leading-normal -tracking-[0.165] ${nowMenu == 4 ? 'text-purple-400' : 'text-black'}`}>
              나의 정보
            </p>
          </div>
        </Link>
      </nav>
    </>
  )
}
