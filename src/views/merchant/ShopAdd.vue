<template>
  <div class="shopadd">
    <div class="pad">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="ruleForm.name" maxlength="10" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="商品描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" maxlength="30" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="商品分类" prop="region">
          <el-select v-model="ruleForm.region" placeholder="商品分类">
            <el-option label="水果" value="0"></el-option>
            <el-option label="茶页" value="1"></el-option>
            <el-option label="水产" value="2"></el-option>
            <el-option label="海产" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input v-model="ruleForm.price" clearable class="price"></el-input>
        </el-form-item>
        <el-form-item label="成本价" >
          <el-input v-model="ruleForm.cost" clearable class="price"></el-input>
        </el-form-item>
        <el-form-item label="市场价" >
          <el-input v-model="ruleForm.marketPrice" clearable class="price"></el-input>
        </el-form-item>
        <el-form-item label="重量" prop="weight">
          <el-select v-model="ruleForm.weight" placeholder="选择重量">
            <el-option label="毫克" value="0"></el-option>
            <el-option label="克" value="1"></el-option>
            <el-option label="千克" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品图片" prop="image">
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url" alt=""
                >
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="库存" prop="cash">
          <el-input v-model="ruleForm.cash" clearable class="price"></el-input>
        </el-form-item>
        <el-form-item label="商品状态">
          <el-radio-group v-model="ruleForm.state">
            <el-radio label="1">在售</el-radio>
            <el-radio label="0">待售</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      disabled: false,
      ruleForm: {
        name: '',
        desc: '',
        region: '',
        price: '',
        cost: '',
        marketPrice: '',
        wieght: '',
        cash: '',
        state: '1'
      },
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        price: [{ required: true, message: '请输入商品价格', trigger: 'blur' },
          { min: 1, max: 6, message: '1到6位数', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请填写商品分类', trigger: 'change' }
        ],
        weight: [{ required: true, message: '请选择重量', trigger: 'change' }],
        image: [{ required: true, message: '请上传商品图片', trigger: 'blur' }],
        cash: [
          { required: true, message: '请输入库存数量', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写商品描述', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    init () {
      var element = this.$refs.ruleForm.$vnode.elm.getElementsByClassName('el-form-item__content')
      element.forEach((value, key) => {
        value.style.textAlign = 'left'
      })
    },
    handleRemove (file) {
      console.log(file)
    },
    handleDownload (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      console.log(file)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style scoped lang="less">
.shopadd{
  width:100%;
  height:100%;
  // border:1px solid red;
  display:flex;
  justify-content:center;
  align-items:center;
  .pad{
    width:600px;
    height:100%;
    // border:1px solid red;
    .el-input{
      width:300px;
    }
    .el-select{
      width:110px;
    }
    .price{
      width:80px;
    }
  }
}

</style>
