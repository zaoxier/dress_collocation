<template>
  <div class="postForum">
      <div class="titleCrumbs">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>发帖</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="post-form">
        <div class="title">
          <i><img src="../../../assets/images/postforum/chat_32.png"></i><h3>帖子信息</h3>
        </div>
        <div class="form">
          <div class="form-theme-type">
            <el-select v-model="themeType" placeholder="请选择">
              <el-option
                v-for="item in theTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="form-title">
            <el-input v-model="posttlt" placeholder="请输入帖子标题"></el-input>
            <el-select v-model="posttltColor" placeholder="请选择">
              <el-option
                v-for="item in posttltCList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
             <el-checkbox v-model="checked">标题加粗</el-checkbox>
            </div>
          <div class="form-edit-box">
            <quill-editor
              v-model="content"
              ref="myQuillEditor"
              :options="editorOption"
              @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
              @change="onEditorChange($event)">
            </quill-editor>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

export default {
  name: "post_forum",
  data() {
    return {
      content: null,
      editorOption: {},
      // 主题类型，帖子标题
      themeType: '',
      posttlt: '',
      posttltColor: '',
      theTypeList: [
        {
          value: '场景搭配',
          label: '场景搭配'
        },
        {
          value: '季节',
          label: '季节'
        },
        {
          value: '时装秀场',
          label: '时装秀场'
        },
        {
          value: '时尚街拍',
          label: '时尚街拍'
        },
        {
          value: '风格创造',
          label: '风格创造'
        },
        {
          value: '明星剧场',
          label: '明星剧场'
        },
        {
          value: '生活',
          label: '生活'
        },
        {
          value: '发现',
          label: '发现'
        }],
      posttltCList: [
        {
          value: 'red',
          label: '红色'
        },
        {
          value: 'yellow',
          label: '黄色'
        },
        {
          value: 'orange',
          label: '橙色'
        },
        {
          value: 'blue',
          label: '蓝色'
        }
      ],
      checked: false
    }
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorBlur() {//失去焦点事件
    },
    onEditorFocus() {//获得焦点事件
    },
    onEditorChange() {//内容改变事件
    }
  }
};
</script>

<style lang="less">
.postForum {
  background-color: #f8f8f8;
  .titleCrumbs {
    width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  .post-form {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    .title {
      height: 60px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      i {
        width: 30px;
        height: 22px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      h3 {
        padding-left: 10px;
        font-size: 16px;
        color: #666;
        display: block;
      }
    }
    .form {
      padding: 20px 30px;
      .form-theme-type {
        padding-top: 30px;
      }
      .form-title {
        padding-top: 30px;
        & > .el-input {
          width: 600px;
        }
        .el-checkbox {
          padding-left: 20px;
        }
      }
      .form-edit-box {
        margin-top: 30px;
        .ql-editor {
          height: 500px;
        }
      }
    }
  }
}
</style>


