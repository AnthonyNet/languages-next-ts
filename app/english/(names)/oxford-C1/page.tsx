"use client";

import { OxfordC1 } from "@/myData";
import Card from "@/components/oxford-goethe/Card";

function page() {
	return (
		<div>
			<Card dataTS={OxfordC1} />
		</div>
	);
}

export default page;
