import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from './usuario.service';
import swal from 'sweetalert2'
import { Usuario } from './usuario';
import { Rol } from './rol';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

})
export class FormComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  public newRol: Rol = new Rol();
  public titulo: string = "Crear Cliente";


  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    this.activatedRoute.params.subscribe(params => {
      let id_usuario = params['id']
      if (id_usuario) {
        this.usuarioService.getUsuario(id_usuario).subscribe((resp) => this.usuario = resp)
      }
    })
  }

  setRole(role: string, id_rol: number) {
    this.newRol.nombre = role;
    this.newRol.id_rol = id_rol;
    this.usuario.rol = this.newRol;
    console.log("valor actual del objeto " , this.usuario);
  }


  public create(): void {
    this.usuarioService.create(this.usuario).subscribe(resp => {
      resp;
      this.router.navigate(['/listausuarios']);
      swal.fire('Nuevo usuario', `Usuario  ${this.usuario.nombre} creado con exito!`, 'success')
    });
  }

  update(): void {
    this.usuarioService.update(this.usuario).subscribe(resp => {
      this.router.navigate(['usuarios'])
      swal.fire('Usuario Actualizado', `Usuario  ${this.usuario.nombre} Actualizado con exito!`, 'success')

    })
  }
}
