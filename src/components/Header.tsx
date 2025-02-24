import Link from "next/link";
import SearchInput from "./SearchInput";
import { GoPerson, GoHeart } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  const Links = [
    { name: "Nike", route: "/nike" },
    { name: "Adidas", route: "/adidas" },
    { name: "Puma", route: "/puma" },
    { name: "Converse", route: "/converse" },
  ];

  const Icons = [
    { icon: <GoPerson />, lable: "Account", route: "" },
    { icon: <GoHeart />, lable: "Favourite", route: "" },
    { icon: <FiShoppingBag />, lable: "Shopping Bag", route: "" },
  ];

  return (
    <div className="flex items-center justify-around w-full h-[89px] border-b-2 border-gray-300">
      <div>
        <img src="/logo.svg"></img>
      </div>
      <div className="flex gap-x-3">
        {Links.map((item) => {
          return (
            <Link
              href={item.route}
              key={item.name}
              className="mr-4 font-semibold text-md hover:text-green-500 hover:border-green-500 hover:border-b-2"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex w-[400px]">
        <SearchInput />
        <div className="flex justify-around items-center w-full">
          {Icons.map((item, index) => {
            return (
              <Link href={item.route} key={index}>
                <span className="text-2xl hover:text-green-500">
                  {item.icon}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
