import Link from "next/link";
import _ from "lodash";

const BackToHome = () => {
  return (
    <Link href={"/"} className="">
      <a className=" ">Back to Home</a>
    </Link>
  );
};

export default BackToHome;
