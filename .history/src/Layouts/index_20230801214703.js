import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
function Layouts({ children }) {
    return (
        <>
            <Navigation />
            <Header />
            <div>
                <div className="content">{children}</div>
            </div>
            <Footer />
        </>
    );
}

export default Layouts;
