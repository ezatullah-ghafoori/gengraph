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



interface ParsedEquation3d {
  a: number;
  b: number;
  c: number;
  d: number;
}

export const parseEquation3d = (equation: string): ParsedEquation3d => {
  // Remove all spaces for easier parsing
  const sanitized = equation.replace(/\s+/g, "");

  // Split the equation into left and right parts
  const [left, right] = sanitized.split("=");

  // Initialize coefficients
  let a = 0, b = 0, c = 0, d = 0;

  // Function to extract coefficient for a variable
  const extractCoefficient = (regex: RegExp): number => {
    const match = left.match(regex);
    if (match) {
      // Return parsed coefficient, defaulting to 1 if no number is found
      const coefficient = parseFloat(match[1] || "1");
      return match[0].startsWith("-") ? -coefficient : coefficient;
    }
    return 0;
  };

  // Extract coefficients for x, y, and z
  a = extractCoefficient(/([+-]?\d*)x/);
  b = extractCoefficient(/([+-]?\d*)y/);
  c = extractCoefficient(/([+-]?\d*)z/);

  // Parse the right side of the equation as a constant
  d = parseFloat(right);

  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);
  console.log("d:", d);

  return {
    a,
    b,
    c,
    d
  };
};
