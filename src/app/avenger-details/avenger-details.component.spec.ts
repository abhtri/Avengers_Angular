import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengerDetailsComponent } from './avenger-details.component';

describe('AvengerDetailsComponent', () => {
  let component: AvengerDetailsComponent;
  let fixture: ComponentFixture<AvengerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvengerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
