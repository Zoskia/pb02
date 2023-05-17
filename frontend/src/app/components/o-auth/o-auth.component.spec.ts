import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OAuthComponent } from './o-auth.component';

describe('OAuthComponent', () => {
  let component: OAuthComponent;
  let fixture: ComponentFixture<OAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OAuthComponent]
    });
    fixture = TestBed.createComponent(OAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
