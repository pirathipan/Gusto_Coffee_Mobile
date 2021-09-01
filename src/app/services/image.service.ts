import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  })
};


@Injectable({
  providedIn: 'root'
})

export class ImageService {
  private api_url = 'https://localhost:8000/api/media_objects';

  constructor(private http: HttpClient) { }

  // Get all images
  getAllMediaObject() {
    return this.http.get(this.api_url);
  }

  // get single image by id
  getSingleImage(id: number) {
    return this.http.get(this.api_url + '/' + id);
  }

  // telecharger une image
  uploadFile(file):Observable<any> {
    const formData = new FormData();

    formData.append('file', file);

    return this.http.post(this.api_url , formData);
  }
  
}
