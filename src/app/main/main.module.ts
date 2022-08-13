import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MainComponent } from "./main.component";
import { MusicosComponent } from "./musicos/musicos.component";


@NgModule({
    declarations:[
        MainComponent,
        MusicosComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        MainComponent
    ]

})

export class MainModule {

}