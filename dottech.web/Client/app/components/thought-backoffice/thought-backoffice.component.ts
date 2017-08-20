import { Component } from '@angular/core';

@Component({
    selector: 'my-thought-backoffice',
    templateUrl: './thought-backoffice.component.html'
})
export class ThoughtBackofficeComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
