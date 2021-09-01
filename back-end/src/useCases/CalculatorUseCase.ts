import Calculator from "../business/Calculator";
import ICalculatorUseCase from "../interfaces/useCases/ICalculatorUseCase";
import TemperamentPlan from "../model/core/TemperamentPlan";
import LettersAsNumbersList from "../model/enum/LettersAsNumbersListEnum";
import CalculusResponse from "../model/response/CalculusResponse";
import Letters from "../Utils/Letters";

export default class CalculatorUseCase implements ICalculatorUseCase {
  // TODO injetar dependencia dps
  private readonly calculator = new Calculator();
  private readonly lettersUtils = new Letters();
  calculate(name: string, birthDate: Date, deep: boolean): CalculusResponse {
    const birthDateDateFormat = new Date(birthDate);
    const nameCoreObject = this.calculator.CalculateCoreObjectForName(
      name.toLowerCase()
    );
    const birthCoreObject = this.calculator.CalculateCoreObjectForBirthdate(birthDateDateFormat);
    const vowels = this.lettersUtils.GetVowels(name);
    const consonants = this.lettersUtils.GetConsonants(name);

    const vibrationResult = this.calculator.calculateVibration(birthDate.getDate());
    const soulResult = this.calculator.calculateSoul(vowels);
    const appearanceResult = this.calculator.calculateAppearance(consonants);
    const destinyResult = nameCoreObject;
    const lifeLessonResult = birthCoreObject;
    const powerResult = this.calculator.calculatePower(destinyResult.getReducedNumber(), lifeLessonResult.getReducedNumber());
    const temperamentPlanResult = this.calculator.calculateTemperamentPlan(name);
    const karmicAbsenceResult = this.calculator.calculateKarmicAbscence(temperamentPlanResult);
    const karmicNumbersResult = this.calculator.calculateKarmicNumbers(soulResult, appearanceResult, destinyResult);
    const lifeCyclesResult = this.calculator.calculateLifeCycle(birthDate);
    const spiersAndRealizationsResult = this.calculator.calculateSpiersAndRealizations(birthDate, lifeLessonResult);
    const challengesResult = this.calculator.calculateChallenges(birthDate, lifeLessonResult);
    const personalYearResult = this.calculator.calculatePersonalYear(birthDate, lifeLessonResult);
    const quadrimestersResult = this.calculator.calculateQuadrimester(birthDate, lifeLessonResult, soulResult);
    const personalMonthResult = this.calculator.calculatePersonalMonth(personalYearResult);
    const personalDayResult = this.calculator.calculatePersonalDay(personalMonthResult);

    const calculosResponse = new CalculusResponse(
      name.toUpperCase(),
      soulResult,
      appearanceResult,
      destinyResult,
      lifeCyclesResult,
      vowels[0].toUpperCase(),
      lifeLessonResult,
      birthDate.getDate().toString(),
      birthDate.toISOString().slice(0,10).split('-').reverse().join('/'),
      powerResult,
      temperamentPlanResult,
      vibrationResult,
      spiersAndRealizationsResult,
      challengesResult,
      karmicNumbersResult,
      karmicAbsenceResult,
      personalYearResult,
      quadrimestersResult,
      personalMonthResult,
      personalDayResult,
      deep
    );

    return calculosResponse;
  }
}
