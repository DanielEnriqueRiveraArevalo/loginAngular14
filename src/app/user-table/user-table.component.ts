import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['name','email', 'phone', 'gender'];
  dataSource = new MatTableDataSource<any>([]);
  pageSize: number = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(){
    this.http.get<any>('https://randomuser.me/api/?results=200').subscribe(response => {
      const users = response.results.map((user:any) => {
        return{
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          phone: user.phone,
          gender: user.gender
        };
      });
      this.dataSource.data = users;
      this.dataSource.paginator = this.paginator;
    });
  }

  logout(){
    this.authService.logout();
  }
}
