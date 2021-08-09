import CoreObjectCalculus from "../model/core/CoreOjectCalculus";
import KarmicNumber from "../model/core/KarmicNumber";
import LifePeriodObject from "../model/core/LifePeriodObject";
import QuadrimesterObjectResult from "../model/core/QuadrimesterObjectResult";
import ReducedDate from "../model/core/ReducedDate";
import StartAndFinalDate from "../model/core/StartAndFinalDate";
import TemperamentPlan from "../model/core/TemperamentPlan";
import Vibration from "../model/core/Vibration";
import KarmicNumbersEnum from "../model/enum/KarmicNumbersEnum";
import LettersAsNumbersList from "../model/enum/LettersAsNumbersListEnum";
import TemperamentPlanList from "../model/enum/TemperamentPlanListEnum";
import VibrationsListEnum from "../model/enum/VibrationsListEnum";

export default class Calculator {
    private reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

    public CalculateCoreObjectForName = (name: string): CoreObjectCalculus => {
        let originalNumber = this.calculateOriginalNumberForName(name);
        let reducedOriginalNumber = this.calculateReducedNumber(originalNumber, false);

        let coreObject = new CoreObjectCalculus(originalNumber, reducedOriginalNumber);
        return coreObject;
    }

    public CalculateCoreObjectForBirthdate = (birthDate: Date): CoreObjectCalculus => {
        let originalNumber = this.calculateOriginalNumberForBirthday(birthDate);
        let reducedOriginalNumber = this.calculateReducedNumber(originalNumber, false);

        let coreObject = new CoreObjectCalculus(originalNumber, reducedOriginalNumber);

        return coreObject;
    }

    private calculateOriginalNumberForName = (name: string): number => {
        let numberForLettersSum: number = this.calculateLettersAsNumbers(name);

        return numberForLettersSum;
    }

    private calculateOriginalNumberForBirthday = (birthDate: Date): number => {
        let reducedBirthYear = this.calculateReducedNumber(birthDate.getFullYear(), true);
        let sumResult = birthDate.getDate() + (birthDate.getMonth() + 1) + reducedBirthYear;

        if(sumResult > 78) {
            sumResult = this.calculateReducedNumber(sumResult, true);
        }

        return sumResult;
    }

    private calculateReducedNumber = (originalNumber: number, untilSeventyEight: boolean): number => {
        let result: number = originalNumber;
        
        if(untilSeventyEight) {
            while(result > 78) {
                let eachDigitString = result.toString().split('');
                let eachDigitNumber = eachDigitString.map(Number);

                result = eachDigitNumber.reduce(this.reducer);
            }

            return result;

        } else {
            let eachDigitString = result.toString().split('');
            while(eachDigitString.length > 1 && result != 11 && result != 22) {
                let eachDigitNumber = eachDigitString.map(Number);

                result = eachDigitNumber.reduce(this.reducer);
                eachDigitString = result.toString().split('');
            }

            return result;
        }
    }

    private calculateReduceUntilMin = (originalNumber: number): number => {
        let result: number = originalNumber;

        let eachDigitString = result.toString().split('');
        while(eachDigitString.length > 1) {
            let eachDigitNumber = eachDigitString.map(Number);

            result = eachDigitNumber.reduce(this.reducer);
            eachDigitString = result.toString().split('');
        }

        return result;
    }

    private calculateLettersAsNumbers = (letters: string): number => {
        let letterAsNumbersEnum = new LettersAsNumbersList();

        let numberForLettersSum: number = 0;
        let numberForLettersArray: number[] = [];
        let nameEachLetter = letters.trim().split('');
        nameEachLetter.forEach((letter) => {
            let letterAsNumber = letterAsNumbersEnum.list.find(letterAsNumber => letterAsNumber.Letter == letter);
            if (letterAsNumber != undefined) {
                numberForLettersArray.push(letterAsNumber.Value);
            }
        });

        numberForLettersSum = numberForLettersArray.reduce(this.reducer);

        if(numberForLettersSum > 78) {
            numberForLettersSum = this.calculateReducedNumber(numberForLettersSum, true);
        }

        return numberForLettersSum;
    }


    public calculateVibration = (birthDay: number): Vibration => {
        let vibrationListEnum = new VibrationsListEnum();
        let reducedBirthDay = this.calculateReducedNumber(birthDay, false);

        let result = vibrationListEnum.list.find(v => v.getVibrationValue() === reducedBirthDay);

        if(result !== undefined) {
            return new Vibration(result.getVibrationAttribute(), result.getVibrationValue());
        }
        else {
            return new Vibration("Erro", 0);
        }

    }

