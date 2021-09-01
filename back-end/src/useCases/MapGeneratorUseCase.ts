import MapGenerator from "../business/MapGenerator";
import MapGeneratorRequest from "../model/request/MapGeneratorRequest";
import MapItemResponse from "../model/response/MapItemResponse";
import MapResponse from "../model/response/MapResponse";

export default class MapGeneratorUseCase {
    mapGenerator = new MapGenerator();

    generate(request: MapGeneratorRequest, deep: boolean): MapResponse {
        let mapItemList: MapItemResponse[] = [];
        let vibrationNumber = this.mapGenerator.generateMapItem(request.getVibrationId(), "vibration", 1);
        let soul = this.mapGenerator.generateMapItem(request.getSoulId(), "soul", 2);
        let appearance = this.mapGenerator.generateMapItem(request.getAppearanceId(), "appearance", 3);
        let destiny = this.mapGenerator.generateMapItem(request.getDestinyId(), "destiny", 4);
        let lifeLesson = this.mapGenerator.generateMapItem(request.getLifeLessonId(), "lifeLesson", 5);
        let birthDay = this.mapGenerator.generateMapItem(request.getBirthDayId(), "birthDay", 6);
        let karmicNumbers = this.mapGenerator.generateKarmicNumberMap(request.getKarmicNumberListIds(), "karmicNumbers", 7);
        let karmicLessons = this.mapGenerator.generateMapItemFromList(request.getKarmicAbsencesListIds(), "karmicLesson", 8);
        let firstVowel = this.mapGenerator.generateMapItem(request.getFirstVowelId(), "firstVowel", 8);
        let realizations = this.mapGenerator.generateMapItemFromObjectList(request.getSpiersAndRealizationListItens(), "realizations", 9);
        let challenges = this.mapGenerator.generateMapItemFromObjectList(request.getChallengeListItens(), "challenges", 10);
        let cycles = this.mapGenerator.generateMapItemFromObjectList(request.getLifeCycleListItens(), "cycles", 11);
        let power = this.mapGenerator.generateMapItem(request.getPowerId(), "power", 12);
        let personalYear = this.mapGenerator.generateMapItem(request.getPersonalYearId(), "personalYear", 13);
        let personalMonth = this.mapGenerator.generateMapItem(request.getPersonalMonthId(), "personalMonth", 14);
        let personalDay = this.mapGenerator.generateMapItem(request.getPersonalDayId(), "personalDay", 15);
        let quadrimester = this.mapGenerator.generateMapItemFromObjectList(request.getQuadrimesterListItens(), "quadrimester", 16);
        let temperament = this.mapGenerator.generateMapItem(request.getTemperamentId(), "temperament", 17);

        mapItemList.push(
            soul, 
            vibrationNumber, 
            appearance,
            destiny,
            lifeLesson,
            birthDay,
            karmicNumbers,
            karmicLessons,
            firstVowel,
            realizations,
            challenges,
            cycles,
            power,
            personalYear,
            personalMonth,
            personalDay,
            quadrimester,
            temperament
        );
        let orderedMapItemList = mapItemList.sort((a, b) =>   a.getOrder() - b.getOrder());
        let response = new MapResponse(orderedMapItemList);

        return response;
    }
}