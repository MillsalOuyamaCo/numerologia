import CalculosObjectResponse from "./CalculusObjectResponse";
import CalculosObjectTypeTwoResponse from "./CalculusObjectTypeTwoResponse";

export default class CalculosObjectResponseArray {
    private list: CalculosObjectTypeTwoResponse[] | CalculosObjectResponse[];
    private description: string;


	constructor(list: CalculosObjectTypeTwoResponse[] | CalculosObjectResponse[], description: string) {
		this.list = list;
		this.description = description;
	}


    /**
     * Getter list
     * @return {CalculosObjectTypeTwoResponse[] | CalculosObjectResponse[]}
     */
	public getList(): CalculosObjectTypeTwoResponse[] | CalculosObjectResponse[] {
		return this.list;
	}

    /**
     * Setter list
     * @param {CalculosObjectTypeTwoResponse[] | CalculosObjectResponse[]} value
     */
	public setList(value: CalculosObjectTypeTwoResponse[] | CalculosObjectResponse[]) {
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