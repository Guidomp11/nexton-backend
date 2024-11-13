import request  from 'supertest';
import express, { Express } from 'express';
import { resolveMathEquation } from '../controllers';

describe('POST /api/math', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.post('/api/math', resolveMathEquation);
  });

  it('Should fail with missing equation', async () => {
    const response = await request(app).post('/api/math').send({});
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      message: 'Equation is missing'
    });
  });

    it('Equation 5 + 5', async () => {
      const equation = '5 + 5';
      const response = await request(app).post('/api/math').send({ equation });
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        result: `${equation} = 10`
      });
    });

    it('Equation 5 + (2 + 3) + 2', async () => {
      const equation = '5 + (2 + 3) + 2';

      const response = await request(app).post('/api/math').send({ equation });
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        result: `${equation} = 12`
      });
    });

    it('Equation (5 + (2 + 3) + 2) / 2', async () => {
      const equation = '(5 + (2 + 3) + 2) / 2';

      const response = await request(app).post('/api/math').send({ equation });
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        result: `${equation} = 6`
      });
    });

    it('Equation (15 - (2 + 3)) * 2', async () => {
      const equation = '(15 - (2 + 3)) * 2';

      const response = await request(app).post('/api/math').send({ equation });
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        result: `${equation} = 20`
      });
    });
});