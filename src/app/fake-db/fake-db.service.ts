import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ApiFakeDb } from 'app/fake-db/api';
import { FaqFakeDb } from 'app/fake-db/faq';

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      faq: FaqFakeDb.data,
      'api-content': ApiFakeDb.apiContent
    };
  }
}
