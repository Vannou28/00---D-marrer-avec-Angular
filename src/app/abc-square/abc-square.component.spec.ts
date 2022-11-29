import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcSquareComponent } from './abc-square.component';

describe('AbcSquareComponent', () => {
  let component: AbcSquareComponent;
  let fixture: ComponentFixture<AbcSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const title: string = "A B C"; 

});
