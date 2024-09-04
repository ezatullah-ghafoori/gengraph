// @ts-nocheck
import React from "react";
import dynamic from "next/dynamic";
import { round } from "mathjs";
// import Plot from 'react-plotly.js';
// import Plotly from 'plotly.js-dist';

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const computeYValues = (a: number, b: number, c: number, x: number[]) =>
  x.map((xi) => {
    let y = (c - a * xi) / b;
    console.log("X: ", xi);
    console.log("Y: ", round(y, 2));
    return y;
  });

const Graph: React.FC<{
  equations: {
    a: number;
    b: number;
    c: number;
    title: string;
    color?: string | undefined;
  }[];
}> = ({ equations }) => {
  const x = Array.from({ length: 200 }, (_, i) => (i - 100) * 0.1);

  const data = equations.map(({ a, b, c, title, color }) => ({
    x: x,
    y: computeYValues(a, b, c, x),
    type: "scatter",
    mode: "lines",
    marker: { color: color ? color : "blue" },
    name: title,
  }));

  return (
    <Plot
      className="flex-1"
      data={data}
      layout={{
        title: "Graph",
        xaxis: { title: "x", range: 10 },
        yaxis: { title: "y", range: 10 },
        margin: {
          l: 50,
          r: 50,
          b: 50,
          t: 50,
        },
        width: 800,
        height: 600,
        legend: {
          yanchor: "bottom",
          xanchor: "right",
        },
      }}
      config={{
        showAxisRangeEntryBoxes: true,
        showSources: true,
        showAxisDragHandles: true,
        scrollZoom: true,
        displayModeBar: true, // Ensures the mode bar is shown
        modeBarButtonsToRemove: ["zoomIn2d", "zoomOut2d", "resetScale2d"], // Remove specific buttons
        modeBarButtonsToAdd: [], // Add custom buttons if needed
        displaylogo: false, // Hide the Plotly logo
      }}
      useResizeHandler={true}
    />
  );
};

export default Graph;
