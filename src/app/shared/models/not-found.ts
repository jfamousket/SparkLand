import { AppError } from "./app-error";

export class NotFoundError extends AppError {
    public message = "Page wasn't found now please try again later";
    constructor(public originalError, public location?) {
        super();
    }
}