export default class Vibration {
    private Vibration: string;
    private CalculusResult: number;

	constructor(Vibration: string, CalculusResult: number) {
		this.Vibration = Vibration;
		this.CalculusResult = CalculusResult;
	}

    /**
     * Getter Temperament
     * @return {string}
     */
	public getVibration(): string {
		return this.Vibration;
	}

    /**
     * Setter Temperament
     * @param {string} value
     */
	public setVibration(value: string) {
		this.Vibration = value;
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

}