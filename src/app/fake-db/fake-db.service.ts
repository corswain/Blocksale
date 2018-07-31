import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FaqFakeDb } from 'app/fake-db/faq';

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // FAQ
      faq: FaqFakeDb.data
    };
  }
}
