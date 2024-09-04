"use client";
interface ParsedEquation {
  a: number;
  b: number;
  c: number;
}

export const parseEquation = (equation: string): ParsedEquation => {
  // Remove all spaces for easier parsing
  const sanitized = equation.replace(/\s+/g, "");

  // Split the equation into left and right parts
  const [left, right] = sanitized.split("=");

  // Extract coefficients and constant
  const matchX = left.match(/([+-]?\d*)x/);
  const matchY = left.match(/([+-]?\d*)y/);

  const a = matchX ? parseFloat(matchX[1] || "1") : 0;
  const b = matchY ? parseFloat(matchY[1] || "1") : 0;
  const c = parseFloat(right);

  console.log("a:", a);
  console.log("b: ", b);
  console.log("c: ", -1 * c);

  return {
    a,
    b,
    c: c, // Move constant to the left side
  };
};
