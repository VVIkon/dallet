<script setup lang="ts">
import { Message } from '@element-plus/icons-vue'
import { onMounted, onBeforeUnmount } from 'vue'
import { useWebSocket } from '@/module/messendo/composable/useWebSocket';
import { ROUTES_PATHS } from '@/constants'
// import { useAuth } from '@/module/auth/composable/useAuth';

// const { isTokenated, getToken, isAuthenticated, getProfile, getUser } = useAuth();
// const {getToken, state, getProfile, isTokenated } = useAuth();


// const loadProfile = async () => {
//   try {
//     if (isTokenated.value && !state?.value?.authUser) {
//       await getProfile();
//       console.log('Профиль загружен2:', state.value.authUser);
//     }
//     console.log('>>> #3 :', state.value.authUser);

//   } catch (err) {
//       console.error(err);
//   }
// };
// console.log('>>> #2 :', getToken);

const {
  messages,
  messageInput,
  connectionStatus,
  connect,
  send,
  disconnect,
} = useWebSocket(ROUTES_PATHS.WEB_SOCKET);

const sendMessage = () => {
  if (send())
    messageInput.value = '';
}

onMounted(() => {
  connect();
})
onBeforeUnmount(() => {
  disconnect()
})
</script>
<template>
  <div class="messendo-container">
    <el-row>
      <el-col :xs="2" :sm="4" :md="7" :lg="6"  :xl="8" >
        <div style="color: transparent">Регистрация</div>
      </el-col>
      <el-col :xs="20" :sm="16" :md="14" :lg="12"  :xl="8" >
        <div class="messendo-form">
          <div class="scroll-box">
            <el-scrollbar>
              <div v-for="(message, index) in messages" :key="index">
                <div v-if="message.event === 'sendMessage'" class="input-msg right-msg">
                  {{ `>>> ${message.senderName}: ${message.message}` }}
                </div>
                <div v-if="message.event === 'newMessage'" class="input-msg left-msg">
                  {{ `<<< ${message.senderName}: ${message.message}` }}
                </div>
                <div v-if="message.event === 'errorMessage'" class="input-msg error-msg">
                  {{ `!!! Error: ${message.message}` }}
                </div>
              </div>
            </el-scrollbar>
          </div>
          <h4>  Статус соединения: {{ connectionStatus }}</h4>
          <el-input
            v-model="messageInput"
            style="width: 90%"
            type="textarea"
            :rows="2"
            placeholder="Please type"
          />
          <el-button
            type="primary"
            :icon="Message"
            @click="sendMessage"
            style="
              position: relative;;
              width: 80px;
              height: 50px;
              z-index: 1;
            "
            />
        </div>
      </el-col>
      <el-col :xs="2" :sm="4" :md="7" :lg="6"  :xl="8" >
        <div style="color: transparent"></div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.scroll-box {
    height: 74vh;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
}
.input-msg {
  font-size: 11px;
}
.right-msg {
  text-align: right;
  color:blue;
}
.left-msg {
  text-align: left;
  color:green;
}
.error-msg {
  text-align: center;
  color:red;
}
</style>
