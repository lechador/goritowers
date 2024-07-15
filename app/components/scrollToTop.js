'use client'
import Link from 'next/link';
import Image from 'next/image';

export default function ScrollToTop() {

    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
    };
    return (
        <div onClick={handleClick}>
            <Link href="/" passHref className="btn btn-ghost normal-case text-xl">
                <Image src="/logo.png" alt="logo" width={150} height={50} />
            </Link>
        </div>
    )
}
