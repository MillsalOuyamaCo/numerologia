import CoreObjectCalculus from "./CoreOjectCalculus";

export default class LifePeriodObject {
    private Result: number = 0;
    private StartValue: number = 0;
    private FinalValue: number | string = 0;

	public static constructorNumber = (Result: number , StartValue: number , FinalValue: number): LifePeriodObject => {
		let lifePeriodObject = new LifePeriodObject();
        lifePeriodObject.setResult(Result);
		lifePeriodObject.setStartValue(StartValue);
		lifePeriodObject.setFinalValue(FinalValue);

        return lifePeriodObject;
	}

    public static constructorNumberString = (Result: number , StartValue: number , FinalValue: string): LifePeriodObject => {
		let lifePeriodObject = new LifePeriodObject();
        lifePeriodObject.setResult(Result);
		lifePeriodObject.setStartValue(StartValue);
		lifePeriodObject.setFinalValue(FinalValue);

        return lifePeriodObject;
	}


    /**
     * Getter Result
     * @return {number }
     */
	public getResult(): number  {
		return this.Result;
	}

    /**
     * Setter Result
     * @param {number } value
     */
	public setResult(value: number ) {
		this.Result = value;
	}

    /**
     * Getter StartValue
     * @return {number }
     */
	public getStartValue(): number  {
		return this.StartValue;
	}

    /**
     * Setter StartValue
     * @param {number } value
     */
	public setStartValue(value: number ) {
		this.StartValue = value;
	}

    /**
     * Getter FinalValue
     * @return {number }
     */
	public getFinalValue(): number | string {
		return this.FinalValue;
	}

    /**
     * Setter FinalValue
     * @param {number } value
     */
	public setFinalValue(value: number | string) {
		this.FinalValue = value;
	}

 
}