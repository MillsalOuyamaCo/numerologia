import MapSubItemResponse from "./MapSubItemTypeTwoResponse";

export default class MapItemResponse {
    private title: string;
    private subTitle: string[];
    private itemValueFirstPart: string;
    private itemValueSecondPart: string;
    private description: string;
    private mapSubItemList: MapSubItemResponse[];
    private order: number; 


	constructor(Title: string, SubTitle: string[], ItemValueFirstPart: string, ItemValueSecondPart: string, Description: string, MapSubItemList: MapSubItemResponse[], Order: number) {
		this.title = Title;
		this.subTitle = SubTitle;
		this.itemValueFirstPart = ItemValueFirstPart;
		this.itemValueSecondPart = ItemValueSecondPart;
		this.description = Description;
		this.mapSubItemList = MapSubItemList;
		this.order = Order;
	}

    /**
     * Getter Title
     * @return {string}
     */
	public getTitle(): string {
		return this.title;
	}

    /**
     * Getter SubTitle
     * @return {string[]}
     */
	public getSubTitle(): string[] {
		return this.subTitle;
	}

    /**
     * Getter ItemValueFirstPart
     * @return {string}
     */
	public getItemValueFirstPart(): string {
		return this.itemValueFirstPart;
	}

    /**
     * Getter ItemValueSecondPart
     * @return {string}
     */
	public getItemValueSecondPart(): string {
		return this.itemValueSecondPart;
	}

    /**
     * Getter Description
     * @return {string}
     */
	public getDescription(): string {
		return this.description;
	}

    /**
     * Getter MapSubItemList
     * @return {MapSubItemResponse[]}
     */
	public getMapSubItemList(): MapSubItemResponse[] {
		return this.mapSubItemList;
	}

    /**
     * Getter Order
     * @return {number}
     */
	public getOrder(): number {
		return this.order;
	}

}