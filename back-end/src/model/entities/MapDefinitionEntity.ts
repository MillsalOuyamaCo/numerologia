export default class MapDefinitionEntity {
    private yourValue: string;
    private id: string;
    private description: string;


	constructor(yourValue: string, id: string, description: string) {
		this.yourValue = yourValue;
		this.id = id;
		this.description = description;
	}


    /**
     * Getter yourValue
     * @return {string}
     */
	public getYourValue(): string {
		return this.yourValue;
	}

    /**
     * Getter id
     * @return {string}
     */
	public getId(): string {
		return this.id;
	}

    /**
     * Getter description
     * @return {string}
     */
	public getDescription(): string {
		return this.description;
	}

}