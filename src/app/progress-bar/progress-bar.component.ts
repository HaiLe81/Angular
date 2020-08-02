import { Component, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "progress-bar",
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{ backgroundColor: progressColor, width: progress + '%' }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }
      .progress-bar-container {
        width: 100%;
      }
    `
  ]
})
export class ProgressBarContainer implements OnInit, OnChanges {
  @Input() set progress(val: number){
    console.log('set progress', val)
    this._progress = val
  };
  private _progress = 55;
  get progress(){
    return this._progress;
  }
  @Input() backgroundColor = "#ccc";
  @Input() progressColor = "tomato";

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("change", {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
  }
}
