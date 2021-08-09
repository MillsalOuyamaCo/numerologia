export default class StartAndFinalDate {
    private startDateString: string;
    private finalDateString: string;
    private startDate: Date;
    private finalDate: Date;

	constructor(startDateString: string, finalDateString: string, startDate: Date, finalDate: Date) {
		this.startDateString = startDateString;
		this.finalDateString = finalDateString;
		this.startDate = startDate;
		this.finalDate = finalDate;
	}


    /**
     * Getter startDateString
     * @return {string}
     */
	public getStartDateString(): string {
		return this.startDateString;
	}

    /**
     * Getter finalDateString
     * @return {string}
     */
	public getFinalDateString(): string {
		return this.finalDateString;
	}

    /**
     * Getter startDate
     * @return {Date}
     */
	public getStartDate(): Date {
		return this.startDate;
	}

    /**
     * Getter finalDate
     * @return {Date}
     */
	public getFinalDate(): Date {
		return this.finalDate;
	}

}