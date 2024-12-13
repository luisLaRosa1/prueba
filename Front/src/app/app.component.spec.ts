import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { MainLayoutModule } from './main/layouts/main-layout/main-layout.module';
import { BlankLayoutModule } from './main/layouts/blank-layout/blank-layout.module';
import { AuthService } from './main/providers/services/auth/auth.service';
import { TokenInterceptor } from './main/providers/interceptor/token.interceptor';
import { MockOAuthService } from 'src/testing/oatuh/mock-oauth.service';
import { LocalStorageService, SessionStorageService } from 'src/core/shared/common/services/storage';
import { ApiModule } from 'src/core/shared/common/services/api/api.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MainLayoutModule,
        BlankLayoutModule,
        ApiModule,
        OAuthModule.forRoot({
          resourceServer: {
            allowedUrls: ['http://localhost:5001/pages/'],
            sendAccessToken: true,
          },
        }),
      ],
      providers: [
        LocalStorageService,
        SessionStorageService,
        AuthService,
        { provide: OAuthService, useClass: MockOAuthService },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('front');
  });
});
