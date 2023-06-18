import {
	IrregularVerbs,
	OxfordB1,
	OxfordB2,
	OxfordC1,
	LukesPhrasal,
	VerbenData,
	Goethe,
} from "../../myData";



export const menuData = {
	english: [
		{
			href: "/english/irregular-verbs",
			name: "Irregular Verbs",
			length: IrregularVerbs.length,
		},
		{
			href: "/german/memory",
			name: "Memory",
		},
		{
			href: "/english/search-irregular",
			name: "Search Irregular",
		},
		{
			href: "/english/oxford-B1",
			name: "Oxford B1",
			length: OxfordB1.length,
		},
		{
			href: "/english/oxford-B2",
			name: "Oxford B2",
			length: OxfordB2.length,
		},
		{
			href: "/english/oxford-C1",
			name: "Oxford C1",
			length: OxfordC1.length,
		},
		{
			href: "/english/phrasal-verbs",
			name: "Lukes Phrasal",
			length: LukesPhrasal.length,
		},
		{
			href: "/english/pagination",
			name: "Pagination",
		},
	],
	german: [
		{
			href: "/german/irregular-verbs",
			name: "Verben",
			length: VerbenData.length,
		},
		{
			href: "/german/memory",
			name: "Memory",
		},
		{
			href: "/german/goethe",
			name: "Göethe",
			length: Goethe.length,
		},
	],
};
