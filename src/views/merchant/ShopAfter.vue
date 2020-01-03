<template>
  <div class="shopafter">
    <div class="item">
      <div class="left">
        <p>商品编号</p>
      </div>
      <div class="right">
        <p>45sdsdsds465sf4dsf</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p>描述图片</p>
      </div>
      <div class="right">
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
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p>商品名称</p>
      </div>
      <div class="right">
        <el-input class="titleInput" v-model="titleInput" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p>商品类别</p>
      </div>
      <div class="right">
        <el-select v-model="classValue" placeholder="请选择" class="classelect">
        <el-option
          v-for="(item,i) in classOption"
          :key="i"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p>价格</p>
      </div>
      <div class="right">
        <el-input v-model="priceInput" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p>库存</p>
      </div>
      <div class="right">
        <el-input v-model="repertInput" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p>商品状态</p>
      </div>
      <div class="right">
        <el-select v-model="stateValue" placeholder="请选择">
          <el-option
            v-for="item in stateOption"
            :key="item.value"
            :label="item.text"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="btn">
      <el-button type="primary">返回订单列表</el-button>
      <el-button type="danger">保存修改</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      titleInput: '',
      classOption: [{ text: '农作物', value: 1 }, { text: '水产', value: 2 }, { text: '海产', value: 3 }],
      classValue: '',
      priceInput: '',
      repertInput: '',
      stateOption: [{ text: '在售', value: 1 }, { text: '待售', value: 2 }, { text: '售迹', value: 3 }],
      stateValue: ''
    }
  },
  methods: {
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    }
  }
}
</script>
<style scoped lang="less">
.shopafter{
  line-height:normal;
  .item{
    display:flex;
    margin-bottom:40px;
    .left{
      width:140px;
      display:flex;
      align-items:center;
      p{
        color:#444446;
        font-size:17px;
        font-weight:600;
      }
    }
    .right{
      .titleInput{
        width:400px;
      }
      .classelect{
        width:100px;
      }
    }
  }
  .btn{
    text-align:left;
  }
}
</style>
