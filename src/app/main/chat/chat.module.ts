import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatRadioModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';

import { ChatStartComponent } from './chat-start/chat-start.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatComponent } from './chat.component';
import { ChatService } from './chat.service';
import { ChatChatsSidenavComponent } from './sidenavs/left/chats/chats.component';
import { ChatLeftSidenavComponent } from './sidenavs/left/left.component';
import { ChatUserSidenavComponent } from './sidenavs/left/user/user.component';
import { ChatContactSidenavComponent } from './sidenavs/right/contact/contact.component';
import { ChatRightSidenavComponent } from './sidenavs/right/right.component';

const routes: Routes = [
  {
    path: '**',
    component: ChatComponent,
    children: [],
    resolve: {
      chat: ChatService
    }
  }
];

@NgModule({
  declarations: [
    ChatComponent,
    ChatViewComponent,
    ChatStartComponent,
    ChatChatsSidenavComponent,
    ChatUserSidenavComponent,
    ChatLeftSidenavComponent,
    ChatRightSidenavComponent,
    ChatContactSidenavComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,

    FuseSharedModule
  ],
  providers: [ChatService]
})
export class ChatModule {}
