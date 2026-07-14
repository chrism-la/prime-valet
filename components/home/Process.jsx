'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Contact Us',
        text: 'Share the date, location, event type, and an estimate of how many guests or vehicles you expect.',
    },
    {
        number: '02',
        title: 'Talk It Through',
        text: 'We’ll go over the details, answer your questions, and discuss what kind of valet setup makes sense.',
    },
    {
        number: '03',
        title: 'Get Ready',
        text: 'Our attendants arrive in uniform with the information needed for your event or location.',
    },
    {
        number: '04',
        title: 'Provide Service',
        text: 'We greet guests, park vehicles, and help departures move as smoothly as possible.',
    },
];

export default function Process() {
    return (
        <section className="overflow-hidden border-t border-(--color-border) bg-(--color-bg) py-20 sm:py-24 lg:py-30 2xl:py-36">
            <div className="mx-auto w-full max-w-384 px-5 sm:px-8 lg:px-10 2xl:px-12">
                <motion.div
                    initial={{ opacity: 0, x: -56 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="grid gap-12 border-b border-(--color-border) pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:pb-24"
                >
                    <div>
                        <div className="mb-8 flex items-center gap-4">
                            <span className="h-px w-12 bg-(--color-accent)" />

                            <p className="text-xs font-black tracking-[0.28em] text-(--color-accent) uppercase">How It Works</p>
                        </div>

                        <h2 className="max-w-4xl text-5xl leading-[0.95] font-black tracking-[-0.055em] text-(--color-ink) sm:text-6xl lg:text-7xl 2xl:text-8xl">
                            A simple process from first conversation to event day.
                        </h2>
                    </div>

                    <div className="flex items-end lg:justify-end">
                        <p className="max-w-2xl text-base leading-8 font-medium text-(--color-muted) sm:text-lg lg:text-xl lg:leading-9">
                            We keep planning straightforward. Tell us what you need, review the details with us, and we’ll work with you to prepare for the day.
                        </p>
                    </div>
                </motion.div>

                <div className="relative">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                            duration: 1.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute top-18 left-0 hidden h-px w-full origin-left bg-(--color-border) lg:block"
                    />

                    <div className="grid divide-y divide-(--color-border) lg:grid-cols-4 lg:divide-x lg:divide-y-0">
                        {steps.map((step, index) => (
                            <motion.article
                                key={step.number}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -42 : 42,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group relative min-h-86 px-0 py-10 sm:py-12 lg:px-8 lg:py-14"
                            >
                                <div className="relative z-10 flex h-full flex-col justify-between">
                                    <div>
                                        <div className="mb-14 flex items-center justify-between gap-6">
                                            <p className="text-xs font-black tracking-[0.24em] text-(--color-accent) uppercase">{step.number}</p>

                                            <div className="flex size-11 items-center justify-center border border-(--color-border) bg-(--color-bg) transition-transform duration-300 group-hover:translate-x-2">
                                                <span className="text-lg leading-none text-(--color-accent)">→</span>
                                            </div>
                                        </div>

                                        <h3 className="text-4xl leading-none font-black tracking-[-0.045em] text-(--color-ink) sm:text-5xl lg:text-4xl xl:text-5xl">{step.title}</h3>
                                    </div>

                                    <p className="mt-10 max-w-sm text-base leading-8 font-medium text-(--color-muted)">{step.text}</p>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-(--color-accent) transition-transform duration-500 group-hover:scale-x-100 lg:origin-left" />
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
