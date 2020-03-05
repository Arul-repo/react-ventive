import * as actionTypes from "./ActionTypes";

export const attachmentFiles = (file) => {
    return{
        type: actionTypes.ATTACHMENT,
        value: file
    }
}



