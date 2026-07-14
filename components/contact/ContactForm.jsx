'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { businessInfo } from '@/lib/businessInfo';

const inputStyles = 'w-full border-b bg-transparent px-0 py-4 text-base font-medium text-(--color-ink) outline-none transition-colors duration-300 placeholder:text-(--color-muted)';

const initialValues = {
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    location: '',
    message: '',
};

export default function ContactForm() {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);

    function handleChange(event) {
        const { name, value } = event.target;

        setValues((current) => ({
            ...current,
            [name]: value,
        }));

        setErrors((current) => ({
            ...current,
            [name]: '',
        }));

        setStatus(null);
    }

    function validateForm() {
        const nextErrors = {};

        if (!values.name.trim()) {
            nextErrors.name = 'Please enter your name.';
        }

        if (!values.email.trim()) {
            nextErrors.email = 'Please enter your email.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            nextErrors.email = 'Please enter a valid email address.';
        }

        if (!values.serviceType) {
            nextErrors.serviceType = 'Please select a service type.';
        }

        if (!values.message.trim()) {
            nextErrors.message = 'Please enter a short message.';
        } else if (values.message.trim().length < 10) {
            nextErrors.message = 'Please include a little more detail.';
        }

        return nextErrors;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const nextErrors = validateForm();

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
            setStatus({
                type: 'error',
                message: 'Please correct the highlighted fields.',
            });

            const firstInvalidField = Object.keys(nextErrors)[0];

            document.querySelector(`[name="${firstInvalidField}"]`)?.focus();

            return;
        }

        setErrors({});
        setStatus({
            type: 'pending',
            message: 'Online submission is not connected yet. Please call or email Prime Valet using the contact information shown here.',
        });
    }

    function fieldClass(fieldName) {
        return `${inputStyles} ${errors[fieldName] ? 'border-red-600 focus:border-red-600' : 'border-(--color-border) focus:border-(--color-accent)'}`;
    }

    return (
        <section className="overflow-hidden bg-(--color-bg) py-20 sm:py-24 lg:py-30 2xl:py-36">
            <div className="mx-auto grid w-full max-w-384 gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 lg:px-10 2xl:px-12">
                <motion.div
                    initial={{ opacity: 0, x: -48 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div className="mb-10">
                        <p className="text-xs font-black tracking-[0.26em] text-(--color-accent) uppercase">Send a Message</p>

                        <h2 className="mt-5 max-w-3xl text-4xl leading-[0.98] font-black tracking-tighter text-(--color-ink) sm:text-5xl lg:text-6xl">Tell us what you need.</h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 font-medium text-(--color-muted)">
                            Share a few details about your event or location. We’ll follow up to answer questions and discuss availability.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="grid gap-x-8 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="text-xs font-black tracking-[0.18em] text-(--color-ink) uppercase">
                                Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                value={values.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                aria-invalid={Boolean(errors.name)}
                                aria-describedby={errors.name ? 'name-error' : undefined}
                                className={fieldClass('name')}
                            />

                            {errors.name && (
                                <p id="name-error" className="mt-2 text-sm font-medium text-red-600">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="mt-8 sm:mt-0">
                            <label htmlFor="email" className="text-xs font-black tracking-[0.18em] text-(--color-ink) uppercase">
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                aria-invalid={Boolean(errors.email)}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                                className={fieldClass('email')}
                            />

                            {errors.email && (
                                <p id="email-error" className="mt-2 text-sm font-medium text-red-600">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="mt-8">
                            <label htmlFor="phone" className="text-xs font-black tracking-[0.18em] text-(--color-ink) uppercase">
                                Phone
                            </label>

                            <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={handleChange} placeholder="Your phone number" className={fieldClass('phone')} />
                        </div>

                        <div className="mt-8">
                            <label htmlFor="serviceType" className="text-xs font-black tracking-[0.18em] text-(--color-ink) uppercase">
                                Service Type
                            </label>

                            <select
                                id="serviceType"
                                name="serviceType"
                                value={values.serviceType}
                                onChange={handleChange}
                                aria-invalid={Boolean(errors.serviceType)}
                                aria-describedby={errors.serviceType ? 'service-type-error' : undefined}
                                className={fieldClass('serviceType')}
                            >
                                <option value="">Select a service</option>
                                <option value="private-event">Private Event</option>
                                <option value="restaurant">Restaurant</option>
                                <option value="business">Business</option>
                                <option value="venue">Venue</option>
                                <option value="other">Other</option>
                            </select>

                            {errors.serviceType && (
                                <p id="service-type-error" className="mt-2 text-sm font-medium text-red-600">
                                    {errors.serviceType}
                                </p>
                            )}
                        </div>

                        <div className="mt-8 sm:col-span-2">
                            <label htmlFor="location" className="text-xs font-black tracking-[0.18em] text-(--color-ink) uppercase">
                                Event or Service Location
                            </label>

                            <input id="location" name="location" type="text" value={values.location} onChange={handleChange} placeholder="City or venue address" className={fieldClass('location')} />
                        </div>

                        <div className="mt-8 sm:col-span-2">
                            <label htmlFor="message" className="text-xs font-black tracking-[0.18em] text-(--color-ink) uppercase">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={values.message}
                                onChange={handleChange}
                                placeholder="Tell us about the date, location, guest count, and anything else we should know."
                                aria-invalid={Boolean(errors.message)}
                                aria-describedby={errors.message ? 'message-error' : undefined}
                                className={`${fieldClass('message')} resize-none`}
                            />

                            {errors.message && (
                                <p id="message-error" className="mt-2 text-sm font-medium text-red-600">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <div className="mt-10 sm:col-span-2">
                            <button type="submit" className="btn-prime btn-primary group">
                                <span>Send Request</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </button>

                            {status && (
                                <div
                                    role="status"
                                    aria-live="polite"
                                    className={`mt-6 border-l-2 p-4 text-sm leading-6 font-medium ${
                                        status.type === 'error' ? 'border-red-600 bg-red-600/6 text-red-700' : 'border-(--color-accent) bg-(--color-accent)/8 text-(--color-ink)'
                                    }`}
                                >
                                    {status.message}
                                </div>
                            )}
                        </div>
                    </form>
                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, x: 48 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-t border-(--color-border) pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
                >
                    <p className="text-xs font-black tracking-[0.26em] text-(--color-accent) uppercase">Contact Information</p>

                    <div className="mt-8 divide-y divide-(--color-border) border-y border-(--color-border)">
                        <div className="py-7">
                            <p className="text-xs font-black tracking-[0.18em] text-(--color-muted) uppercase">Phone</p>

                            <a
                                href={businessInfo.phoneHref}
                                className="mt-3 block text-2xl font-black tracking-[-0.03em] text-(--color-ink) transition-colors duration-300 hover:text-(--color-accent)"
                            >
                                {businessInfo.phone}
                            </a>
                        </div>

                        <div className="py-7">
                            <p className="text-xs font-black tracking-[0.18em] text-(--color-muted) uppercase">Email</p>

                            <a
                                href={`mailto:${businessInfo.email}`}
                                className="mt-3 block break-all text-lg font-black tracking-[-0.02em] text-(--color-ink) transition-colors duration-300 hover:text-(--color-accent)"
                            >
                                {businessInfo.email}
                            </a>
                        </div>

                        <div className="py-7">
                            <p className="text-xs font-black tracking-[0.18em] text-(--color-muted) uppercase">Service Area</p>

                            <p className="mt-3 text-lg font-black tracking-[-0.02em] text-(--color-ink)">Los Angeles and surrounding areas</p>
                        </div>

                        <div className="py-7">
                            <p className="text-xs font-black tracking-[0.18em] text-(--color-muted) uppercase">Availability</p>

                            <p className="mt-3 text-base leading-7 font-medium text-(--color-muted)">Contact us to discuss your date, location, and service needs.</p>
                        </div>
                    </div>
                </motion.aside>
            </div>
        </section>
    );
}
