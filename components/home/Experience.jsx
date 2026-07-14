'use client';

import { motion } from 'framer-motion';

const features = [
    {
        number: '01',
        title: 'Friendly Staff',
        text: 'Uniformed attendants who are ready to greet guests, answer questions, and help keep the parking process organized.',
        direction: 'left',
    },
    {
        number: '02',
        title: 'Organized Parking',
        text: 'A simple plan for arrivals, vehicle placement, and departures based on the needs of your event or location.',
        direction: 'right',
    },
    {
        number: '03',
        title: 'Guest-Focused Service',
        text: 'A helpful first and last point of contact designed to make parking easier for you and your guests.',
        direction: 'left',
    },
    {
        number: '04',
        title: 'Dependable Support',
        text: 'Clear communication, prepared attendants, and straightforward service for events, restaurants, venues, and local businesses.',
        direction: 'right',
    },
];

export default function Experience() {
    return (
        <section className="overflow-hidden border-t border-(--color-border) bg-(--color-bg) py-20 sm:py-24 lg:py-30 2xl:py-36">
            <motion.div
                initial={{ opacity: 0, x: -56 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto w-full max-w-384 px-5 sm:px-8 lg:px-10 2xl:px-12"
            >
                <div className="grid gap-12 border-b border-(--color-border) pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pb-24">
                    <div>
                        <div className="mb-8 flex items-center gap-4">
                            <span className="h-px w-12 bg-(--color-accent)" />

                            <p className="text-xs font-black tracking-[0.28em] text-(--color-accent) uppercase">Our Approach</p>
                        </div>

                        <h2 className="max-w-3xl text-5xl leading-[0.95] font-black tracking-[-0.055em] text-(--color-ink) sm:text-6xl lg:text-7xl 2xl:text-8xl">
                            Simple, reliable valet service from start to finish.
                        </h2>
                    </div>

                    <div className="flex items-end lg:justify-end">
                        <p className="max-w-2xl text-base leading-8 font-medium text-(--color-muted) sm:text-lg lg:text-xl lg:leading-9">
                            Prime Valet Parking Services focuses on the basics that matter: showing up prepared, treating guests well, communicating clearly, and helping parking run smoothly.
                        </p>
                    </div>
                </div>

                <div className="divide-y divide-(--color-border)">
                    {features.map((feature) => {
                        const fromLeft = feature.direction === 'left';

                        return (
                            <motion.div
                                key={feature.number}
                                initial={{
                                    opacity: 0,
                                    x: fromLeft ? -64 : 64,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{
                                    duration: 0.75,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="grid gap-8 py-10 sm:py-12 lg:grid-cols-2 lg:gap-16 lg:py-14"
                            >
                                <div className={fromLeft ? '' : 'lg:col-start-2'}>
                                    <div className="grid gap-5 sm:grid-cols-[80px_1fr] sm:gap-8">
                                        <p className="text-sm font-black tracking-[0.22em] text-(--color-accent) uppercase">{feature.number}</p>

                                        <div>
                                            <h3 className="text-3xl leading-none font-black tracking-[-0.04em] text-(--color-ink) sm:text-4xl lg:text-5xl">{feature.title}</h3>

                                            <p className="mt-5 max-w-xl text-base leading-8 font-medium text-(--color-muted)">{feature.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
