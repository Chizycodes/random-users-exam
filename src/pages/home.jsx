const Home = () => {
	return (
		<section
			style={{ backgroundImage: `url(/school.png)` }}
			className="bg-cover bg-no-repeat bg-center h-screen flex justify-center items-center relative"
		>
			<div className="bg-[#000000] rounded-xl opacity-50 w-full h-full absolute z-1" />
			<div className="max-w-[600px] text-center flex flex-col items-center z-[5] text-white">
				<img src="/white-logo.svg" className="w-[150px]" alt="Altschool logo" />
				<h1 className="font-bold mb-5 text-[1.5rem] md:text-[2.5rem]">Frontend Second Semester Examination Project</h1>
				<p className="text-[14px] md:text-[1rem] font-semibold italic">by</p>
				<a href="https://github.com/chizycodes" className="text-[1rem] md:text-[1.5rem] font-semibold italic">Joy Okwudire</a>
			</div>
		</section>
	);
};

export default Home;
