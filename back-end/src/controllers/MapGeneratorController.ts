import {Request, Response} from 'express';
import IMapItemRequest from '../interfaces/model/request/IMapItemRequest';
import IMapKarmicNumberRequest from '../interfaces/model/request/IMapKarmicNumberRequest';
import MapGeneratorRequest from '../model/request/MapGeneratorRequest';
import MapGeneratorUseCase from '../useCases/MapGeneratorUseCase';

export default class GenerateMapController {
    async index(request: Request, response: Response) {
        let deep = request.query.deep === 'false' ? false : true;
        let mapItemLifeCycle: IMapItemRequest[] = request.body.lifeCycleListIds as IMapItemRequest[];
        let spiersAndRealizationList: IMapItemRequest[] = request.body.spiersAndRealizationListIds as IMapItemRequest[];
        let challengeList: IMapItemRequest[] = request.body.challengeListIds as IMapItemRequest[];
        let quadrimestersList: IMapItemRequest[] = request.body.quadrimesterListIds as IMapItemRequest[];
        let karmicNumbersList: IMapKarmicNumberRequest[] = request.body.karmicNumberListIds as IMapKarmicNumberRequest[];
        let map = new MapGeneratorRequest(
            request.body.soulId,
            request.body.appearanceId,
            request.body.destinyId,
            mapItemLifeCycle,
            request.body.firstVowelId,
            request.body.lifeLessonId,
            request.body.birthDayId,
            request.body.birthdateId,
            request.body.powerId,
            request.body.personalYearId,
            request.body.personalMonthId,
            request.body.personalDayId,
            quadrimestersList,
            request.body.temperamentId,
            request.body.vibrationId,
            spiersAndRealizationList,
            challengeList,
            karmicNumbersList,
            request.body.karmicAbsencesListIds
        );

        let result = new MapGeneratorUseCase().generate(map, deep);

        response.send(result);
    }
}