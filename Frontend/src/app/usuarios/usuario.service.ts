import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlEndPoint: string = "http://localhost:8080/api/usuarios";
  constructor(private http: HttpClient) { }
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })


  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlEndPoint);
  }


  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlEndPoint, usuario, { headers: this.httpHeaders })
  }

  getUsuario(id_usuario: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id_usuario}`)
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.urlEndPoint}/${usuario.id_usuario}`, usuario, { headers: this.httpHeaders })
  }

  delete(id_usuario: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id_usuario}`, { headers: this.httpHeaders })
  }

  getUserByName(nombre: string): Observable<Usuario>{
    const internalEndpoint = `http://localhost:8080/api/usuarios/nombre/${nombre}`;
    return this.http.get<Usuario>(internalEndpoint);

  }
}
