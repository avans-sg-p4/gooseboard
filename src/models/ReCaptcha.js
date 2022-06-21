import { images } from "../constant/images";

export class ReCaptcha {        
    _questionsPerGame = 5;
    _amountOfQuestions = 10;
    _questions = []
    
    constructor() {
        this.#getQuestions();
    }

    #getQuestions() {
        let indexArr = [];
        const actions = images;
    
        while (indexArr.length !== this._questionsPerGame) {
          let index = Math.floor(Math.random() * this._amountOfQuestions);
    
          if (!indexArr.includes(index)) {
            indexArr.push(index);
          }
        }        
    
        indexArr.forEach((index) => {
          if (actions.get(index) !== null) {
            this._questions.push(actions.get(index));
          }
        });        
      }


    get questions() {
        return this._questions;
    }
}