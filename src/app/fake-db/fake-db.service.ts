import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ApiFakeDb } from 'app/fake-db/api';
import { ChatFakeDb } from 'app/fake-db/chat';
import { FaqFakeDb } from 'app/fake-db/faq';

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      faq: FaqFakeDb.data,
      'api-content': ApiFakeDb.apiContent,
      'chat-contacts': ChatFakeDb.contacts,
      'chat-chats': ChatFakeDb.chats,
      'chat-user': ChatFakeDb.user
    };
  }
}
