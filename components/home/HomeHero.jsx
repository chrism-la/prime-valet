'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
};

export default function HomeHero() {
    return (
        <section className="relative isolate overflow-hidden bg-(--color-bg) pt-34 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-30 2xl:pt-52 2xl:pb-36">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 h-full w-px bg-(--color-border)" />
                <div className="absolute top-0 left-1/2 hidden h-full w-px bg-(--color-border) lg:block" />
                <div className="absolute top-34 right-0 left-0 h-px bg-(--color-border) sm:top-40 lg:top-44 2xl:top-52" />
            </div>

            <div className="mx-auto grid w-full max-w-384 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 2xl:px-12">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{
                        staggerChildren: 0.12,
                        delayChildren: 0.1,
                    }}
                    className="relative z-10 max-w-4xl"
                >
                    <motion.div
                        variants={fadeUp}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mb-8 flex items-center gap-4"
                    >
                        <span className="h-px w-12 bg-(--color-accent)" />

                        <p className="text-xs font-black tracking-[0.28em] text-(--color-accent) uppercase">Professional Valet Service</p>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-5xl text-5xl leading-[0.95] font-black tracking-[-0.06em] text-(--color-ink) sm:text-7xl lg:text-8xl 2xl:text-9xl"
                    >
                        Reliable valet service for events and local businesses.
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        transition={{
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 max-w-2xl text-base leading-8 font-medium text-(--color-muted) sm:text-lg lg:mt-10 lg:text-xl lg:leading-9"
                    >
                        Prime Valet Parking Services provides friendly, organized parking support for private events, restaurants, venues, and businesses throughout the Los Angeles area.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        transition={{
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-10 flex flex-col gap-3 sm:flex-row"
                    >
                        <Link href="/contact" className="btn-prime btn-primary group">
                            <span>Request Service</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 72 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.9,
                        delay: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mt-16 min-h-96 border-t border-(--color-border) pt-8 lg:mt-0 lg:min-h-160 lg:border-t-0 lg:border-l lg:pl-10 2xl:pl-14"
                >
                    <div className="absolute top-8 right-0 hidden h-px w-32 bg-(--color-accent) lg:block" />

                    <motion.div
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        animate={{ clipPath: 'inset(0 0% 0 0)' }}
                        transition={{
                            duration: 1,
                            delay: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative ml-auto aspect-4/5 w-full max-w-xl overflow-hidden border border-(--color-border) bg-(--color-navy)"
                    >
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{
                                duration: 14,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute inset-0 scale-105 bg-[linear-gradient(135deg,var(--color-ink)_0%,var(--color-navy)_52%,var(--color-charcoal)_100%)]"
                        />

                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[42px_42px] opacity-15" />

                        <div className="absolute top-8 right-8 left-8 flex items-center justify-between border-b border-white/18 pb-5 text-white">
                            <p className="text-xs font-black tracking-[0.24em] uppercase">Prime Valet Parking</p>

                            <span className="size-2 bg-(--color-accent)" />
                        </div>

                        <div className="absolute right-8 bottom-8 left-8">
                            <p className="max-w-md text-3xl leading-[1.05] font-black tracking-[-0.04em] text-white sm:text-4xl">Friendly, reliable parking help for your guests.</p>

                            <div className="mt-8 grid grid-cols-3 border-y border-white/18">
                                {['Events', 'Businesses', 'Restaurants'].map((item) => (
                                    <div key={item} className="border-r border-white/18 py-5 text-center last:border-r-0">
                                        <p className="text-[10px] font-black tracking-[0.16em] text-white/72 uppercase sm:text-xs">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 max-w-sm text-sm leading-6 font-medium text-white/68">
                                Serving Los Angeles and surrounding areas with straightforward valet service for events and local locations.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
