import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffresPageRoutingModule } from './offres-routing.module';

import { OffresPage } from './offres.page';
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OffresPageRoutingModule,
        FooterPageModule
    ],
    exports: [
        OffresPage
    ],
    declarations: [OffresPage]
})
export class OffresPageModule {}
