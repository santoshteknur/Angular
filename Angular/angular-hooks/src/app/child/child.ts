import {
  Component, Input, OnInit, OnChanges, SimpleChanges,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.scss'
})
export class Child implements
  OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() inputData!: string;
  @Output() lifecycleLog = new EventEmitter<string>();

  // Helper to emit and log lifecycle events
  private log(hook: string, data?: any) {
    const msg = `Child: ${hook}` + (data ? ` | inputData: ${this.inputData}` : '');
    this.lifecycleLog.emit(msg);
    // eslint-disable-next-line no-console
    console.log(msg, data || '');
  }

  constructor() {
    this.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges', changes);
  }
  ngOnInit(): void {
    this.log('ngOnInit');
  }
  ngDoCheck(): void {
    this.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }
}
