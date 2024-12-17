export default function DisplayResults({ totalScore }) {

    if(!totalScore) return;
	return (
		<>
			{totalScore < 100 ? (
				<p className="mr-3 text-red-500">YOU FAILED!{totalScore}</p>
			) : (
				<p className="mr-3 text-green-700">YOU PASSED!{totalScore}</p>
			)}
		</>
	);
}
