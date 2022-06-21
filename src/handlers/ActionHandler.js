import { actions } from "../constant/actions";
import { QuestionHandler } from "./QuestionHandler";
import { ReCaptchaHandler } from "./RecaptchaHandler";

export class ActionHandler {    

    determineAction(player) {
        if(player == undefined) return;questionModal
        let index = player.boardPosition;

        // When the boardPosition of the current player has an action
        const action = actions.get(index);

        // let handler2 = new ReCaptchaHandler(action, player);
        // handler2.commitAction()

        // return;

        
        if(action == null) {
            $('#roll-dice-btn').prop('disabled', false);
            return;
        };
        

        const objName = action.constructor.name;
        let handler;

        // Determine what kind of action it needs to be (Question or Minigame)
        if(objName == "Question") {            
            handler = new QuestionHandler(action, player);
        }

        if(objName == "ReCaptcha") {        
            handler = new ReCaptchaHandler(action, player);
        }

        handler.commitAction();
    
    }
} 