import React from "react";
import SpinnerJpeg from "../assets/images/spinner.jpeg";

function Spinner() {
	return (
		<div className='h-screen bg-black flex items-center justify-center overflow-hidden'>
			<img src={SpinnerJpeg} alt='' className='h-40 w-28 animate-spin' />
		</div>
	);
}

export default Spinner;
