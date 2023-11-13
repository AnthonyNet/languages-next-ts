"use client";

import { LukesPhrasal } from "@/myData";
import Card from "@/components/oxford-goethe/Card";

function page() {
	return (
		<div>
			<Card dataTS={LukesPhrasal} />
		</div>
	);
}

export default page;
