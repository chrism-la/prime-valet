'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { businessInfo } from '@/lib/businessInfo';

export default function FinalCTA() {
    return (
        <section className="overflow-hidden border-t border-(--color-border) bg-(--color-navy)">
            <div className="mx-auto w-full max-w-384 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 2xl:px-12 2xl:py-40">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-5xl text-center"
                >
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <span className="h-px w-12 bg-(--color-accent)" />
                        <p className="text-xs font-black tracking-[0.28em] text-(--color-accent) uppercase">Let's Get Started</p>
                        <span className="h-px w-12 bg-(--color-accent)" />
                    </div>

                    <h2 className="text-5xl leading-[0.95] font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl 2xl:text-8xl">Ready to elevate your guest arrival experience?</h2>

                    <p className="mx-auto mt-8 max-w-3xl text-base leading-8 font-medium text-white/70 sm:text-lg lg:text-xl lg:leading-9">
                        Whether you're planning a private event, managing a restaurant, operating a venue, or coordinating a corporate function, Prime Valet is ready to deliver organized, professional
                        valet service tailored to your location.
                    </p>

                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/contact" className="btn-prime btn-primary group">
                            <span>Request Service</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>

                        <a
                            href={businessInfo.phoneHref}
                            className="btn-prime border border-white/20 text-white transition-all duration-300 hover:border-(--color-accent) hover:-translate-y-0.5 hover:text-(--color-accent)"
                        >
                            {businessInfo.phone}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
