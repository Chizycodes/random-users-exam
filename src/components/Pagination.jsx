import { useEffect, useState } from 'react';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
	const [nextNums, setNextNums] = useState(1);
	let pages = [];
	const totalPages = Math.ceil(totalPosts / postsPerPage);

	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}

	useEffect(() => {
		if (currentPage > nextNums + 3) {
			setNextNums(nextNums + 3);
		}
		if (currentPage < nextNums) {
			setNextNums(nextNums - 3);
		}
	}, [nextNums, currentPage, totalPages]);
	return (
		<div className="flex items-center text-[#333333]">
			<button
				className={`text-[30px] md:text-[48px] ${currentPage === 1 ? 'text-[#333333a4]' : ''}`}
				onClick={() => setCurrentPage(currentPage - 1)}
				disabled={currentPage === 1 ? true : false}
			>
				&lt;
			</button>

			<div>
				{currentPage >= 5 && (
					<>
						{pages.slice(0, 1).map((page, index) => {
							return (
								<button
									key={index}
									className={`text-[#333333] px-1 md:px-2 mx-1 ${
										page === currentPage ? 'bg-[#1e75ff] text-white rounded' : ''
									}`}
									onClick={() => setCurrentPage(page)}
								>
									{page}
								</button>
							);
						})}
						<span>...</span>
					</>
				)}
			</div>

			{pages.slice(nextNums - 1, nextNums + 4).map((page, index) => {
				return (
					<button
						key={index}
						className={`text-[#333333] px-1 md:px-2 mx-1 ${page === currentPage ? 'bg-[#1e75ff] text-white rounded' : ''}`}
						onClick={() => setCurrentPage(page)}
					>
						{page}
					</button>
				);
			})}
			<div>
				{currentPage < totalPages - 2 && (
					<>
						<span>...</span>

						{pages.slice(totalPages - 1, totalPages).map((page, index) => {
							return (
								<button
									key={index}
									className={`text-[#333333] px-1 md:px-2 mx-1 ${
										page === currentPage ? 'bg-[#1e75ff] text-white rounded' : ''
									}`}
									onClick={() => setCurrentPage(page)}
								>
									{page}
								</button>
							);
						})}
					</>
				)}
			</div>

			<button
				className={`text-[30px] md:text-[48px] ${currentPage === totalPosts.length ? 'text-[#333333a4]' : ''}`}
				onClick={() => setCurrentPage(currentPage + 1)}
				disabled={currentPage === totalPosts.length ? true : false}
			>
				&gt;
			</button>
		</div>
	);
};

export default Pagination;
