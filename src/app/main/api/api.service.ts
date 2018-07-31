import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ApiService implements Resolve<any> {
  onApiChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onApiChanged = new BehaviorSubject({});
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([this.getApiContent()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get course
   *
   * @param courseId
   * @param courseSlug
   * @returns {Promise<any>}
   */
  getApiContent(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/api-content').subscribe((response: any) => {
        this.onApiChanged.next(response);
        resolve(response);
      }, reject);
    });
  }
}
