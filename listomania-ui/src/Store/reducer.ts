import { combineReducers } from 'redux';
import { CoreModule } from 'Core/Reducers/Reducers';
import { BoardModule } from 'Modules/Board/Reducers/Reducer';
import { MainPageModule } from 'Modules/MainPage/Reducers/Reducers';
import { LoginModule } from 'Modules/LoginPage/Reducers/Reducers';


export default combineReducers({
    CoreModule,
    BoardModule,
    MainPageModule,
    LoginModule
})