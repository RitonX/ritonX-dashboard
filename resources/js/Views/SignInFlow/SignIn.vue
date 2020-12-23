<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div
      class="request"
      :class="{ 'light-request': isDrkMode, 'dark-request': !isDarkMode }"
    >
      آیا در سایت Ritonx عضو نیستید؟
      <router-link to="/request">ثبت نام در سایت</router-link>
    </div>
    <div class="login">
      <img
        width="60%"
        height="auto"
        src="../../../images/darkLogo.svg"
        alt="Logo Ritonx"
        v-show="isDarkMode"
      />
      <img
        width="60%"
        height="auto"
        src="../../../images/lightLogo.svg"
        alt="Logo Ritonx"
        v-show="!isDarkMode"
      />
      <h4 :class="{ 'light-text': isDrkMode, 'dark-text': !isDarkMode }">
        ورود به سایت آموزشی Ritonx
      </h4>
      <input
        :class="{ 'light-field': isDrkMode, 'dark-field': !isDarkMode }"
        type="email"
        placeholder="ایمیل"
      />
      <input
        :class="{ 'light-field': isDrkMode, 'dark-field': !isDarkMode }"
        type="password"
        placeholder="رمز عبور"
      />
      <button>ورود به سایت</button>
      <router-link
        :class="{ 'light-link': isDrkMode, 'dark-link': !isDarkMode }"
        to="/recover"
      >
        رمز عبور خود را فراموش کرده اید؟</router-link
      >
      <button @click="toggleDarkMode">Toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      isDarkMode: true,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.style.background = this.isDarkMode ? "#212c4f" : "#f0f3f5";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../sass/_colors.scss";
.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 90vh;
}
.login {
  width: 400px;
}

.light-request {
  color: rgba(255, 255, 255, 0.3);
  a {
    color: white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);
  a {
    color: $black;
  }
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;
}

h4 {
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
}
input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;
  //   padding-right: 20px;
  text-align: center;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 4px;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 30px;
  cursor: pointer;
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;

  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>
