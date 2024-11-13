import { sum, subtraction, multiplication, division } from './calculator';

export const simplifyEquation = (equation: string) => {
  const independentTerms = equation.split(/[()]/);

  let simplifiedEquation = '';

  independentTerms.forEach((section) => {
    const term = section.match(/(\d+|[+\-*/])/g);
    let parenthesisResult = 0;

    if (term && term.length > 2) {
      // resolve equation inside ()
      term.forEach((item, index) => {
        if (item.match(/[*/\-\+]/)) {
          if (item === '+') {
            parenthesisResult += sum(Number(term[index - 1]), Number(term[index + 1]));
          }
          if (item === '-') {
            parenthesisResult += subtraction(Number(term[index - 1]), Number(term[index + 1]));
          }
          if (item === '*') {
            parenthesisResult += multiplication(Number(term[index - 1]), Number(term[index + 1]));
          }
          if (item === '/') {
            parenthesisResult += division(Number(term[index - 1]), Number(term[index + 1]));
          }
        }
      });
      simplifiedEquation += parenthesisResult;
    } else {
      simplifiedEquation += section;
    }
  });

  return simplifiedEquation.match(/(\d+|[+\-*/])/g);
}