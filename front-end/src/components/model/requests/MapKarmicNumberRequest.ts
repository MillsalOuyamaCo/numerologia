export default class MapKarmicNumberRequest {
    private id: string;
    private attribute: string;


	constructor(id: string, attribute: string) {
		this.id = id;
		this.attribute = attribute;
	}

    /**
     * Getter id
     * @return {string}
     */
	public getId(): string {
		return this.id;
	}

    /**
     * Getter attribute
     * @return {string}
     */
	public getAttribute(): string {
		return this.attribute;
	}

}