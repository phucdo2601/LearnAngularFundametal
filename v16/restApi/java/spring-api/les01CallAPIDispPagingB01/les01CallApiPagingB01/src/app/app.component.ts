import { BehaviorSubject, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from './models/api-response';
import { UserResponeModel } from './models/user-response';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from './service/user.service';
import { map, startWith, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'les01CallApiPagingB01';

  listUserState$: Observable<{ appState: string, appData?: ApiResponse<UserResponeModel>, error?: HttpErrorResponse }>;
  responseSubject = new BehaviorSubject<ApiResponse<UserResponeModel>>(null);
  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.listUserState$ = this.userService.listUses$().pipe(
      map((response: ApiResponse<UserResponeModel>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        console.log(response);
        return (
          {
            appState: "APP_LOADED", appData: response
          }
        )
      }
      ),
      startWith({
        appState: "APP_LOADING"
      }),
      catchError((error: HttpErrorResponse) => of({
        appState: "APP_ERROR", error
      }))
    )
  }

  goToPage(name?: string, pageNumber: number = 0): void {
    this.listUserState$ = this.userService.listUses$(name, pageNumber).pipe(
      map((response: ApiResponse<UserResponeModel>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(pageNumber);
        console.log(response);
        return (
          {
            appState: "APP_LOADED", appData: response
          }
        )
      }
      ),
      startWith({
        appState: "APP_LOADED", appData: this.responseSubject.value
      }),
      catchError((error: HttpErrorResponse) => of({
        appState: "APP_ERROR", error
      }))
    )
  }

  goToNextOrPreviousPage(direction?: string, name?: string): void {
    this.goToPage(name, direction === 'forward' ? this.currentPageSubject.value + 1 : this.currentPageSubject.value - 1);
  }
}
