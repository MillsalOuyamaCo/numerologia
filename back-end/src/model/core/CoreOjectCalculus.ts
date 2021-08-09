export default class CoreObjectCalculus {
  private OriginalNumber: number;
  private ReducedNumber: number;

  constructor(OriginalNumber: number, ReducedNumber: number) {
    this.OriginalNumber = OriginalNumber;
    this.ReducedNumber = ReducedNumber;
  }

  /**
   * Getter OriginalNumber
   * @return {number}
   */
  public getOriginalNumber(): number {
    return this.OriginalNumber;
  }

  /**
   * Setter OriginalNumber
   * @param {number} value
   */
  public setOriginalNumber(value: number) {
    this.OriginalNumber = value;
  }

  /**
   * Getter ReducedNumber
   * @return {number}
   */
  public getReducedNumber(): number {
    return this.ReducedNumber;
  }

  /**
   * Setter ReducedNumber
   * @param {number} value
   */
  public setReducedNumber(value: number) {
    this.ReducedNumber = value;
  }
}
