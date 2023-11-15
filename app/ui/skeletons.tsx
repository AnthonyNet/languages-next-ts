export function DivRightSkeleton() {
	return (
		<div className="w-full h-auto  min-h-[800px] xl:min-h-[85vh] xl:h-[80%] max-w-xl mx-auto rounded-lg shadow-lg py-8 sm:py-0  __my_grid sm:mt-[10vh] border-2 flex flex-end"></div>
	);
}

const shimmer =
	"before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";
export function InputSkeleton() {
	return (
		<>
			<h5 className={shimmer + "text-5xl p-6"}>...</h5>
			<ul
				className={shimmer + " flex flex-col justify-around text-center mb-2"}>
				<li className="m-1 p-1 border-2 rounded-xl">
					<label>
						<input type="text" className="rounded-md p-1 bg-transparent" />
					</label>
				</li>
				<li className="m-1 p-1 font-bold border-2 rounded-xl">
					<label>
						<input type="text" className="rounded-md p-1 bg-transparent" />
					</label>
				</li>
				<li className="m-1 p-1 font-bold border-2 rounded-xl">
					<label>
						<input type="text" className="rounded-md p-1 bg-transparent" />
					</label>
				</li>
			</ul>
		</>
	);
}