    public calculateSoul = (nameVowels: string[]): CoreObjectCalculus => {
        let originalNumber = this.calculateLettersAsNumbers(nameVowels.join());
        let reducedNumber = this.calculateReducedNumber(originalNumber, false);

        var result = new CoreObjectCalculus(originalNumber, reducedNumber);

        return result;
    }

    public calculateAppearance = (nameConsonants: string[]): CoreObjectCalculus => {
        let originalNumber = this.calculateLettersAsNumbers(nameConsonants.join());
        let reducedNumber = this.calculateReducedNumber(originalNumber, false);

        var result = new CoreObjectCalculus(originalNumber, reducedNumber);

        return result;
    }

    public calculatePower = (destinyReduced: number, lifeLessonReduced: number): number => {
        let reducedPower = this.calculateReducedNumber(destinyReduced + lifeLessonReduced, false);

        return reducedPower;
    }

    public calculateTemperamentPlan = (name: string): TemperamentPlan => {
        let tremperamentPlanArray = new TemperamentPlanList();
        let letterAsNumbersEnum = new LettersAsNumbersList();

        let numberForLettersArray: number[] = [];
        let nameEachLetter = name.trim().split('');
        nameEachLetter.forEach((letter) => {
            let letterAsNumber = letterAsNumbersEnum.list.find(letterAsNumber => letterAsNumber.Letter == letter);
            if (letterAsNumber != undefined) {
                numberForLettersArray.push(letterAsNumber.Value);
            }
        });

        numberForLettersArray.forEach(number => {
            var numberFound = tremperamentPlanArray.list.find(tpNumber => tpNumber.NumberValue === number);
            if(numberFound != undefined){
                numberFound.Counter++
            }
        });

        let karmicAbsence = tremperamentPlanArray.list.filter(tpNumber =>tpNumber.Counter === 0)
                                                        .map(tpNumber => tpNumber.NumberValue);

        let mentalNumber = (tremperamentPlanArray.list.find(tpNumber => tpNumber.NumberValue === 1)?.Counter || 0) + 
                            (tremperamentPlanArray.list.find(number => number.NumberValue === 8)?.Counter || 0); 

        let emotionalNumber = (tremperamentPlanArray.list.find(tpNumber => tpNumber.NumberValue === 2)?.Counter || 0) +
                                (tremperamentPlanArray.list.find(tpNumber => tpNumber.NumberValue === 3)?.Counter || 0);
                                (tremperamentPlanArray.list.find(tpNumber => tpNumber.NumberValue === 6)?.Counter || 0);

        let physicsNumber = (tremperamentPlanArray.list.find(tpNumber => tpNumber.NumberValue === 4)?.Counter || 0) + 
                            (tremperamentPlanArray.list.find(number => number.NumberValue === 5)?.Counter || 0); 

        let intuitiveNumber = (tremperamentPlanArray.list.find(tpNumber => tpNumber.NumberValue === 7)?.Counter || 0) + 
                            (tremperamentPlanArray.list.find(number => number.NumberValue === 9)?.Counter || 0); 
    

        var temperamentArray = [
            {
                resultTemperament: "MENTAL",
                value: mentalNumber
            },
            {
                resultTemperament: "EMOCIONAL",
                value: emotionalNumber
            },
            {
                resultTemperament: "FÍSICO",
                value: physicsNumber
            },
            {
                resultTemperament: "INTUITIVO",
                value: intuitiveNumber
            },
        ]

        var temperamentMax = Math.max.apply(Math, temperamentArray.map((temperament) => {
                return temperament.value;
            }
        ));
    
        var temperamentResult = temperamentArray.find(temperament => temperament.value === temperamentMax)?.resultTemperament || "INDEFINIDO";
    
        let temperamentPlan = new TemperamentPlan(temperamentResult, temperamentMax, karmicAbsence)

        return temperamentPlan;
    }

    public calculateKarmicNumbers = (soul: CoreObjectCalculus, appearance: CoreObjectCalculus, destiny: CoreObjectCalculus, lifeLesson: CoreObjectCalculus): KarmicNumber[] => {
        let karmicSoul = this.checkIfIsKarmic(soul.getOriginalNumber(), "Alma");
        let karmicAppearance = this.checkIfIsKarmic(appearance.getOriginalNumber(), "Aparência");
        let karmicDestiny = this.checkIfIsKarmic(destiny.getOriginalNumber(), "Destino");
        let karmicLifeLesson = this.checkIfIsKarmic(soul.getOriginalNumber(), "Lição de Vida");

        return [karmicSoul, karmicAppearance, karmicDestiny, karmicLifeLesson];
    }

