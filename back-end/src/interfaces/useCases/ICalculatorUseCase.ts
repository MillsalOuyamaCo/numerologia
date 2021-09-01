import CalculusResponse from "../../model/response/CalculusResponse";

export default interface ICalculatorUseCase {
    calculate(name: string, birthDate: Date, deep: boolean): CalculusResponse;
}