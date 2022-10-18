<template>
  <div class="container mt-3">
    <form class="row g-3 needs-validation col-md-6 m-auto" novalidate>
      <div class="col-md-12">
        <label for="validationCustom01" class="form-label">Movie Search Term</label>
        <input type="text" class="form-control" v-model="terminator" placeholder="terminator" required>
      </div>
      <div class="col-md-12">
        <label for="validationCustom02" class="form-label">User Name</label>
        <input type="text" class="form-control" v-model="username" placeholder="user name" required>
      </div>
      <div class="col-12 mt-5 m-auto">
        <button class="btn btn-primary w-100" type="button" @click="onStart">Start</button>
      </div>
    </form>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'

export default defineComponent({
  name: "HomeView",
  setup() {
    const store = useStore(key)
    store
  },
  props: {
    name: String,
    msg: { type: String, required: true }
  },
  data() {
    return {
      terminator: '',
      username: '',
    }
  },
  methods: {
    validate() {
      return this.username && this.terminator
    },
    async onStart() {
      if (this.validate()) {
        this.$store.state.username = this.username
        this.$store.state.terminator = this.terminator
        this.$router.push({ name: 'guessing', query: { terminator: this.terminator, username: this.username }, params: { test: 'test' } })
      } else {
        alert("Type correct value")
      }
    }
  }
})
</script>