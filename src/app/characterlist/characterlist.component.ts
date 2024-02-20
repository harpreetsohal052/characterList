import { Component } from '@angular/core';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.scss']
})
export class CharacterlistComponent {
  characters: any[] = [];
  currentPage: number = 1;
  totalPages!: number;

  constructor(private characterService: CharacterService, private router: Router) {}

  
  ngOnInit(): void {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number): void {
    this.characterService.getCharactersPage(page).subscribe(
      data => {
        this.characters = data.results;
        this.totalPages = data.info.pages;
        this.currentPage = page;
      },
      error => console.error(error)
    );
  }

  goToDetails(id: number): void {
    this.router.navigate(['/character', id]);
  }

}
