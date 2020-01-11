import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducers';

import * as fromFilter from '../../filter/filter.actions';
import { Todo } from '../../model/todo.model';
import * as fromTodo from '../todo.actions';

@Component({
	selector: 'app-todo-footer',
	templateUrl: './todo-footer.component.html',
	styles: []
})
export class TodoFooterComponent implements OnInit {

	filtrosValidos: fromFilter.filtrosValidos[] = [ 'all', 'completed', 'active' ];
	filtroSeleccionado: fromFilter.filtrosValidos = 'all';
	pendientes: number;
	
	constructor( private store: Store<AppState>) { }
	
	ngOnInit() {
		this.store.subscribe( state => {
			this.filtroSeleccionado = state.filter;
			this.contarPendientes( state.todos );
		});
	}

	cambiarFiltro( nuevoFiltro: fromFilter.filtrosValidos ) {
		if ( nuevoFiltro === this.filtroSeleccionado  ) {
			return;
		}
		const accion = new fromFilter.SetFilterAction( nuevoFiltro );
		this.store.dispatch( accion );
	}

	contarPendientes( todos: Todo[] ) {
		this.pendientes = todos.filter( todo => todo.completado === false ).length;
	}

	limpiarTodos() {
		const accion = new fromTodo.LimpiarTodoAction();
		this.store.dispatch( accion );
	}
	
}
