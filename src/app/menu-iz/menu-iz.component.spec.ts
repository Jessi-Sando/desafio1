import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIzComponent } from './menu-iz.component';

describe('MenuIzComponent', () => {
  let component: MenuIzComponent;
  let fixture: ComponentFixture<MenuIzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuIzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
