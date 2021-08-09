import CoreObjectCalculus from "./CoreOjectCalculus";

export default class QuadrimesterObjectResult {
    private Result: CoreObjectCalculus;
    private StartValue: string;
    private FinalValue: string;


	constructor(Result: CoreObjectCalculus, StartValue: string, FinalValue: string) {
		this.Result = Result;
		this.StartValue = StartValue;
		this.FinalValue = FinalValue;
	}
    

    /**
     * Getter Result
     * @return {CoreObjectCalculus}
     */
	public getResult(): CoreObjectCalculus {
		return this.Result;
	}

    /**
     * Getter StartValue
     * @return {string}
     */
	public getStartValue(): string {
		return this.StartValue;
	}

    /**
     * Getter FinalValue
     * @return {string}
     */
	public getFinalValue(): string {
		return this.FinalValue;
	}
 
}