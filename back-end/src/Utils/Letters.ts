export default class Letters {
    private vowels = ['a', 'e', 'i', 'o', 'u'];

    public GetVowels = (word: string): string[] => {
        let result: string[] = [];

        word.split('').forEach(letter => {
            if(this.vowels.includes(letter)) {
                result.push(letter);
            }
        });

        return result;
    }

    public GetConsonants = (word: string): string[] => {
        let result: string[] = [];

        word.split('').forEach(letter => {
            if(!this.vowels.includes(letter)) {
                result.push(letter);
            }
        });

        return result;
    }
}