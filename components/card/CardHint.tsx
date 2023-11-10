import Irregular from "@/interface/Irregular";

const CardHint = ({
	base,
	pastSimple,
	pastSimple2,
	pastParticiple,
	pastParticiple2,
}: Irregular) => {
	return (
		<ul className="w-full flex justify-around flex-wrap">
			<li>{base}</li>
			<li> {pastSimple} </li>
			{pastSimple2 && <li>{pastSimple2}</li>}
			<li> {pastParticiple} </li>
			{pastParticiple2 ? <li>{pastParticiple2}</li> : null}
		</ul>
	);
};

export default CardHint;
