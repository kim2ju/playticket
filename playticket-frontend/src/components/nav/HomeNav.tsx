import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Logo from "../Logo";
import { Link } from "react-router-dom";

export default function HomeNav() {
    return (
        <nav className="fixed w-full h-[52px] flex items-center justify-between bg-white px-4 border-b">
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