    private checkIfIsKarmic = (numberAttribute: number, nameAttribute: string): KarmicNumber => {
        let karmicNumbers = new KarmicNumbersEnum();
        let isKarmicNumber = karmicNumbers.numbers.includes(numberAttribute);;
        let reducingNumber: number = numberAttribute;
        let reducingNumberAsString = reducingNumber.toString().split('');

        if (!isKarmicNumber) {
            while(isKarmicNumber || reducingNumber > 13) {
                let reducingNumberArray = reducingNumberAsString.map(Number);

                reducingNumber = reducingNumberArray.reduce(this.reducer);
                isKarmicNumber = karmicNumbers.numbers.includes(reducingNumber);

                reducingNumberAsString = reducingNumber.toString().split(''); 
            }
        }

        return new KarmicNumber(isKarmicNumber, reducingNumber, nameAttribute);
    }

    public calculateKarmicAbscence = (temperamentPlan: TemperamentPlan): number[] => {
        var karmicAbsenceResult = temperamentPlan.getKarmicAbsence().map(Number);

        return karmicAbsenceResult;
    }

    public calculateLifeCycle = (birthDate: Date): LifePeriodObject[] => {
        let reducedYear = this.calculateReducedNumber(birthDate.getFullYear(), false);
        let reducedMonth = this.calculateReducedNumber((birthDate.getMonth() + 1), false);
        let reducedDay = this.calculateReducedNumber(birthDate.getDate(), false);

        let lifeCycles = [LifePeriodObject.constructorNumber(reducedMonth, 0, 28), 
            LifePeriodObject. constructorNumber(reducedDay, 29, 56), 
            LifePeriodObject.constructorNumber(reducedYear, 57, 999)];

        return lifeCycles;
    }

    private calculateFirstPeriod = (lifeLesson: number): number => {
        return 36 - lifeLesson;
    }

    private calculateReducedDate = (date: Date): ReducedDate => {
        let reducedYear = this.calculateReduceUntilMin(date.getFullYear());
        let reducedMonth = this.calculateReduceUntilMin(date.getMonth() + 1);
        let reducedDay = this.calculateReduceUntilMin(date.getDate());

        return new ReducedDate(reducedDay, reducedMonth, reducedYear);
    }

    public calculateSpiersAndRealizations = (birthDate: Date, lifeLessonResult: CoreObjectCalculus): LifePeriodObject[] => {
        let reducedBirthDate = this.calculateReducedDate(birthDate);
        
        let firstPeriodReduced = this.calculateReducedNumber(lifeLessonResult.getReducedNumber(), false);
        let firstPeriod = this.calculateFirstPeriod(firstPeriodReduced);
        let firstSpierAndRealizationsResult = this.calculateReducedNumber((reducedBirthDate.getReducedDay() + reducedBirthDate.getReducedMonth()), false);
        let firstSpierAndRealizations = LifePeriodObject.constructorNumber(firstSpierAndRealizationsResult, 0, firstPeriod);

        let secondSpierAndRealizationResult = this.calculateReducedNumber((reducedBirthDate.getReducedDay() + reducedBirthDate.getReducedYear()), false);
        let secondSpierAndRealizationStartPeriod: number = firstPeriod + 1;
        let secondSpierAndRealizationFinalPeriod: number = secondSpierAndRealizationStartPeriod + 9;
        let secondSpierAndRealizations = LifePeriodObject.constructorNumber(secondSpierAndRealizationResult, secondSpierAndRealizationStartPeriod, secondSpierAndRealizationFinalPeriod);
    
        let thirdSpierAndRealizationResult = this.calculateReducedNumber((firstSpierAndRealizationsResult + secondSpierAndRealizationResult), false);
        let thirdSpierAndRealizationStartPeriod: number = secondSpierAndRealizationFinalPeriod + 1;
        let thirdSpierAndRealizationFinalPeriod: number = thirdSpierAndRealizationStartPeriod + 9;
        let thirdSpierAndRealizations = LifePeriodObject.constructorNumber(thirdSpierAndRealizationResult, thirdSpierAndRealizationStartPeriod, thirdSpierAndRealizationFinalPeriod);

        let fourthSpierAndRealizationResult = this.calculateReducedNumber((reducedBirthDate.getReducedMonth() + reducedBirthDate.getReducedYear()), false);
        let fourthSpierAndRealizationStartPeriod: number = thirdSpierAndRealizationFinalPeriod + 1;
        let fourthSpierAndRealizationFinalPeriod: string = "em diante";
        let fourthSpierAndRealizations = LifePeriodObject.constructorNumberString(fourthSpierAndRealizationResult, fourthSpierAndRealizationStartPeriod, fourthSpierAndRealizationFinalPeriod);

        return [firstSpierAndRealizations, secondSpierAndRealizations, thirdSpierAndRealizations, fourthSpierAndRealizations];
    }
    
