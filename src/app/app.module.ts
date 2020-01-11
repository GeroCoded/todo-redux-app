import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './app.reducers';

// Componentes
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodosListComponent } from './todo/todos-list/todos-list.component';
import { TodosItemComponent } from './todo/todos-item/todos-item.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { FooterComponent } from './footer/footer.component';

// Config
import { environment } from '../environments/environment';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		TodoComponent,
		TodosListComponent,
		TodosItemComponent,
		TodoFooterComponent,
		TodoAddComponent,
		FilterPipe
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		StoreModule.forRoot( reducers ),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
