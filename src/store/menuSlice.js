import {createSlice} from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name:'menu',
    initialState: {
        isExpanded:(window.innerWidth>=1300)?true:false, 
        menuSelectedFlag:"Home"
    },
    reducers: {
        menuSizeChange:(state,action) => {
            state.isExpanded=(!action.payload.expandedFlag);
          },
        updateMenuFlag:(state,action) => {
            state.menuSelectedFlag = action.payload==="Show more"?state.menuSelectedFlag:action.payload;
        }
    }
});

export const {menuSizeChange, updateMenuFlag} = menuSlice.actions;

export const selectExpanded = state => state.menu.isExpanded;
export const selectMenuFlag = state => state.menu.menuSelectedFlag;

export default menuSlice.reducer;