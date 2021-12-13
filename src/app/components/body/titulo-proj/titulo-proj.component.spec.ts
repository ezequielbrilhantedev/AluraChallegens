import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloProjComponent } from './titulo-proj.component';

describe('TituloProjComponent', () => {
  let component: TituloProjComponent;
  let fixture: ComponentFixture<TituloProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloProjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
