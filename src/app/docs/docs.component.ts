import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.scss'
})
export class DocsComponent {

}
