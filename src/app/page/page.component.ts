import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from '../services/api.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  items: Observable<any[]>;

  constructor(
    private api: APIService
  ) {

  }

  ngOnInit(): void {
    this.items = this.api.GetItems();
  }

}
