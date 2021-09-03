import MapSubItemResponse from "../model/response/MapSubItemTypeTwoResponse";
import SoulMap from "../mapFiles/soul.json";
import VibrationMap from "../mapFiles/vibration.json";
import AppearanceMap from "../mapFiles/appearance.json";
import DestinyMap from "../mapFiles/destiny.json";
import LifeLessonMap from "../mapFiles/lifeLesson.json";
import KarmicNumberMap from "../mapFiles/karmicNumbers.json";
import KarmicLessonMap from "../mapFiles/karmicLessons.json";
import BirthDayMap from "../mapFiles/birthDay.json";
import FirstVowelMap from "../mapFiles/vowel.json";
import RealizationsMap from "../mapFiles/realization.json";
import ChallengesMap from "../mapFiles/challenge.json";
import PowerMap from "../mapFiles/power.json";
import CycleMap from "../mapFiles/cycle.json";
import QuadrimesterMap from "../mapFiles/quadrimester.json";
import TemperamentMap from "../mapFiles/temperament.json";
import personalYearMap from "../mapFiles/personalYear.json";
import MapItemResponse from "../model/response/MapItemResponse";
import MapSubtitleListEnum from "../model/enum/MapItemListEnum";
import MapResponse from "../model/response/MapResponse";
import MapItemRequest from "../model/request/MapItemRequest";
import MapDefinitionEntity from "../model/entities/MapDefinitionEntity";
import KarmicNumber from "../model/core/KarmicNumber";
import MapItemEnum from "../model/enum/MapItemEnum";
import IMapItemRequest from "../interfaces/model/request/IMapItemRequest";
import IMapKarmicNumberRequest from "../interfaces/model/request/IMapKarmicNumberRequest";
import { isObject } from "util";

export default class MapGenerator {
    public generateMapItem = (id: string, title: string, order: number): MapItemResponse => {
        switch(title) { 
            case "soul": { 
                let soulMap = SoulMap.map(s => new MapDefinitionEntity(s.yourValue, s.id, s.description)); 
                return this.handleItem(id, title, order, soulMap.find(s => s.getId() === id))
            } 
            case "vibration": {
                let vibrationMap = VibrationMap.map(v => new MapDefinitionEntity(v.yourValue, v.id, v.description));
                return this.handleItem(id, title, order, vibrationMap.find(v => v.getId() === id));
            } 
            case "appearance": {
                let appearanceMap = AppearanceMap.map(a => new MapDefinitionEntity(a.yourValue, a.id, a.description));
                return this.handleItem(id, title, order, appearanceMap.find(a => a.getId() === id));
            }
            case "destiny": {
                let destinyMap = DestinyMap.map(d => new MapDefinitionEntity(d.yourValue, d.id, d.description));
                return this.handleItem(id, title, order, destinyMap.find(d => d.getId() === id));
            }
            case "lifeLesson": {
                let lifeLessonMap = LifeLessonMap.map(l => new MapDefinitionEntity(l.yourValue, l.id, l.description));
                return this.handleItem(id, title, order, lifeLessonMap.find(l => l.getId() === id));
            } case "birthDay": {
                let birthDayMap = BirthDayMap.map(b => new MapDefinitionEntity(b.yourValue, b.id, b.description));
                return this.handleItem(id, title, order, birthDayMap.find(b => b.getId() === id));
            }
            case "firstVowel": {
                let firstVowel = FirstVowelMap.map(f => new MapDefinitionEntity(f.yourValue, f.id, f.description));
                return this.handleItem(id, title, order, firstVowel.find(f => f.getId() === id));
            }
            case "power": {
                let power = PowerMap.map(p => new MapDefinitionEntity(p.yourValue, p.id, p.description));
                return this.handleItem(id, title, order, power.find(p => p.getId() === id));
            }
            case "temperament": {
                let temperament = TemperamentMap.map(t => new MapDefinitionEntity(t.yourValue, t.id, t.description));
                return this.handleItem(id, title, order, temperament.find(t => t.getId() === id));
            }
            case "personalYear": {
                let personalYear = personalYearMap.map(p => new MapDefinitionEntity(p.yourValue, p.id, p.description));
                return this.handleItem(id, title, order, personalYear.find(p => p.getId() === id));
            }
            case "personalMonth": {
                let personalYear = personalYearMap.map(p => new MapDefinitionEntity(p.yourValue, p.id, p.description));
                return this.handleItem(id, title, order, personalYear.find(p => p.getId() === id));
            }
            case "personalDay": {
                let personalYear = personalYearMap.map(p => new MapDefinitionEntity(p.yourValue, p.id, p.description));
                return this.handleItem(id, title, order, personalYear.find(p => p.getId() === id));
            }
            default: { 
                return new MapItemResponse(title, [], "", "", "", [], order);
            } 
         } 
    }

