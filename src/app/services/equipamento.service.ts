import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Equipamento } from '../models/equipamento';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  private URL = 'http://localhost:3005/equipamentos';

  // Injetando HttpClient
  constructor( private httpClient: HttpClient ) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Obtem todos os equipamentos
  getEquipamentos(): Observable<Equipamento[]> {
    return this.httpClient.get<Equipamento[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Obtem um equipamento pelo id
  getEquipamentoById(id: number): Observable<Equipamento> {
    return this.httpClient.get<Equipamento>(this.URL + '/single/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
