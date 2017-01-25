import { Injectable, Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';




@Injectable()
export class Transporter  {

	constructor(private _http: Http) {
	}

	getData(): Observable<any> {
		
		let url: string = "http://vmw2012dsdev2.gencos.com/Library/api/publications";
				
        console.log(`about to call url: ${url}`);
        return this._http
            .get(url)
            .map((response: Response) => {
                let result: any = response.json();
                return result;
            })
            .catch(this._handleError);		
	}

    private _handleError (error: any): any {
        console.log(`handle error.`);
    }

}