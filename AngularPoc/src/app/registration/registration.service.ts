import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8080/api/v1/employees';  

   postEmployee(details:any): Observable<any>{
     return this.http.post(`${this.baseUrl}`,details);
   }
   getEmployee(): Observable<any>{
     return this.http.get(`${this.baseUrl}`);
   }

   updateEmployeeDetails(employeeId:number,value:any):Observable<any>{
     return this.http.put(`${this.baseUrl}/${employeeId}`,value);
   }

   getEmployeeById(id: number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
   }

   deleteEmployee(id: number):Observable<any>{
     return this.http.delete(`${this.baseUrl}/${id}`);
   }
}
