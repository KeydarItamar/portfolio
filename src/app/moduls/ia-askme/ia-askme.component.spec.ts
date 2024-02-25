import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaAskmeComponent } from './ia-askme.component';

describe('IaAskmeComponent', () => {
  let component: IaAskmeComponent;
  let fixture: ComponentFixture<IaAskmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaAskmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaAskmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
