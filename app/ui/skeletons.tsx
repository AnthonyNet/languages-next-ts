const shimmer =
	"before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-blue-800/60 before:to-transparent";
export function IrregularInputsSkeleton() {
	return (
		<>
			<h5 className="text-5xl px-6 pb-4 m-auto">...</h5>
			<ul className=" relative overflow-hidden flex flex-col justify-around text-center mb-2">
				<li
					className={
						shimmer +
						" relative overflow-hidden m-1 p-1 border-2  border-blue-800 opacity-75 rounded-xl"
					}>
					<label>
						<input type="text" className="rounded-md p-1 bg-transparent" />
					</label>
				</li>
				<li
					className={
						shimmer +
						" relative overflow-hidden m-1 p-1 border-2  border-blue-800 opacity-75 rounded-xl"
					}>
					<label>
						<input type="text" className="rounded-md p-1 bg-transparent" />
					</label>
				</li>
				<li
					className={
						shimmer +
						" relative overflow-hidden m-1 p-1 border-2  border-blue-800 opacity-75 rounded-xl"
					}>
					<label>
						<input type="text" className="rounded-md p-1 bg-transparent" />
					</label>
				</li>
			</ul>
		</>
	);
}

export function IrregularButtonsSkeleton() {
	return (
		<>
			<button
				type="button"
				className={
					shimmer +
					" relative flex items-center justify-center w-16 h-14 overflow-hidden border-2 border-blue-600 opacity-50 rounded-xl"
				}>
				...
			</button>
			<button
				type="button"
				className={
					shimmer +
					" relative flex items-center justify-center w-16 h-14 overflow-hidden border-2 border-blue-600 opacity-50 rounded-xl"
				}>
				...
			</button>
		</>
	);
}
