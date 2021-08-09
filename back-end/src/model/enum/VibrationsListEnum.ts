import VibrationsEnum from "./VibrationsEnum";

export default class VibrationsListEnum {
    public list: VibrationsEnum[] = [];

	constructor() {
		this.list.push( new VibrationsEnum("Artístico", 3));
		this.list.push( new VibrationsEnum("Artístico", 6));
		this.list.push( new VibrationsEnum("Artístico", 9));
		
        this.list.push( new VibrationsEnum("Mental", 1));
        this.list.push( new VibrationsEnum("Mental", 5));
        this.list.push( new VibrationsEnum("Mental", 7));
        
        this.list.push( new VibrationsEnum("Gerenciamento", 2));
        this.list.push( new VibrationsEnum("Gerenciamento", 4));
        this.list.push( new VibrationsEnum("Gerenciamento", 8));
	}
    
}