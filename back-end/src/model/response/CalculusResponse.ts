import CoreObjectCalculus from "../core/CoreOjectCalculus";
import KarmicNumber from "../core/KarmicNumber";
import LifePeriodObjectResultCore from "../core/QuadrimesterObjectResult";
import LifePeriodObject from "../core/LifePeriodObject";
import TemperamentPlan from "../core/TemperamentPlan";
import Vibration from "../core/Vibration";
import CalculusObjectResponse from "./CalculusObjectResponse";
import CalculusObjectResponseArray from "./CalculusObjectResponseArray";
import CalculosObjectTypeTwoResponse from "./CalculusObjectTypeTwoResponse";

export default class CalculusResponse {
  private name: CalculusObjectResponse;
  private soul: CalculusObjectResponse;
  private appearance: CalculusObjectResponse;
  private destiny: CalculusObjectResponse;
  private lifeCycle: CalculusObjectResponseArray;
  private firstVowel: CalculusObjectResponse;
  private lifeLesson: CalculusObjectResponse;
  private birthDay: CalculusObjectResponse;
  private birthdate: CalculusObjectResponse;
  private power: CalculusObjectResponse;
  private temperament: CalculusObjectResponse;
  private vibration: CalculusObjectResponse;
  private spiersAndRealization: CalculusObjectResponseArray;
  private challenge: CalculusObjectResponseArray;
  private karmicNumber: CalculusObjectResponseArray;
  private karmicAbsences: CalculusObjectResponseArray;
  private personalYear: CalculusObjectResponse;
  private quadrimesters: CalculusObjectResponseArray;
  private personalMonth: CalculusObjectResponse;
  private personalDay: CalculusObjectResponse;

  /**
   * quando id de CalculusObjectResponse for 0, ele devera ser construido 
   * a partir do segundo parametro
   */
  constructor(
    name: string,
    soul: CoreObjectCalculus,
    appearance: CoreObjectCalculus,
    destiny: CoreObjectCalculus,
    lifeCycle: LifePeriodObject[],
    firstVowel: string,
    lifeLesson: CoreObjectCalculus,
    birthDay: string,
    birthdate: string,
    power: number,
    temperament: TemperamentPlan,
    vibration: Vibration,
    spiersAndRealization: LifePeriodObject[],
    challenge: LifePeriodObject[],
    karmicNumber: KarmicNumber[],
    karmicAbsences: number[],
    personalYear: CoreObjectCalculus,
    quadrimesters: LifePeriodObjectResultCore[],
    personalMonth: number,
    personalDay: number,
    deep: boolean
  ) {
    this.name = CalculusObjectResponse.constructorString("0", name, "Nome usado para o cálculo");
    this.soul = CalculusObjectResponse.constructorCore("0", soul, deep, "Valor da alma de " + name);
    this.appearance = CalculusObjectResponse.constructorCore("0", appearance, deep,  "Valor da aparencia de " + name);
    this.destiny = CalculusObjectResponse.constructorCore("0", destiny, deep,  "Valor de destino de " + name);
    this.lifeCycle = new CalculusObjectResponseArray( lifeCycle.map(lc => {
      return CalculosObjectTypeTwoResponse.constructorLifePeriod(lc.getResult().toString(), lc);
    }),
    "Ciclos de vida de " + name);
    this.firstVowel = CalculusObjectResponse.constructorString(firstVowel, firstVowel, "Primeira vogal de " + name);
    this.lifeLesson = CalculusObjectResponse.constructorCore("0", lifeLesson, deep, "Valor de lição de vida de " + name);
    this.birthDay = CalculusObjectResponse.constructorString(birthDay, birthDay, "Dia natal de " + name);
    this.birthdate = CalculusObjectResponse.constructorString(birthdate, birthdate, "Dia de nascimento de " + name);
    this.power = CalculusObjectResponse.constructorString(power.toString(), power.toString(), "Valor de poder de " + name);
    this.temperament = CalculusObjectResponse.constructorString(temperament.getTemperament(), `${temperament.getTemperament()}: ${temperament.getCalculusResult()}`, "Valor de temperamento de " + name);
    this.vibration = CalculusObjectResponse.constructorString(vibration.getCalculusResult().toString(), vibration.getVibration(), "Vibração de " + name);
    this.spiersAndRealization = new CalculusObjectResponseArray(
      spiersAndRealization.map((sr => {
        return CalculosObjectTypeTwoResponse.constructorLifePeriod(sr.getResult().toString(), sr);
      })),
      "Pináculos/Realizações de " + name);
    this.challenge =  new CalculusObjectResponseArray(
      challenge.map((c => {
        return CalculosObjectTypeTwoResponse.constructorLifePeriod(c.getResult().toString(), c);
      })),
      "Desafios de " + name);
    this.karmicNumber = new CalculusObjectResponseArray(karmicNumber.map(kc => {
      if(kc.IsKarmic){
        return CalculusObjectResponse.constructorString(kc.KarmicNumber.toString(), `${kc.KarmicNumber}: ${kc.Attribute}`, kc.Attribute);
      } else {
        return CalculusObjectResponse.constructorString("0", `Não há número karmico para ${kc.Attribute} de ${name}`, kc.Attribute);
      }
    }),
    "Numeros karmicos de " + name );
    this.karmicAbsences = new CalculusObjectResponseArray(karmicAbsences.map(ka => {
      return CalculusObjectResponse.constructorString(ka.toString(), ka.toString())
    }),
    "Lições karmicas de " + name);
    
    this.personalYear = CalculusObjectResponse.constructorCore(personalYear.getOriginalNumber().toString(), personalYear, deep, "Ano pessoal de " + name);
    this.quadrimesters= new CalculusObjectResponseArray(
      quadrimesters.map(q => {
        return CalculosObjectTypeTwoResponse.constructorQuadrimester(q.getResult().toString(), q, deep);
      }), 
      "Quadrimestres de " + name);
    this.personalMonth = CalculusObjectResponse.constructorString(personalMonth.toString(), personalMonth.toString(), "Mês pessoal de " + name);
    this.personalDay = CalculusObjectResponse.constructorString(personalDay.toString(), personalDay.toString(), "Dia pessoal de " + name);
  }
}
