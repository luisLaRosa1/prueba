import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ApiModule } from 'src/core/shared/common/services/api/api.module';
import { LocalStorageService } from 'src/core/shared/common/services/storage';
import { BreadcrumbsModule } from 'src/core/ui/components/breadcrumbs/breadcrumbs.module';
import { HeaderBottomModule } from 'src/core/ui/components/header-bottom/header-bottom.module';
import { HeaderTopModule } from 'src/core/ui/components/header-top/header-top.module';
import { TitleBarModule } from 'src/core/ui/components/title-bar/title-bar.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        CommonModule,
        RouterModule.forRoot([]),
        ApiModule,
        FormsModule,
        HeaderTopModule,
        HeaderBottomModule,
        BreadcrumbsModule,
        TitleBarModule,
        OAuthModule.forRoot(),
      ],
      providers: [LocalStorageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
