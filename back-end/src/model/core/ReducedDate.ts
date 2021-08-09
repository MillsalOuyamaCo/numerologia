export default class ReducedDate {
    private reducedDay: number;
    private reducedMonth: number;
    private reducedYear: number;


	constructor(reducedDay: number, reducedMonth: number, reducedYear: number) {
		this.reducedDay = reducedDay;
		this.reducedMonth = reducedMonth;
		this.reducedYear = reducedYear;
	}


    /**
     * Getter reducedDay
     * @return {number}
     */
	public getReducedDay(): number {
		return this.reducedDay;
	}

    /**
     * Getter reducedMonth
     * @return {number}
     */
	public getReducedMonth(): number {
		return this.reducedMonth;
	}

    /**
     * Getter reducedYear
     * @return {number}
     */
	public getReducedYear(): number {
		return this.reducedYear;
	}

}