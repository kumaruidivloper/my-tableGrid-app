import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridupdateComponent } from './gridupdate.component';

describe('GridupdateComponent', () => {
  let component: GridupdateComponent;
  let fixture: ComponentFixture<GridupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
