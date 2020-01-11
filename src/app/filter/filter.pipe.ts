import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.model';
import * as fromFilter from './filter.actions';

@Pipe({
	name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {
	
	transform( todos: Todo[], filter: fromFilter.filtrosValidos ): Todo[] {

		switch ( filter ) {
			case 'all':
				return todos;

			case 'completed':
				return todos.filter( todo => todo.completado );
				
			case 'active':
				return todos.filter( todo => !todo.completado );
		
			default:
				return todos;
		}
	}
	
}
