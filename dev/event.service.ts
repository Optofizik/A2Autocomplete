import {Injectable} from '@angular/core'


interface IEventService {
    subscribeToEvent(object: any, eventName: string, callbackFunc: (value: any, parentObject: any) => void);
    raiseEvent(ender: any, eventName: string, valueToBroadcast:any);
    unsubscribeFromEvent(object: any, eventName: string);
}

class Event {
    public EventName: string;
    public Subsribers: SenderCallback[] = [];
}

class SenderCallback {
    public Sender: any;
    public Callback: (value: string, object: any) => void
}

@Injectable()
export class EventService implements IEventService{

    private eventArray: Event[] = [];

    subscribeToEvent(object:any, eventName:string, callbackFunc: (value: any, object: any) => void) {

        let event: Event = this.eventArray.find((ev, i, arr) => {
            return ev.EventName === eventName;
        });

        if(event == null)
        {
            event = new Event();
            event.EventName = eventName;
            let senderCallback: SenderCallback = new SenderCallback();
            senderCallback.Sender = object;
            senderCallback.Callback = callbackFunc;
            event.Subsribers.push(senderCallback);
            this.eventArray.push(event);
        }
        else
        {
            let isExists: boolean = event.Subsribers.filter((listener, i, arr) => {
                return listener.Sender === object;
            }).length > 0;

            if(!isExists)
            {
                let senderCallback: SenderCallback = new SenderCallback();
                senderCallback.Sender = object;
                senderCallback.Callback = callbackFunc;
                event.Subsribers.push(senderCallback);
            }
        }
    }

    raiseEvent(sender:any, eventName: string, valueToBroadcast: any) {
        let event = this.eventArray.find((ev, i, arr) => {
            return ev.EventName === eventName;
        });

        if(event != null)
        {
            event.Subsribers.forEach((ev, i, arr) => {
                if(ev.Sender != sender) {
                    ev.Callback(valueToBroadcast, ev.Sender);
                }
            });
        }
    }

    unsubscribeFromEvent(object:any, eventName:string) {
        let event: Event = this.eventArray.find((ev, i, arr) => {
            return ev.EventName === eventName;
        });

        let num: number = 0;

        let subscriber: SenderCallback = event.Subsribers.find((s, i ,arr) => {
            if(s.Sender === object)
            {
                num = i;
                return true;
            }
            return false;
        });

        event.Subsribers.splice(num, 1);
    }
}