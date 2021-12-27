import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'
import {TaskItemProps} from '../@types'

export type TaskListState = {
    tasks: TaskItemProps[];
}

const initialState: TaskListState = {
    tasks: [],
}

const taskListSlice = createSlice({
    name: 'taskList',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks = [...state.tasks, action.payload]
          },
    }
})

export const selectTasks = (state : RootState) => state.taskList.tasks;

export const { addTask } = taskListSlice.actions;

export default taskListSlice.reducer;