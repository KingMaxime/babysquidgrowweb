import Footer from "../components/Footer";
import Header from "../components/Header";

function Team() {
	return (
		<>
			<Header />
			<section className='py-32 md:py-56'>
				<div className='container items-center justify-center mx-auto'>
					<h1 className='text-5xl md:text-9xl text-center text-white font-bold tracking-tight font-squids'>
						Coming Soon
					</h1>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Team;
