
export class AppError {
    constructor(public originalError?: any) {

    }
}

export class MenuError extends AppError{

    message: "An error occured "

    constructor (public originalError: any, public location) {
        super();
    }
}