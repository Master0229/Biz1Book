import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base_url1 = "https://localhost:44383/api/";
  base_url = "https://biz1pos.azurewebsites.net/api/";

  constructor(private http: HttpClient) { }

  getissues() {
    return this.http.get(this.base_url1 + "Issue/GetIssues");
  }
}
