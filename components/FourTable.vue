<template>
  <div class="table-block">
    <p class="table-block--title">{{ title }}</p>
    <div class="table-block--table">
      <table>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss" >
.table-block {
  display: flex;
  &--title {
    width: 64px;
    margin-right: 10px;
    letter-spacing: normal;
    font-kerning: normal;
  }

  &--table {
    table {
      border-collapse: collapse;
      td {
        border: 1px solid #000;
        width: 26px;
        height: 26px;
      }
    }
  }
}
</style>