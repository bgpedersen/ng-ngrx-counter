import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { increment } from './actions/counter.actions';
import { AppComponent } from './app.component';
import { AppState, reducers } from './reducers';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(reducers)],
      declarations: [AppComponent],
    }).compileComponents();

    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should dispatch an action to load data when created', () => {
    const action = increment();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should display counter value', () => {
    const span = fixture.debugElement.nativeElement.querySelector('span');
    expect(span.textContent).toEqual('2');
  });
});
