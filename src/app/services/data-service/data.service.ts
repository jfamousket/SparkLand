import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map, retry, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from 'shared/models/app-error';
import { NotFoundError } from 'shared/models/not-found';
import { BadInput } from 'shared/models/bad-input';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) {

  }


  getAllData(url){
    return this.http.get(url)
            .pipe(retry(1),timeout(1000), map(resource => resource.json()),
                  catchError(this.handleError));
  }

  sendData(url, data) {
    return this.http.post(url, {data})
            .pipe(timeout(1000), catchError(this.handleError));
  }

  updateData(url,data, id?) {
    return this.http.put(url, {data, id})
            .pipe(retry(1), timeout(1000), catchError(this.handleError));
  }

  getSpecificData(url) {
    return this.http.get(url)
            .pipe(retry(1), timeout(1000), map(resource => resource.json()),
                  catchError(this.handleError));
  }

  getSpecificDataWithID(url,id) {
    return this.http.get(`${url}/${id}`)
            .pipe(retry(1), timeout(1000), map(resource => resource.json()),
                  catchError(this.handleError));
  }

  handleError(error: Response) {
      if(error.status === 404 ) return throwError(new NotFoundError(error, window.location));
      if(error.status === 400 ) return throwError(new BadInput(error.json()));
      return throwError(new AppError(error));

  }

}
