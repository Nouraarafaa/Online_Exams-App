import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { ExamSummaryComponent } from "./features/exam/components/exam-summary/exam-summary.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExamSummaryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  title = 'online_exams_app';

  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite(); // Only run in browser
    }
  }
}
