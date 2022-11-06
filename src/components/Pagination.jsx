
const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div>
      <button className={`mr-2 text-[20px] ${currentPage === 1 ? "cursor-not-allowed text-gray-500" : ""}`} onClick={() => setCurrentPage(currentPage - 1)}>
        &lt;
      </button>
      {
        pages.slice(0, 5).map((page, index) => {
          return (
            <button key={index} className={`text-[#333333] px-2 mx-1 ${page === currentPage ? "text-gray-500 bg-[#1e75ff] text-white rounded" : ""}`} onClick={() => setCurrentPage(page)} >
              {page}
            </button>
          )
        })
      }
      <span>...</span>

      {
        pages.slice(totalPages - 2, totalPages).map((page, index) => {
          return (
            <button key={index} className={`text-[#333333] px-2 mx-1 ${page === currentPage ? "text-gray-500 bg-[#1e75ff] text-white rounded" : ""}`} onClick={() => setCurrentPage(page)} >
              {page}
            </button>
          )
        })
      }
      <button className={`ml-2 text-[20px] ${currentPage === totalPosts.length ? "cursor-not-allowed text-gray-500" : ""}`} onClick={() => setCurrentPage(currentPage + 1)}>
        &gt;
      </button>
    </div>
  );

}

export default Pagination;