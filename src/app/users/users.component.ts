import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users$: Object;
    public uploader: FileUploader = new FileUploader({ url: URL });
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;

    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.getUsers().subscribe(
            data => this.users$ = data
        )
    }


    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }
}
