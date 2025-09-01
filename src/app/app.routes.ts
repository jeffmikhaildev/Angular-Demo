import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { ControlFlow } from './components/control-flow/control-flow';
import { Directive } from './components/directive/directive';
import { Api } from './components/api/api';
import { User } from './components/user/user';
import { ReactiveUser } from './components/reactive-user/reactive-user';

export const routes: Routes = [
  {
    path: 'admin',
    component: Admin,
  },
  {
    path: 'control-flow',
    component: ControlFlow,
  },
  {
    path: 'data-binding',
    component: DataBinding,
  },
  {
    path: 'signal',
    component: Signal,
  },
  {
    path: 'directive',
    component: Directive,
  },
  {
    path: 'api',
    component: Api,
  },
  {
    path: 'user',
    component: User,
  },
  {
    path: 'reactive-user',
    component: ReactiveUser,
  },
];
