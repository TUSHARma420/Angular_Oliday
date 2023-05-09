import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooknowComponent } from './booknow.component';

describe('BooknowComponent', () => {
  let component: BooknowComponent;
  let fixture: ComponentFixture<BooknowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooknowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
