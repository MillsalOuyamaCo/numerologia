import MapItemTypeTwoResponse from "./MapItemTypeTwoResponse";

export default class MapResponse {
    private MapItemTypeTwoList: MapItemTypeTwoResponse[];


	constructor(MapItemTypeTwoList: MapItemTypeTwoResponse[]) {
		this.MapItemTypeTwoList = MapItemTypeTwoList;
	}

    /**
     * Getter MapItemTypeTwoList
     * @return {MapItemTypeTwoResponse[]}
     */
	public getMapItemTypeTwoList(): MapItemTypeTwoResponse[] {
		return this.MapItemTypeTwoList;
	}

    /**
     * Setter MapItemTypeTwoList
     * @param {MapItemTypeTwoResponse[]} value
     */
	public setMapItemTypeTwoList(value: MapItemTypeTwoResponse[]) {
		this.MapItemTypeTwoList = value;
	}

}
