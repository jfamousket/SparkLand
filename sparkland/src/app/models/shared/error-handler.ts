import { ErrorHandler } from "@angular/core";
import { MenuError, AppError } from "./app-error";
import { NotFoundError } from "./not-found";

export class AppErrorHandler implements ErrorHandler {

    handleError(error) {
        console.log(error);
        if(error instanceof MenuError) return alert("OOPS!! Contact us with this complain we didn't really see this one coming");
        if(error instanceof NotFoundError) return alert("We didn't find any information for this page sorry");
        return alert("An unexpected error occured");

    }

}