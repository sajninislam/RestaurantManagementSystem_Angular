import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookcus} from './post';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConserviceService {


  // const httpOptions={
  //   headers: new HttpHeaders({
  //     'Content-Type':'application/json'
  //   })
    
  //   }
  
  
    
  //   constructor(private httpservice:HttpClient) { }
  // private URL ='http://localhost:8080/api/post';
  
  
  
  //   deleteTask(id:number){
  //     return this.httpservice.delete<Post>(this.URL+'/'+id)
  //   }
  
    // deleteTask2(id:number){
    //   return this.httpservice.delete<Driver>(this.URL + '/driver/' + id)
    // }
  
  
    // create(v:Post){
    //   return this.httpservice.post(this.URL,v)
    //   .pipe(
    //     catchError(this.errorHandler)
    //   )
    // }
  
  
  //   create2(post:Driver){
  //     return this.httpservice.post<Driver>(this.URL+'/driver',JSON.stringify(post),httpOptions)
  //     .pipe(
  //       catchError(this.errorHandler)
  //     )
  //   }
  
    
    // find(id:number):Observable<Post>{
    // return this.httpservice.get<Post>(this.URL+'/ /'+ id)
    
    // }
  
  //   find2(id:number):Observable<Driver>{
  //     return this.httpservice.get<Driver>(this.URL+'/driver/'+ id)
      
  //     }
    
    
  //   // update(id:number,post:Bus){
  //   // return this.httpservice.put(this.URL +'/bus-Schedule/'+ id,post )
  //   // }
  
  // update(post:Post){
  // return this.httpservice.put(this.URL+'/',JSON.stringify(post),);
  // }
  
  
  //   update2(id:number,post:Driver){
  //     return this.httpservice.put(this.URL +'/driver/'+ id,post )
  //     }
    
    
    
    
    
  //   errorHandler(error:any){
  //   let errormessage='';
  //   if(error.error instanceof ErrorEvent){
  //     errormessage = error.error.message;
    
  //   }
  //   else{
  //     errormessage = `Error Code:${error.status}\nMessage: ${error.message}`
  //   }
  //   return throwError(errormessage)
  //   }
  
  
  
  
  
  //   getTask(){
  //     const task = this.httpservice.get<Post[]>(this.URL)
  //     return task;
  
  
  
    
  // }
  
  // getTask2(){
  //   const task1 = this.httpservice.get<Driver[]>(this.URL+'/driver')
  //   return task1;
  
  // }



  private url = 'http://localhost:8080/api/posts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any>{
    return this.httpClient.get(this.url)  
  }

  create(post: Bookcus): Observable<any> {
    return this.httpClient.post(this.url, post) 
  }

  find(id: number): Observable<any> {
    return this.httpClient.get(this.url + '/' + id)
  }

  update(id: number, post: Bookcus): Observable<any> {
    return this.httpClient.put(this.url + '/posts', post)
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + '/' + id)
  }


}
