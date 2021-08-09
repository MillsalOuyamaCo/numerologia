import CoreObjectCalculus from "../core/CoreOjectCalculus";
import LifePeriodObject from "../core/LifePeriodObject";
import QuadrimesterObjectResult from "../core/QuadrimesterObjectResult";

export default class CalculosObjectResponse {
    private id: string = "";
	private value: string = "";
    private description?: string = "";


	public static constructorCore = (Id: string, Value: CoreObjectCalculus, deep: boolean, Description: string): CalculosObjectResponse => {
		const calculus = new CalculosObjectResponse();
		if(deep) {
			calculus.setValue(Value.getOriginalNumber() == Value.getReducedNumber() ? Value.getOriginalNumber().toString() 
			: Value.getOriginalNumber().toString().concat("/", Value.getReducedNumber().toString()));

			calculus.setId(calculus.getValue());
		} else {
			calculus.setValue(Value.getOriginalNumber() == Value.getReducedNumber() ? Value.getOriginalNumber().toString() 
			: Value.getReducedNumber().toString());

			calculus.setId(Value.getReducedNumber().toString());
		}

		calculus.setDescription(Description);

		return calculus;
	}

	public static constructorString = (Id: string, Value: string, Description?: string): CalculosObjectResponse => {
		const calculus = new CalculosObjectResponse();
		calculus.setValue(Value);
		calculus.setId(Id);
		calculus.setDescription(Description);

		return calculus;
	}

	public static constructorLifePeriod = (Id: string, Value: LifePeriodObject): CalculosObjectResponse => {
		const calculus = new CalculosObjectResponse();

		if(Value.getFinalValue() === 999) {
			calculus.setValue(`De ${Value.getStartValue()} em diante: ${Value.getResult()}`);
		}
		else{
			calculus.setValue(`De ${Value.getStartValue()} a ${Value.getFinalValue()}: ${Value.getResult()}`);
		}
		calculus.setId(Id);

		return calculus;
	}


	public static constructorQuadrimester = (Id: string, Value: QuadrimesterObjectResult, deep: boolean): CalculosObjectResponse => {
		const calculus = new CalculosObjectResponse();
		let finalValue: string = "";

		if(deep) {
			finalValue = Value.getResult().getOriginalNumber() == Value.getResult().getReducedNumber() ? Value.getResult().getOriginalNumber().toString() 
			: Value.getResult().getOriginalNumber().toString().concat("/", Value.getResult().getReducedNumber().toString())

			calculus.setId(calculus.getValue());
		} else {
			finalValue = Value.getResult().getOriginalNumber() == Value.getResult().getReducedNumber() ? Value.getResult().getOriginalNumber().toString() 
			: Value.getResult().getReducedNumber().toString()

			calculus.setId(Value.getResult().getReducedNumber().toString());
		}
		calculus.setValue(`De ${Value.getStartValue()} à ${Value.getFinalValue()}: ${finalValue}`);

		return calculus;
	}

	// constructor(Id: string, Value: CoreObjectCalculus | string | LifePeriodObject, Description?: string, deep: boolean = true) {
	// 	if (Value instanceof CoreObjectCalculus){
	// 		if(deep) {
	// 			this.value = Value.getOriginalNumber() == Value.getReducedNumber() ? Value.getOriginalNumber().toString() 
	// 			: Value.getOriginalNumber().toString().concat("/", Value.getReducedNumber().toString());;
	// 		} else {
	// 			this.value = Value.getOriginalNumber() == Value.getReducedNumber() ? Value.getOriginalNumber().toString() 
	// 			: Value.getReducedNumber().toString();
	// 		}
			
	// 		this.id = this.value;
	// 	} else if (Value instanceof LifePeriodObject){
	// 		// if(Value.getResult() instanceof CoreObjectCalculus) {
	// 		// 	if(deep) {
	// 		// 		this.value = Value.getResult().getOriginalNumber() == Value.getResult().getReducedNumber() ? Value.getResult().getOriginalNumber().toString() 
	// 		// 		: Value.getResult().getOriginalNumber().toString().concat("/", Value.getResult().getReducedNumber().toString());;
	// 		// 	} else {
	// 		// 		this.value = Value.getResult().getOriginalNumber() == Value.getResult().getReducedNumber() ? Value.getResult().getOriginalNumber().toString() 
	// 		// 		: Value.getResult().getReducedNumber().toString();
	// 		// 	}
				
	// 		// 	this.id = this.value;
	// 		// } else{ 
	// 			if(Value.getFinalValue() === 999) {
	// 				this.value = `De ${Value.getStartValue()} em diante: ${Value.getResult()}`;
	// 			}
	// 			else{
	// 				this.value = `De ${Value.getStartValue()} a ${Value.getFinalValue()}: ${Value.getResult()}`
	// 			}
	// 			this.id = Id;
	// 		// }

	// 	} else  {
	// 		this.value = Value;
	// 		this.id = Id;
	// 	}
		
	// 	this.description = Description;
	// }


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
}