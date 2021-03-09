let userInput: unknown;
let userNam: string;

userInput = 5;
userInput = 'Bruno';
if (typeof userInput === 'string') {
    userNam = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500)