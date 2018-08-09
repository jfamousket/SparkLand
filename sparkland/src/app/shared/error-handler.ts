import { ErrorHandler, OnInit } from '@angular/core';
import { MenuError } from "shared/models/app-error";
import { NotFoundError } from "shared/models/not-found";
import swal from 'sweetalert';

export class AppErrorHandler implements ErrorHandler {

    handleError(error) {
        let errorData;
        if(error instanceof MenuError) {
            errorData = "\n\n" + 'MenuError' + "\n" + "Error Summary: " + error.message + " rrom " + error.location + 
            "\n" +  error.originalError + "\n" + 'ng-error: ' + error;
        }

        if(error instanceof NotFoundError) {
            errorData = "\n\n" + 'NotFoundError' + "\n" + "Error Summary: " + error.message + " from " + error.location + 
            "\n" +  error.originalError + "\n";
        }

        else errorData = "\n\n" + error.name + error.message + "\n" + error.stack;

        this.sendErrorMessage(errorData).always(res => swal(res.responseText));
        
        return  console.log(error);
    }

    sendErrorMessage(data) {
        let request = new XMLHttpRequest();
        return $.ajax({
            url: '/spark/api/_error_log.php',
            type: 'POST',
            data: data,
            dataType: 'application/json',
            contentType: 'text/plain',
        });
        
    }
    
}

