import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
    return (
        <div>
            <Header></Header>
             <h1>hello this is home components</h1>

             <Outlet></Outlet>

             <Footer></Footer>
            
        </div>
    );
};

export default Home;