import { TestBed } from '@angular/core/testing';
import { NgxEditorJSModule } from './ngx-editorjs.module';
import { FOR_ROOT_OPTIONS_TOKEN } from './types/config';
import { NgxEditorjsPluginsModule } from '@tinynodes/ngx-editorjs-plugins';

describe('NgxEditorJSModule', () => {
  let module;

  it('should create from a module import', () => {
    TestBed.configureTestingModule({
    imports: [NgxEditorJSModule, NgxEditorjsPluginsModule],
    providers: [
        {
            provide: FOR_ROOT_OPTIONS_TOKEN,
            value: {}
        }
    ],
    teardown: { destroyAfterEach: false }
}).compileComponents();

    module = TestBed.get(NgxEditorJSModule);

    expect(NgxEditorJSModule).toBeDefined();
  });

  it('should create from a forRoot import', () => {
    TestBed.configureTestingModule({
    imports: [NgxEditorJSModule.forRoot(), NgxEditorjsPluginsModule],
    teardown: { destroyAfterEach: false }
}).compileComponents();

    expect(NgxEditorJSModule).toBeDefined();
  });
});
