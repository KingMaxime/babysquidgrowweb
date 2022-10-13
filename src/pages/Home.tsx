import React, { useEffect } from "react";
import AOS from "aos";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TRCC_Logo from "../assets/images/TRCC_Logo.png";
import Squid1 from "../assets/images/squid1.jpg";
import Squid2 from "../assets/images/squid2.jpg";
import Squid3 from "../assets/images/squid3.jpg";
import Squid4 from "../assets/images/squid4.jpg";

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
				id='home'
				data-aos='fade-down'
				data-aos-duration='1500'>
				<div className='container max-w-7xl items-center px-8 mx-auto xl:px-5'>
					<div className='flex flex-wrap items-center sm:-mx-3'>
						<div className='w-full md:w-1/2 md:px-3'>
							<div className='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
								<h1 className='text-3xl md:text-5xl md:text-left text-white  tracking-tight md:mt-0 mt-10 mb-10 font-squids'>
									The Real Coin Casino
								</h1>
								<p className='mx-auto text-sm text-white sm:max-w-md lg:text-xl font-semibold md:max-w-3xl font-qanelas'>
									Nowadays investors jump from project to project and doesn't
									even care about the utility or it's true potential. In, take
									profits and out. Instead of lying and creating fake websites,
									fake utilities etc. we create contracts only instead and
									launch them for the community to make safe x's.
								</p>
								<div className='relative flex flex-col sm:flex-row sm:space-x-4'>
									<a
										href='https://pancakeswap.finance/swap?outputCurrency=0x434ef13d84e5b3f4c89dd6c0c846d5151232c67a'
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center justify-center w-full px-6 py-4 mb-3 text-white bg-gradient-to-r from-yellow-600 to-red-600 sm:mb-0 sm:w-auto text-lg font-bold rounded-full md:w-56 shadow-2xl font-qanelas'>
										Buy RCC
									</a>
									<a
										href='https://t.me/RealCoinCasinoCommunity'
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center justify-center w-full px-6 py-4 mb-3 text-white bg-gradient-to-r from-yellow-600 to-red-600 sm:mb-0 sm:w-auto text-lg font-bold rounded-full md:w-56 shadow-2xl font-qanelas'>
										Join our Community
									</a>
								</div>
							</div>
						</div>
						<div className='w-full md:w-1/2 flex items-center justify-center'>
							<img
								src={TRCC_Logo}
								alt='Squid'
								className='rounded-2xl shadow-2xl'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='py-10 md:py-20' id='tokenomics'>
				<h1 className='mt-8 text-center text-4xl md:text-5xl text-yellow-600 font-bold font-squids'>
					Tokenomics
				</h1>
				<div className='md:flex md:justify-center md:space-x-8 md:px-14'>
					<div
						className='mt-16 py-4 px-4 w-80 md:w-96 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'
						data-aos='flip-left'
						data-aos-duration='1500'>
						<div className='w-sm'>
							<div className='mt-4 text-yellow-600 font-qanelas'>
								<h1 className='text-xl font-bold'>Token</h1>
								<p className='text-white text-sm md:text-base font-bold'>
									• Name: The Real Coin Casino
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• Ticker: RCC
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• Supply: 1.000.000.000
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
						data-aos='flip-right'
						data-aos-duration='1500'>
						<div className='w-sm'>
							<div className='mt-4 text-yellow-600 font-qanelas'>
								<h1 className='text-xl font-bold'>Taxes</h1>
								<p className='text-white text-sm md:text-base font-bold'>
									🟩 Buy 6 %
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 2% Marketing
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 2% Team
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 2% Liquidity Pool
								</p>

								<p className='text-white text-sm md:text-base font-bold mt-4'>
									🟥 Sell 6%
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 2% marketing
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 2% Team
								</p>
								<p className='text-white text-sm md:text-base font-bold'>
									• 2% Liquidity Pool
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='py-10 md:py-20' id='about'>
				<h1 className='mt-8 text-center text-4xl md:text-5xl text-yellow-600 font-bold font-squids'>
					About And Services
				</h1>
				<div className='md:flex md:justify-center md:space-x-8 md:px-14'>
					<div
						className='mt-16 py-4 px-4 w-80 md:w-96 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'
						data-aos='fade-right'
						data-aos-offset='300'
						data-aos-easing='ease-in-sine'>
						<div className='w-sm'>
							<div className='mt-4 text-yellow-600 font-qanelas'>
								<h1 className='text-xl font-bold text-center'>About Us</h1>
								<br />
								<p className='text-white text-sm md:text-base font-bold'>
									We are inspired by the fact that todays investors just want to
									grab quick x's instead of a long term hold.
								</p>
								<br />
								<p className='text-white text-sm md:text-base font-bold'>
									At The Real Coin Casino we give these investors the
									opportunity to do both.
								</p>
								<br />
								<p className='text-white text-sm md:text-base font-bold'>
									They are able to trade and Gamble with our gambling contracts
									and invest in something with a long term benefit per our main
									token RCC.
								</p>
								<br />
								<p className='text-white text-sm md:text-base font-bold'>
									We launch Gambling contracts that will burn or give RCC in
									reflections which will push the RCC chart up. Check out the
									RCC and Gambling contracts tokenomics for more info.
								</p>
							</div>
						</div>
					</div>
					<div
						className='mt-16 py-4 px-4 w-80 md:w-96 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'
						data-aos='fade-left'
						data-aos-offset='400'
						data-aos-easing='ease-in-sine'>
						<div className='w-sm'>
							<div className='mt-4 text-yellow-600 font-qanelas'>
								<h1 className='text-xl font-bold text-center'>Services</h1>
								<br />
								<ol className='text-white text-sm md:text-base font-bold list-disc list-inside'>
									<li className='pb-4'>Building BNB-Bep 20 Smart Contracts.</li>
									<li className='pb-4'>Website development</li>
									<li className='pb-4'> Dapp creation </li>
									<li className='pb-4'>Telegram bot management and coding</li>
									<li>Promotion at EliteWhales</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='py-10 md:py-20' id='team'>
				<h1 className='mt-8 text-center text-5xl text-yellow-600 font-bold font-squids'>
					Team
					<p className='text-white text-sm md:text-base font-bold'>
						Our team consists of a small core team of 4, the rest is fully
						community driven.
					</p>
				</h1>
				<div className='md:flex md:justify-center md:space-x-8 md:px-14'>
					<div
						className='mt-16 py-4 px-4 w-80 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'
						data-aos='fade-right'
						data-aos-offset='300'
						data-aos-easing='ease-in-sine'>
						<div className='w-sm font-qanelas'>
							<img className='w-full rounded-md' src={Squid1} alt='Squid' />
							<div className='mt-4 text-red-600'></div>
						</div>
					</div>
					<div
						className='mt-16 py-4 px-4 w-80 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'
						data-aos='fade-up'
						data-aos-offset='400'
						data-aos-easing='linear'
						data-aos-duration='3000'>
						<div className='w-sm font-qanelas'>
							<img className='w-full rounded-md' src={Squid2} alt='Squid' />
						</div>
					</div>
					<div
						className='mt-16 py-4 px-4 w-80 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'
						data-aos='fade-down'
						data-aos-offset='500'
						data-aos-easing='linear'
						data-aos-duration='1500'>
						<div className='w-sm font-qanelas'>
							<img className='w-full rounded-md' src={Squid3} alt='Squid' />
						</div>
					</div>
					<div
						className='mt-16 py-4 px-4 w-80 border-2 border-neutral-400 rounded-xl shadow-lg mx-auto md:mx-0'
						data-aos='fade-left'
						data-aos-offset='600'
						data-aos-duration='500'>
						<div className='w-sm font-qanelas'>
							<img className='w-full rounded-md' src={Squid4} alt='Squid' />
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
