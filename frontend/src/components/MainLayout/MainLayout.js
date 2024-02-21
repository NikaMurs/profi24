import './mainLayout.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div className="main">
                {children}
            </div>
            <Footer />
        </>
    );
}