import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    title = 'bestOfUs';
    id: any;
    orange: any;
    apple: any;
    grape: any;

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;

        localStorage.setItem('orange', '10.5');
        localStorage.setItem('apple', '8');
        localStorage.setItem('grape', '12.5');

        this.getValues();

        setInterval(() => {
            this.getValues();
        }, 1000);
    }

    focusOutFunction(val) {
        localStorage.setItem(val, this[val]);
    }

    getValues() {
        this.orange = localStorage.getItem('orange');
        this.apple = localStorage.getItem('apple');
        this.grape = localStorage.getItem('grape');
    }
}
