import CalculosObjectResponse from "./CalculusObjectResponse";

export default class CalculosObjectResponseArray {
    private list: CalculosObjectResponse[];
    private description: string;


	constructor(list: CalculosObjectResponse[], description: string) {
		this.list = list;
		this.description = description;
	}


    /**
     * Getter list
     * @return {CalculosObjectResponse[]}
     */
	public getList(): CalculosObjectResponse[] {
		return this.list;
	}

    /**
     * Setter list
     * @param {CalculosObjectResponse[]} value
     */
	public setList(value: CalculosObjectResponse[]) {
		this.list = value;
	}

    /**
     * Getter description
     * @return {string}
     */
	public getDescription(): string {
		return this.description;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public setDescription(value: string) {
		this.description = value;
	}

}