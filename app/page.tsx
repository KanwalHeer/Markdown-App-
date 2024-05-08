
import Link from "next/link";
export default function Home() {
  return (
    <div>
    <h1 className="mainHeading">My counter App</h1>
    <Link href={"/counter"}><li><a>My Counter App</a></li></Link>
    </div>
  );
}
