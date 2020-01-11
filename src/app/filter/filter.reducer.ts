
import * as fromFilter from './filter.actions';

const estadoInicial: fromFilter.filtrosValidos = 'all';


export function filterReducer( state: fromFilter.filtrosValidos = estadoInicial, action: fromFilter.Acciones): fromFilter.filtrosValidos {
	
	switch ( action.type ) {
		case fromFilter.SET_FILTER:
			return action.filter;
	
		default:
			return state;
	}
}
