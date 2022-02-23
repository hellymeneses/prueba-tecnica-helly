import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuarioService } from './usuarios/usuario.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './usuarios/form.component';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'listausuarios', component: UsuariosComponent },
  { path: 'usuario/form', component: FormComponent },
  { path: 'usuario/form/:id', component: FormComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuariosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)


  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
