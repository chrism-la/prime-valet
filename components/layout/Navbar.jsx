'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { businessInfo, navLinks } from '@/lib/businessInfo';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-(--color-border) bg-(--color-bg)/94 backdrop-blur-md">
            <div className="mx-auto flex h-22 w-full max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16 2xl:max-w-384 2xl:px-20">
                <Link href="/" onClick={() => setOpen(false)} className="relative block h-13 w-40 md:h-15 md:w-48">
                    <Image src="/prime-logo.png" alt={`${businessInfo.name} logo`} fill priority sizes="(max-width: 768px) 160px, 192px" className="object-contain object-left" />
                </Link>

                <nav className="hidden items-center gap-9 md:flex">
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href} className="group py-3">
                            <span className="text-[0.82rem] font-bold tracking-[0.15em] text-(--color-text-muted) uppercase transition-colors duration-300 group-hover:text-(--color-accent)">
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-5 lg:flex">
                    <a
                        href={businessInfo.phoneHref}
                        className="group flex items-center gap-2 text-sm font-bold tracking-wider text-(--color-text) transition-colors duration-300 hover:text-(--color-accent)"
                    >
                        <Phone size={16} className="text-(--color-accent) transition-transform duration-300 group-hover:-rotate-12" />
                        {businessInfo.phone}
                    </a>

                    <Link href="/contact" className="btn-prime btn-primary">
                        Get Service
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((current) => !current)}
                    className="inline-flex size-11 items-center justify-center border border-(--color-border-strong) text-(--color-text) transition-colors duration-300 hover:border-(--color-accent) hover:text-(--color-accent) md:hidden"
                    aria-label="Toggle navigation menu"
                >
                    {open ? <X size={21} /> : <Menu size={21} />}
                </button>
            </div>

            {open && (
                <div className="border-t border-(--color-border) bg-(--color-bg) px-6 py-7 md:hidden">
                    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="group border-b border-(--color-border) pb-5">
                                <span className="text-lg font-bold tracking-[0.08em] text-(--color-text) uppercase transition-colors duration-300 group-hover:text-(--color-accent)">{link.label}</span>
                            </Link>
                        ))}

                        <a href={businessInfo.phoneHref} className="flex items-center gap-3 text-base font-bold text-(--color-text)">
                            <Phone size={18} className="text-(--color-accent)" />
                            {businessInfo.phone}
                        </a>

                        <Link href="/contact" onClick={() => setOpen(false)} className="btn-prime btn-primary w-full">
                            Get Service
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
