import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { p_informationModel } from '../pages/menu/productInformation';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserOrderServisesService {

  constructor(private http: HttpClient, private  stroragUser:StorageService) {}

  private url="http://localhost:8080/api/";
  // private url1="http://localhost:8080/api/book/";


  public saveProduct(val:p_informationModel){
    const username:any = this.stroragUser.getUser().userName;
    return this.http.post(this.url+"book"+"?userName="+username,val, httpOptions);
   }

  //  public getSingleQuiz(value:number){
  //   return this.http.get(this.url1+value);
  //  }


   delTracking(val:p_informationModel){
    return this.http.delete(this.url+ val.id, httpOptions)
   }

  //  update(val:p_informationModel){
  //   const username:any = this.stroragUser.getUser().userName;
  //   return this.http.put(this.url+"Update"+"?userName="+username , val, httpOptions);
  //  }


   update(val:p_informationModel){
    // const username:any = this.stroragUser.getUser().userName;
    return this.http.put(this.url, val, httpOptions);
   }




 
    getOrder(orderStatus: any){
      if(orderStatus===undefined || orderStatus===null ){
        return this.http.get(this.url + 'book');
      }
      else{
        return this.http.get(this.url + 'book?orderStatus='+ orderStatus);
      }
 }

 getOrders(userName: any){
  if(userName===undefined || userName===null ){
    return this.http.get(this.url + 'book');
  }
  else{
    return this.http.get(this.url + 'book?userName='+ userName);
  }
  // if(userName===undefined || userName===null ){
    
  // }
  // else{
  //   return this.http.get(this.url + 'getCourierList?userName='+ userName);
  // }
}


getAll(){
return this.http.get<p_informationModel[]>(this.url+'book1')
}


getTracking(val:p_informationModel){
  this.http.get(this.url+"pdf?id="+ val.id,{ responseType: 'blob' }).subscribe(response =>{
    const file = new Blob([response], { type: 'application/pdf' });

    const downloadLink = document.createElement('a');
    const url = window.URL.createObjectURL(file);
    downloadLink.href = url;
    downloadLink.download = 'report.pdf';
    window.open(url)

  // // Append the download link to the DOM and trigger the download
  // document.body.appendChild(downloadLink);
  // downloadLink.click();

  // // Clean up resources
  // window.URL.revokeObjectURL(url);
  // document.body.removeChild(downloadLink);

  })

 }


}
