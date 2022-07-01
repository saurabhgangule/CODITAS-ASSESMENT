import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-level-videos',
  templateUrl: './level-videos.component.html',
  styleUrls: ['./level-videos.component.css']
})
export class LevelVideosComponent implements OnInit {
  @Input() videoId!: string;
  @Input() levelName!: string;
  @Input() topic!: number;
  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}`);
  }

}
