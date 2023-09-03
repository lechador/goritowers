import Link from "next/link";
import CallModal from "./callModal";

export default function Header() {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="/project">მიმდინარე პროექტი</Link></li>
        <li><Link href="/about">კომპანიის შესახებ</Link></li>
        <li><Link href="/contact">კონტაქტი</Link></li>
      </ul>
    </div>
    <Link href='/' className="btn btn-ghost normal-case text-xl">
      <img src="/logo.png" alt="logo" width={150} />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link href="/project">მიმდინარე პროექტი</Link></li>
    <li><Link href="/about">კომპანიის შესახებ</Link></li>
    <li><Link href="/contact">კონტაქტი</Link></li>
    </ul>
  </div>
  <CallModal />
</div>
  )
}