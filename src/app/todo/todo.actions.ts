
import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const COMPLETAR_TODO = '[TODO] Completar todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all todo';
export const MODIFICAR_TODO = '[TODO] Modificar todo';
export const ELIMINAR_TODO = '[TODO] Eliminar todo';
export const LIMPIAR_TODO = '[TODO] Limpiar todo';

export class AgregarTodoAction implements Action {
	readonly type = AGREGAR_TODO;

	constructor( public texto: string ) {}
}

export class CompletarTodoAction implements Action {
	readonly type = COMPLETAR_TODO;

	constructor( public id: number ) {}
}

export class ToggleAllTodoAction implements Action {
	readonly type = TOGGLE_ALL_TODO;

	constructor( public completado: boolean ) {}
}

export class ModificarTodoAction implements Action {
	readonly type = MODIFICAR_TODO;

	constructor( public id: number, public texto: string ) {}
}

export class EliminarTodoAction implements Action {
	readonly type = ELIMINAR_TODO;

	constructor( public id: number ) {}
}

export class LimpiarTodoAction implements Action {
	readonly type = LIMPIAR_TODO;
}

export type Acciones = AgregarTodoAction | CompletarTodoAction | ToggleAllTodoAction | 
ModificarTodoAction | EliminarTodoAction | LimpiarTodoAction;

