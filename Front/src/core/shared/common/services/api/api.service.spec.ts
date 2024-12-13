import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiModule } from './api.module';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpClient: jasmine.SpyObj<HttpClient>;
  const mockSuccess = { success: true };
  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete', 'request']);
    TestBed.configureTestingModule({
      imports: [ApiModule, HttpClientModule],
      providers: [{ provide: HttpClient, useValue: httpClient }],
    });

    service = TestBed.inject(ApiService);
  });

  it('should by created', () => {
    expect(service).toBeTruthy();
  });

  it('#Get should call without options', (done: DoneFn) => {
    httpClient.get.and.returnValue(of(mockSuccess));
    service.get('/api/v1/testget').subscribe((result) => {
      expect(result).toEqual(mockSuccess);
      done();
    });
  });

  it('#Get should call with options', (done: DoneFn) => {
    httpClient.get.and.returnValue(of(mockSuccess));
    service.get('/api/v1/testget/{id}', { params: { id: 1, qp: 2 } }).subscribe((result) => {
      expect(result).toEqual(mockSuccess);
      done();
    });
  });

  it('#Post should call without options', (done: DoneFn) => {
    httpClient.post.and.returnValue(of(mockSuccess));
    service.post('/api/v1/testget', {}).subscribe((result) => {
      expect(result).toEqual(mockSuccess);
      done();
    });
  });

  it('#Post should call with options', (done: DoneFn) => {
    httpClient.post.and.returnValue(of(mockSuccess));
    service.post('/api/v1/testget', {}, { params: { qp: 1 } }).subscribe((result) => {
      expect(result).toEqual(mockSuccess);
      done();
    });
  });

  it('#Put should call', (done: DoneFn) => {
    httpClient.put.and.returnValue(of(mockSuccess));
    service.put('/api/v1/testget/{id}', {}, { params: { id: 1 } }).subscribe((result) => {
      expect(result).toEqual(mockSuccess);
      done();
    });
  });

  it('#Delete should call without body', (done: DoneFn) => {
    httpClient.delete.and.returnValue(of(mockSuccess));
    service.delete('/api/v1/testget/{id}', null, { params: { id: 1 } }).subscribe((result) => {
      expect(result).toEqual(mockSuccess);
      done();
    });
  });

  it('#Delete should call with body', (done: DoneFn) => {
    httpClient.request.and.returnValue(of(mockSuccess));
    service.delete('/api/v1/testget/{id}', { message: 'body' }, { params: { id: 1 } }).subscribe((result) => {
      expect(result).toEqual(mockSuccess);
      done();
    });
  });
});
