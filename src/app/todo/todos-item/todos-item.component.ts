import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import { Todo } from '../../model/todo.model';
import * as fromTodo from '../todo.actions';

@Component({
	selector: 'app-todos-item',
	templateUrl: './todos-item.component.html',
	styles: []
})
export class TodosItemComponent implements OnInit {

	@Input() todo: Todo;
	@ViewChild('txtInputFisico', {static: false}) txtInputFisico: ElementRef;
	
	checkField: FormControl;
	textInput: FormControl;
	
	editando: boolean;
	
	constructor( private store: Store<AppState> ) { }
	
	ngOnInit() {
		this.checkField = new FormControl( this.todo.completado );
		this.textInput = new FormControl( this.todo.texto, Validators.required );
		this.checkField.valueChanges.subscribe( () => {
			const accion: fromTodo.Acciones = new fromTodo.CompletarTodoAction( this.todo.id );
			this.store.dispatch( accion );
		});
	}

	editar() {
		this.editando = true;

		setTimeout( () => {
			this.txtInputFisico.nativeElement.select();
		}, 1);
	}

	terminarEdicion() {
		this.editando = false;

		if ( this.textInput.invalid ) {
			this.textInput.setValue( this.todo.texto );
			return;
		}

		if ( this.textInput.value === this.todo.texto ) {
			return;
		}
		
		const accion: fromTodo.Acciones = new fromTodo.ModificarTodoAction( this.todo.id, this.textInput.value );
		this.store.dispatch( accion );
	}

	marcarCompletado() {	
		setTimeout( () => {
			
		}, 1);
	}

	eliminar() {
		const accion: fromTodo.Acciones = new fromTodo.EliminarTodoAction( this.todo.id );
		this.store.dispatch( accion );
	}
	
}
