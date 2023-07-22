import { LeftArrow, RightArrow } from "./Arrows";

interface Props {
    pages: number[];
    prevPage: () => void;
    nextPage: () => void;
    setCurrentPage: (page: number) => void;
    currentPage: number;

}

function Bottom_Menu({pages, prevPage, nextPage, currentPage, setCurrentPage}:Props):JSX.Element{

    const style = {
        display: currentPage < currentPage - 1 ? "none" : "",
      };


return(
    <article className="flex flex-row  w-auto  justify-center">
    <ul className="flex flex-row  items-center justify-center border-4 __border_color">

      {/* ----------------------
         PREVIOUS PAGE BUTTON
      ---------------------------*/}

      <li className="sm:w-[50px] px-4 " onClick={prevPage}>
        <LeftArrow />
      </li>

        {/* --------------------------------
              PAGINATION MENU
        -------------------------------   */}

      {pages.map((page, index) => {
        return (
					<li
						className={
							page == currentPage
								? "text-xl border-b border-red-400  sm:w-[50px] text-center mt-2 h-[50px]"
								: page < currentPage - 3
								? "hidden"
								: // : page > currentPage + 4 && currentPage !=1 ? "hidden"
								page > currentPage + 3 && page > 7
								? "hidden"
								: "sm:w-[50px] sm:h-[50px] p-[2vw] sm:p-4 visible" +
								  " __nav-item"
						}
						style={style}
						key={index}
						onClick={() => setCurrentPage(page)}>
						{page}
					</li>
				);
      })}

      {/* ----------------------
      NEXT PAGE BUTTON
      -------------------------*/}

      <li onClick={nextPage} className="sm:w-[50px] p-4 ">
        <RightArrow />
      </li>
    </ul>
  </article>
)
}

export default Bottom_Menu;
