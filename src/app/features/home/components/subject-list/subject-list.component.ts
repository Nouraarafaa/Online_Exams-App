import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../../services/subjects.service';
import { IExam } from '../../../interfaces/exams';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  
  private readonly _activatedRoute = inject(ActivatedRoute); 
  private readonly _subjectsService = inject(SubjectsService); 

  Exams: IExam[] = [];

  ngOnInit(): void {
    this._activatedRoute.paramMap.pipe(
      switchMap(params => {
        const _id = params.get('_id');
        if (!_id || _id.length !== 24) {
          console.error('Invalid subject id:', _id);
          return EMPTY; // skip API call if id invalid
        }
        return this._subjectsService.GetSubjectList(_id);
      })
    )
    .subscribe({
      next: (res) => {
        this.Exams = res.exams; 
      },
      error: (err) => {
        console.error('Error fetching exams:', err);
      }
    });
  }
}
