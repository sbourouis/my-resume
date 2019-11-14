import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  isXSLayout$ = this.breakpointObserver.observe([
    Breakpoints.XSmall
  ]).pipe(
    map(res => res.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
