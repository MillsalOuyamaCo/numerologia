import IMapItemRequest from "../../interfaces/model/request/IMapItemRequest";

export default class MapItemRequest implements IMapItemRequest {
    id: string;
    startValue: string;
    finalValue: string;


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