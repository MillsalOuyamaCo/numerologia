import TemperamentPlanNumbersEnum from "./TemperamentPlanNumbersEnum";

export default class TemperamentPlanList {
    public list: TemperamentPlanNumbersEnum[] = [];

    constructor() {
        this.list.push(new TemperamentPlanNumbersEnum(1, 0));
        this.list.push(new TemperamentPlanNumbersEnum(2, 0));
        this.list.push(new TemperamentPlanNumbersEnum(3, 0));
        this.list.push(new TemperamentPlanNumbersEnum(4, 0));
        this.list.push(new TemperamentPlanNumbersEnum(5, 0));
        this.list.push(new TemperamentPlanNumbersEnum(6, 0));
        this.list.push(new TemperamentPlanNumbersEnum(7, 0));
        this.list.push(new TemperamentPlanNumbersEnum(8, 0));
        this.list.push(new TemperamentPlanNumbersEnum(9, 0));
    }
} 