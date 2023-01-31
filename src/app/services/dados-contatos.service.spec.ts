import { TestBed } from '@angular/core/testing';

import { DadosContatosService } from './dados-contatos.service';

describe('DadosContatosService', () => {
  let service: DadosContatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosContatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
