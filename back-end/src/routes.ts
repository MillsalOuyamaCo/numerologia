import express from 'express';
import CalculateController from './controllers/CalculatorController';
import GenerateMapController from './controllers/MapGeneratorController';

const routes = express.Router();
const calculatorController = new CalculateController();
const mapGeneratorController = new GenerateMapController();

routes.get('/calculate', calculatorController.index);

routes.post('/generate-map', mapGeneratorController.create);

export default routes;