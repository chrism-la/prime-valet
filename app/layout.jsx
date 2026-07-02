import './globals.css';

export const metadata = {
    title: 'Prime Valet Parking Services',
    description: 'Professional valet parking services in Los Angeles, CA.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
