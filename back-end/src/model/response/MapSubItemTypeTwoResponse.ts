export default class MapSubItemTypeTwoResponse {
    private Title: string;
    private Description: string;


	constructor(Title: string, Description: string) {
		this.Title = Title;
		this.Description = Description;
	}


    /**
     * Getter Title
     * @return {string}
     */
	public getTitle(): string {
		return this.Title;
	}

    /**
     * Setter Title
     * @param {string} value
     */
	public setTitle(value: string) {
		this.Title = value;
	}

    /**
     * Getter Description
     * @return {string}
     */
	public getDescription(): string {
		return this.Description;
	}

    /**
     * Setter Description
     * @param {string} value
     */
	public setDescription(value: string) {
		this.Description = value;
	}

}