/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { ThoughtBackofficeComponent } from './thought-backoffice.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

let fixture: ComponentFixture<ThoughtBackofficeComponent>;

describe('Thought backoffice component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [ThoughtBackofficeComponent] });
        fixture = TestBed.createComponent(ThoughtBackofficeComponent);
        fixture.detectChanges();
    });

    it('should contains create button', async(() => {
        const btns = fixture.nativeElement.querySelectorAll('.btn');
        const btnsContent = convertNodeListToArray(btns).map(e => e.textContent.toLowerCase());
        expect(btnsContent).toContain('create')
    }));

    it('should start with count 0, then increments by 1 when clicked', async(() => {
        const countElement = fixture.nativeElement.querySelector('strong');
        expect(countElement.textContent).toEqual('0');

        const incrementButton = fixture.nativeElement.querySelector('button');
        incrementButton.click();
        fixture.detectChanges();
        expect(countElement.textContent).toEqual('1');
    }));
});

function convertNodeListToArray(list: NodeList):any[] {
    return Array.from(list);
}
