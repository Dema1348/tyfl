import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'page-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class RegisterPage implements OnInit {
	registerForm: FormGroup;

	constructor(public formBuilder: FormBuilder) {
		this.registerForm = this.formBuilder.group({
			name: ['', Validators.compose([Validators.required])],
            run: ['', Validators.compose([Validators.required])],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            pass: ['', Validators.compose([Validators.required])],
            pass2: ['', Validators.compose([Validators.required])],

		});
	}

	ngOnInit() {}
}
