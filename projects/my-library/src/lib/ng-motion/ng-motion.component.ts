import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const cardAnimation = trigger('cardAnimation', [
  state('void', style({ 
    opacity: 0, 
    transform: '{{startTransform}}' 
  }), { params: { startTransform: '{{startTransform}}' } }),
  state('enter', style({ 
    opacity: 1, 
    transform: '{{endTransform}}' 
  }), { params: { endTransform: '{{endTransform}}' } }),
  state('leave', style({ 
    opacity: 0, 
    transform: '{{startTransform}}' 
  }), { params: { startTransform: '{{startTransform}}' } }),
  transition('void => enter', [
    animate('{{duration}} {{easing}}')
  ]),
  transition('enter => leave', [
    animate('{{duration}} {{easing}}')
  ])
]);

@Component({
  selector: 'ng-motion',
  templateUrl: './ng-motion.component.html',
  styleUrls: ['./ng-motion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [cardAnimation]
})
export class NgMotionComponent {
  @Input() duration: string = '500ms'; // Default animation duration
  @Input() easing: string = 'ease-out'; // Default easing function
  @Input() startTransform: string = 'translateX(-100%)'; // Default start position
  @Input() endTransform: string = 'translateX(0)'; // Default end position

  /**
   * Validate input properties for animation parameters.
   */
  ngOnChanges(): void {
    this.validateInputs();
  }

  private validateInputs(): void {
    if (!/^(\d+ms|\d+s)$/.test(this.duration)) {
      console.error('Invalid duration format. Use values like "500ms" or "2s".');
      this.duration = '500ms'; // Fallback to default
    }
    if (typeof this.startTransform !== 'string' || typeof this.endTransform !== 'string') {
      console.error('startTransform and endTransform should be valid CSS transform strings.');
      this.startTransform = 'translateX(-100%)';
      this.endTransform = 'translateX(0)';
    }
  }
}
