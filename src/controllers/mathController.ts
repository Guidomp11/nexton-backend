import { Response, Request } from 'express';
import { simplifyEquation } from '../utils/simplifyEcuation';
import { resolveEquation } from '../utils/resolveEquation';

export const resolveMathEquation = (req: Request, res: Response) => {
  try {
    const { equation } = req.body;

    if (!equation) {
      throw new Error('Equation is missing');
    }

    const simplifiedEquation = simplifyEquation(equation);
    
    if (!simplifiedEquation) {
      throw new Error(`${equation} could not be solved`);
    }
  
    const result = resolveEquation(simplifiedEquation);
    
    res.status(200).json({
      success: true,
      result: `${equation} = ${result}`,
    });
    
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Server Error',
    });
  }
};
