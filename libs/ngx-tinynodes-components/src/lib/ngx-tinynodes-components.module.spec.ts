import { async, TestBed } from '@angular/core/testing';
import { NgxTinynodesComponentsModule } from './ngx-tinynodes-components.module';

describe('NgxTinynodesComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [NgxTinynodesComponentsModule],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  }));

  it('should create', () => {
    expect(NgxTinynodesComponentsModule).toBeDefined();
  });
});
