import { Routes } from '@angular/router';
import { Header } from './header/header';
import { ControlFlow } from './control-flow/control-flow';
import { SignalEx } from './signal-ex/signal-ex';

export const routes: Routes = [
    {
        path:'', component:Header
    },
    {
        path:'controlflow', component:ControlFlow
    },
    {
        path:'signal', component:SignalEx
    }
];
