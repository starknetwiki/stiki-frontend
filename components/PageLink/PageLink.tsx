import Link from "next/link";
import { ChevronRight } from "react-feather";

interface Props {
  name: string;
  href: string;
}

const PageLink = ({ name, href }: Props) => {
  return (
    <Link href={href} className="">
      <a className="group flex items-center gap-1 hover:text-secondary-200 transition-colors">
        <ChevronRight className="h-4 transition-transform  roup-hover:translate-x-1 scale-0 group-hover:scale-125" />
        {name}
        <ChevronRight className="h-4 transition-transform rotate-180  scale-0 group-hover:scale-125  " />
      </a>
    </Link>
  );
};

export default PageLink;
