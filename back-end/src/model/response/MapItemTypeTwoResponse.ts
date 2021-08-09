import MapSubItemTypeTwoResponse from "./MapSubItemTypeTwoResponse";

export default class MapItemTypeTwoResponse {
    private Title: string;
    private SubTitle: string;
    private MapSubItemTypeTwoList: MapSubItemTypeTwoResponse[];
    private Order: number; 

	constructor(Title: string, SubTitle: string, MapSubItemTypeTwoList: MapSubItemTypeTwoResponse[], Order: number) {
		this.Title = Title;
		this.SubTitle = SubTitle;
		this.MapSubItemTypeTwoList = MapSubItemTypeTwoList;
        this.Order = Order;
	}


    /**
     * Getter Order
     * @return {number}
     */
	public getOrder(): number {
		return this.Order;
	}

    /**
     * Setter Order
     * @param {number} value
     */
	public setOrder(value: number) {
		this.Order = value;
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
     * Getter SubTitle
     * @return {string}
     */
	public getSubTitle(): string {
		return this.SubTitle;
	}

    /**
     * Setter SubTitle
     * @param {string} value
     */
	public setSubTitle(value: string) {
		this.SubTitle = value;
	}

    /**
     * Getter MapSubItemTypeTwoList
     * @return {MapSubItemTypeTwoResponse[]}
     */
	public getMapSubItemTypeTwoList(): MapSubItemTypeTwoResponse[] {
		return this.MapSubItemTypeTwoList;
	}

    /**
     * Setter MapSubItemTypeTwoList
     * @param {MapSubItemTypeTwoResponse[]} value
     */
	public setMapSubItemTypeTwoList(value: MapSubItemTypeTwoResponse[]) {
		this.MapSubItemTypeTwoList = value;
	}

}