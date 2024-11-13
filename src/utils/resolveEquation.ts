import { division, multiplication, subtraction, sum } from './calculator';

export const resolveEquation = (equation: RegExpMatchArray) => equation.reduce((previous, current, currentIndex) => {
  if (current === '+' && equation[currentIndex + 1]) {
    return sum(previous, Number(equation[currentIndex + 1]));
  }

  if (current === '-' && equation[currentIndex + 1]) {
    return subtraction(previous, Number(equation[currentIndex + 1]));
  }

  if (current === '*' && equation[currentIndex + 1]) {
    return multiplication(previous, Number(equation[currentIndex + 1]));
  }
  
  if (current === '/' && equation[currentIndex + 1]) {
    return division(previous, Number(equation[currentIndex + 1]));
  }
  
  return previous === 0 ? Number(current) : previous;
}, 0);
