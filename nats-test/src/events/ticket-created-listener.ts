import { Listener } from '../../../common/src/events/base-listener';
import { Message } from 'node-nats-streaming';
import { TicketCreatedEvent, Subjects } from '@jrdtickets/common';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = 'payment-service';

  onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    console.log('Event data!', data);

    console.log(data.id);
    console.log(data.price);
    console.log(data.title);
    console.log(data.userId);

    msg.ack();
  }
}
