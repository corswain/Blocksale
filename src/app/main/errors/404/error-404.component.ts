import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'error-404',
  templateUrl: './error-404.component.html',
  styleUrls: ['./error-404.component.scss']
})
export class Error404Component {
  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   * @param {Location} _location
   */
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _location: Location
  ) {
    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        }
      }
    };
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Go back to previous page
   */
  goToPreviousPage(): void {
    this._location.back();
  }
}
