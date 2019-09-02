<template>
  <div class="container">
    <!-- 左半边 -->
    <div class="left">
      <!-- 左上 -->
      <div class="left_top">
        <div class="left_top_left">
          <div class="left_title">数森<span class="version">v1.0.0</span></div>
          <div class="left_title2">图床系统</div>
        </div>
        <div class="left_icon"><img id="logo" src="../assets/logo.png" alt="logo"></div>
      </div>
      <!-- 左中 -->
      <div class="left_middle">
        <!-- 左侧列表 -->
        <div class="select_item">
          <a-icon class="select_icon" type="crown" style="fontSize: 20px; verticalAlign: middle;" theme="twoTone"/>
          <span class="select_upload">上传图片</span>
        </div>
      </div>
      <!-- 左下 -->
      <div class="left_bottom">
        
      </div>
    </div>
    <!-- 右半边 -->
    <div class="right">
      <!-- 右上 -->
      <div class="right_top">
        <a-button class="login_btn" size="large" type="primary"><a-avatar style="margin: -3px 3px 3px -4px" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />登录<a-icon type="caret-down" /></a-button>
      </div>
      <!-- 右中 -->
      <div class="right_middle">
        <!-- 图片上传 -->
        <div class="uploadImages">
          <a-upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            :fileList="fileList"
            @preview="handlePreview"
            @change="handleChange"
          >
            <div v-if="fileList.length < 999">
              <a-icon type="plus" />
              <div class="ant-upload-text">上传图片</div>
            </div>
          </a-upload>
          <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
        </div>
      </div>
      <!-- 右下 -->
      <div class="right_bottom">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexView',
  data() {
    return {
      // 上传图片数据
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
      // 
    }
  },
  methods: {
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      this.fileList = fileList
    },
  }
}
</script>

<style lang="less" scoped>
  .container{
    height: 100vh;
    display: flex;
    flex-direction: row;
    .left{
      width: 13vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      min-width: 180px;
      .left_top{
        height: 7vh;
        background: rgb(215, 222, 223);
        display: flex;
        flex-direction: row;
        .left_top_left{
          .left_title{
            margin-top: 6px;
            text-indent: 18px;
            .version{
              margin-left: 8px;
            }
          }
          .left_title2{
            text-indent: 18px;
            font-weight: 600;
            font-size: 16px;
          }
        }
        .left_icon{
          margin-left: 22px;
          #logo{
            margin-top: 4px;
          }
        }
      }
      .left_middle{
        flex: 1;
        background: rgb(63, 69, 73);
        .select_item{
          height: 46px;
          line-height: 46px;
          padding: 0 18px;
          border-bottom: 1px solid #d7dedf;
          .select_icon{
            margin: -2px 0 0 0;
          }
          .select_upload{
            margin-left: 8px;
            color: #229bf1;
            font-size: 13px;
            font-weight: 400;
          }
        }
      }
      .left_bottom{
        height: 7vh;
        background: gray;
      }
    }
    .right{
      width: 87vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      .right_top{
        height: 6vh;
        background: rgb(157, 196, 228);
        .login_btn{
          height: 6vh;
          float: right;
          cursor: pointer;
          font-size: 14px;
          width: 120px;
        }
      }
      .right_middle{
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        background: url(../assets/right_top@3x.png) no-repeat right top / 529px 300px, url(../assets/left_bottom@3x.png) no-repeat left bottom / 529px 300px, url(../assets/center@3x.png) no-repeat center center / 174px 122px;
        padding: 18px 14px;
      }
      .right_bottom{
        height: 7vh;
        background: rgb(191, 212, 182);
      }
    }
  }
</style>
