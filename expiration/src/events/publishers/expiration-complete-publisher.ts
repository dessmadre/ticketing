import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@jrdtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
