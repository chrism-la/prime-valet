import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <main className="bg-(--color-bg)">
                <ContactHero />
                <ContactForm />
            </main>

            <Footer />
        </>
    );
}
