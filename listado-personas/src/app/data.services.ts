import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({ providedIn: 'root' })
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  cargarPersonas() {
    return this.httpClient.get<Persona[]>(
      'https://listado-personas-68ad7-default-rtdb.firebaseio.com/datos.json'
    );
  }

  //Guardar personas
  guardarPersonas(personas: Persona[]) {
    this.httpClient
      .put(
        'https://listado-personas-68ad7-default-rtdb.firebaseio.com/datos.json',
        personas
      )
      .subscribe({
        next: (response) => console.log('resultado guardar Personas: ' + response),
        error : (error) => console.log('Error al guardar Personas: ' + error)
      });
  }

  modificarPersona(index: number, persona: Persona) {
    let url: string;
    url =
      'https://listado-personas-68ad7-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json';
    this.httpClient.put(url, persona).subscribe({
      next: (response) => console.log('resultado de modificar Persona:' + response),
      error: (error) => console.log('Error en modificar Persona: ' + error)
  });
  }

  eliminarPersona(index: number) {
    let url: string;
    url =
      'https://listado-personas-68ad7-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json';
    this.httpClient.delete(url).subscribe({
      next: (response) => console.log('resultado de eliminar Persona:' + response),
      error: (error) => console.log('Error en eliminar Persona: ' + error)
  });
  }
}
