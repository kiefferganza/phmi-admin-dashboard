<template>
  <div>
    <b-modal id="addbackup-modal" title="Add New Backup" size="xl">
      <div class="row pb-3">
        <div class="col">
          <label for="example-datepicker">Choose a date</label>
          <b-form-datepicker v-model="selecteddate" class="mb-2"></b-form-datepicker>
        </div>
        <div class="col">
          <label>Database</label>
          <select class="form-control"  v-model="selectedCenter">
            <option 
            :value="center" 
            v-for="(center, key) in centers" 
            :key="key">{{center}}</option>

          </select>
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
      <!-- <div>
         {{ fields }}
        {{ selectedCenter }} 
      </div> -->
 <template #modal-footer>

   <!-- Emulate built in modal footer ok and cancel button actions -->
   <b-button variant="success" @click="insertRecord()">
     Submit
     <div v-if="isClicked" :disabled="validated == 1">
        <b-spinner small type="grow"></b-spinner>
        <span class="sr-only">Loading...</span>
     </div>
   </b-button>

   <b-button variant="danger" @click="closeModal()">
     Cancel
   </b-button>

 </template>
    </b-modal>
  </div>
  
</template>

<script>
// TODO: NOTHING
import axios from 'axios'
export default {
  data() {
    return {
      items: [],
      fields: [],
      centers: [],
      selecteddate: '',
      selectedCenter: '',
      componentKey: 0,
      isClicked: false,
      token: '',
      
    }
  },
  computed: {
    getKey() {
      return this.$store.state.token
    },
    getCenters() {
      return this.$store.getters.getCenters
    }
  },
  mounted() {
    this.centers = this.getCenters;
    this.token = this.getKey;
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token
    axios
      .get('http://127.0.0.1:8000/api/cutoff/items')
      .then(response => (this.items = response.data))
  },
  methods: {
    addField: function () {

      this.fields.push({
        itemID: '',
        quantity: '',
        date: this.selecteddate,
        database: this.selectedCenter
      });
    },
    deleteField: function (index) {
      console.log(index);
      console.log(this.fields);
      this.fields.splice(index, 1);
    },
    insertRecord: function () {
      this.isClicked = true,
        axios
        .post('http://localhost:8000/api/cutoff/store', this.fields)
        .then(response => (
          console.log(response.data),
          this.isClicked = false,
          this.$root.$refs.InventoryCutoff.loadTableData(),
          this.$bvModal.hide("addbackup-modal"),
          this.selecteddate = '',
          this.fields = []
        ))
        .catch(error => console.log(error))
    },
    closeModal: function () {
      this.$bvModal.hide("addbackup-modal"),
        this.selecteddate = '',
        this.fields = []
    }
  },

}
</script>


   