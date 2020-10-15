import { TestBed } from '@angular/core/testing';
import { MisEventosService } from './misEventos.service';

describe('EventosService', () => {
  let service: MisEventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisEventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
