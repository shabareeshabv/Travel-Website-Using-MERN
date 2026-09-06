import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import  AboutImg from "../assets/img.jpg"
import Footer from "../components/Footer";
import LoginSignup from "../components/LoginSignup";
function SignUp (){
    return(
       <>
          <Navbar/>   
 <Hero  
 cName="hero-mid"
 heroImg={AboutImg}
title ="SignUP"


btnClass="hide"

 />
 <LoginSignup/>
 <Footer/>
       </> 
    )
     }
    
export default SignUp;