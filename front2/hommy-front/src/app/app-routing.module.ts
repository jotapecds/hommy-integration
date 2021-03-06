import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  {
    path: 'cadastro',
    loadChildren: './cadastro/cadastro.module#CadastroPageModule'
  },
  {
    path: 'anunciar',
    loadChildren: './anunciar/anunciar.module#AnunciarPageModule'
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
