import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogrosPage } from './logros.page';

describe('LogrosPage', () => {
  let component: LogrosPage;
  let fixture: ComponentFixture<LogrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
