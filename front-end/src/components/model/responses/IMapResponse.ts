import IMapSubItemResponse from "./IMapSubItemResponse";

export default interface IMapResponse {
    title: string;
    subTitle: string[];
    itemValueFirstPart: string;
    itemValueSecondPart: string;
    description: string;
    mapSubItemList: IMapSubItemResponse[];
    order: number; 
}