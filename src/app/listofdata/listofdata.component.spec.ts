import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofdataComponent } from './listofdata.component';

describe('ListofdataComponent', () => {
  let component: ListofdataComponent;
  let fixture: ComponentFixture<ListofdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
