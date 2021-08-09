import { Request, Response } from "express";
import CalculatorUseCase from "../useCases/CalculatorUseCase";

export default class CalculateController {
  async index(request: Request, response: Response) {
    if (request.query.birthdate !== undefined &&
      request.query.name != undefined &&
      (request.query.deep === 'true' || request.query.deep === 'false')) {
        const deep = request.query.deep === 'true' ? true : false;
        const dateArray = request.query.birthdate.toString().split('-').map(Number);
        const date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
        
        const result = new CalculatorUseCase().calculate(request.query.name.toString().toLocaleLowerCase(), date, deep);
        response.send(result); 
    }
  }
}
