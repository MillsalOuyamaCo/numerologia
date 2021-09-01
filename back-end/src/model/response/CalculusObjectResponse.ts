import { ICalculosObjectResponse } from "../../interfaces/model/response/ICalculosObjectResponse";
import CoreObjectCalculus from "../core/CoreOjectCalculus";
import LifePeriodObject from "../core/LifePeriodObject";
import QuadrimesterObjectResult from "../core/QuadrimesterObjectResult";

export default class CalculosObjectResponse implements ICalculosObjectResponse{
	id: string = "";
	value: string = "";
	description?: string | undefined;

	public static constructorCore = (id: string, value: CoreObjectCalculus, deep: boolean, description: string): CalculosObjectResponse => {
		const calculus = new CalculosObjectResponse();
		if(deep) {
			calculus.setValue(value.getOriginalNumber() == value.getReducedNumber() ? value.getOriginalNumber().toString() 
			: value.getOriginalNumber().toString().concat("/", value.getReducedNumber().toString()));

			calculus.setId(calculus.getValue());
		} else {
			calculus.setValue(value.getOriginalNumber() == value.getReducedNumber() ? value.getOriginalNumber().toString() 
			: value.getReducedNumber().toString());

			calculus.setId(value.getReducedNumber().toString());
		}

		calculus.setDescription(description);

		return calculus;
	}

	public static constructorString = (Id: string, Value: string, Description?: string): CalculosObjectResponse => {
		const calculus = new CalculosObjectResponse();
		calculus.setValue(Value);
		calculus.setId(Id);
		calculus.setDescription(Description);

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


    // /**
    //  * Getter startValue
    //  * @return {string }
    //  */
	// public getStartValue(): string | null {
	// 	return this.startValue;
	// }

    // /**
    //  * Setter startValue
    //  * @param {string } value
    //  */
	// public setStartValue(value: string | null ) {
	// 	this.startValue = value;
	// }

    // /**
    //  * Getter finalVallue
    //  * @return {string }
    //  */
	// public getFinalValue(): string | null{
	// 	return this.finalVallue;
	// }

    // /**
    //  * Setter finalVallue
    //  * @param {string } value
    //  */
	// public setFinalValue(value: string | null ) {
	// 	this.finalVallue = value;
	// }

}