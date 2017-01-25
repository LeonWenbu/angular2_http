import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from './entity/book.entity';

@Component({
    selector: 'my-app',
    styles: [`.table {
        width: 100%;
        max-width: 100%;
        margin-bottom: 1rem;
        }


        .table th{
        padding: 0.75rem;
        vertical-align: top;
        text-align: left;
        border-top: 1px solid #eceeef;
        background-color: #CCCCCC;
        }
        .table td {
        padding: 0.75rem;
        vertical-align: top;
        text-align: left;
        border-top: 1px solid #eceeef;
        }

        .table-bordered {
        border: 1px solid #eceeef;
        }

        .table-bordered th,
        .table-bordered td {
        border: 1px solid #eceeef;
        }

}`],
    template: `<h1>My First Angular App</h1>
    <table class='table table-bordered'>
        <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Language</th>            
            <th>Binding</th>
            <th>PublicationStatus</th>
        </tr>
        <tr *ngFor="let item of _list">
            <td>{{ item.CategoryDescription }}</td>
            <td>{{ item.Title }}</td>
            <td>{{ item.LanguageDescription }}</td>
            <td>{{ item.BindingDescription }}</td>
            <td>{{ item.PublicationStatusDescription }}</td>
        </tr>

    </table>
    `
})
export class AppComponent implements  OnInit{

    private _list:  Array<Book>;
    constructor(private _service: BookService) {

	}

    ngOnInit(): void {
        this._service.getBookList()
        .subscribe((res: Array<Book>) => {
           this._list = res;
        });
    }

 }