import { createSlice } from '@reduxjs/toolkit'
import {TaskItemProps} from '../@types'

export type TaskListState = {
    tasks: TaskItemProps[];
    loading: boolean;
}

const initialState: TaskListState = {
    tasks: [],
    loading: false
}

const taskListSlice = createSlice({
    name: 'taskList',
    initialState: initialState,
    reducers: {}
})

export default taskListSlice.reducer;