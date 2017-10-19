// import { ActionTree, GetterTree, MutationTree, Module } from 'vuex/types';

// export const state: any = {
//   todos: [
//     {text: 'buy milk', checked: false},
//     {text: 'Go ahdlz', checked: true},
//     {text: 'Do smtg', checked: false}
//   ]
// }

// export const getters: GetterTree<any, RootState> = {
//   todos: (state, getters, rootState) => state.todos.filter(todo => !todo.checked),
//   dones: state => state.todos.filter(todo => todo.checked),
// }

// export const mutations: MutationTree<any> = {
//   addTodo(state, newTodo): void {
//     state.todos.push(Object.assign({}, newTodo));
//     newTodo.text = "";
//   },
//   toggleTodo(state, todo): void {
//     todo.checked = !todo.checked;
//   }
// }

// export const actions: ActionTree<any, RootState> = {
//   async addTodoAsync({commit, rootState}, id) {
//     let item = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(data => data.json())
//     const todo = {
//       checked: false,
//       text: rootState.login.name + ': ' + item.title
//     }
//     commit('addTodo', todo);   
//   }
// }

// export const todos: Module<any, RootState> = {
//   state, getters, mutations, actions
// }