import IMapItemRequest from "../../interfaces/model/request/IMapItemRequest";
import IMapKarmicNumberRequest from "../../interfaces/model/request/IMapKarmicNumberRequest";
import MapItemRequest from "./MapItemRequest";

export default class MapGeneratorRequest {
  private soulId: string;
  private appearanceId: string;
  private destinyId: string;
  private lifeCycleListItens: IMapItemRequest[];
  private firstVowelId: string;
  private lifeLessonId: string;
  private birthDayId: string;
  private birthdateId: string;
  private powerId: string;
  private personalYearId: string;
  private personalMonthId: string;
  private personalDayId: string;
  private quadrimesterListItens: IMapItemRequest[];
  private temperamentId: string;
  private vibrationId: string;
  private spiersAndRealizationListItens: IMapItemRequest[];
  private challengeListItens: IMapItemRequest[];
  private karmicNumberListIds: IMapKarmicNumberRequest[];
  private karmicAbsencesListIds: string[];


	constructor(soulId: string, appearanceId: string, destinyId: string, lifeCycleListItens: IMapItemRequest[], firstVowelId: string, lifeLessonId: string, birthDayId: string, birthdateId: string, powerId: string, personalYearId: string, personalMonthId: string, personalDayId: string, quadrimesterListItens: IMapItemRequest[], temperamentId: string, vibrationId: string, spiersAndRealizationListItens: IMapItemRequest[], challengeListItens: IMapItemRequest[], karmicNumberListIds: IMapKarmicNumberRequest[], karmicAbsencesListIds: string[]) {
		this.soulId = soulId;
		this.appearanceId = appearanceId;
		this.destinyId = destinyId;
		this.lifeCycleListItens = lifeCycleListItens;
		this.firstVowelId = firstVowelId;
		this.lifeLessonId = lifeLessonId;
		this.birthDayId = birthDayId;
		this.birthdateId = birthdateId;
		this.powerId = powerId;
		this.personalYearId = personalYearId;
		this.personalMonthId = personalMonthId;
		this.personalDayId = personalDayId;
		this.quadrimesterListItens = quadrimesterListItens;
		this.temperamentId = temperamentId;
		this.vibrationId = vibrationId;
		this.spiersAndRealizationListItens = spiersAndRealizationListItens;
		this.challengeListItens = challengeListItens;
		this.karmicNumberListIds = karmicNumberListIds;
		this.karmicAbsencesListIds = karmicAbsencesListIds;
	}

    /**
     * Getter soulId
     * @return {string}
     */
	public getSoulId(): string {
		return this.soulId;
	}

    /**
     * Setter soulId
     * @param {string} value
     */
	public setSoulId(value: string) {
		this.soulId = value;
	}

    /**
     * Getter appearanceId
     * @return {string}
     */
	public getAppearanceId(): string {
		return this.appearanceId;
	}

    /**
     * Setter appearanceId
     * @param {string} value
     */
	public setAppearanceId(value: string) {
		this.appearanceId = value;
	}

    /**
     * Getter destinyId
     * @return {string}
     */
	public getDestinyId(): string {
		return this.destinyId;
	}

    /**
     * Setter destinyId
     * @param {string} value
     */
	public setDestinyId(value: string) {
		this.destinyId = value;
	}

    /**
     * Getter lifeCycleListItens
     * @return {IMapItemRequest[]}
     */
	public getLifeCycleListItens(): IMapItemRequest[] {
		return this.lifeCycleListItens;
	}

    /**
     * Setter lifeCycleListItens
     * @param {IMapItemRequest[]} value
     */
	public setLifeCycleListItens(value: IMapItemRequest[]) {
		this.lifeCycleListItens = value;
	}

    /**
     * Getter firstVowelId
     * @return {string}
     */
	public getFirstVowelId(): string {
		return this.firstVowelId;
	}

    /**
     * Setter firstVowelId
     * @param {string} value
     */
	public setFirstVowelId(value: string) {
		this.firstVowelId = value;
	}

    /**
     * Getter lifeLessonId
     * @return {string}
     */
	public getLifeLessonId(): string {
		return this.lifeLessonId;
	}

    /**
     * Setter lifeLessonId
     * @param {string} value
     */
	public setLifeLessonId(value: string) {
		this.lifeLessonId = value;
	}

    /**
     * Getter birthDayId
     * @return {string}
     */
	public getBirthDayId(): string {
		return this.birthDayId;
	}

