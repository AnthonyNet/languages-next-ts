"use client";

import { useState, useEffect } from "react";

import { OxfordB1, OxfordB2, OxfordC1, Goethe } from "@/myData/";

import Top_Menu from "@/components/pagination/Top_Menu";
import Bottom_Menu from "@/components/pagination/Bottom_Menu";

const styles = {
	section: "flex flex-column justify-center items-baseline flex-wrap",
	main: "w-full flex flex-col justify-between items-center",
	h2: "text-center",
	table: "table-fixed min-w-[50vw] max-w-[90%]",
	thead__tr: "flex justify-around",
	tbody__td: "w-[50%] __border_color  text-right",
} as const;

function Pagination() {
	const [myData, setMyData] = useState(OxfordB1);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [wordsPerPage, setPostsPerPage] = useState<number>(20);

	//  20                    1             20
	const lastWordIndex: number = currentPage * wordsPerPage;
	//      0              20                 20
	const firstWordIndex: number = lastWordIndex - wordsPerPage;
	//                                0                  20
	const currentPosts = myData.slice(firstWordIndex, lastWordIndex);

	let pages: number[] = [];

	for (let i = 1; i <= Math.ceil(myData.length / wordsPerPage); i++) {
		pages.push(i);
	}

	const prevPage = () => {
		if (currentPage < 2) {
			setCurrentPage(pages.length);
		} else {
			setCurrentPage((page) => page - 1);
		}
	};

	const nextPage = () => {
		if (currentPage > pages.length - 1) {
			setCurrentPage(1);
		} else {
			setCurrentPage((page) => page + 1);
		}
	};

	const [myNumb, setMyNumb] = useState(0);

	useEffect(() => {
		if (myNumb == 0) {
			setMyData(OxfordB1);
		} else if (myNumb == 1) {
			setMyData(OxfordB2);
		} else if (myNumb == 2) {
			setMyData(OxfordC1);
		} else {
			setMyData(Goethe);
		}
	}, [myNumb]);

	const capitalizeFirst = (word: any) => {
		const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
		return capitalizedWord;
	};

	return (
		<section className={styles.section}>
			<Top_Menu
				myNumb={myNumb}
				setMyNumb={setMyNumb}
				setCurrentPage={setCurrentPage}
			/>

			<main className={styles.main}>
				<h2 className={styles.h2}>Pagination</h2>
				<table className={styles.table}>
					<thead>
						<tr className={styles.thead__tr}>
							<th>English</th>
							<th>Czech</th>
						</tr>
					</thead>
					<tbody>
						{currentPosts.map((item, index) => {
							return (
								<tr
									key={index}
									className="border-b-2 border-dotted __border_color flex  flex-nowrap cursor-pointer __nav-item">
									{item.sentenceExample ? (
										<td className="w-[50%] text-left">
											{capitalizeFirst(item.sentenceExample)}
										</td>
									) : (
										<td className="w-[50%] text-left">
											{capitalizeFirst(item.word)}
										</td>
									)}
									<td className={styles.tbody__td}>
										{capitalizeFirst(item.czWord)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</main>

			<Bottom_Menu
				pages={pages}
				prevPage={prevPage}
				nextPage={nextPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</section>
	);
}

export default Pagination;
