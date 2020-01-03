import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PicturesComponent} from './components/pictures/pictures.component';
import {UploadComponent} from './components/upload/upload.component';


const routes: Routes = [
  {path: 'pictures', component: PicturesComponent},
  {path: 'upload', component: UploadComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'pictures'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
