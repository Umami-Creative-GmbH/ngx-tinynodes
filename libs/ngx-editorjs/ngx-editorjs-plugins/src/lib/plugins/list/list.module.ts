import { NgModule } from '@angular/core';
import { EDITOR_JS_TOOL_INJECTOR, PLUGIN_CONFIG, PluginTypes } from '../../types/plugins';

import List from '@editorjs/list';

/**
 * A module that provides the default EditorJS `<img>` block tool.
 * See [the GitHub repo](https://github.com/editor-js/image) for API details
 */
@NgModule({
  providers: [
    {
      provide: EDITOR_JS_TOOL_INJECTOR,
      useValue: List,
      multi: true
    },
    {
      provide: PLUGIN_CONFIG,
      useValue: {
        key: 'list',
        type: PluginTypes.Block,
        pluginName: 'EditorJS List'
      },
      multi: true
    }
  ]
})
export class PluginListModule {}
