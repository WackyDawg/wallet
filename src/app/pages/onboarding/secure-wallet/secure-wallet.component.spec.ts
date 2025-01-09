import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureWalletComponent } from './secure-wallet.component';

describe('SecureWalletComponent', () => {
  let component: SecureWalletComponent;
  let fixture: ComponentFixture<SecureWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecureWalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecureWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
