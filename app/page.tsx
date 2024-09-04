'use client'
// app/page.tsx
import React, { useState } from 'react';
import Graph from '../components/Graph';
import EquationInput from '../components/EquationInput';
import { parseEquation } from '../utils/parseEquation';
import { ResizableBox } from 'react-resizable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftRight, faGripVertical } from '@fortawesome/free-solid-svg-icons';

const HomePage: React.FC = () => {
  const [equations, setEquations] = useState<{ a: number; b: number; c: number; title: string, color?: string }[]>([]);

  const addEquation = (equation: string) => {
    try {
      const { a, b, c } = parseEquation(equation);
      setEquations([...equations, { a, b, c, title: equation, color: Math.random().toString(16).slice(-6) }]);
    } catch (error) {
      console.error('Error parsing equation:', error);
    }
  };

  const deleteEquation = (index: number) => {
    setEquations(equations.filter((_, i) => i !== index));
  }

  //  modify the equation function onModify as a full string equation

  const onModify = (index: number, equation: string, color: string) => {
    try {
      const { a, b, c} = parseEquation(equation);
      const newEquations = [...equations];
      newEquations[index] = { a, b, c, title: equation, color: color};
      setEquations(newEquations);
      
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className='w-screen h-screen'>
      <div className="flex w-full h-[96%] items-center justify-center ">
        <ResizableBox 
        width={500}
        className='w-full h-full relative' axis={"x"}
        handle={ <div className="w-3 h-full bg-gray-200 absolute left-full top-0 grid place-content-center z-10 cursor-w-resize">
          <FontAwesomeIcon icon={faGripVertical} className='text-gray-500' />
        </div> }>
          <div className='w-full h-full p-4'>
            <h1 className='text-2xl font-bold text-blue-900'><span className='text-red-700 text-[3rem]'>Gen</span>Graph</h1>
            
            {
              equations.map( (eq, index) => {
                return <EquationInput onAddEquation={addEquation} oldColor={eq.color} onModify={onModify} e_index={index} onDeleteEquation={() => deleteEquation(index)} key={index} eq={eq.title} />
              })
            }

            <EquationInput onAddEquation={addEquation} onModify={onModify} eq={""} />
          </div>
        </ResizableBox>
        <div className='w-full h-full grid place-content-center'>
          <Graph equations={equations} />
        </div>
      </div>
      <h1>Developed By: Ezatullah Ghafoori</h1>
    </div>
  );
};

export default HomePage;
