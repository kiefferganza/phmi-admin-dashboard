<template>
<div class="container p-5">
    <div class="card mx-auto" style="width: 25rem;">
        <div class="card-header bg-primary text-left text-white">
            <b>Sign in </b>
        </div>
        <div class="card-body text-left">
            <form action="#" @submit.prevent="login">
                <div class="form-group">
                    <input type="text" placeholder="User ID" class="form-control" id="userid"
                        aria-describedby="username" v-model="userid">
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Password" class="form-control" id="password" v-model="password">
                </div>
                <button type="submit" class="btn btn-primary">Sign In</button>
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
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login',{
                userid: this.userid,
                password: this.password
            })
                .then(response => {
                    this.$router.push({name: 'Home'})
                })
        }
    }
}
</script>