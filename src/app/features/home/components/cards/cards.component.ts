import { Component, OnInit, inject } from '@angular/core';
import { ISubject } from '../../../interfaces/cards-subjects';
import { SubjectsService } from '../../services/subjects.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {

  Subjects: ISubject[] = [];
  private _SubjectsService = inject(SubjectsService);

  ngOnInit(): void {
    this.getSubjectsData();
  }

  getSubjectsData(): void {
    this._SubjectsService.getAllSubjects().subscribe({
      next: (res) => {
        console.log(res);
        this.Subjects = (res as any).subjects;

      },
      error: (err) => {
        console.error('Error fetching subjects:', err);
      }
    });
  }
}
