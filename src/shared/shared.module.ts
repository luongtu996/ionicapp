import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from "ngx-avatar";
import { LmMaskDirective } from "./directives/lm-mask.directive";
import { LmStrongDirective } from "./directives/lm-strong.directive";
import { NgxMaskIonicModule } from "ngx-mask-ionic";

@NgModule({
  imports: [
    CommonModule,
    AvatarModule,
    NgxMaskIonicModule.forRoot()
  ],
  declarations: [
      LmMaskDirective,
      LmStrongDirective
  ],
  exports: [
    AvatarModule,
    LmMaskDirective,
    LmStrongDirective,
    NgxMaskIonicModule
  ],
})
export class SharedModule { }
