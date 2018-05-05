<template>
  <div class="setUp">
        <div class="set-left">
          <div class="tabTitle">设置</div>
              <el-tabs :tab-position="tabPosition"  @tab-click="handleClick">
                <el-tab-pane v-for="(item,index) in setLabel" :label="item" :key="index"></el-tab-pane>
              </el-tabs>
              </div>
            <div class="set-info">
              <form v-if="setChance == 0">
                <div class="info-title">基本信息</div>
                <div class="info-list"><font><i>*</i>用户名：</font><input type="text" @focus="focusList" v-model="infoData.userName"></div>
                <div class="info-list"><font><i>*</i>昵称：</font><input type="text" v-model="infoData.smallName"></div>
                <div class="info-list"><font><i>*</i>性别：</font><input type="text" v-model="infoData.grader"></div>
                <div class="info-list"><font><i>*</i>生日：</font>
                  <div class="birthday">
                    <el-date-picker
                      v-model="infoData.birthValue"
                      align="right"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="birthPicker">
                    </el-date-picker>
                  </div>
                </div>
                <div class="info-list"><font><i>*</i>地区：</font><province class="provinceCl" :proData="infoData.proData" @getProvince="postProvince"></province></div>
                <div class="info-list"><font><i>*</i>个性签名：</font><textarea v-model="infoData.psSignature" maxlength="52"></textarea></div>
                <div class="info-list subBtn"><el-button type="success" plain @submit="subInfoForm">保存</el-button></div>
              </form>
              <div v-else-if="setChance == 1">
                <div class="info-title">修改密码</div>
                <div class="info-list"><font>原始密码：</font><input type="text" class="set-input" v-model="oldPsw1" @focus="focusList">
                <span v-if="valiOld" class="error">请输入正确的原始密码</span></div>
                <div class="info-list"><font>新密码：</font><input type="text" class="set-input" v-model="newPsw1" @focus="focusList">
                <span v-if="valiNew" class="error">两次密码输入不正确，请再次输入</span></div>
                <div class="info-list subBtn"><el-button type="success" plain @submit="subInfoForm">保存</el-button></div>
              </div>
              <div v-else-if="setChance == 2" class="valiPhoneEmail-box">
                 <div class="info-title">手机验证</div>
                <div class="info-list"><font>请输入手机号：</font><input onkeyup="value=value.replace(/[^\d]/g,'')"  maxlength="11" @focus="focusList" v-model="phone">
                <span v-if="valiPhone" class="error">请输入正确的手机号</span></div>
                <div class="info-list"><font>请输入验证码：</font><input onkeyup="value=value.replace(/[^\d]/g,'')" type="text" minlength="6" maxlength="6" @focus="focusList" v-model="phoneCode">
                 <el-button type="danger" plain>获取短信验证码</el-button>
                <span v-if="valiPhoneCode" class="error">验证码格式不正确</span></div>
                <div class="info-list subBtn"><el-button type="success" plain @submit="subInfoForm">绑定</el-button></div>
                </div>
                <div v-else-if="setChance == 3" class="valiPhoneEmail-box">
                  <div class="info-title">邮箱验证</div>
                  <div class="info-list"><font>请输入邮箱地址：</font><input onkeyup="value=value.replace(/[^\d\w]/g,'')"  @focus="focusList" v-model="email">
                  <span v-if="valiEmail" class="error">请输入正确的邮箱地址</span></div>
                  <div class="info-list"><font>请输入验证码：</font><input onkeyup="value=value.replace(/[^\d]/g,'')" type="text" minlength="6" maxlength="6" @focus="focusList" v-model="emailCode">
                  <el-button type="danger" plain>获取邮箱验证码</el-button>
                  <span v-if="valiEmailCode" class="error">验证码格式不正确</span></div>
                  <div class="info-list subBtn"><el-button type="success" plain @submit="subInfoForm">绑定</el-button></div>
                </div>
                <div v-else-if="setChance == 4" class="uploadImg-box">
                  <div class="info-title">上传头像</div>
                  <div class="info-list">
                    <el-upload
                      class="avatar-uploader"
                      action="http://127.0.0.1:8181/assets/images/head/"
                      :show-file-list="false"
                      :on-success="handleHeadImgSuccess"
                      :on-error = "handleHeadImgError"
                      >
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </div>
                </div>
              </div>
            </div>
  </div>
</template>

<script type="text/ecmascript-6">
import province from "./province.vue";

