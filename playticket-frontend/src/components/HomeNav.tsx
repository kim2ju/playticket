import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function HomeNav() {
    return (
        <nav className="w-full h-[50px] flex items-center justify-between bg-white ">
            <Logo />
            <div className="flex items-center gap-4">
                <Link to="/search">
                    <MagnifyingGlassIcon className="w-[24px] h-[24px]" />
                </Link>
                <Link to="/notification">
                    <BellIcon className="w-[24px] h-[24px]" />
                </Link>
            </div>
        </nav>
    )
}