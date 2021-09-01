import MapItemResponse from "./MapItemResponse";

export default class MapResponse {
    private data: MapItemResponse[];


	constructor(MapItemResponse: MapItemResponse[]) {
		this.data = MapItemResponse;
	}

    /**
     * Getter MapItemTypeTwoList
     * @return {MapItemResponse[]}
     */
	public getMapItemTypeTwoList(): MapItemResponse[] {
		return this.data;
	}

    /**
     * Setter MapItemTypeTwoList
     * @param {MapItemResponse[]} value
     */
	public setMapItemTypeTwoList(value: MapItemResponse[]) {
		this.data = value;
	}

}
