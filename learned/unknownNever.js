"use strict";
var userInput;
var userNam;
userInput = 5;
userInput = 'Bruno';
if (typeof userInput === 'string') {
    userNam = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
