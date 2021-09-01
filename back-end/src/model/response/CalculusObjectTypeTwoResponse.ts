import { ICalculosObjectResponse } from "../../interfaces/model/response/ICalculosObjectResponse";
import CoreObjectCalculus from "../core/CoreOjectCalculus";
import LifePeriodObject from "../core/LifePeriodObject";
import QuadrimesterObjectResult from "../core/QuadrimesterObjectResult";

export default class CalculosObjectTypeTwoResponse implements ICalculosObjectResponse{
	id: string = "";
	value: string = "";
	description?: string | undefined;
	private startValue: string | null= null;
	private finalValue: string | null = null;

	public static constructorLifePeriod = (id: string, value: LifePeriodObject): CalculosObjectTypeTwoResponse => {
		const calculus = new CalculosObjectTypeTwoResponse();

		if(value.getFinalValue() === 999) {
			calculus.setValue(`De ${value.getStartValue()} em diante: ${value.getResult()}`);
		}
		else{
			calculus.setValue(`De ${value.getStartValue()} a ${value.getFinalValue()}: ${value.getResult()}`);
		}
		calculus.setId(id);
		calculus.setStartValue(value.getStartValue().toString());
		calculus.setFinalValue(value.getFinalValue().toString());

		return calculus;
	}


	public static constructorQuadrimester = (id: string, value: QuadrimesterObjectResult, deep: boolean): CalculosObjectTypeTwoResponse => {
		const calculus = new CalculosObjectTypeTwoResponse();
		let finalValue: string = "";

		if(deep) {
			finalValue = value.getResult().getOriginalNumber() == value.getResult().getReducedNumber() ? value.getResult().getOriginalNumber().toString() 
			: value.getResult().getOriginalNumber().toString().concat("/", value.getResult().getReducedNumber().toString())

			calculus.setId(finalValue);
		} else {
			finalValue = value.getResult().getOriginalNumber() == value.getResult().getReducedNumber() ? value.getResult().getOriginalNumber().toString() 
			: value.getResult().getReducedNumber().toString()

			calculus.setId(value.getResult().getReducedNumber().toString());
		}
		calculus.setValue(`De ${value.getStartValue()} à ${value.getFinalValue()}: ${finalValue}`);
		calculus.setStartValue(value.getStartValue());
		calculus.setFinalValue(value.getFinalValue());

		return calculus;
	}

    /**
     * Getter id
     * @return {string}
     */
	public getId(): string {
		return this.id;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public setId(value: string) {
		this.id = value;
	}

    /**
     * Getter value
     * @return {string}
     */
	public getValue(): string {
		return this.value;
	}

    /**
     * Setter value
     * @param {string} value
     */
	public setValue(value: string) {
		this.value = value;
	}

    /**
     * Getter value
     * @return {string}
     */
	 public getDescription(): string | undefined {
		return this.description;
	}

    /**
     * Setter value
     * @param {string} description
     */
	public setDescription(description: string | undefined) {
		this.description = description;
	}


    /**
     * Getter startValue
     * @return {string }
     */
	public getStartValue(): string | null {
		return this.startValue;
	}

    /**
     * Setter startValue
     * @param {string } value
     */
	public setStartValue(value: string | null ) {
		this.startValue = value;
	}

    /**
     * Getter finalVallue
     * @return {string }
     */
	public getFinalValue(): string | null{
		return this.finalValue;
	}

    /**
     * Setter finalVallue
     * @param {string } value
     */
	public setFinalValue(value: string | null ) {
		this.finalValue = value;
	}

}