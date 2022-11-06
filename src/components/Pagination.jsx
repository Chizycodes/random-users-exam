const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
	let pages = [];
	const totalPages = Math.ceil(totalPosts / postsPerPage);

	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}
	return (
		<div className="flex items-center text-[#333333]">
			<button
				className={`text-[48px] ${currentPage === 1 ? 'text-[#333333a4]' : ''}`}
				onClick={() => setCurrentPage(currentPage - 1)}
				disabled={currentPage === 1 ? 'true' : 'false'}
			>
				&lt;
			</button>
			{pages.slice(0, 5).map((page, index) => {
				return (
					<button
						key={index}
						className={`text-[#333333] px-2 mx-1 ${page === currentPage ? 'bg-[#1e75ff] text-white rounded' : ''}`}
						onClick={() => setCurrentPage(page)}
					>
						{page}
					</button>
				);
			})}
			<span>...</span>

			{pages.slice(totalPages - 1, totalPages).map((page, index) => {
				return (
					<button
						key={index}
						className={`text-[#333333] px-2 mx-1 ${page === currentPage ? 'bg-[#1e75ff] text-white rounded' : ''}`}
						onClick={() => setCurrentPage(page)}
					>
						{page}
					</button>
				);
			})}
			<button
				className={`text-[48px] ${currentPage === totalPosts.length ? 'text-[#333333a4]' : ''}`}
				onClick={() => setCurrentPage(currentPage + 1)}
				disabled={currentPage === totalPosts.length ? 'true' : 'false'}
			>
				&gt;
			</button>
		</div>
	);
};

export default Pagination;
