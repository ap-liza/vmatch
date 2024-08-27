import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faMagnifyingGlass, faHandshake, faChartLine} from '@fortawesome/free-solid-svg-icons'




export default function Landing(){
    return(
        <>
        {/**hero section */}
        <div className="landing-bg  min-h-[400px] md:min-h-[600px]">
        <div className="flex flex-col gap-3 md:gap-4 justify-center items-center ">

            <h1 className="text-[#F9F7F7] hh text-center text-4xl md:text-[70px]  font-bold leading-tight tracking-[-0.033em] mt-32 md:mt-[10rem]">
            Small Efforts,
            </h1>

            <h1 className="text-[#F9F7F7] hh text-center text-4xl md:text-[70px]  font-bold leading-tight tracking-[-0.033em]"> Make Big Change</h1>

            <h2 className="text-[#F9F7F7] text-sm md:text-base font-semibold text-center">
            Join a platform that connects volunteers with organizations creating positive impact.
            </h2>

           <Link 
           className=" text-sm md:text-base bg-[#FF6F61]  p-4 md:px-6 md:py-3 rounded-full text-[#F9F7F7] mt-2 shadow-md hover:shadow-[#F9F7F7]"
           href='/login'>
            Become a Volunteer</Link>


            </div>
        </div>

        {/**3 boxes */}

        <section id="features" className="  py-20">
  
        <div className="mt-[-100px] md:mt-[-230px] "></div>

        <div className="container p-10 md:p-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 text-center relative z-10">


            <div className="bg-[#FFFFF0] p-8 rounded-lg md:rounded-r-none shadow-lg">
            <div className="icon p-4 mx-auto">
                <FontAwesomeIcon className="w-8 h-8" icon={faMagnifyingGlass} />
            </div>
            <h2 className="text-2xl font-semibold text-[#004D40] mt-4">Find Opportunities</h2>
            <p className="text-[#708090] mt-2">Discover volunteer roles that align with your interests.</p>
            </div>
            
            <div className="bg-[#D1D5DB] p-8 rounded-lg shadow-lg md:rounded-none ">
            <div className="icon p-4  mx-auto">
                <FontAwesomeIcon icon={faHandshake} className="w-10 h-10"  />
            </div>
            <h2 className="text-2xl font-semibold text-[#004D40] mt-4">Connect with Organizations</h2>
            <p className="text-[#708090] mt-2">Easily connect with organizations that need your help.</p>
            </div>

            <div className="bg-[#FFFFF0] p-8 rounded-lg shadow-lg md:rounded-l-none">
            <div className="icon p-4  mx-auto">
                <FontAwesomeIcon icon={faChartLine} className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-semibold text-[#004D40] mt-4">Make an Impact</h2>
            <p className="text-[#708090] mt-2">Monitor the difference you’re making over time.</p>
            </div>
        </div>
        </section>
        
        {/* Our Mission */}
        <div className="px-10 md:px-20 mt-[-50px] md:mt-[-40px]">
            <div className="bg-[#004D40] p-10 md:p-20 min-h-[380px] md:min-h-[430px] rounded-lg">
                <h1 className="text-[#F9F7F7] text-center font-semibold">
                Our mission is to create a dynamic platform that connects dedicated volunteers with organizations seeking their expertise and passion
                </h1>
                <h1 className="text-[#F9F7F7] mt-6 md:mt-8 text-center text-sm md:text-base">
                By fostering meaningful relationships and providing opportunities for collaborative partnerships, we aim to bridge the gap between individuals and causes, driving positive change and making a lasting impact on our communities.

                </h1>
            </div>
                
            <div className="px-10 md:px-20 mt-[-100px] md:mt-[-180px]">
            <img src="/v1.jpg" alt="" className="ml-[2px] rounded-lg"/>
            </div>
        </div>

        
      {/* Upcoming Events */}
      <div>
        <div>
            
        </div>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-eaeedd">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-deep-teal">What Our Volunteers Say</h2>
          <p className="text-xl text-soft-coral mt-4">"Volunta has changed the way I give back to my community!"</p>
          <p className="text-slate-gray mt-2">- Jane Doe</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#004D40] text-center">
        <h2 className="text-3xl font-bold text-[#F9F7F7]">Ready to Make a Difference?</h2>
        <button className="mt-6 bg-[#FF6F61] text-[#F9F7F7] px-6 py-3 rounded-lg hover:bg-muted-gold">Get Started Today</button>
      </section>

      {/* Footer Section */}
      <footer className="py-10 bg-[#333333] text-center">
        <p className="text-[#F9F7F7]">© 2024 Volunta. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#"><FontAwesomeIcon  className="text-[#FF6F61] w-[25px] h-[25px]" icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon  className="text-[#FF6F61]   w-[25px] h-[25px]" icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon  className="text-[#FF6F61]  w-[25px] h-[25px]" icon={faInstagram} /></a>
          
        </div>
      </footer>
        </>
    )
}


