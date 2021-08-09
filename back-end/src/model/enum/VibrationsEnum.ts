export default class VibrationsEnum {
    private VibrationAttribute: string;
    private VibrationValue: number;


	constructor(VibrationAttribute: string, VibrationValue: number) {
		this.VibrationAttribute = VibrationAttribute;
		this.VibrationValue = VibrationValue;
	}

    /**
     * Getter VibrationAttribute
     * @return {string}
     */
	public getVibrationAttribute(): string {
		return this.VibrationAttribute;
	}

    /**
     * Getter VibrationValue
     * @return {number}
     */
	public getVibrationValue(): number {
		return this.VibrationValue;
	}

}