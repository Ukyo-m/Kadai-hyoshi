<template>
  <section class="wrap">
    <div class="wrap2">
      <h1 class="main-title">課題表紙</h1>
      <div class="kadai-row">
        <div class="table-block subject">
          <p class="table-block--title subject--title">科目記号</p>
          <div class="table-block--table">
            <table>
              <tr>
                <td>{{ $store.state.subject_symbol_array[0] }}</td>
                <td>{{ $store.state.subject_symbol_array[1] }}</td>
                <td>{{ $store.state.subject_symbol_array[2] }}</td>
                <td>{{ $store.state.subject_symbol_array[3] }}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="table-block kadai-num">
          <p class="table-block--title kadai-num__title">課題№</p>
          <div class="table-block--table">
            <table>
              <tr>
                <td>{{$store.state.kadai_num_array[0]}}</td>
                <td>{{$store.state.kadai_num_array[1]}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="kadai-title-row">
        <div class="title-block">
          <p class="title-block--title">課題主題</p>
          <div class="title-block--desc">{{$store.state.kadai_name}}</div>
        </div>
      </div>
      <div class="date-row">
        <div class="date-block">
          <p class="date-block--title">
            <span class="right-width">納</span>
            <span>期</span>
          </p>
          <div class="table-block--table">
            <table>
              <tr>
                <td>{{$store.state.date[0]}}</td>
                <td>{{$store.state.date[1]}}</td>
                <td>{{$store.state.date[2]}}</td>
                <td>{{$store.state.date[3]}}</td>
              </tr>
            </table>
            <p>年</p>
          </div>
          <div class="table-block--table">
            <table>
              <tr>
                <td>{{$store.state.date[5]}}</td>
                <td>{{$store.state.date[6]}}</td>
              </tr>
            </table>
            <p>月</p>
          </div>
          <div class="table-block--table">
            <table>
              <tr>
                <td>{{$store.state.date[8]}}</td>
                <td>{{$store.state.date[9]}}</td>
              </tr>
            </table>
            <p>日</p>
          </div>
        </div>
      </div>
      <div class="subject-teacher-row">
        <div class="subject-teacher-block">
          <p class="subject-teacher--title">科目担当</p>
          <div class="subject-teacher--desc">{{$store.state.teacher_subject}}</div>
        </div>
      </div>
      <div class="class-symbol-row">
        <div class="class-symbol-block">
          <p class="class-symbol--title">クラス記号</p>
          <div class="class-symbol--desc">
            <table>
              <tr>
                <td>{{$store.state.class_symbol_array[0]}}</td>
                <td>{{$store.state.class_symbol_array[1]}}</td>
              </tr>
            </table>
            <table>
              <tr>
                <td>{{$store.state.class_symbol_array[2]}}</td>
                <td>{{$store.state.class_symbol_array[3]}}</td>
                <td>{{$store.state.class_symbol_array[4]}}</td>
              </tr>
            </table>
            <table>
              <tr>
                <td>{{$store.state.class_symbol_array[5]}}</td>
                <td>{{$store.state.class_symbol_array[6]}}</td>
                <td>{{$store.state.class_symbol_array[7]}}</td>
              </tr>
            </table>
          </div>

          <div class="class-symbol-num">
            <p class="class-symbol-num--title">出席番号</p>
            <div class="class-symbol-num--desc">
              <table>
                <tr>
                  <td>{{$store.state.class_my_num_array[0]}}</td>
                  <td>{{$store.state.class_my_num_array[1]}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="select-class-symbol-row">
        <div class="select-class-symbol-block">
          <div class="select-class-symbol--title">
            <div>
              <span class="select">選</span>択
              <br />
              <span class="class">クラス記号</span>
            </div>
          </div>
          <div class="select-class-symbol--desc">
            <table>
              <tr>
                <td>{{$store.state.select_class_symbol_array[0]}}</td>
                <td>{{$store.state.select_class_symbol_array[1]}}</td>
              </tr>
            </table>
            <table>
              <tr>
                <td>{{$store.state.select_class_symbol_array[2]}}</td>
                <td>{{$store.state.select_class_symbol_array[3]}}</td>
                <td>{{$store.state.select_class_symbol_array[4]}}</td>
              </tr>
            </table>
            <table>
              <tr>
                <td>{{$store.state.select_class_symbol_array[5]}}</td>
                <td>{{$store.state.select_class_symbol_array[6]}}</td>
                <td>{{$store.state.select_class_symbol_array[7]}}</td>
              </tr>
            </table>
          </div>

          <div class="select-class-symbol-num">
            <p class="select-class-symbol-num--title">出席番号</p>
            <div class="select-class-symbol-num--desc">
              <table>
                <tr>
                  <td>{{$store.state.select_class_my_num_array[0]}}</td>
                  <td>{{$store.state.select_class_my_num_array[1]}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="my-row">
        <div class="my-num">
          <p class="my-num--title">学籍番号</p>
          <div class="my-num--table">
            <table>
              <tr>
                <td>{{$store.state.my_number_array[0]}}</td>
                <td>{{$store.state.my_number_array[1]}}</td>
                <td>{{$store.state.my_number_array[2]}}</td>
                <td>{{$store.state.my_number_array[3]}}</td>
                <td>{{$store.state.my_number_array[4]}}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="my-name">
          <div class="my-name--title">氏名</div>
          <div class="my-name--box">{{$store.state.my_name}}</div>
        </div>
      </div>
      <div class="homeroom-teacher-row">
        <div class="homeroom-teacher-block">
          <p class="homeroom-teacher--title">
            <span>担</span>任
          </p>
          <div class="homeroom-teacher--desc">{{$store.state.teacher_class}}</div>
        </div>
      </div>
      <div class="comment-row">
        <p>
          <span>コメント</span>
          <span></span>
          <span></span>
        </p>
      </div>
      <div class="stamp-row">
        <table>
          <tr>
            <td class="kouketu"></td>
            <td class="menjo"></td>
          </tr>
        </table>
        <table>
          <tr>
            <td class="sai"></td>
            <td class="kigen"></td>
          </tr>
        </table>
        <table>
          <tr>
            <td class="mi"></td>
            <td class="shonin"></td>
          </tr>
        </table>
      </div>
      <p class="hikae">(課題提出控えとして卒業まで保存のこと)</p>
    </div>
    <img src="../assets/halimage.png" class="hal-img" />
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
// 印刷
@page {
  size: A5;
  margin: 0;
}

@media print {
  body {
    width: 148mm; /* needed for Chrome */
    -webkit-print-color-adjust: exact;
  }
}

// 表示
@media screen {
  body {
    background: #eee;
  }

  .wrap {
    background: white; /* 背景を白く */
    box-shadow: 0 0.5mm 2mm rgba(0, 0, 0, 0.3); /* ドロップシャドウ */
  }
}
</style>