import { Component } from '@angular/core';
import { environment } from '@env/environment';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    version: string;

    /**
     * Constructor
     */
    constructor() {
        // Set the release version number
        this.version = environment.version;
    }
}
