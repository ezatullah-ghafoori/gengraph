// @ts-nocheck
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { round } from "mathjs";
// import Plot from 'react-plotly.js';
// import Plotly from 'plotly.js-dist';

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
const Graph: React.FC<{
	equations: {
		a: number;
		b: number;
		c: number;
		d: number;
		title: string;
		color?: string | undefined;
	}[];
}> = ({ equations }) => {
	const x = Array.from({ length: 21 }, (_, i) => i - 10);
	const y = Array.from({ length: 21 }, (_, i) => i - 10);

	const data = equations.map(({ a, b, c, d, title, color }) => {
		const z = x.map(xVal => y.map(yVal => (d - a * xVal - b * yVal) / c));

		return {
			type: "surface",
			x: x,
			y: y,
			z: z,
			colorscale: color
				? [
						[0, color],
						[1, color],
				  ]
				: "Viridis",
			colorbar: { title: title },
			showscale: true,
			showlegend: false,
		};
	});

	return (
		<Plot
			data={data}
			layout={{
				title: "3D Graph",
				autosize: true,
				scene: {
					xaxis: {
						title: "X",
						range: [-10, 10],
						autorange: true,
						aspectmode: "manual",
						aspectratio: { x: 1, y: 1 },
					},
					yaxis: {
						title: "Y",
						range: [-10, 10],
						autorange: true,
						aspectmode: "manual",
						aspectratio: { x: 1, y: 1 },
					},
					zaxis: {
						title: "Z",
						range: [-10, 10],
						autorange: true,
					},
					camera: {
						eye: { x: 2, y: 2, z: 0.5 }, // Adjust camera view
						center: { x: 0, y: 0, z: 0 },
						up: { x: 2, y: 0, z: 2 },
					},
					aspectratio: { x: 1.2, y: 1.2, z: 1.2 },
					aspectmode: "manual",
				},
				width: 800,
				height: 600,
			}}
			config={{
				showAxisRangeEntryBoxes: true,
				showSources: false,
				showAxisDragHandles: true,
				scrollZoom: true,
				displayModeBar: true, // Ensures the mode bar is shown
				modeBarButtonsToRemove: ["zoomIn2d", "zoomOut2d", "resetScale2d"], // Remove specific buttons
				modeBarButtonsToAdd: [], // Add custom buttons if needed
				displaylogo: false, // Hide the Plotly logo
			}}
		/>
	);
};

export default Graph;
