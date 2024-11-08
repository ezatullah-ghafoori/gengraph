"use client";
// app/page.tsx
import React, { useState } from "react";
import { parseEquation3d } from "@/utils/parseEquation";
import { ResizableBox } from "react-resizable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLeftRight,
	faGripVertical,
	faLineChart,
} from "@fortawesome/free-solid-svg-icons";
import EquationInput3d from "@/components/EquationInput3d";
import Graph3d from "@/components/Graph3d";
import Link from "next/link";

const HomePage: React.FC = () => {
	const [equations, setEquations] = useState<
		{
			a: number;
			b: number;
			c: number;
			d: number;
			title: string;
			color?: string;
		}[]
	>([]);

	const addEquation = (equation: string) => {
		try {
			const { a, b, c, d } = parseEquation3d(equation);
			setEquations([
				...equations,
				{
					a,
					b,
					c,
					d,
					title: equation,
					color: Math.random().toString(16).slice(-6),
				},
			]);
		} catch (error) {
			console.error("Error parsing equation:", error);
		}
	};

	const deleteEquation = (index: number) => {
		setEquations(equations.filter((_, i) => i !== index));
	};

	//  modify the equation function onModify as a full string equation

	const onModify = (index: number, equation: string, color: string) => {
		try {
			const { a, b, c, d } = parseEquation3d(equation);
			const newEquations = [...equations];
			newEquations[index] = { a, b, c, d, title: equation, color: color };
			setEquations(newEquations);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-full h-screen">
			<div className="flex w-full h-[96%] items-center justify-center ">
				<ResizableBox
					width={500}
					className="w-full h-full relative"
					axis={"x"}
					handle={
						<div className="w-3 h-full  absolute left-full top-0 grid place-content-center z-10 cursor-w-resize">
							<FontAwesomeIcon
								icon={faGripVertical}
								className="text-gray-500"
							/>
						</div>
					}>
					<div className="w-full h-full p-4">
						<div className="flex justify-between items-center">
							<h1 className="text-2xl font-bold text-blue-900">
								<span className="text-red-700 text-[3rem]">G</span>Graph
							</h1>
							<Link href={"/linear-algebra"}>
								<FontAwesomeIcon
									icon={faLineChart}
									className="text-gray-500"
								/>
							</Link>
						</div>

						{equations.map((eq, index) => {
							return (
								<EquationInput3d
									onAddEquation={addEquation}
									oldColor={eq.color}
									onModify={onModify}
									e_index={index}
									onDeleteEquation={() => deleteEquation(index)}
									key={index}
									eq={eq.title}
								/>
							);
						})}

						<EquationInput3d
							onAddEquation={addEquation}
							onModify={onModify}
							eq={""}
						/>
					</div>
				</ResizableBox>
				<div className="w-full h-full grid place-content-center">
					<Graph3d equations={equations} />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
