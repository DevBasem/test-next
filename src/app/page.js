import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="text-blue-600 hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
