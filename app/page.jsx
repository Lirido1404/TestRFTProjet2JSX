import Image from "next/image";
import Link from "next/link"
export default function Home() {
  return (
    <div>
      <div className="bg-blue-500 p-20 flex justify-center items-center">
        Page.jsx
      </div>
      <Link className="bg-purple-500 px-4 py-2 rounded" href={'/Page2'}>
      Go to Page 2
      </Link>
    </div>
  );
}
