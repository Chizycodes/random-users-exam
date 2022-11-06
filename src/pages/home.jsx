const Home = () => {
	return (
		<section
			style={{ backgroundImage: `url(/school.png)` }}
			className="bg-cover bg-no-repeat bg-center h-screen flex justify-center items-center relative"
		>
			<div class="bg-black rounded-xl opacity-50 w-full h-full absolute z-1" />
			<div className="max-w-[600px] text-center flex flex-col items-center z-[5] text-white">
				<img src="/white-logo.svg" className="w-[150px]" alt="Altschool logo" />
				<h1 className="font-[900] text-[2.5rem]">Frontend Second Semester Examination Project</h1>
				<p className="text-[1.5rem] font-semibold italic">by</p>
				<p className="text-[2rem] font-semibold italic">Joy Okwudire</p>
			</div>
		</section>
	);
};

export default Home;
