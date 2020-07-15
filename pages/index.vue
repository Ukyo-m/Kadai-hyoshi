<template>
  <v-layout>
    <v-flex>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="subject_symbol"
              label="科目記号"
              single-line
              solo
              counter
              maxlength="4"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="kadai_num" label="課題No." single-line solo counter maxlength="2"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="kadai_name" label="課題主題" single-line solo></v-text-field>
            <v-text-field v-model="teacher_subject" label="科目担当名" single-line solo></v-text-field>
          </v-col>
          <v-col>
            <v-date-picker v-model="date" locale="ja" min="2020-01-01"></v-date-picker>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="class_symbol"
              label="クラス記号"
              single-line
              solo
              counter
              maxlength="8"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="class_my_num"
              label="出席番号"
              single-line
              solo
              counter
              maxlength="2"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="select_class_symbol"
              label="選択クラス記号"
              single-line
              solo
              counter
              maxlength="8"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="select_class_my_num"
              label="出席番号"
              single-line
              solo
              counter
              maxlength="2"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="my_number" label="学籍番号" single-line solo counter maxlength="5"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="my_name" label="氏名" single-line solo></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="teacher_class" label="担任名" single-line solo></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="blue" dark @click="routeHyoshi">作 成</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      subject_symbol: "",
      kadai_num: "",
      kadai_name: "",
      date: "",
      class_symbol: "",
      class_my_num: "",
      select_class_symbol: "",
      select_class_my_num: "",
      my_number: "",
      my_name: "",
      teacher_class: "",
      teacher_subject: "",
      comment: ""
    };
  },
  created: function(params) {
    console.log("end");
  },
  methods: {
    routeHyoshi: function() {
      this.$store.commit("subject_symbol", this.subject_symbol);
      this.$store.commit("kadai_num", this.kadai_num);
      this.$store.commit("date", this.date);
      this.$store.commit("class_symbol", this.class_symbol);
      this.$store.commit("class_my_num", this.class_my_num);
      this.$store.commit("select_class_symbol", this.select_class_symbol);
      this.$store.commit("select_class_my_num", this.select_class_my_num);
      this.$store.commit("my_number", this.my_number);
      this.$store.state.kadai_name = this.kadai_name;
      this.$store.state.my_name = this.my_name;
      this.$store.state.teacher_class = this.teacher_class;
      this.$store.state.teacher_subject = this.teacher_subject;
      this.$store.state.comment = this.comment;

      console.log(this.class_symbol);
      console.log(this.$store.state.class_symbol);

      this.$router.push("hyoshi");
    }
  }
};
</script>