    public generateMapItemFromObjectList = (items: IMapItemRequest[], title: string, order: number): MapItemResponse => {
        let itemsId = items.map(i => i.id);
        switch(title) {
            case "cycles": {
                let cycleMap = CycleMap.map(c => new MapDefinitionEntity(c.yourValue, c.id, c.description));
                let itemsMap = itemsId.map(i => cycleMap.find(c => c.getId() === i)).filter((m): m is MapDefinitionEntity => m !== undefined);
                return this.handleLifeCycle(items, title, itemsMap, order);
            }
            case "realizations": {
                let realizationsMap = RealizationsMap.map(r => new MapDefinitionEntity(r.yourValue, r.id, r.description));
                let itemsMap = itemsId.map(i => realizationsMap.find(r => r.getId() === i)).filter((m): m is MapDefinitionEntity => m !== undefined);
                return this.handleItemListObjectWithYears(items, title, itemsMap, order);
            }
            case "challenges": {
                let challengesMap = ChallengesMap.map(c => new MapDefinitionEntity(c.yourValue, c.id, c.description));
                let itemsMap = itemsId.map(i => challengesMap.find(c => c.getId() === i)).filter((m): m is MapDefinitionEntity => m !== undefined);
                return this.handleItemListObjectWithYears(items, title, itemsMap, order);
            }
            case "quadrimester": {
                let quadrimestersMap = QuadrimesterMap.map(q => new MapDefinitionEntity(q.yourValue, q.id, q.description));
                let itemsMap = itemsId.map(i => quadrimestersMap.find(q => q.getId() === i)).filter((m): m is MapDefinitionEntity => m !== undefined);
                return this.handleItemListObjectWithYears(items, title, itemsMap, order);
            }
            default: {
                return new MapItemResponse(title, [], "", "", "", [], order);
            }
        }

    }

    public generateMapItemFromList = (ids: string[], title: string, order: number): MapItemResponse => {
        switch(title){ 
            case  "karmicLesson": {
                let karmicMap = KarmicLessonMap.map(k => new MapDefinitionEntity(k.yourValue, k.id, k.description));
                let itemsMap = ids.map(i => karmicMap.find(k => k.getId() === i));
                return this.handleKarmicLesson(title, order, itemsMap);
            }
            default: {
                return new MapItemResponse(title, [], "", "", "", [], order);
            }
        }
    }



    private handleItem = (id: string, title: string, order: number, item: MapDefinitionEntity | undefined): MapItemResponse => {
        let mapItem = this.findMapEnum(title);

        if (item !== undefined && mapItem !== undefined) {
            return new MapItemResponse(mapItem.getTitle(), mapItem.getSubtitle(), item.getYourValue(), id, item.getDescription(), [], order);
        }

        return new MapItemResponse(title, [], "", "", "", [], order);
    }

    private handleItemListObjectWithDate = (itens: MapItemRequest[], title: string,  maps: (MapDefinitionEntity | undefined)[], order: number): MapItemResponse => {
        // let mapItem = this.findMapEnum(title);
        // //let mapSubItemResponseList: MapSubItemResponse[];

        // if (maps !== undefined && mapItem !== undefined) {
        //     let mapSubItemResponseList = maps.map(m => { new MapSubItemResponse($'')});

        //     return new MapItemResponse(mapItem.getTitle(), mapItem.getSubtitle(), item.yourValue, id, item.description, [], order);
        // }

        return new MapItemResponse(title, [], "", "", "", [], order);
    }

