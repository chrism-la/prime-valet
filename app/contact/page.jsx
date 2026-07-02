import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <main className="flex min-h-screen items-center justify-center bg-(--color-bg) pt-24">
                <div className="text-center">
                    <p className="mb-4 text-xs font-black tracking-[0.28em] uppercase text-(--color-accent)">Coming Soon</p>

                    <h1 className="text-5xl font-black tracking-tighter text-(--color-ink)">Contact Prime Valet</h1>
                </div>
            </main>

            <Footer />
        </>
    );
}
