<template>
  <div>
  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        fixed
        prop="id"
        label="編號"
        width="150">
    </el-table-column>
    <el-table-column
        prop="name"
        label="書名"
        width="150">
    </el-table-column>
    <el-table-column
        prop="author"
        label="作者"
        width="150">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="150">
      <template slot-scope="scope">
        <el-button @click="editor(scope.row)" type="text" size="small">修改</el-button>
        <el-button @click="deleteBook(scope.row)" type="text" size="small">刪除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
      background
      layout="prev, pager, next"
      page-size="size"
      :total="total"
      @current-change="page">
  </el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    deleteBook(row){
      axios.delete('http://localhost:8181/book/deleteById/'+row.id).then(function (resp) {
        const _this = this
        if (resp.data == 'success'){
          alert("刪除成功")
          window.location.reload()
        }


      })
    },
    editor(row) {
      this.$router.push({
        path: '/update',
        query: {
          id: row.id
        }
      })
      // row.id
    },
    page(currentPage){
      const _this = this
      axios.get('http://localhost:8181/book/findAll/'+currentPage+'/10').then(function (resp) {
        _this.tableData = resp.data.content
        _this.total = resp.data.totalElements
      })
    }
  },
  created() {
    const _this = this
    axios.get('http://localhost:8181/book/findAll/1/10').then(function (resp) {
      _this.tableData = resp.data.content
      _this.total = resp.data.totalElements
    })
  },

  data() {
    return {
      total: null,
      tableData: [{
        id: '2016-05-02',
        name: '王小虎',
        author: '上海'
      }, {
        id: '2016-05-02',
        name: '王小虎',
        author: '上海'
      }, {
        id: '2016-05-02',
        name: '王小虎',
        author: '上海'
      }, {
        id: '2016-05-02',
        name: '王小虎',
        author: '上海'
      }]
    }
  }
}
</script>

<style scoped>

</style>