export default {
  name: "setUp",
  components: {
    province
  },
  computed: {
    valiOld() {
      if (this.oldPsw1 !== '' && this.oldPsw1 !== this.oldPsw) {
        return true;
      } else {
        return false;
      }
    },
    valiNew() {
      if (this.newPsw1 !== '' && this.newPsw1 !== this.oldPsw) {
        return true;
      } else {
        return false;
      }
    },
    valiPhone() {
      let reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
      if (this.phone !== '' && !reg.test(this.phone)) {
        return true;
      } else {
        return false;
      }
    },
    valiPhoneCode() {
      //待定
    },
    // 邮箱验证
    valiEmail() {
      let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+$/;
      if (this.email !== '' && !reg.test(this.email)) {
        return true;
      } else {
        return false;
      }
    },
    valiEmailCode() {
      //待定
    }
  },
  data() {
    return {
      setChance: 0,
      tabPosition: "left",
      setLabel: ["基本信息", "修改密码", "手机验证", "邮箱验证", "修改头像"],
      infoData: {
        userName: "18814142246",
        smallName: "zaozao",
        grader: "女",
        proData: { provinces: '广东省', cities: '广州市' },
        psSignature: '',
        psSignature: 'lalallalla'
      },

      // 图片路径
      imageUrl: '',
      emailCode: '',
      email: '',
      phoneCode: '',
      phone: '',
      oldPsw1: '',
      oldPsw: '123',
      newPsw1: '',
      newPsw: '',
      // 日期选择器
      // 大于当前的日期不能选择
      birthValue: '',
      birthPicker: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        // 日期快捷选择键
        shortcuts: [{
          text: '一年前',
          onClick(picker) {
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 30 * 12);
            picker.$emit('pick', date);
          }
        }, {
          text: '五年前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 30 * 12 * 5);
            picker.$emit('pick', date);
          }
        }, {
          text: '十年前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 30 * 12 * 10);
            picker.$emit('pick', date);
          }
        }]
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      this.setChance = tab.index;
    },
    focusList() {
      let array = document.getElementsByTagName('set-input');
      for (let i = 0; i < array.length; i++) {
        array[i].style.borderRadius = "5px";
      }
      console.log()
    },
    subInfoForm() {
      console.log();
    },
    postProvince(data) {
      console.log(data);
    },
    handleHeadImgSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleHeadImgError(err, file) {
      console.log(err);
    },
  }
};
</script>

<style lang="less">
.setUp {
  margin: 0 100px;
  width: 1200px;
  .set-info {
    width: 900px;
    padding-left: 20px;
    float: left;
    margin: 20px 0 0 20px;
    border: 1px #e9e9e9 solid;
    .valiPhoneEmail-box {
      .info-list {
        font {
          width: 130px;
        }
        .el-button {
          padding: 8px 15px;
        }
      }
    }
    .uploadImg-box {
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
    .info-title {
      line-height: 40px;
      height: 40px;
      border-bottom: 1px #e9e9e9 dashed;
    }
    .info-list {
      padding: 12px 0;
      font-size: 16px;
      font {
        display: inline-block;
        width: 100px;
        text-align: right;
        color: #666;
        i {
          font-style: normal;
          color: #f50000;
          width: 12px;
          text-align: center;
          display: inline-block;
        }
      }
      & > input {
        margin-left: 5px;
        line-height: 30px;
        text-indent: 10px;
        font-size: 14px;
        border: 1px #dcdfe6 solid;
        border-radius: 5px;
        color: #666;
      }
      .birthday {
        // margin-left: 5px;
        display: inline-block;
        .el-input__inner {
          height: 33px;
          line-height: 33px;
        }
        .el-input__icon {
          line-height: 33px;
        }
      }
      .provinceCl {
        margin-left: 5px;
        display: inline-block;
      }
      textarea {
        margin-left: 5px;
        padding: 5px 10px;
        font-size: 14px;
        vertical-align: middle;
        border: 1px solid #dcdfe6;
        height: 60px;
        width: 200px;
        line-height: 25px;
        overflow: hidden;
        color: #666;
      }
      .error {
        width: 120px;
        height: 20px;
        color: #f50000;
        border-radius: 3px;
        margin-left: 5px;
        font-size: 14px;
      }
    }
    .subBtn {
      margin-left: 105px;
      .el-button {
        padding: 10px 15px;
      }
    }
  }
  // 设置项
  .set-left {
    float: left;
    width: 240px;
    font-size: 16px;
    text-align: center;
    margin: 20px 0 0 0;
    border: 1px #e9e9e9 solid;
    border-top: 2px #999 solid;
    .tabTitle {
      font-weight: bold;
      margin: 0 10px;
      border-bottom: 1px #e9e9e9 dashed;
      line-height: 40px;
      height: 40px;
    }
    .el-tabs {
      .el-tabs__item.is-left {
        width: 240px;
        text-align: center;
        line-height: 40px;
        height: 40px;
      }
    }
  }
}
</style>
