<template>
  <div>
    <b-modal id="addbackup-modal" title="Add New Backup" size="xl">
      <div class="row pb-3">
        <div class="col">
          <label for="example-datepicker">Choose a date</label>
          <b-form-datepicker v-model="selecteddate" class="mb-2"></b-form-datepicker>
        </div>
      </div>
      <div class="pb-3">
        <button class="btn btn-primary" @click="addField">Add Item</button>
      </div>

      <div v-for="(field, index) in fields" :key="index">
        <div class="input-group">
          <select class="form-control" v-model="field.itemID">
            <option value="" disabled>Item</option>
            <option v-for="item in items" :key="item.ID" :value="item.ID">{{ item.ItemName }}</option>
          </select>
          <input type="number" placeholder="Quantity" v-model="field.quantity" class="form-control">
          <span class="input-group-btn pl-3">
            <button class="btn btn-danger mb-2" @click="deleteField(index)">
              delete
            </button>
          </span>
        </div>
      </div>
      <div>
        <!-- {{ fields }}
        {{ selecteddate }} -->
      </div>
    </b-modal>
  </div>
  
</template>

<script>
// TODO: Insert Backup in database
import axios from 'axios'
  export default {
    data() {
      return {
        items: [],
        fields: [],
        selecteddate: '',
      }
    },
    mounted () {
       axios
      .get('http://127.0.0.1:8000/api/cutoff/items')
      .then(response => (this.items = response.data))
    },
    methods: {
      addField: function () {
        this.fields.push({
          itemID: '',
          quantity: '',
        });
      },
      deleteField: function (index) {
      console.log(index);
      console.log(this.fields);
      this.fields.splice(index, 1);
    },
    }
  }
</script>


   