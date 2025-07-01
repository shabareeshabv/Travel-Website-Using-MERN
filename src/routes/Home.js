 
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/12.jpg"
import Destination from "../components/Destination";
import Footer from "../components/Footer"

import Trip from "../components/Trip";
 
 
function Home (){
return(
   <> 
<Navbar/>   
 <Hero  
 cName="hero"
 heroImg={HomeImg}
title ="Your Journey Your Story"
text="Choose your Favourite Destination."
buttonText="Travel Plan"
url="/"
btnClass="show"

 />

 <Destination/>
 <Trip/>
 <Footer/>
   </> 
)
 }

 export default Home;