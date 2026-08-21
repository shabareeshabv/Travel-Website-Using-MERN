import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import  AboutImg from "../assets/3 (1).jpg"
import Footer from "../components/Footer";
import ContentForm from "../components/ContactForm";
function Contact (){
    return(
       <>
          <Navbar/>   
 <Hero  
 cName="hero-mid"
 heroImg={AboutImg}s
title ="Contact"


btnClass="hide"

 />
 <ContentForm/>
 <Footer/>
       </> 
    )
     }
    
export default Contact;