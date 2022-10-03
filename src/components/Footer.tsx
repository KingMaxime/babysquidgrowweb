import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className='p-4 sm:p-6 mt-20'>
			<div className='container mx-auto'>
				<div className='md:flex md:justify-between'>
					<div className='mb-6 md:mb-0'>
						<Link to='/' className='flex items-center'>
							<span className='self-center text-4xl font-semibold whitespace-wrap text-white font-squids'>
								The Real Coin Casino
							</span>
						</Link>
					</div>
					<div className='grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2'>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-white uppercase font-squids'>
								Product
							</h2>
							<ul className='text-gray-600'>
								<li className='mb-4'>
									<Link
										to='/'
										className='text-xl font-semibold hover:underline hover:text-white font-qanelas'>
										Home
									</Link>
								</li>
								
							</ul>
						</div>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-white uppercase font-squids'>
								Media
							</h2>
							<ul className='text-gray-600'>
								<li className='mb-4'>
									<a
										href='https://mobile.twitter.com/BSquidgrow'
										target='_blank'
										rel='noopener noreferrer'
										className='text-xl font-semibold hover:underline hover:text-white font-qanelas'>
										Twitter
									</a>
								</li>
								<li className='mb-4'>
									<a
										href='https://t.me/BabySquidGrowPortal'
										target='_blank'
										rel='noopener noreferrer'
										className='text-xl font-semibold hover:underline hover:text-white font-qanelas'>
										Telegram
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<div className='flex items-center justify-between'>
					<span className='text-lg text-gray-600 sm:text-center font-semibold hover:text-white font-squids'>
						The Real Coin Casino
					</span>
					<div className='flex md:mt-4 space-x-6 sm:justify-center sm:mt-0'>
						<a
							href='mailto:info@BabySquidGrow.com'
							title='mailto:info@BabySquidGrow.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600 hover:text-gray-400 dark:hover:text-white'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-10 w-10'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
								<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
							</svg>
						</a>
						<a
							title='twitter'
							href='https://mobile.twitter.com/BSquidgrow'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600 hover:text-gray-400 dark:hover:text-white'>
							<svg
								className='w-10 h-10'
								fill='currentColor'
								viewBox='0 0 24 24'
								aria-hidden='true'>
								<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
							</svg>
						</a>
						<a
							title='telegram'
							href='https://t.me/BabySquidGrowPortal'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600 hover:text-gray-400 dark:hover:text-white'>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fab'
								data-icon='telegram-plane'
								className='w-10 h-10'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'>
								<path
									fill='currentColor'
									d='M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z'></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
