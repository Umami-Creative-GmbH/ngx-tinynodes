# Ngx-Tinynodes for Ivy

This repository is a fork of @tinynodes/ngx-editorjs with a collection of Angular components.
This is upgraded to use with ivy renderer. Tested in Angular 16.

## Libraries

### `ngx-editorjs-ivy`

This library provides Angular support for [EditorJS](https://editorjs.io). Inside the module you will find:

- `NgxEditorJSDirective` - An Angular Directive used to attach an `EditorJS` instance to any block DOM element
- `NgxEditorJSComponent` - An that is Reactive Forms compatible
- `NgxEditorJSMaterialFieldComponent` An Form Field component that provides all the required properties and life-cycle events required.
- `NgxEditorJSService` - A Service that can be injected into an application to provide a interface to interact with `EditorJS` instances. Underneath are the private `NgxEditorJSPluginService` and `NgxEditorJSInstanceService` services. These are private but can be imported via `ɵNgxEditorJSPluginService` and `ɵNgxEditorJSInstanceService` from the library if you want to use them.

Within these components you will be able to access the underlying `EditorJS` instance, for use see the [EditorJS API Docs](https://editorjs.io/api)

Below are the dependencies to use the features.

#### `@umami-creative/ngx-editorjs-ivy`

This project provides a set of features for using [EditorJS](https://editorjs.io) within Angular 7+

#### `@umami-creative/ngx-editorjs-ivy-plugins`

This project provides the plugin service module that exports handles
 plugins for `@umami-creative/ngx-editorjs-ivy`. The module also ships a set of default
 plugins and documentation on how to add new ones easily.

### Development Information

This repository is run by [Umami Creative GmbH](https://umami-creative.de)
