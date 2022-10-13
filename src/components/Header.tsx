import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function Header() {
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();
	return (
		<header className='sticky top-0 left-0 right-0 z-50 bg-black'>
			<nav className='container mx-auto px-4'>
				<div className='flex justify-between'>
					<div className='flex space-x-4'>
						<Scroll
							to='home'
							spy={true}
							smooth={true}
							offset={-100}
							duration={100}
							className='flex items-center py-5 md:py-0 text-3xl font-bold cursor-pointer'>
							<img
								src={Logo}
								alt='Logo'
								className='w-60 md:w-full animate-shake hover:animate-shake'
							/>
						</Scroll>
					</div>
					<div className='hidden md:flex items-center space-x-1 nav-item'>
						{pathname === "/informations" ? (
							<Link
								to='./'
								className='py-5 px-3 text-xl font-bold font-qanelas text-teal-300'>
								Home
							</Link>
						) : (
							<Scroll
								to='home'
								spy={true}
								smooth={true}
								offset={-100}
								duration={100}
								className='py-5 font-qanelas px-3 text-xl font-bold cursor-pointer text-red-500'>
								Home
							</Scroll>
						)}
						<Scroll
							to='tokenomics'
							spy={true}
							smooth={true}
							offset={-100}
							duration={100}
							className='py-5 font-qanelas px-3 text-xl font-bold cursor-pointer text-red-500'>
							Tokenomics
						</Scroll>
						<Scroll
							to='about'
							spy={true}
							smooth={true}
							offset={-100}
							duration={100}
							className='py-5 font-qanelas px-3 text-xl font-bold cursor-pointer text-red-500'>
							About & Services
						</Scroll>
						<Scroll
							to='team'
							spy={true}
							smooth={true}
							offset={-100}
							duration={100}
							className='py-5 font-qanelas px-3 text-xl font-bold cursor-pointer text-red-500'>
							Team
						</Scroll>
						<a
							href='https://poocoin.app/tokens/0x434ef13d84e5b3f4c89dd6c0c846d5151232c67a'
							target='_blank'
							rel='noopener noreferrer'
							className='py-5 font-qanelas px-3 text-xl font-bold cursor-pointer text-red-500'>
							Chart
						</a>

						{/* {pathname === '/stake' ? <button className="block w-full max-w-xs mx-auto bg-gradient-to-r from-purple-600 to-pink-600  text-white rounded-full px-10 py-3 font-qanelas font-semibold">Connet Wallet</button> : null} */}
					</div>
					<div className='md:hidden flex items-center'>
						<button
							type='button'
							title='any'
							className=''
							onClick={() => setOpen(!open)}>
							<svg height='24' viewBox='0 0 30 24' width='30'>
								<g fill='#fff'>
									<rect height='5.5' rx='2.75' width='29.333333'></rect>
									<path
										d='m2.75 18.3333333h23.8333333c1.5187831 0 2.75 1.231217 2.75 2.75s-1.2312169 2.75-2.75 2.75h-23.8333333c-1.51878305 0-2.75-1.231217-2.75-2.75s1.23121695-2.75 2.75-2.75zm0-9.16666663h23.8333333c1.5187831 0 2.75 1.23121693 2.75 2.75000003 0 1.518783-1.2312169 2.75-2.75 2.75h-23.8333333c-1.51878305 0-2.75-1.231217-2.75-2.75 0-1.5187831 1.23121695-2.75000003 2.75-2.75000003z'
										opacity='0.7'></path>
								</g>
							</svg>
						</button>
					</div>
				</div>
				<div className={`md:hidden nav-item ${open ? "" : "hidden"}`}>
					{/* {console.log(pathname)} */}
					{pathname === "/informations" ? (
						<Link
							to='./'
							className='block py-2 px-0 md:px-4 text-xl font-bold text-red-600 font-qanelas'>
							Home
						</Link>
					) : (
						<Scroll
							to='home'
							spy={true}
							smooth={true}
							offset={-100}
							duration={100}
							className='block py-2 px-0 md:px-4 text-xl font-bold cursor-pointer text-red-600 font-qanelas'>
							Home
						</Scroll>
					)}
					<Scroll
						to='tokenomics'
						spy={true}
						smooth={true}
						offset={-100}
						duration={100}
						className='block py-2 px-0 md:px-4 text-xl font-bold cursor-pointer text-red-600 font-qanelas'>
						Tokenomics
					</Scroll>
					<Scroll
						to='about'
						spy={true}
						smooth={true}
						offset={-100}
						duration={100}
						className='block py-2 px-0 md:px-4 text-xl font-bold cursor-pointer text-red-600 font-qanelas'>
						About & Services
					</Scroll>
					<Scroll
						to='team'
						spy={true}
						smooth={true}
						offset={-100}
						duration={100}
						className='block py-2 px-0 md:px-4 text-xl font-bold cursor-pointer text-red-600 font-qanelas'>
						Team
					</Scroll>
					<a
						href='https://poocoin.app/tokens/0x434ef13d84e5b3f4c89dd6c0c846d5151232c67a'
						target='_blank'
						rel='noopener noreferrer'
						className='block py-2 px-0 md:px-4 text-xl font-bold cursor-pointer text-red-600 font-qanelas'>
						Chart
					</a>

					{/* {pathname === '/stake' ? <button className="block w-full max-w-xs mx-auto bg-gradient-to-r from-purple-600 to-pink-600  text-white rounded-full px-10 py-3 font-qanelas font-semibold">Connet Wallet</button> : null} */}
				</div>
			</nav>
		</header>
	);
}

export default Header;
