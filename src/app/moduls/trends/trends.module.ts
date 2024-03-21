import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TrendsComponent } from "./trends.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TrendsComponent],
    imports: [ NgModule, FormsModule],
})
export class TrendsModule { }   