export default class TemperamentPlanNumbersEnum {
    public NumberValue: number;
    public Counter: number;
    
    constructor(NumberValue: number, Counter: number) {
        this.NumberValue = NumberValue;
        this.Counter = Counter;
    }

      /**
     * Getter OriginalNumber
     * @return {number}
     */
    public getNumberValue(): number {
        return this.NumberValue;
    }

    /**
     * Setter OriginalNumber
     * @param {number} value
     */
    public setNumberValue(value: number) {
        this.NumberValue = value;
    }


    /**
     * Getter OriginalNumber
     * @return {number}
     */
        public getCounter(): number {
        return this.Counter;
    }

    /**
     * Setter OriginalNumber
     * @param {number} value
     */
    public setCounter(value: number) {
        this.Counter = value;
    }
}
