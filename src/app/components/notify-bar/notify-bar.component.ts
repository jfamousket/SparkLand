import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';

@Component({
  selector: 'notify-bar',
  templateUrl: './notify-bar.component.html',
  styleUrls: ['./notify-bar.component.scss']
})
export class NotifyBarComponent implements OnInit, OnChanges {
  @Input('notify') notify = false;

  constructor(private element: ElementRef) {

   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.notify.isFirstChange()) return null
    window.addEventListener('click', this.showNotify.bind(this))
    window.setTimeout(() => {
      this.notify = false
      window.removeEventListener('click', this.showNotify.bind(this))
    }, 5000);
    
  }

  private showNotify(e: Event) {
    if(!this.element.nativeElement.contains(e.target) || 
    (e.target instanceof HTMLElement && e.target.classList.contains('dark-bg'))) {
      this.notify = false;
      window.removeEventListener('click', this.showNotify)
    }
  }


}
