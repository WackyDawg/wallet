import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermAcceptComponent } from './term-accept.component';

describe('TermAcceptComponent', () => {
  let component: TermAcceptComponent;
  let fixture: ComponentFixture<TermAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermAcceptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
