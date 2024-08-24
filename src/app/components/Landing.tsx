import Link from "next/link";

export default function Landing(){
    return(
        <>
        {/**hero section */}
        <div className="landing-bg  min-h-[400px] md:min-h-[520px]">
        <div className="flex flex-col gap-3 md:gap-4 justify-center items-center ">

            <h1 className="text-white hh text-center text-4xl md:text-[70px]  font-bold leading-tight tracking-[-0.033em] mt-32 md:mt-[10rem]">
            Small Efforts,
            </h1>

            <h1 className="text-white hh text-center text-4xl md:text-[70px]  font-bold leading-tight tracking-[-0.033em]"> Make Big Change</h1>

            <h2 className="text-white text-sm md:text-base font-semibold text-center">
            Join a platform that connects volunteers with organizations creating positive impact.
            </h2>

           <Link 
           className="border-2 text-sm md:text-base border-white p-2 md:px-4 md:py-2 rounded-full text-white mt-2 "
           href='/login'>
            Become a Volunteer</Link>


            </div>
        </div>

        {/**hero section */}

        <div>

        </div>
        </>
    )
}