export default class MapSubItemResponse {
    private title: string;
    private description: string;


	constructor(Title: string, Description: string) {
		this.title = Title;
		this.description = Description;
	}


    /**
     * Getter Title
     * @return {string}
     */
	public getTitle(): string {
		return this.title;
	}

    /**
     * Setter Title
     * @param {string} value
     */
	public setTitle(value: string) {
		this.title = value;
	}

    /**
     * Getter Description
     * @return {string}
     */
	public getDescription(): string {
		return this.description;
	}

    /**
     * Setter Description
     * @param {string} value
     */
	public setDescription(value: string) {
		this.description = value;
	}

}