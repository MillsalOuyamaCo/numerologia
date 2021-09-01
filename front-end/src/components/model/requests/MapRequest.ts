export default class MapRequest {
    private id: string;
    private startValue: string;
    private finalValue: string;


	constructor(id: string, startValue: string, finalValue: string) {
		this.id = id;
		this.startValue = startValue;
		this.finalValue = finalValue;
	}


    /**
     * Getter id
     * @return {string}
     */
	public getId(): string {
		return this.id;
	}

    /**
     * Getter startValue
     * @return {string}
     */
	public getStartValue(): string {
		return this.startValue;
	}

    /**
     * Getter finalValue
     * @return {string}
     */
	public getFinalValue(): string {
		return this.finalValue;
	}

}