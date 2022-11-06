import { useState, useEffect } from "react";

const ErrorBoundaryTest = () => {
    const [error, setError] = useState(false)
    useEffect(() => {
     if(error){
        throw Error('Oops! Something went Wrong!');
     }
    }, [error])
    
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<button
				className="bg-[#1e75ff] text-white font-bold px-3 py-2 rounded hover:scale-105 transition delay-100 duration-300 ease-in-out"
				onClick={()=>setError(true)}
			>
				Test Error Boundary
			</button>
		</div>
	);
};

export default ErrorBoundaryTest;