    private handleItemListObjectWithYears = (items: IMapItemRequest[], title: string,  itemsMap: MapDefinitionEntity[], order: number): MapItemResponse => {
        let mapItem = this.findMapEnum(title);
        if(itemsMap.every(i => i !== undefined) && mapItem !== undefined) {
            let mapSubItemResponseList = itemsMap.map((i, index) => {
                //let itemFromReq = items.find(item => item.id === i.getId());
                if(title === "quadrimester") {
                    return new MapSubItemResponse(`De ${items[index].startValue} à ${items[index]?.finalValue}${i.getYourValue()}: ${i.getId()}`, `${i.getDescription()}`)
                } else {
                    if(items[index] !== undefined && items[index].finalValue === "em diante") {
                        return new MapSubItemResponse(`${i.getYourValue()} dos ${items[index].startValue} ${items[index].finalValue}: ${i.getId()}`, `${i.getDescription()}`)
                    } else {
                        return new MapSubItemResponse(`${i.getYourValue()} dos ${items[index].startValue} aos ${items[index]?.finalValue}: ${i.getId()}`, `${i.getDescription()}`)
                    }
                }
            });
            let listWithoutUndefines = mapSubItemResponseList.filter((m): m is MapSubItemResponse => m !== undefined);
            return new MapItemResponse(mapItem.getTitle(), mapItem.getSubtitle(), "", "", "", listWithoutUndefines, order);
        }

        return new MapItemResponse(title, [], "", "", "", [], order); 
    }

    private handleLifeCycle = (items: IMapItemRequest[], title: string,  itemsMap: MapDefinitionEntity[], order: number): MapItemResponse => {
        let mapItem = this.findMapEnum(title);
        if(itemsMap.every(i => i !== undefined) && mapItem !== undefined) {
            let mapSubItemResponseList = itemsMap.map((i, index) => {
                //for(let j = 0; j >= items.length; j++) {
                    if(index === 0 && items[index].id === i.getId()) {
                        return new MapSubItemResponse(`Dos ${items[index].startValue} aos ${items[index].finalValue}, 1º Formativo: ${i.getId()}`, `${i.getDescription()}`);
                    } else if(index === 1 && items[index].id === i.getId()) {
                        return new MapSubItemResponse(`Dos ${items[index].startValue} aos ${items[index].finalValue}, 2º Produtivo: ${i.getId()}`, `${i.getDescription()}`);
                    } else if(index === 2 && items[index].id === i.getId()) {
                        return new MapSubItemResponse(`Dos ${items[index].startValue} ${items[index].finalValue}, 2º Colheita: ${i.getId()}`, `${i.getDescription()}`);
                    }
                //}
            });

            let listWithoutUndefines = mapSubItemResponseList.filter((m): m is MapSubItemResponse => m !== undefined);
            return new MapItemResponse(mapItem.getTitle(), mapItem.getSubtitle(), "", "", "", listWithoutUndefines, order);
        }

        return new MapItemResponse(title, [], "", "", "", [], order); 
    }

    public generateKarmicNumberMap = (karmicNumberObjects: IMapKarmicNumberRequest[], title: string, order: number): MapItemResponse => {
        let karmicMap = KarmicNumberMap.map(k => new MapDefinitionEntity(k.yourValue, k.id, k.description));
        let itemsMap = karmicNumberObjects.map(kn => karmicMap.find(k => k.getId() === kn.id)).filter((k): k is MapDefinitionEntity => k !== undefined);

        let mapItem = this.findMapEnum(title);
        if(itemsMap.every(i => i !== undefined) && mapItem !== undefined) {
            let mapSubItemResponseList = itemsMap.map((i, index) => {
                if(i.getId() === "0") {
                    return new MapSubItemResponse(`${i.getYourValue()}: ${i.getId()}`, `${i.getDescription()}${karmicNumberObjects[index].attribute}`)
                }
                return new MapSubItemResponse(`${i.getYourValue()}: ${i.getId()}`, `${i.getDescription()}`)
            });
            
            return new MapItemResponse(mapItem.getTitle(), mapItem.getSubtitle(), "", "", "", mapSubItemResponseList, order);
        }

        return new MapItemResponse(title, [], "", "", "", [], order);
    }

    private handleKarmicLesson = (title: string, order: number, itemsMap: (MapDefinitionEntity | undefined)[]): MapItemResponse => {
        let mapItem = this.findMapEnum(title);
        if(itemsMap.every(i => i !== undefined) && mapItem !== undefined) {
            let mapSubItemResponseList = itemsMap.map(i => new MapSubItemResponse(`${i?.getYourValue()}: ${i?.getId()}`, `${i?.getDescription()}`))
            
            return new MapItemResponse(mapItem.getTitle(), mapItem.getSubtitle(), "", "", "", mapSubItemResponseList, order);
        }

        return new MapItemResponse(title, [], "", "", "", [], order);
    }

    private findMapEnum = (title: string): MapItemEnum | undefined => {
        let mapItemListEnum = new MapSubtitleListEnum();
        let mapItem = mapItemListEnum.getList().find(mi => mi.getAttributeName() === title);

        return mapItem;
    }

    
}