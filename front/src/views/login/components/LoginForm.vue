<template>
  <el-form
    ref="loginFormRef"
    :model="loginForm"
    :rules="loginRules"
    size="large"
  >
    <el-form-item prop="u">
      <el-input v-model="loginForm.u" placeholder="用户名：orcas">
        <template #prefix>
          <el-icon class="el-input__icon"><user /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="p">
      <el-input
        v-model="loginForm.p"
        type="password"
        placeholder="密码：orcas"
        show-password
        autocomplete="new-password"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button
      :icon="CircleClose"
      round
      size="large"
      @click="resetForm(loginFormRef)"
      >重置</el-button
    >
    <el-button
      :icon="UserFilled"
      round
      size="large"
      type="primary"
      :loading="loading"
      @click="login(loginFormRef)"
    >
      登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Login } from "@/api/interface";
import type { ElForm } from "element-plus";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { loginApi } from "@/api/modules/login";
import { GlobalStore } from "@/store";
import { MenuStore } from "@/store/modules/menu";
import { TabsStore } from "@/store/modules/tabs";
import md5 from "js-md5";

const globalStore = GlobalStore();
const menuStore = MenuStore();
const tabStore = TabsStore();

// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
  u: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  p: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

// 登录表单数据
const loginForm = reactive<Login.ReqLoginForm>({
  u: "",
  p: "",
});

const loading = ref(false);
const router = useRouter();
// login
const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (!valid) return;
    loading.value = true;
    try {
      // loginForm.password = md5(loginForm.password);
      const res = await loginApi(loginForm);
      // 存储 token
      globalStore.setToken(res.data!.access_token);
      globalStore.setUserInfo(res.data!.user);
      // 登录成功之后清除上个账号的 menulist 和 tabs 数据
      menuStore.setMenuList([]);
      tabStore.closeMultipleTab();

      ElMessage.success("登录成功！");
      router.push({ name: "home" });
    } finally {
      loading.value = false;
    }
  });
};

// resetForm
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

onMounted(() => {
  // 监听enter事件（调用登录）
  document.onkeydown = (e: any) => {
    e = window.event || e;
    if (e.code === "Enter" || e.code === "enter" || e.code === "NumpadEnter") {
      if (loading.value) return;
      login(loginFormRef.value);
    }
  };
});
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
