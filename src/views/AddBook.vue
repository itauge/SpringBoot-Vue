<template>

  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="圖書名稱" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="作者" prop="author">
      <el-input v-model="ruleForm.author"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>


  </el-form>

</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        author: '',
      },
      rules: {
        name: [
          { required: true, message: '圖書名不能為空', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '作者不能為空', trigger: 'change' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('http://localhost:8181/book/save',this.ruleForm).then(function (resp) {
            if (resp.data == 'success'){
              _this.$message({
                showClose: true,
                message: '添加成功',
                type: 'success'
              });
              _this.$router.push('/BookManage')
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }


  }
}
</script>