    public calculateChallenges = (birthDate: Date, lifeLessonResult: CoreObjectCalculus): LifePeriodObject[] => {
        let reducedBirthDate = this.calculateReducedDate(birthDate);
        
        let firstPeriodReduced = this.calculateReducedNumber(lifeLessonResult.getReducedNumber(), false);
        let firstPeriod = this.calculateFirstPeriod(firstPeriodReduced);
        let partialFirstChallengeResult = reducedBirthDate.getReducedMonth() - reducedBirthDate.getReducedDay();
        let potisitveFirstChallengeResult = partialFirstChallengeResult > 0 ? partialFirstChallengeResult : (partialFirstChallengeResult * -1);
        let firstChallengeResult = this.calculateReducedNumber(potisitveFirstChallengeResult, false);
        let firstChallenge = LifePeriodObject.constructorNumber(firstChallengeResult, 0, firstPeriod);

        let partialSecondChallengeResult = reducedBirthDate.getReducedDay() - reducedBirthDate.getReducedYear();
        let positiveSecondChallengeResult = partialSecondChallengeResult > 0 ? partialSecondChallengeResult : (partialSecondChallengeResult * -1);
        let secondChallengeResult = this.calculateReducedNumber(positiveSecondChallengeResult, false);
        let secondChallengeStartPeriod: number = firstPeriod + 1;
        let secondChallengeFinalPeriod: number = secondChallengeStartPeriod + 9;
        let secondChallenge = LifePeriodObject.constructorNumber(secondChallengeResult, secondChallengeStartPeriod, secondChallengeFinalPeriod);
    
        let partialThirdChallengeResult = firstChallengeResult - secondChallengeResult;
        let positiveThirdChallengeResult = partialThirdChallengeResult > 0 ? partialThirdChallengeResult : (partialThirdChallengeResult * -1);
        let thirdChallengeResult = this.calculateReducedNumber(positiveThirdChallengeResult, false);
        let thirdChallengeStartPeriod: number = secondChallengeFinalPeriod + 1;
        let thirdChallengeFinalPeriod: number = thirdChallengeStartPeriod + 9;
        let thirdChallenge = LifePeriodObject.constructorNumber(thirdChallengeResult, thirdChallengeStartPeriod, thirdChallengeFinalPeriod);

        let partialFourthChallengeResult = reducedBirthDate.getReducedMonth() - reducedBirthDate.getReducedYear();
        let positiveFourthChallengeResult = partialFourthChallengeResult > 0 ? partialFourthChallengeResult : (partialFourthChallengeResult * -1);
        let fourthChallengeResult = this.calculateReducedNumber(positiveFourthChallengeResult, false);
        let fourthChallengeStartPeriod: number = thirdChallengeFinalPeriod + 1;
        let fourthChallengeFinalPeriod: string = "em diante";
        let fourthChallenge = LifePeriodObject.constructorNumberString(fourthChallengeResult, fourthChallengeStartPeriod, fourthChallengeFinalPeriod);

        return [firstChallenge, secondChallenge, thirdChallenge, fourthChallenge];
    }

    private calculateBirthdayYear = (birthDate: Date): number => {
        const today = new Date().toISOString().split('-').join('');
        const birthdate = new Date().getFullYear().toString() + (birthDate.getMonth() + 1) + birthDate.getDate();

        const BirthdayAlreadyGone = birthdate < today;
        let birthdayYearToCalculate = new Date().getFullYear();

        if (!BirthdayAlreadyGone) {
            birthdayYearToCalculate = birthdayYearToCalculate - 1;
        }

        return birthdayYearToCalculate
    }

