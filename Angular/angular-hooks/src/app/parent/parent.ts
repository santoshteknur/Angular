import { Component,ChangeDetectorRef } from '@angular/core';
import { Child } from "../child/child";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [Child, CommonModule],
  templateUrl: './parent.html',
  styleUrls: ['./parent.scss']
})
export class Parent {
  isChildVisible = true;
  inputData = 'Initial data';
  lifecycleLogs: string[] = [];
  constructor(private cdr: ChangeDetectorRef) {}
  toggleChild() {
    this.isChildVisible = !this.isChildVisible;
    this.lifecycleLogs.push(
      this.isChildVisible
        ? 'Parent: Child component mounted'
        : 'Parent: Child component destroyed'
    );
  }

  changeData() {
    this.inputData = 'Updated at ' + new Date().toLocaleTimeString();
    this.lifecycleLogs.push('Parent: Input data changed');
  }

  onLifecycleLog(log: string) {
    this.lifecycleLogs.push(log);
    if (this.lifecycleLogs.length > 50) {
      this.lifecycleLogs.shift();
    }
  }

  clearLogs() {
    this.lifecycleLogs = [];
  }
}


