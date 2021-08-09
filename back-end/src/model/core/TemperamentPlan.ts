export default class TemperamentPlan {
    private Temperament: string;
    private CalculusResult: number;
    private KarmicAbsence: number[];

	constructor(Temperament: string, CalculusResult: number, KarmicAbsence: number[]) {
		this.Temperament = Temperament;
		this.CalculusResult = CalculusResult;
        this.KarmicAbsence = KarmicAbsence;
	}


    /**
     * Getter Temperament
     * @return {string}
     */
	public getTemperament(): string {
		return this.Temperament;
	}

    /**
     * Setter Temperament
     * @param {string} value
     */
	public setTemperament(value: string) {
		this.Temperament = value;
	}

    /**
     * Getter CalculusResult
     * @return {number}
     */
	public getCalculusResult(): number {
		return this.CalculusResult;
	}

    /**
     * Setter CalculusResult
     * @param {number} value
     */
	public setCalculusResult(value: number) {
		this.CalculusResult = value;
	}

    /**
     * Getter KarmicAbsence
     * @return {number[]}
     */
	public getKarmicAbsence(): number[] {
		return this.KarmicAbsence;
	}

    /**
     * Setter KarmicAbsence
     * @param {number[]} value
     */
	public setKarmicAbsence(value: number[]) {
		this.KarmicAbsence = value;
	}


}