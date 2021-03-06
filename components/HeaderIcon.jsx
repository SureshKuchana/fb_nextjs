function HeaderIcon({ Icon, active }) {
  return (
    <div
      className="flex items-center cursor-pointer md:px-10
     md:hover:bg-gray-100 sm:h-14
       rounded-xl active:border-b-2 active:border-blue-500 group"
    >
      <Icon
        className={`h-5 ${
          active && "text-blue-500"
        } group-hover:text-blue-500 text-center sm:h-7 mx-auto`}
      />
    </div>
  );
}

export default HeaderIcon;
