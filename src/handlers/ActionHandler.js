import { actions } from "../constant/actions";
import { PlayAudio } from '../plugins/audioPlayer';

export class ActionHandler {    

    commitAction(player) {
        if(player == undefined) return;questionModal
        let index = player.boardPosition;

        // When the boardPosition of the current player has an action
        if(actions.get(index) == null) {
            $('#roll-dice-btn').prop('disabled', false);
            return;
        };

        this.#showQuestion(actions.get(index), player);
    }


    #showQuestion(question, player) {    
        let currentQuestion = question;
        let isAnswerInCorrect = true;
            
        $('#close-modal-btn').hide();
        $('#submit-answer-btn').show();

        createQuestionElements(currentQuestion);    

        $('.flip-card-back #submit-answer-btn').off();
        $('.flip-card-back #submit-answer-btn').on('click', function() {
            $('#submit-answer-btn').hide();
            const answer = $('input[type=radio]:checked').val()
            isAnswerInCorrect = answer != currentQuestion.correctAnswer;

            showAnswer(isAnswerInCorrect);
            PlayAudio(isAnswerInCorrect ? 'WRONG_ANSWER' : 'RIGHT_ANSWER')
            showQuestionExplanation(currentQuestion.explanation, isAnswerInCorrect);
            
            $('#close-modal-btn').show();
            $('#close-modal-btn').off();

            $('#close-modal-btn').on('click', function () {
                $('#pseudo-close-modal-btn').click()
                $('.flip-card-back-inner').empty();
                $('#roll-dice-btn').prop('disabled', false);  
                
                if(isAnswerInCorrect) {
                    player.updateBoardPosition(-2);                    
                }
            });
        })

        setTimeout(() => {
            $("#questionModal").modal({
                escapeClose: false,
                clickClose: false,
                showClose: false,
                fadeDuration: 500
            });
        }, 1500)                        
    }
} 


function createQuestionElements(currentQuestion) {    
    const title = `
        <h3>${currentQuestion.question}</h3>
        <ul class='question-container'></ul>
    `;

    $('.flip-card-back-inner').html(title);

    for (let index = 0; index < currentQuestion.answers.length; index++) {
        let item = `
        <li class="list__item">
            <label class="label--radio">
                <input type="radio" class="radio" name="radioBtn" value="${index}">
                ${currentQuestion.answers[index]}
            </label>
        </li>
        `;

        $('.flip-card-back-inner .question-container').append(item);            
    }
}

function showAnswer(isAnswerInCorrect) {
    let result = '<h3 class="question-answer right-answer">Juist!</h3>';

    if(isAnswerInCorrect) {
        result = '<h3 class="question-answer wrong-answer">Onjuist antwoord!</h3>';
    }

    $('.flip-card-back-inner .question-container').append(result); 
}

function showQuestionExplanation(explanation, isAnswerInCorrect) {
    const el = `
        <div>
            <p class='question-explanation'>${explanation}</p>
            <small class='wrong-answer'>${ isAnswerInCorrect ? 'Je gaat 2 stappen achteruit' : ''}</small>
        </div>
    `;

    $('.flip-card-back-inner .question-container').append(el);
}