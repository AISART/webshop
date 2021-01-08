import {Component, Input, OnInit} from '@angular/core';
import {BasketService} from '../../basket/basket.service';
import {Observable} from 'rxjs';
import {IBasket} from '../../shared/models/basket';
import {CdkStepper} from '@angular/cdk/stepper';

@Component({
	selector: 'app-checkout-review',
	templateUrl: './checkout-review.component.html',
	styleUrls: ['./checkout-review.component.css']
})
export class CheckoutReviewComponent implements OnInit {
	@Input() appStepper: CdkStepper;

	basket$: Observable<IBasket>;

	constructor(private basketService: BasketService) {
	}

	ngOnInit() {
		this.basket$ = this.basketService.basket$;
	}

	createPaymentIntent() {
		return this.basketService.createPaymentIntent().subscribe((response: any) => {
			this.appStepper.next();
		}, error => {
			console.log(error);
		})
	}

}
