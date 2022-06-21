import "@tensorflow/tfjs-backend-cpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

export class ReCaptchaHandler {     
    _time = 12;
    _isPlaying = false;    

    constructor(action, player) {
        this._questions = action.questions;
        this._player = player;
    } 
    
    commitAction() {        
        this.#showStartScreen();
    }

    #showStartScreen() {
        this.#startGame();            
    }

    #startGame() {        
        const imageElement = document.createElement("img");        
        imageElement.src = this._questions[0].src;

        this.detectObjectsOnImage(imageElement).then((result) => {
            this._aiTime = result.time;
            this._aiScore = result.score;

            $("#quiz-start-screen-close-modal-btn").click();

            if (this._questions.length > 0) {
                this.#showQuestion(this._questions.pop());
                this.#addCountdown();
            }
        });
    }

    #addCountdown() {
        const diceContainer = `
            <div id="countdown">
                <div class="time">
                    <h2 class="value">${this._time}</h2>   
                </div>
            </div>
        `;
    
        $(".quiz").append(diceContainer);
    }

    #startCountdown() {
        this._interval = setInterval(() => {
          $("#countdown .time .value").html((this._time -= 1));
    
          if (this._time === 0) {
            clearInterval(this._interval);
            this.#showEndScreen(
              "Verloren",
              "Helaas, je was niet snel genoeg in het geven van de juiste antwoorden. Als straf wordt je pion twee plekken teruggezet.",
              this._aiTime,
              this._aiScore
            );

            this._player.updateBoardPosition(-2);
          }
        }, 1000);
      }

    #showQuestion(question) {
        let currentQuestion = question;
        let isAnswerInCorrect = true;
    
        this.createQuestionElements(currentQuestion);
    
        let handleAnswer = (isAnswerInCorrect) => {
          if (isAnswerInCorrect) {
            clearInterval(this._interval);
            this.#showEndScreen(
              "Verloren",
              "Helaas, je hebt deze vraag fout beantwoord. Als straf wordt je pion twee plekken teruggezet.",
              this._aiTime,
              this._aiScore
            );

            this._player.updateBoardPosition(-2);
    
            return;
          }
    
          if (this._questions.length === 0) {
            clearInterval(this._interval);
            this.#showEndScreen(
              "Gewonnen",
              "Gefeliciteerd! Je was snel genoeg in het geven van de juiste antwoorden. Je hebt hiermee een straf van twee plekken verlies weten te voorkomen.",
              this._aiTime,
              this._aiScore
            );

            this._player.updateBoardPosition(0);
    
            return;
          }
    
          this.#showQuestion(this._questions.pop());
        };
    
        $("#quiz-modal .quiz-answer-btn").off();
        $("#quiz-modal .quiz-answer-btn").on("click", function () {
          $(".quiz-answer-btn").hide();
          const answer = $(this).val();
          isAnswerInCorrect = answer != currentQuestion.correctAnswer;
    
          handleAnswer(isAnswerInCorrect);
        });
    
        if (!this._isPlaying) {
          this._isPlaying = true;
    
          $("#quiz-modal").modal({
            escapeClose: false,
            clickClose: false,
            showClose: false,
            fadeDuration: 300,
          });
    
          this.#startCountdown();
        }
      }

      #showEndScreen(title, text, time, certainty) {
        setTimeout(() => {
          const body = `
            <div id="quiz-end-screen">
                <div class="quiz-end-screen-content">
                    <h2>${title}!</h2>
                    <br />
                    <p> ${text}</p>
                    <br />
                    <p>Algoritmes worden voor veel verschillende doelen gebruikt, zo ook bij artificial intelligence (AI). De minigame die jij net hebt gespeeld, is door middel van AI opgelost in ${time} seconden met een zekerheidspercentage van ${certainty}%</p>
                    <br />
                    <button class="btn">Terug naar bord</button>
                </div>
            </div>
        `;
    
          $(".quiz").html(body);
    
          $(".quiz #quiz-end-screen .btn").off();
          $(".quiz #quiz-end-screen .btn").on("click", this.backToBoard);
        }, 300);
      }

      backToBoard() {
        setTimeout(() => {
          $("#quiz-close-modal-btn").click();
          $('#roll-dice-btn').prop('disabled', false);
        }, 300);
      }
    
      detectObjectsOnImage = async (imageElement) => {
        let startTime = performance.now();
    
        const model = await cocoSsd.load({});
        const predictions = await model.detect(imageElement, 6);
    
        let endTime = performance.now();
    
        return {
          score: (predictions[0].score * 100).toFixed(2),
          time: ((endTime - startTime) / 1000).toFixed(2),
        };
      };
    
      createQuestionElements(currentQuestion) {
        const title = `
            <h2 class='quiz-question-title'>${currentQuestion.question}</h2>
            <div class='quiz-question-img'></div>
            <div class='quiz-question-container'></div>
        `;
    
        $(".quiz-question-inner").html(title);
    
        const img = `<img src="${currentQuestion.src}" />`;
    
        $(".quiz-question-inner .quiz-question-img").append(img);
    
        for (let index = 0; index < currentQuestion.answers.length; index++) {
          let item = `
                <button class="quiz-answer-btn" value=${index}>
                    ${currentQuestion.answers[index]}
                </button>
            `;
    
          $(".quiz-question-inner .quiz-question-container").append(item);
        }
      }
}