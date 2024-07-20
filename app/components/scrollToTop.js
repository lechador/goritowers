'use client'
import Link from 'next/link';
import Image from 'next/image';

export default function ScrollToTop({locale}) {
    return (
        <Link href={`/${locale}`} className="btn btn-ghost normal-case text-xl">
            <Image src="/logo.png" alt="logo" width={150} height={50} />
        </Link>
    )
}
