'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const metrics = [
    ['01', 'Uniformed Staff'],
    ['02', 'Lead Oversight'],
    ['03', 'Clean Presentation'],
];

function ParallaxImage({ src, alt, className, imageClassName = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`relative overflow-hidden border border-(--color-border) bg-(--color-navy) ${className}`}
        >
            <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className={`object-cover ${imageClassName}`} />
        </motion.div>
    );
}

export default function Operations() {
    return (
        <section className="overflow-hidden border-t border-(--color-border) bg-(--color-bg) py-20 sm:py-24 lg:py-30 2xl:py-36">
            <div className="mx-auto w-full max-w-384 px-5 sm:px-8 lg:px-10 2xl:px-12">
                <motion.div
                    initial={{ opacity: 0, x: 56 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-12 border-b border-(--color-border) pb-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:pb-24"
                >
                    <div>
                        <div className="mb-8 flex items-center gap-4">
                            <span className="h-px w-12 bg-(--color-accent)" />
                            <p className="text-xs font-black tracking-[0.28em] text-(--color-accent) uppercase">Field Operations</p>
                        </div>

                        <h2 className="max-w-4xl text-5xl leading-[0.95] font-black tracking-[-0.055em] text-(--color-ink) sm:text-6xl lg:text-7xl 2xl:text-8xl">
                            Real staff. Clear presentation. Controlled service.
                        </h2>
                    </div>

                    <div className="flex items-end lg:justify-end">
                        <p className="max-w-2xl text-base leading-8 font-medium text-(--color-muted) sm:text-lg lg:text-xl lg:leading-9">
                            Prime’s visual standard is part of the operation: uniformed attendants, clean positioning, clear guest contact, and lead supervision when the site requires additional
                            control.
                        </p>
                    </div>
                </motion.div>

                <div className="grid gap-5 pt-5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-6 lg:pt-6">
                    <ParallaxImage src="/prime-valet-team.webp" alt="Prime Valet team standing in uniform outside a business" className="aspect-[4/3] lg:aspect-[3/2]" imageClassName="object-center" />

                    <div className="grid gap-5 lg:gap-6">
                        <ParallaxImage src="/prime-valet-leads.webp" alt="Prime Valet lead attendants standing professionally in uniform" className="aspect-4/5" imageClassName="object-center" />

                        <motion.div
                            initial={{ opacity: 0, x: 42 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                            className="border border-(--color-border) bg-(--color-bg) p-6 sm:p-8"
                        >
                            <div className="divide-y divide-(--color-border)">
                                {metrics.map(([number, label]) => (
                                    <div key={number} className="flex items-center justify-between gap-6 py-4 first:pt-0 last:pb-0">
                                        <p className="text-xs font-black tracking-[0.22em] text-(--color-accent) uppercase">{number}</p>

                                        <p className="text-right text-lg leading-none font-black tracking-[-0.03em] text-(--color-ink) sm:text-xl">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
