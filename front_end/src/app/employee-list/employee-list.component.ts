import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public employees: Employee[];

  emp: Employee = new Employee();
  private URL = 'http://localhost:8080/api/employees';

  constructor(
    private employeeService: EmployeeService,
    private hardCoded: HardcodedAuthenticationService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.httpClient.get(this.URL).toPromise().then((temp: any) => {
        console.log(temp);
        this.employees = temp;
      });
  }

  // private getEmployees() {
  //   this.employeeService.getEmployeeList().subscribe(data => {
  //     this.employees = data;
  //   });
  // }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.getEmployees();
    });
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }

  // currentUser = this.hardCoded.user;
}

