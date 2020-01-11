import * as fromTodo from './todo.actions';
import { Todo } from '../model/todo.model';


const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Pedir prestado el traje de Ironman');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer( state: Todo[] = estadoInicial, action: fromTodo.Acciones ): Todo[] {

	let todo: Todo;
	let newState: Todo[];
	let index: number;

	switch ( action.type ) {
		case fromTodo.AGREGAR_TODO:
			todo = new Todo( action.texto );
			return [ ...state, todo ];
	
		case fromTodo.COMPLETAR_TODO:
			newState = [...state];
			index = newState.findIndex( iTodo => iTodo.id === action.id );
			newState[index] = {
				...newState[index],
				completado: !newState[index].completado
			};
			return newState;
	
		case fromTodo.TOGGLE_ALL_TODO:
			
			return state.map( iTodo => {
				return {
					...iTodo,
					completado: action.completado
				};
			});

		case fromTodo.MODIFICAR_TODO:
			newState = [...state];
			index = newState.findIndex( iTodo => iTodo.id === action.id );
			newState[index] = {
				...newState[index],
				texto: action.texto
			};
			return newState;

		case fromTodo.ELIMINAR_TODO:
			// newState = [...state];
			// index = newState.findIndex( iTodo => iTodo.id === action.id );
			// newState.splice(index, 1);

			return state.filter( iTodo => iTodo.id !== action.id );
	

		case fromTodo.LIMPIAR_TODO:
			return state.filter( iTodo => !iTodo.completado );
	
		default:
			return state;
	}
}

