import {createSlice} from '@reduxjs/toolkit';

/*
TODO:
1. setup store
2. change value of menuselectedflag to string name of menu and change all references and handling of it
3. connect with app
4. dispatch store
*/

const menuSlice = createSlice({
    name:'menu',
    initialState: {
        isExpanded:true, 
        menuSelectedFlag:'home'
    },
    reducers: {
        menuSizeChange:(expandedFlag) => {
            this.setState(state=>({...state, isExpanded:(!expandedFlag)}));
          },
        updateMenuFlag:(index) => {
            if(index!==8) {
                this.setState(state=>{
                    let newFlag = state.menuSelectedFlag.map(element=>false);
                    newFlag[index]=true;
                    return {...state, menuSelectedFlag:newFlag};
                });
            }
        }
    }
});

export const {
    menuSizeChange,
    updateMenuFlag
} = menuSlice.actions

export default menuSlice.reducer;