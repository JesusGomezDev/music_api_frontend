import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

type Section = 'about' | 'rest' | 'graphql' | 'resources';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Output() contentSelected = new EventEmitter<string>();

  sections: Record<Section, boolean> = {
    about: false,
    rest: false,
    graphql: false,
    resources: false
  };

  toggleSection(section: Section) {
    this.sections[section] = !this.sections[section];
  }

  selectContent(content: string) {
    this.contentSelected.emit(content);
  }
}
