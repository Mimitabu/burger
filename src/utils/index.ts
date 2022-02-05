import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../index';
import { TAuthActions } from '../services/actions/auth';
import { TItemActions } from '../services/actions/item';
import { TWsActions } from '../services/actions/wsActionTypes';


type TApplicationActions = TAuthActions | TItemActions | TWsActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
    ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