    /**
     * Setter birthDayId
     * @param {string} value
     */
	public setBirthDayId(value: string) {
		this.birthDayId = value;
	}

    /**
     * Getter birthdateId
     * @return {string}
     */
	public getBirthdateId(): string {
		return this.birthdateId;
	}

    /**
     * Setter birthdateId
     * @param {string} value
     */
	public setBirthdateId(value: string) {
		this.birthdateId = value;
	}

    /**
     * Getter powerId
     * @return {string}
     */
	public getPowerId(): string {
		return this.powerId;
	}

    /**
     * Setter powerId
     * @param {string} value
     */
	public setPowerId(value: string) {
		this.powerId = value;
	}

    /**
     * Getter personalYearId
     * @return {string}
     */
	public getPersonalYearId(): string {
		return this.personalYearId;
	}

    /**
     * Setter personalYearId
     * @param {string} value
     */
	public setPersonalYearId(value: string) {
		this.personalYearId = value;
	}

    /**
     * Getter personalMonthId
     * @return {string}
     */
	public getPersonalMonthId(): string {
		return this.personalMonthId;
	}

    /**
     * Setter personalMonthId
     * @param {string} value
     */
	public setPersonalMonthId(value: string) {
		this.personalMonthId = value;
	}

    /**
     * Getter personalDayId
     * @return {string}
     */
	public getPersonalDayId(): string {
		return this.personalDayId;
	}

    /**
     * Setter personalDayId
     * @param {string} value
     */
	public setPersonalDayId(value: string) {
		this.personalDayId = value;
	}

    /**
     * Getter quadrimesterListItens
     * @return {IMapItemRequest[]}
     */
	public getQuadrimesterListItens(): IMapItemRequest[] {
		return this.quadrimesterListItens;
	}

    /**
     * Setter quadrimesterListItens
     * @param {IMapItemRequest[]} value
     */
	public setQuadrimesterListItens(value: IMapItemRequest[]) {
		this.quadrimesterListItens = value;
	}

    /**
     * Getter temperamentId
     * @return {string}
     */
	public getTemperamentId(): string {
		return this.temperamentId;
	}

    /**
     * Setter temperamentId
     * @param {string} value
     */
	public setTemperamentId(value: string) {
		this.temperamentId = value;
	}

    /**
     * Getter vibrationId
     * @return {string}
     */
	public getVibrationId(): string {
		return this.vibrationId;
	}

    /**
     * Setter vibrationId
     * @param {string} value
     */
	public setVibrationId(value: string) {
		this.vibrationId = value;
	}

    /**
     * Getter spiersAndRealizationListItens
     * @return {IMapItemRequest[]}
     */
	public getSpiersAndRealizationListItens(): IMapItemRequest[] {
		return this.spiersAndRealizationListItens;
	}

    /**
     * Setter spiersAndRealizationListItens
     * @param {IMapItemRequest[]} value
     */
	public setSpiersAndRealizationListItens(value: IMapItemRequest[]) {
		this.spiersAndRealizationListItens = value;
	}

    /**
     * Getter challengeListItens
     * @return {IMapItemRequest[]}
     */
	public getChallengeListItens(): IMapItemRequest[] {
		return this.challengeListItens;
	}

    /**
     * Setter challengeListItens
     * @param {IMapItemRequest[]} value
     */
	public setChallengeListItens(value: IMapItemRequest[]) {
		this.challengeListItens = value;
	}

    /**
     * Getter karmicNumberListIds
     * @return {IMapKarmicNumberRequest[]}
     */
	public getKarmicNumberListIds(): IMapKarmicNumberRequest[] {
		return this.karmicNumberListIds;
	}

    /**
     * Setter karmicNumberListIds
     * @param {IMapKarmicNumberRequest[]} value
     */
	public setKarmicNumberListIds(value: IMapKarmicNumberRequest[]) {
		this.karmicNumberListIds = value;
	}

    /**
     * Getter karmicAbsencesListIds
     * @return {string[]}
     */
	public getKarmicAbsencesListIds(): string[] {
		return this.karmicAbsencesListIds;
	}

    /**
     * Setter karmicAbsencesListIds
     * @param {string[]} value
     */
	public setKarmicAbsencesListIds(value: string[]) {
		this.karmicAbsencesListIds = value;
	}

}
