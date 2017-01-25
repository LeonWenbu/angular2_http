import { Injectable, Component } from '@angular/core';
import { Transporter } from '../transporters/transporter';
import { Observable } from 'rxjs/Observable';
import { Book } from '../entity/book.entity';


@Injectable()
export class BookService {
	constructor(protected _transporter: Transporter) {}

	getBookList(): Observable<Array<Book>> {
		let rs: Array<Book>;
		return this._transporter
			.getData()
			;
	}

}
