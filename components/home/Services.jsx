'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
    {
        number: '01',
        title: 'Private Events',
        text: 'Controlled arrivals and departures for weddings, private parties, galas, and milestone events.',
    },
    {
        number: '02',
        title: 'Restaurants',
        text: 'Professional curbside valet support designed to improve guest flow and protect the first impression.',
    },
    {
        number: '03',
        title: 'Hotels & Hospitality',
        text: 'Reliable valet staffing for hospitality properties that require consistency, presentation, and care.',
    },
    {
        number: '04',
        title: 'Corporate Functions',
        text: 'Organized parking operations for executive meetings, brand activations, office events, and company gatherings.',
    },
    {
        number: '05',
        title: 'Venues',
        text: 'Scalable valet coordination for venues, lounges, banquet halls, and high-traffic event locations.',
    },
    {
        number: '06',
        title: 'Executive Properties',
        text: 'Discreet, polished valet support for private residences, estates, and premium property environments.',
    },
];

export default function Services() {
    return (
        <section className="overflow-hidden border-t border-(--color-border) bg-(--color-navy) text-white">
            <div className="mx-auto w-full max-w-384 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-30 2xl:px-12 2xl:py-36">
                <motion.div
                    initial={{ opacity: 0, x: 56 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:pb-24"
                >
                    <div>
                        <div className="mb-8 flex items-center gap-4">
                            <span className="h-px w-12 bg-(--color-accent)" />
                            <p className="text-xs font-black tracking-[0.28em] text-(--color-accent) uppercase">Services</p>
                        </div>

                        <h2 className="max-w-4xl text-5xl leading-[0.95] font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl 2xl:text-8xl">Valet coverage built for controlled movement.</h2>
                    </div>

                    <div className="flex items-end lg:justify-end">
                        <p className="max-w-2xl text-base leading-8 font-medium text-white/68 sm:text-lg lg:text-xl lg:leading-9">
                            Prime supports locations where timing, presentation, and traffic flow matter. Each service is structured around clean communication, trained attendants, and a precise
                            arrival-to-departure system.
                        </p>
                    </div>
                </motion.div>

                <div className="grid border-b border-white/15 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.number}
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative min-h-72 overflow-hidden border-t border-white/15 py-9 sm:py-10 lg:border-r lg:px-8 lg:last:border-r-0 xl:min-h-80"
                        >
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.15 + index * 0.05,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute top-0 left-0 h-px w-full origin-left bg-(--color-accent)"
                            />

                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div>
                                    <div className="mb-12 flex items-start justify-between gap-6">
                                        <p className="text-xs font-black tracking-[0.22em] text-(--color-accent) uppercase">{service.number}</p>

                                        <div className="flex size-11 items-center justify-center border border-white/18 transition-transform duration-300 group-hover:-translate-y-2">
                                            <span className="text-lg leading-none text-(--color-accent)">→</span>
                                        </div>
                                    </div>

                                    <h3 className="max-w-sm text-3xl leading-none font-black tracking-[-0.04em] sm:text-4xl">{service.title}</h3>
                                </div>

                                <p className="mt-10 max-w-sm text-sm leading-7 font-medium text-white/62 sm:text-base sm:leading-8">{service.text}</p>
                            </div>

                            <div className="absolute inset-0 translate-y-full bg-white/4 transition-transform duration-500 ease-out group-hover:translate-y-0" />
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -42 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col gap-8 pt-12 sm:pt-14 lg:flex-row lg:items-center lg:justify-between"
                >
                    <p className="max-w-2xl text-base leading-8 font-medium text-white/66">
                        Need valet service for a specific venue, private property, or event format? Prime can structure staffing and flow around your location.
                    </p>

                    <Link href="/contact" className="btn-prime btn-primary group w-fit">
                        <span>Plan Service</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
