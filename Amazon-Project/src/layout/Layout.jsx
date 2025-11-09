import { Outlet } from "react-router-dom";

// ===*style*===
import "./Layout.css"



 // ===*Components*===
 import Header from "../components/Header/Header";
 import Footer from "../components/Footer/Footer";


export default function Layout(){
    return (
        <>
        <Header/>
        <main className="main-body-layout">
            <Outlet/>
        </main>
        <Footer/>
    
        </>
    )
}