import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { delay, first, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list(){

    return  this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(5),
      tap(courses => console.log(courses))


    );

  }
}
