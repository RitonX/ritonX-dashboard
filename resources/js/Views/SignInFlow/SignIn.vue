<template>
  <div class="container">
    <div class="request">
      آیا در سایت Ritonx عضو نیستید؟
      <router-link to="/request">ثبت نام در سایت</router-link>
    </div>
    <div class="login">
      <img
        width="50%"
        height="auto"
        src="../../../images/logoRitonx.png"
        alt="Logo Ritonx"
      />
      <h4>ورود به سایت آموزشی Ritonx</h4>
      <input type="email" placeholder="ایمیل" />
      <input type="password" placeholder="رمز عبور" />
      <button>ورود به سایت</button>
      <router-link to="/recover"> رمز عبور خود را فراموش کرده اید؟</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 80vh;
}
.login {
  width: 400px;
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;

  color: rgba(255, 255, 255, 0.3);
  a {
    color: white;
  }
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
</style>
