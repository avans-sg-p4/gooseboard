export class Question {
    constructor(question, answers, correctAnswer, explanation) {
        this._question = question;
        this._answers = answers; 
        this._correctAnswer = correctAnswer;
        this._explanation = explanation;
    }

    get question() {
        return this._question;
    }

    get answers() {
        return this._answers;
    }
    
    get correctAnswer() {
        return this._correctAnswer;
    }

    get explanation() {
        return this._explanation;
    }
}