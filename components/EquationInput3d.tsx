"use client";
import React, { useState, useEffect } from "react";

interface EquationInputProps {
	onAddEquation: (equation: string) => void;
	eq?: string; // Optional equation prop
	onDeleteEquation?: () => void;
	onModify: (index: number, equation: string, color: string) => void;
	e_index?: number; // Optional index prop
	oldColor?: string;
}

const EquationInput: React.FC<EquationInputProps> = ({
	onAddEquation,
	eq,
	onDeleteEquation,
	e_index,
	onModify,
	oldColor,
}) => {
	const [equation, setEquation] = useState(eq || "");
	const [color, setColor] = useState<string>(oldColor || "#000000");

	// Use useEffect to update the local state if eq prop changes
	useEffect(() => {
		setEquation(eq || "");
		setColor(oldColor || "#000000");
	}, [eq, oldColor]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (equation.trim()) {
			if (e_index !== undefined) {
				// Modify the existing equation
				onModify(e_index, equation.trim(), color);
			} else {
				// Add a new equation
				onAddEquation(equation.trim());
				setEquation("");
			}
		}
	};

	return (
		<form
			className="w-full flex justify-around items-center"
			onSubmit={handleSubmit}>
			<input
				type="color"
				className="rounded-full border-none outline-none w-[25px] flex-[0.1] mr-3 h-[25px]"
				value={color}
				onChange={e => {
					setColor(e.target.value);
					onModify(e_index || 0, equation, e.target.value);
				}}
			/>
			<input
				className="w-full flex-1 p-2 border-b-2 focus:outline-none focus:bg-gray-100"
				type="text"
				value={equation}
				onChange={e => setEquation(e.target.value)}
				placeholder="Enter an Equation!"
			/>
			{onDeleteEquation && (
				<button
					type="button"
					onClick={onDeleteEquation}
					className="w-[4rem] border-[1px] ml-2 mt-2 rounded-full text-2xl flex items-center justify-center hover:bg-gray-100">
					-
				</button>
			)}
		</form>
	);
};

export default EquationInput;
