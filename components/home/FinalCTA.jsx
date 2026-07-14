'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { businessInfo } from '@/lib/businessInfo';

export default function FinalCTA() {
    return (
        <section className="relative overflow-hidden border-t border-(--color-border) bg-(--color-navy)">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/2 hidden h-full w-px bg-white/8 lg:block" />
                <div className="absolute top-1/2 right-0 left-0 h-px bg-white/8" />
                <div className="absolute top-10 left-10 size-2 bg-(--color-accent) sm:top-12 sm:left-12" />
                <div className="absolute right-10 bottom-10 size-2 bg-(--color-accent) sm:right-12 sm:bottom-12" />
            </div>

            <div className="relative mx-auto w-full max-w-384 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 2xl:px-12 2xl:py-40">
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-5xl text-center"
                >
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-px w-10 origin-right bg-(--color-accent) sm:w-12"
                        />

                        <p className="text-xs font-black tracking-[0.28em] text-(--color-accent) uppercase">Get in Touch</p>

                        <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-px w-10 origin-left bg-(--color-accent) sm:w-12"
                        />
                    </div>

                    <h2 className="text-5xl leading-[0.95] font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl 2xl:text-8xl">Need valet service for your event or location?</h2>

                    <p className="mx-auto mt-8 max-w-3xl text-base leading-8 font-medium text-white/72 sm:text-lg lg:text-xl lg:leading-9">
                        Tell us what you’re planning and we’ll talk through the date, location, guest count, and the type of parking help you need.
                    </p>

                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="group inline-flex min-h-13 items-center justify-center gap-3 border border-(--color-accent) bg-(--color-accent) px-7 py-3.5 text-sm font-black tracking-[0.12em] text-(--color-navy) uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(176,126,74,0.22)]"
                        >
                            <span>Request Service</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>

                    <p className="mt-6 text-sm leading-6 font-medium text-white/52">Serving Los Angeles and surrounding areas.</p>
                </motion.div>
            </div>
        </section>
    );
}
