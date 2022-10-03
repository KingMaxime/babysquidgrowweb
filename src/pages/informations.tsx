import Header from "../components/Header";
import Footer from "../components/Footer";
import Forward from "../assets/images/forward.jpeg";
import Slots from "../assets/images/slots.jpeg";

function Information() {
	return (
		<>
			<Header />
			
			<section className='py-32 md:py-56'>
				<div className='container items-center justify-center mx-auto'>
					<h1 className='text-5xl md:text-9xl text-center text-white font-bold tracking-tight font-squids'>
                   General Information
					</h1>
                    
				</div>
                
			</section>
            
			<Footer />
		</>
	);
}

export default Stake;
