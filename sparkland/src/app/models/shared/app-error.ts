
export class AppError {
    constructor(public originalError?: any) {

    }
}

export class MenuError extends AppError{
    
}