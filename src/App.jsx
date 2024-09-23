import React from 'react';
import Card from './Components/Card';
import cardImage from './assets/card1.jpg'
import HeroSection from './Components/HeroSection';
import TopBar from './Components/TopBar';
import Navbar from './Components/Navbar';
import TrustedCompanies from './Components/TrustedCompanies';
import InfoCards from './Components/InfoCards';
import Footer from './Components/Footer';
import ServicesSection from './Components/ServicesSection';
import DoctorsSection from './Components/DoctorSection';
import AboutUs from './Components/Aboutus';
import WellnessServices from './Components/WellnessServices';
import Bottom from './Components/Bottom';
import Choose from './Components/Choose';


const App = () => {
  return (
      <>
          <TopBar/>
       <Navbar/>
      {/* <HeroSection/> */}
      <TrustedCompanies/>
      <WellnessServices/>
      {/* <AboutUs/> */}
      <InfoCards/>
      <DoctorsSection/>   
    
      <Choose/>
    
     
      <ServicesSection/>
     
   
        <div className="container mx-auto p-8">
          
            <div className="flex justify-center mb-4">
                <span className="inline-block bg-yellow-400 text-white rounded-full px-4 py-1 text-sm uppercase">
                    Latest News
                </span>
            </div>

            
            <h2 className="text-3xl font-bold text-center mb-8">
                Explore Diverse Health And Wellness Offerings At Mavis Clinic
            </h2>

            
            <div className="flex flex-wrap justify-center gap-5 items-center">
                <Card
                    image={cardImage}
                    author="mavis"
                    date="21 Apr, 2024"
                    title="The Heart of the Matter: Understanding Cardiovascular"
                    description="Moving beyond the basics, we discuss the significance of maintaining a healthy heart through..."
                />
                <Card
                    image={cardImage}
                    author="mavis"
                    date="21 Apr, 2024"
                    title="The Heart of the Matter: Understanding Cardiovascular"
                    description="Moving beyond the basics, we discuss the significance of maintaining a healthy heart through..."
                />
                <Card
                    image={cardImage}
                    author="mavis"
                    date="21 Apr, 2024"
                    title="The Heart of the Matter: Understanding Cardiovascular"
                    description="Moving beyond the basics, we discuss the significance of maintaining a healthy heart through..."
                />
                
            </div>
        </div> 
    



    
     
        <Footer/>
       <Bottom/> 
    </>
  );
};

export default App;

