export const state = () => ({
    // 保存しておく変数
    subject_symbol_array: [],
    kadai_num_array: [],
    kadai_name: "",
    date: [],
    class_symbol_array: [],
    class_my_num_array: [],
    select_class_symbol_array: [],
    select_class_my_num_array: [],
    my_number_array: [],
    my_name: "",
    teacher_class: "",
    teacher_subject: "",
    comment: ""

})

export const mutations = {
    // stateの値を変更する関数を記載する場所
    subject_symbol: function (state, params) {
        state.subject_symbol_array = Array.from(params.toUpperCase())
    },
    kadai_num: function (state, params) {
        state.kadai_num_array = Array.from(params.toUpperCase())
    },
    date: function (state, params) {
        state.date = Array.from(params.toUpperCase())
    },
    class_symbol: function (state, params) {
        state.class_symbol_array = Array.from(params.toUpperCase())
    },
    class_my_num: function (state, params) {
        state.class_my_num_array = Array.from(params.toUpperCase())
    },
    select_class_symbol: function (state, params) {
        state.select_class_symbol_array = Array.from(params.toUpperCase())
    },
    select_class_my_num: function (state, params) {
        state.select_class_my_num_array = Array.from(params.toUpperCase())
    },
    my_number: function (state, params) {
        state.my_number_array = Array.from(params.toUpperCase())
    }
}

