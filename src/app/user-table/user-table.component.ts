import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['name','email', 'phone', 'gender'];
  dataSource: any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(){
    this.http.get<any>('https://randomuser.me/api/?results=10').subscribe(response => {
      this.dataSource = response.results.map((user:any) => {
        return{
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          phone: user.phone,
          gender: user.gender
        };
      });
    });
  }

  logout(){
    this.authService.logout();
  }
}
