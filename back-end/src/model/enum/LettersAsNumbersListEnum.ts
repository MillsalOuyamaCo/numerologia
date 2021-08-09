import LettersAsNumbersEnum from "./LettersAsNumbersEnum";

export default class LettersAsNumbersList {
  public list: LettersAsNumbersEnum[] = [];

  constructor() {
    this.list.push(new LettersAsNumbersEnum("a", 1));
    this.list.push(new LettersAsNumbersEnum("j", 1));
    this.list.push(new LettersAsNumbersEnum("s", 1));
    this.list.push(new LettersAsNumbersEnum("b", 2));
    this.list.push(new LettersAsNumbersEnum("k", 2));
    this.list.push(new LettersAsNumbersEnum("t", 2));
    this.list.push(new LettersAsNumbersEnum("c", 3));
    this.list.push(new LettersAsNumbersEnum("l", 3));
    this.list.push(new LettersAsNumbersEnum("u", 3));
    this.list.push(new LettersAsNumbersEnum("d", 4));
    this.list.push(new LettersAsNumbersEnum("m", 4));
    this.list.push(new LettersAsNumbersEnum("v", 4));
    this.list.push(new LettersAsNumbersEnum("e", 5));
    this.list.push(new LettersAsNumbersEnum("n", 5));
    this.list.push(new LettersAsNumbersEnum("w", 5));
    this.list.push(new LettersAsNumbersEnum("f", 6));
    this.list.push(new LettersAsNumbersEnum("o", 6));
    this.list.push(new LettersAsNumbersEnum("x", 6));
    this.list.push(new LettersAsNumbersEnum("g", 7));
    this.list.push(new LettersAsNumbersEnum("p", 7));
    this.list.push(new LettersAsNumbersEnum("y", 7));
    this.list.push(new LettersAsNumbersEnum("h", 8));
    this.list.push(new LettersAsNumbersEnum("q", 8));
    this.list.push(new LettersAsNumbersEnum("z", 8));
    this.list.push(new LettersAsNumbersEnum("i", 9));
    this.list.push(new LettersAsNumbersEnum("r", 9));
  }
}
