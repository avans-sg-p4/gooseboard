import { actions } from "../constant/actions";
import { QuestionHandler } from "./QuestionHandler";

export class ActionHandler {    

    determineAction(player) {
        if(player == undefined) return;questionModal
        let index = player.boardPosition;

        // When the boardPosition of the current player has an action
        const action = actions.get(index);
        if(action == null) {
            $('#roll-dice-btn').prop('disabled', false);
            return;
        };

        // Determine what kind of action it needs to be (Question or Minigame)
        const objName = action.constructor.name;
        let handler;
        if(objName == "Question") {            
            handler = new QuestionHandler(action, player);
        }

        if(objName == "ReCaptcha") {
            console.log('test')
        }

        handler.commitAction();
    
    }
} 