import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, CardComponent, FooterComponent]
})
export class HomeComponent {
  constructor(private router: Router) {}

  features = [
    {
      title: 'All CRUD Operations',
      description: 'Leverage our API to seamlessly perform all CRUD (Create, Read, Update, and Delete) operations without any limitations.',
      logo: './assets/crud.svg'
    },
    {
      title: 'Pagination',
      description: 'Supports pagination through the ‘limit’ and ‘offset’ methods, allowing for features like infinite scroll.',
      logo: './assets/pagination.svg'
    },
    {
      title: 'Filters',
      description: 'Filter products by title, artist, and album enabling the creation of sophisticated UIs based on these criteria.',
      logo: './assets/filter.svg'
    },
    {
      title: 'Rest API',
      description: 'The API employs the REST API architecture, the most widely adopted structure in the industry.',
      logo: './assets/rest.svg'
    },
    {
      title: 'GraphQL',
      description: 'The API supports GraphQL, a query language for APIs, and offers a runtime to execute those queries using your existing data.',
      logo: './assets/graphql.svg'
    },
    {
      title: 'Postman',
      description: 'We provide files for Postman, allowing you to easily test each endpoint.',
      logo: './assets/postman.svg'
    }
  ];

  goToDocs() {
    this.router.navigate(['/docs']);
  }
}
