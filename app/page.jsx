import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomeHero from '@/components/home/HomeHero';
import Experience from '@/components/home/Experience';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import Operations from '@/components/home/Operations';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
    return (
        <>
            <Navbar />

            <main className="bg-(--color-bg)">
                <HomeHero />
                <Experience />
                <Services />
                <Process />
                <Operations />
                <FinalCTA />
            </main>

            <Footer />
        </>
    );
}
