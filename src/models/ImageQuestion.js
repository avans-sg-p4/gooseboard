export class ImageQuestion {
    constructor(question, src, answers, correctAnswer) {
      this._question = question;
      this._src = src;
      this._answers = answers;
      this._correctAnswer = correctAnswer;
    }
  
    get question() {
      return this._question;
    }
  
    get src() {
      return this._src;
    }
  
    get answers() {
      return this._answers;
    }
  
    get correctAnswer() {
      return this._correctAnswer;
    }
  }
  