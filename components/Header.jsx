import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  ChevronDownIcon
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="sticky top-0 flex bg-white z-50 shadow-md items-center lg:px-5">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="http://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-5 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none 
            placeholder-gray-100 flex-shrink"
            type="text"
            placeholder="Search FaceBook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end sm:space-x-2">
        {/* Profile Pic */}
        <p className="whitespace-nowrap font-semibold pr-3">Suresh Koochana</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
