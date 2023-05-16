import { TestBed } from '@angular/core/testing';

import { PbTodoService } from './pb-todo.service';

describe('PbTodoService', () => {
  let service: PbTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PbTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
