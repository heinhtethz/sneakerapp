const SearchInput = () => {
  return (
    <div>
      <form className="w-[200px] mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            className=" w-full p-2 ps-10 text-sm text-gray-800 border border-gray-600 rounded-full outline-green-500"
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
