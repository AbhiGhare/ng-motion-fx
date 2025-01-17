import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { NgMotionComponent } from './ng-motion/ng-motion.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    MyLibraryComponent,
    NgMotionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    MyLibraryComponent,
    NgMotionComponent
  ]
})
export class NgMotionFXModule { }
