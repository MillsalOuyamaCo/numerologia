export default class MapItemEnum {
    private AttributeName: string;
    private Title: string;
    private Subtitle: string[];


	constructor(AttributeName: string, Title: string, Subtitle: string[]) {
		this.AttributeName = AttributeName;
		this.Title = Title;
		this.Subtitle = Subtitle;
	}


    /**
     * Getter AttributeName
     * @return {string}
     */
	public getAttributeName(): string {
		return this.AttributeName;
	}

    /**
     * Getter Title
     * @return {string}
     */
	public getTitle(): string {
		return this.Title;
	}

    /**
     * Getter Subtitle
     * @return {string[]}
     */
	public getSubtitle(): string[] {
		return this.Subtitle;
	}

}