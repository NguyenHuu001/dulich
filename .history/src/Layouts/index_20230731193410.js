import Footer from "./Footer";
import Header from './Header'
import Navigation from "./Navigation";
function Layouts({children}) {
    return ( 
        <>
            <Header />
            <div>
                <Navigation />
                <div className="content">{children}</div>
            </div>

        </>
     );
}

export default Layouts;