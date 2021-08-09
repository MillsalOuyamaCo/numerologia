export default class KarmicNumber {
    public IsKarmic: boolean;
    public KarmicNumber: number;
    public Attribute: string;
 
    constructor(IsKarmic: boolean, KarmicNumber: number, Attribute: string) {
        this.IsKarmic = IsKarmic;
        this.KarmicNumber = KarmicNumber;
        this.Attribute = Attribute;
    }
}