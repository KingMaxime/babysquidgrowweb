import React, { useEffect } from "react";
import AOS from "aos";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BabySquid from "../assets/images/squid.jpeg";
import Squid1 from "../assets/images/squid1.jpeg";
import Squid2 from "../assets/images/squid2.jpeg";
import Squid3 from "../assets/images/squid3.jpeg";
import Squid4 from "../assets/images/squid4.jpeg";

ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
	useEffect(() => {
		AOS.init({
			delay: 300,
			once: true,
		});
	}, []);

	const data = {
		labels: [
			"Liquidity",
			"Partnerships",
			"Marketing",
			"Exchanges",
			"Team",
			"Airdrops",
			"Give Aways",
		],
		datasets: [
			{
				label: "# of Votes",
				data: [50, 15, 10, 10, 7, 4, 4],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(255, 100, 50, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
					"rgba(255, 100, 50, 1)",
				],
				borderWidth: 2,
			},
		],
	};
	return (
		<>
			<Header />

			<section
				className='md:py-36'
				id='about'
				data-aos='fade-down'
				data-aos-duration='1500'>
				<div className='container max-w-7xl items-center px-8 mx-auto xl:px-5'>
					<div className='flex flex-wrap items-center sm:-mx-3'>
						<div className='w-full md:w-1/2 md:px-3'>
							<div className='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
								<h1 className='text-3xl md:text-5xl md:text-left text-white font-bold tracking-tight md:mt-0 mt-10 mb-10 font-squids'>
									Baby SquidGrow
								</h1>
								<p className='mx-auto text-sm text-white sm:max-w-md lg:text-xl font-semibold md:max-w-3xl font-qanelas'>
									Baby SquidGrow is a meme and utility coin based on his father
									project SquidGrow named after the popular TV series “Squid
									Game”. The SquidGrow project is owned by a confirmed and
									verified Shiba whale who owns Billions of Dollars. To show our
									support, Baby SquidGrow will build a ecosystem around
									SquidGrow to maximize the bags of SquidGrow holders while they
									go into the Billions and we into the Millions!
								</p>
								<div className='relative flex flex-col sm:flex-row sm:space-x-4'>
									<a
										href='https://pancakeswap.finance/swap?outputCurrency=0x03077a5893ba855bfe517a6995f31f3a801066e6'
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center justify-center w-full px-6 py-4 mb-3 text-white bg-gradient-to-r from-purple-600 to-pink-600 sm:mb-0 sm:w-auto text-lg font-bold rounded-full md:w-56 shadow-2xl font-qanelas'>
										Buy BabySquidGrow
									</a>
									<Link
										to='/stake'
										className='flex items-center justify-center w-full px-6 py-4 mb-3 text-white bg-gradient-to-r from-purple-600 to-pink-600 sm:mb-0 sm:w-auto text-lg font-bold rounded-full md:w-56 shadow-2xl font-qanelas'>
										Stake & Earn Rewards
									</Link>
								</div>
							</div>
						</div>
						<div className='w-full md:w-1/2 flex items-center justify-center'>
							<img
								src={BabySquid}
								alt='Squid'
								className='rounded-2xl shadow-2xl'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='py-10 md:py-20' id='tokenomics'>
				<h1 className='mt-8 text-center text-4xl md:text-5xl text-teal-300 font-bold font-squids'>
					Tokenomics
				</h1>
				<div className='md:flex md:justify-center md:space-x-8 md:px-14'>
					<div
						className='mt-16 py-4 px-4 w-80 md:w-96 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'
						data-aos='flip-left'
						data-aos-duration='1500'>
						<div className='w-sm'>
							<div className='mt-4 text-teal-300 font-qanelas'>
								<h1 className='text-xl font-bold'>Token</h1>
								<p className='text-white text-sm md:text-base font-bold'>
									• Name: BabySquidGrow
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• Ticker: BSG
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• Supply: 100,000,000
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• Network: BSC
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• Decimals: 9
								</p>
							</div>
						</div>
					</div>
					<div
						className='mt-16 py-4 px-4 w-80 md:w-96 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'
						data-aos='zoom-in'
						data-aos-duration='1000'>
						<div className='w-sm'>
							<div className='mt-4 text-teal-300 font-qanelas'>
								<h1 className='text-xl text-center font-bold'>
									Token Distribution
								</h1>
								<Pie data={data} />
							</div>
						</div>
					</div>
					<div
						className='mt-16 py-4 px-4 w-80 md:w-96 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'
						data-aos='flip-right'
						data-aos-duration='1500'>
						<div className='w-sm'>
							<div className='mt-4 text-teal-300 font-qanelas'>
								<h1 className='text-xl font-bold'>Taxes</h1>
								<p className='text-white text-sm md:text-base font-bold'>
									🟩 Buy 8 %
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 3% Rewards in SquidGrow
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 3% Marketing
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 2% Liquidity Pool (automatic)
								</p>

								<p className='text-white text-sm md:text-base font-bold mt-4'>
									🟥 Sell 10%
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 3% Rewards in SquidGrow
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 3% Marketing
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 2% Liquidity Pool (automatic)
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 2% Marketing, Liquidity & Holders
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				className='py-10 md:py-20'
				id='roadmap'
				data-aos='zoom-in-up'
				data-aos-duration='1500'>
				<h1 className='mt-8 text-center text-5xl text-teal-300 font-bold font-squids'>
					Roadmap
				</h1>
				<div className='md:flex md:justify-center md:space-x-8 md:px-14'>
					<div className='mt-16 py-4 px-4 w-80 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'>
						<div className='w-sm font-qanelas'>
							<img className='w-full rounded-md' src={Squid1} alt='Squid' />
							<div className='mt-4 text-teal-300'>
								<h1 className='text-xl font-bold'>Phase 1:</h1>
								<p className='text-white text-sm md:text-base font-bold'>
									1. Stealth Launch on Pancakeswap
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									2. Building a solid Community.
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									3. Socials creation.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-16 py-4 px-4 w-80 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'>
						<div className='w-sm font-qanelas'>
							<img className='w-full rounded-md' src={Squid2} alt='Squid' />
							<div className='mt-4 text-teal-300'>
								<h1 className='text-xl font-bold'>Phase 2:</h1>
								<p className='text-white text-sm md:text-base font-bold'>
									1. Website Launch + Staking{" "}
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									2. Community contests
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									3. Marketing & AMA´S
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									4. Whale Wallet Airdrops.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-16 py-4 px-4 w-80 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'>
						<div className='w-sm font-qanelas'>
							<img className='w-full rounded-md' src={Squid3} alt='Squid' />
							<div className='mt-4 text-teal-300'>
								<h1 className='text-xl font-bold'>Phase 3:</h1>
								<p className='text-white text-sm md:text-base font-bold'>
									1. 2nd Utility implementation Ecosystem
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									2. Marketing Push
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									3. Partnerships
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									4. Start of P2E development.
								</p>
							</div>
						</div>
					</div>
					<div className='mt-16 py-4 px-4 w-80 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'>
						<div className='w-sm font-qanelas'>
							<img className='w-full rounded-md' src={Squid4} alt='Squid' />
							<div className='mt-4 text-teal-300'>
								<h1 className='text-xl font-bold'>Phase 4:</h1>
								<p className='text-white text-sm md:text-base font-bold'>
									1. Further platform development
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									2. Aggressive marketing
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									3. Listing Exchanges.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <div
					className='py-10 md:py-20 md:flex md:justify-center md:space-x-8 md:px-14'
					data-aos='flip-left'
					data-aos-duration='1500'>
					<iframe
						width='380'
						height='600'
						src='https://flooz.trade/embed/swap/0x03077a5893ba855bfe517a6995f31f3a801066e6?backgroundColor=transparent&refId=YourRefID'
						title='Flooz Trade'
						// frameborder='0'
						allow='clipboard-read; clipboard-write; web-share; accelerometer *; autoplay *; camera *; gyroscope *; payment *'>
						{" "}
					</iframe>
				</div> */}
			</section>

			<Footer />
		</>
	);
}

export default Home;
