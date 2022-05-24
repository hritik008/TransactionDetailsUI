import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { TransactionPageComponent } from "./transaction-page/transaction-page.component"

const routes: Routes = [
    {path:'', component : TransactionPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [TransactionPageComponent]