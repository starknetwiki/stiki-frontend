import Link from "next/link";
import _ from "lodash";
import { ChevronRight } from "react-feather";

const BackToHome = () => {
  return (
    <Link href={"/"} className="">
      <a className="group flex items-center gap-1 hover:text-secondary-200 transition-colors">
        <ChevronRight className="h-4 transition-transform  roup-hover:translate-x-1 scale-0 group-hover:scale-125" />
        Back to home
        <ChevronRight className="h-4 transition-transform rotate-180  scale-0 group-hover:scale-125  " />
      </a>
    </Link>
  );
};

export default BackToHome;
