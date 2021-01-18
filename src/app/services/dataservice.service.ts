import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root'})

export class DataserviceService {
  private serviceUrl = 'https://api.spacexdata.com/v3/launches?limit=100';

  constructor(private http: HttpClient ) { }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getInfo(): Observable<any> {
    return this.http.get<any>("https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true").        pipe(
           map((data:any) => {
             return data;
           }), catchError( () => {
             return throwError( 'Something went wrong!' );
           })
        )
    }
    //const url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=" +`${launch_ss}` +"&land_success=" + `${launch_ss}` + "launch_year=" +`${year}`;

   
    
  getYearInfo(year: number): Observable<any> {
    const url = "https://api.spacexdata.com/v3/launches?limit=100&launch_year=" +`${year}`;
    return this.http.get(url).
    pipe(
      map((data:any) => {
        return data;
      }), catchError( () => {
        return throwError( 'Something went wrong!' );
      })
   )
}

  getlaunchingSucess(launch_success:boolean): Promise<any>{
      const url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=" +`${launch_success}`;

      return this.http.get(url)
      .toPromise()
      .then(response => response);
    
  }


}

  







