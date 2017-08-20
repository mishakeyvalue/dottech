/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { ThoughtBackofficeComponent } from './thought-backoffice.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { N_OF_THOUGHTS_ID } from '../../shared/constants/ids';

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

    it('should increment number of created thoughts when one is created', async(() => {
        // arrange
        const initialNumberOfPosts: number = getNumberOfPosts(fixture);

        // act
        addNewThought(fixture);
        fixture.detectChanges();
        const resultNumberOfPosts: number = getNumberOfPosts(fixture);

        // assert
        expect(initialNumberOfPosts).toEqual(resultNumberOfPosts - 1);

    }));
});


function convertNodeListToArray(list: NodeList):any[] {
    return Array.from(list);
}

function getNumberOfPosts(fixture: ComponentFixture<ThoughtBackofficeComponent>): number {
    let container = fixture.nativeElement.querySelector('#' + N_OF_THOUGHTS_ID);
    let n = parseInt(container.textContent);
    return n;
}

function addNewThought(fixture: ComponentFixture<ThoughtBackofficeComponent>): void {

}
