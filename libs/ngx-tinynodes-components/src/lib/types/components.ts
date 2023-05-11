import { ControlValueAccessor } from '@angular/forms';
import { AfterContentInit, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { MatLegacyFormFieldControl as MatFormFieldControl } from '@angular/material/legacy-form-field';

export interface NgxTinynodesMatFieldComponent<T>
  extends ControlValueAccessor,
    MatFormFieldControl<T>,
    OnInit,
    OnDestroy,
    DoCheck,
    AfterContentInit {}
