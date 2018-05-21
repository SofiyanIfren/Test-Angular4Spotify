import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistInformationsComponent } from './artist-informations.component';

describe('ArtistInformationsComponent', () => {
  let component: ArtistInformationsComponent;
  let fixture: ComponentFixture<ArtistInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
