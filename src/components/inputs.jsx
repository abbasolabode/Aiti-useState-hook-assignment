import { useState } from "react";
import DisplayResults from "../DisplayResults";

export default function Inputs() {
  const [scores, setScores] = useState({
    Maths: "",
    English: "",
    Physics: "",
    Chemistry: "",
    Biology: "",
  });

  const [results, setResults] = useState([]);



    //Get the values from the input field and use it to update the scores state
   function handleChange(e){
     const {name, value} = e.target;
      setScores((prev) => {
        return {...prev, [name]: Number(value)}
      });
   }

  //
  function handleSubmit(e){
    e.preventDefault();
    const getScores = Object.values(scores);
    setResults(getScores);//update the results state with the value of the score state
    setScores({
    Maths: "",
    English: "",
    Physics: "",
    Chemistry: "",
    Biology: "",
    })
  }
   
  //Calculate the total scores using the reduce method
  const totalScore = results.reduce((acc, curScore) => acc + curScore, 0)
  console.log(totalScore);




  return (
		<div
			onSubmit={handleSubmit}
			className="w-[25rem] min-h-[34rem]  mx-auto mt-4 bg-sky-400"
		>
			<form
				action=""
				method="post"
				className="w-[25rem] min-h-[30rem] flex flex-col "
			>
				<span className="w-full min-h-[4rem] flex items-center gap-5 ">
					<label className="text-3xl" htmlFor="">
						Mathematics:
					</label>
					<input
						className="w-full min-h-10 placeholder:text-xl text-xl"
						type="text"
						placeholder="Mathematics"
						value={scores.Maths}
						name="Maths"
						onChange={handleChange}
					/>
				</span>
				<span className="w-full  min-h-[4rem]  mt-4 flex items-center gap-5">
					<label className="text-3xl" htmlFor="">
						English:
					</label>
					<input
						className="min-h-10 placeholder:text-xl text-xl"
						type="text"
						placeholder="English"
						value={scores.English}
						name="English"
						onChange={handleChange}
					/>
				</span>
				<span className="w-full mt-4  flex items-center gap-5">
					<label className="text-3xl" htmlFor="">
						Physics:
					</label>
					<input
						className="min-h-10 placeholder:text-xl text-xl"
						type="text"
						placeholder="physics"
						value={scores.Physics}
						name="Physics"
						onChange={handleChange}
					/>
				</span>
				<span className="w-full mt-4  flex items-center gap-5">
					<label className="text-3xl" htmlFor="">
						Chemistry:
					</label>
					<input
						className="min-h-10 placeholder:text-xl text-xl"
						type="text"
						placeholder="Chemistry"
						value={scores.Chemistry}
						name="Chemistry"
						onChange={handleChange}
					/>
				</span>
				<span className="w-full mt-4  flex items-center gap-5">
					<label className="text-3xl" htmlFor="">
						Biology:
					</label>
					<input
						className="min-h-10 placeholder:text-xl text-xl"
						type="text"
						placeholder="Biology"
						value={scores.Biology}
						name="Biology"
						onChange={handleChange}
					/>
				</span>
			</form>
			<>
				<div className="w-full text-center flex  justify-center items-end text-3xl gap-3 ">
                    <DisplayResults totalScore={totalScore}/>
					<button onClick={handleSubmit} className=" text-center border text-xl px-5 py-2 bg-yellow-400">
						Submit
					</button>
				</div>
			</>
		</div>
	);
}
