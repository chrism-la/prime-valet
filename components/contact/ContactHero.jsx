'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
    return (
        <section className="overflow-hidden border-b border-(--color-border) bg-(--color-bg) pt-34 pb-18 sm:pt-40 sm:pb-22 lg:pt-44 lg:pb-26 2xl:pt-50 2xl:pb-30">
            <div className="mx-auto w-full max-w-384 px-5 sm:px-8 lg:px-10 2xl:px-12">
                <motion.div
                    initial={{ opacity: 0, x: -48 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20"
                >
                    <div>
                        <div className="mb-8 flex items-center gap-4">
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.15,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="h-px w-12 origin-left bg-(--color-accent)"
                            />

                            <p className="text-xs font-black tracking-[0.28em] text-(--color-accent) uppercase">Contact</p>
                        </div>

                        <h1 className="max-w-5xl text-5xl leading-[0.95] font-black tracking-[-0.055em] text-(--color-ink) sm:text-7xl lg:text-8xl 2xl:text-9xl">Let’s talk about your event.</h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 48 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="border-t border-(--color-border) pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
                    >
                        <p className="max-w-2xl text-base leading-8 font-medium text-(--color-muted) sm:text-lg lg:text-xl lg:leading-9">
                            Tell us a little about your event, business, or location. We’ll answer your questions and help you figure out the right valet setup.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <span className="size-2 bg-(--color-accent)" />

                            <p className="text-xs font-black tracking-[0.2em] text-(--color-ink) uppercase">Serving the Los Angeles area</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
