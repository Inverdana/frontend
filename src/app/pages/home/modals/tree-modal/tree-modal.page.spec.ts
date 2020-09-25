import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreeModalPage } from './tree-modal.page';

describe('TreeModalPage', () => {
  let component: TreeModalPage;
  let fixture: ComponentFixture<TreeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
