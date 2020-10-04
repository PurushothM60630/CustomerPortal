import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditmemoComponent } from './creditmemo.component';

describe('CreditmemoComponent', () => {
  let component: CreditmemoComponent;
  let fixture: ComponentFixture<CreditmemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditmemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
