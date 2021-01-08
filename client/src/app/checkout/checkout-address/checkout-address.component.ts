import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AccountService} from '../../account/account.service';
import {ToastrService} from 'ngx-toastr';
import {IAddress} from '../../shared/models/address';

@Component({
	selector: 'app-checkout-address',
	templateUrl: './checkout-address.component.html',
	styleUrls: ['./checkout-address.component.css']
})
export class CheckoutAddressComponent implements OnInit {
    @Input() checkoutForm: FormGroup;

	constructor(private accountService: AccountService,
	            private toastr: ToastrService) {
	}

	ngOnInit() {
	}

	saveUserAddress() {
		this.accountService.updateUserAddress(this.checkoutForm.get('addressForm').value).subscribe((addres: IAddress) => {
			this.toastr.success('Address Saved');
			this.checkoutForm.get('addressForm').reset(addres);
		}, error => {
			console.log(error);
		})
	}

}