    public calculatePersonalYear = (birthDate: Date, lifeLessonResult: CoreObjectCalculus): CoreObjectCalculus => {
        const birthdayYearToCalculate= this.calculateBirthdayYear(birthDate);

        const reducedBirthdayYear = this.calculateReducedNumber(birthdayYearToCalculate, false);
        const reducedMonth = this.calculateReducedNumber((birthDate.getMonth() + 1), false);
        const reducedDay = this.calculateReducedNumber(birthDate.getDate(), false);

        const originalNumber = this.calculateReducedNumber((reducedBirthdayYear + reducedDay + reducedMonth), true);
        const reducedNumber = this.calculateReducedNumber(originalNumber, false);

        const result = new CoreObjectCalculus(originalNumber, reducedNumber);
        return result;
    }

    public calculateQuadrimester = (birthDate: Date, lifeLesson: CoreObjectCalculus, soul: CoreObjectCalculus): QuadrimesterObjectResult[] => {
        const birthdayYearToCalculate= this.calculateBirthdayYear(birthDate);
        const age = birthdayYearToCalculate - birthDate.getFullYear();
        const reducedBirthdayYearToCalculate = this.calculateReducedNumber(birthdayYearToCalculate, false);

        const currentBirthdayDate =  new Date(birthdayYearToCalculate, birthDate.getMonth(), birthDate.getDate());
        const currentBirthday = `${birthDate.getDate()}/${birthDate.getMonth() + 1}/${birthdayYearToCalculate}`;

        const firstPeriod = this.buildQuadrimester(currentBirthdayDate);
        const firstPeriodOriginalNumber = this.calculateReducedNumber((age + reducedBirthdayYearToCalculate), true);
        const firstPeriodReducedNumber = this.calculateReducedNumber(firstPeriodOriginalNumber, false);
        const firstPeriodResult = new CoreObjectCalculus(firstPeriodOriginalNumber, firstPeriodReducedNumber);
        const firstQuadrimester = new QuadrimesterObjectResult(firstPeriodResult, firstPeriod.getStartDateString(), firstPeriod.getFinalDateString());

        const secondPeriod = this.buildQuadrimester(firstPeriod.getFinalDate());
        const secondPeriodOriginalNumber = this.calculateReducedNumber((lifeLesson.getReducedNumber() + reducedBirthdayYearToCalculate), true);
        const secondPeriodReducedNumber = this.calculateReducedNumber(secondPeriodOriginalNumber, false);
        const secondPeriodResult = new CoreObjectCalculus(secondPeriodOriginalNumber, secondPeriodReducedNumber);
        const secondQuadrimester = new QuadrimesterObjectResult(secondPeriodResult, secondPeriod.getStartDateString(), secondPeriod.getFinalDateString());

        const thirdPeriod = this.buildQuadrimester(secondPeriod.getFinalDate());
        const thirdPeriodOriginalNumber = this.calculateReducedNumber((soul.getReducedNumber() + reducedBirthdayYearToCalculate), true);
        const thirdPeriodReducedNumber = this.calculateReducedNumber(thirdPeriodOriginalNumber, false);
        const thirdPeriodResult = new CoreObjectCalculus(thirdPeriodOriginalNumber, thirdPeriodReducedNumber);
        const thirdQuadrimester = new QuadrimesterObjectResult(thirdPeriodResult, thirdPeriod.getStartDateString(), thirdPeriod.getFinalDateString());
    
        return [firstQuadrimester, secondQuadrimester, thirdQuadrimester];
    }

    private buildQuadrimester = (startDate: Date):  StartAndFinalDate=> {
        const periodStartDate: Date = startDate;
        const periodStartString = periodStartDate.toISOString().slice(0,10).split('-').reverse().join('/');
        periodStartDate.setMonth(periodStartDate.getMonth() + 4);
        const periodFinalDate: Date = periodStartDate;
        const periodFinalString = periodFinalDate.toISOString().slice(0,10).split('-').reverse().join('/');

        return new StartAndFinalDate(periodStartString, periodFinalString, periodStartDate, periodFinalDate);
    } 

    public calculatePersonalMonth = (personalYear: CoreObjectCalculus): number => {
        return this.calculateReducedNumber((personalYear.getReducedNumber() + new Date().getMonth() + 1), false);
    }

    public calculatePersonalDay = (personalMonth: number): number => {
        return this.calculateReducedNumber((personalMonth + new Date().getDate()), false);
    }
}


