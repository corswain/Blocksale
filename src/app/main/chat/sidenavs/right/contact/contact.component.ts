import { ChatService } from 'main/chat/chat.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'chat-contact-sidenav',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ChatContactSidenavComponent implements OnInit, OnDestroy {
  contact: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {ChatService} _chatService
   */
  constructor(private _chatService: ChatService) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this._chatService.onContactSelected
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((contact) => {
        this.contact = contact;
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
