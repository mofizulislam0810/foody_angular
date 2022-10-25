import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetestblogsComponent } from './letestblogs.component';

describe('LetestblogsComponent', () => {
  let component: LetestblogsComponent;
  let fixture: ComponentFixture<LetestblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetestblogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetestblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
