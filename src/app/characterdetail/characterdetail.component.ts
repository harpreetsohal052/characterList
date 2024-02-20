import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characterdetail',
  templateUrl: './characterdetail.component.html',
  styleUrls: ['./characterdetail.component.scss']
})
export class CharacterdetailComponent {
  character: any;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {}

  ngOnInit(): void {
    const characterId = Number(this.route.snapshot.paramMap.get('id'));

    this.characterService.getCharacterById(characterId).subscribe(
      data => this.character = data,
      error => console.error(error)
    );
  }
}