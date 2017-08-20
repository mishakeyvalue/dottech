import { Observable } from "rxjs/Observable";

import { IThought } from "../models/i.Thought";

export interface IThoughtBackofficeService {

    getAll(): Observable<IThought[]>;

    get(id: string): Observable<IThought>;

    delete(id: string): Observable<IThought[]>;

    update(thought: IThought): Observable<IThought>;

    add(thought: IThought): Observable<IThought>;
}
