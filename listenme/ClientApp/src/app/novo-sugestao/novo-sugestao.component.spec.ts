import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoSugestaoComponent } from './novo-sugestao.component';

describe('NovoSugestaoComponent', () => {
  let component: NovoSugestaoComponent;
  let fixture: ComponentFixture<NovoSugestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoSugestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoSugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
