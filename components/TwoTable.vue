<template>
  <div class="table-block">
    <p class="table-block--title">課題№</p>
    <div class="table-block--table">
      <table>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table-block {
  display: flex;
  &--title {
    margin-right: 10px;
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