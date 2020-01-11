import { ActionReducerMap } from '@ngrx/store';

import { todoReducer } from './todo/todo.reducer';
import { Todo } from './model/todo.model';

import { filtrosValidos } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducer';


export interface AppState {
	todos: Todo[];
	filter: filtrosValidos;
}

export const reducers: ActionReducerMap<AppState> = {
	todos: todoReducer,
	filter: filterReducer
};
