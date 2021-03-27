<template>
<div class="container p-5">
    <!-- <b-alert variant="danger" show v-if="error">{{ errorMessage }}</b-alert> -->
    <div class="card mx-auto" style="width: 25rem;">
        <div class="card-header bg-primary text-left text-white">
            <b>Sign in </b>
        </div>
        <div class="card-body text-left">
            <form action="#" @submit.prevent="login">
                <div class="form-group">
                    <input type="text" placeholder="User ID" class="form-control" id="userid"
                        aria-describedby="username" v-model="userid" required>
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Password" class="form-control" id="password" v-model="password" required>
                    <div >
                        <b-form-invalid-feedback :state="validation">
                            Your password must be at least 8 characters long.
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="validation">
                            Looks Good.
                        </b-form-valid-feedback>
                    </div> 
                    <div v-if="error" class="pt-3">
                        <p class="text-danger sm">{{errorMessage}}</p>
                    </div>
                </div>
                 
                <button type="submit" class="btn btn-primary" v-if="!isClicked" :disabled="!validation">Sign In</button>

                <b-button variant="primary" type="submit" v-if="isClicked" >
                    <b-spinner small type="grow"></b-spinner>
                    Loading...
                </b-button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            userid: '',
            password: '',
            isClicked: '',
            error: false,
            errorMessage: '',
        }
    },
    methods: {
        login() {
            this.isClicked = true,
            this.error = false,
            this.$store.dispatch('login',{
                userid: this.userid,
                password: this.password
            })
                .then(response => {
                    this.isClicked = false,
                    this.$router.push({name: 'TransactionLogs'})
                })
                .catch(error => {
                     this.isClicked = false
                     this.error = true
                     this.errorMessage = error.response.data.message
          })
        }
    },
    computed: {
      validation() {
        return this.password.length >= 8
      },
    }
}
</script>