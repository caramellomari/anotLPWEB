import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaheroisComponent } from './listaherois.component';

describe('ListaheroisComponent', () => {
  let component: ListaheroisComponent;
  let fixture: ComponentFixture<ListaheroisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaheroisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaheroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
