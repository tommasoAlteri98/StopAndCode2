import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneComponent } from './gestione.component';

describe('GestioneComponent', () => {
  let component: GestioneComponent;
  let fixture: ComponentFixture<GestioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
