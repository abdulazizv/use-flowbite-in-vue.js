const count = {
    state:() => ({
        number:0
    }),
    mutations:{
        INCR(state) {
            state.number += 1;

        },
        DECR(state) {
            state.number -= 1;
        },
        RESET(state) {
            state.number = 0;
        }
    },
    actions:{},
    getters:{
        doubleCount(state) {
            state.number += 100;
        },
        resetCount(state) {
            state.number = 0
        }
    }

}


export default count;