import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { businessInfo, navLinks, services } from '@/lib/businessInfo';

export default function Footer() {
    return (
        <footer className="bg-(--color-navy) text-white">
            <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-10 md:py-18 lg:px-16 2xl:max-w-384 2xl:px-20">
                <div className="grid gap-10 border-b border-white/12 pb-12 lg:grid-cols-[1fr_1.25fr] lg:items-end">
                    <div>
                        <div className="relative mb-7 h-15 w-48">
                            <Image src="/prime-logo.png" alt={`${businessInfo.name} logo`} fill sizes="192px" className="object-contain object-left" />
                        </div>

                        <p className="max-w-xl text-lg leading-8 text-white/72">
                            Precision valet parking services for restaurants, private events, corporate gatherings, and hospitality operations throughout Los Angeles.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center lg:items-end lg:text-right">
                        <p className="mb-6 text-xs font-black tracking-[0.24em] text-(--color-accent-soft) uppercase">Ready for Service</p>

                        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                            <Link href="/contact" className="btn-prime btn-primary border-(--color-accent)">
                                Get Service
                            </Link>

                            <a href={businessInfo.phoneHref} className="btn-prime border border-white/18 text-white hover:border-(--color-accent-soft) hover:text-(--color-accent-soft)">
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid gap-10 pt-10 md:grid-cols-2 lg:grid-cols-[1fr_1.1fr]">
                    <div className="grid gap-8 sm:grid-cols-2">
                        <div>
                            <h4 className="mb-5 text-xs font-black tracking-[0.22em] text-(--color-accent-soft) uppercase">Services</h4>

                            <ul className="space-y-3.5">
                                {services.slice(0, 5).map((service) => (
                                    <li key={service} className="text-sm text-white/70">
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
                        <a href={businessInfo.mapHref} target="_blank" className="group flex flex-col items-center text-center">
                            <MapPin size={20} className="mb-5 text-(--color-accent-soft) transition-transform duration-300 group-hover:-translate-y-1" />
                            <span className="text-sm leading-7 text-white/70 transition-colors duration-300 group-hover:text-white">
                                {businessInfo.addressLineOne}
                                <br />
                                {businessInfo.addressLineTwo}
                            </span>
                        </a>

                        <a href={businessInfo.phoneHref} className="group flex flex-col items-center text-center">
                            <Phone size={20} className="mb-5 text-(--color-accent-soft) transition-transform duration-300 group-hover:-translate-y-1" />
                            <span className="text-sm leading-7 text-white/70 transition-colors duration-300 group-hover:text-white">{businessInfo.phone}</span>
                        </a>

                        <a href={businessInfo.emailHref} className="group flex flex-col items-center text-center">
                            <Mail size={20} className="mb-5 text-(--color-accent-soft) transition-transform duration-300 group-hover:-translate-y-1" />
                            <span className="break-all text-sm leading-7 text-white/70 transition-colors duration-300 group-hover:text-white">{businessInfo.email}</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
