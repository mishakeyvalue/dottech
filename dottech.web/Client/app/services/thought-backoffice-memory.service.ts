import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';
import { IThoughtBackofficeService } from "./i.thought-backoffice.service";
import { IThought } from "../models/i.Thought";

@Injectable()
export class ThoughtBackofficeMemoryService implements IThoughtBackofficeService {
    private thoughts: IThought[] = [];

    getAll(): Observable<IThought[]> {
        return Observable.of(this.thoughts);
    }
    get(id: string): Observable<IThought> {
        let thought = this.thoughts.find(t => t.id === id);
        return Observable.of(thought);
    }
    delete(id: string): Observable<IThought[]> {
        this.thoughts = this.thoughts.filter(t => t.id != id);
        return this.getAll();
    }
    update(thought: IThought): Observable<IThought> {
        throw new Error('Method not implemented.');
    }
    add(thought: IThought): Observable<IThought> {
        this.thoughts.push(thought);
        return Observable.of(thought);
    }


}
