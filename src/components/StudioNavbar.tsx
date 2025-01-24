import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";
import Logo from "./Logo";

interface StudioNavbarProps {
  renderDefault: (props: any) => JSX.Element;
}

const StudioNavbar = ({ renderDefault }: StudioNavbarProps) => {
  return (
    <div>
      <div className="p-5 bg-black text-gray-100 flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-3 font-semibold hover:text-blue-600 duration-200"
          aria-label="Go to the website homepage"
        >
          <IoReturnDownBack className="text-2xl" />
          Go to Website
        </Link>
        <Logo
          title="Bloggers Studio"
          className="text-2xl hidden md:inline-flex"
        />
        <p className="text-sm">Studio for Blog Content</p>
      </div>
      {renderDefault({})}
    </div>
  );
};

export default StudioNavbar;
