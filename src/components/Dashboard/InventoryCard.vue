<template>
    <div class="row">
        <div class="col" v-for="(item,key) in items" :key="key">
            <div class="card shadow-sm">
                <div 
                class="card-header text-white" :class="bgClass[key]">{{ item.ItemName }}</div>
                <div class="card-body">
                    <h5 class="card-title">{{ item.quantity }}</h5>
                    <div v-if="item.diff > 0">
                        <h6 class="card-subtitle mb-2 text-success">
                            <b-icon-arrow-up></b-icon-arrow-up>
                            {{ item.diff }} %
                        </h6>
                    </div>
                    <div v-if="item.diff < 0">
                        <h6 class="card-subtitle mb-2 text-danger">
                            <b-icon-arrow-down></b-icon-arrow-down>
                            {{ item.diff }} %
                        </h6>
                    </div>
                    <div v-if="item.diff == 0">
                        <h6 class="card-subtitle mb-2 text-secondary">
                            <b-icon-arrow-left-right></b-icon-arrow-left-right>
                            {{ item.diff }} %
                        </h6>
                    </div>
    
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'InventoryCard',
    data() {
        return {
            items: [],
            token: '',
            bgClass: ['bg-primary','bg-danger','bg-warning','bg-info'],

        }
    },
    computed: {
        getKey() {
            return this.$store.state.token
        }
    },
    mounted() {
        this.getInventoryItems()
    },
    methods: {
        getInventoryItems () {
               this.token = this.getKey;
               axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token

                axios.get('http://127.0.0.1:8000/api/inventory')
                .then(response => {
                    this.items = response.data
                    console.log(response.data)
                })
                
        }
    }
}
</script>