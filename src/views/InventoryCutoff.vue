<template>
  <div class="inventorycutoff">
      <b-container class="p-5">
          <div class="text-left">
              <div class="row p-3 ">
                  <div class="col">
                      <b-button v-b-modal.addbackup-modal variant="primary">Add Backup</b-button>
                  </div>
              </div>
          </div>

          <b-card-group deck>
              <b-card header="Inventory Backup Logs" header-tag="header" header-class="text-left">
                  <b-card-text>
                      <b-table striped hover :per-page="perPage" :current-page="currentPage" :items="inventory"
                          id="backup-list">
                      </b-table>
                      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                          aria-controls="backup-list">
                      </b-pagination>
                  </b-card-text>
              </b-card>
          </b-card-group>

      </b-container>
    <BackupModal />
  <!-- //modal for adding new backup -->
  <!-- <b-modal id="addbackup-modal" title="Add New Backup">
    <p class="my-4">Hello from modal!</p>
  </b-modal> -->

  </div>
 
</template>

<script>
import axios from 'axios'
import BackupModal from '../components/InventoryBackupModal'

export default {
  name: "InventoryCutoff",
  components: {
    BackupModal,
      
  },
  data () {
      return {
      inventory: [],
      perPage: 10,
      currentPage: 1,
    }
  },
  computed: {
    rows() {
      return this.inventory.length
    }
  },
   mounted () {
    axios
      .get('http://127.0.0.1:8000/api/cutoff/index')
      .then(response => (this.inventory = response.data))
  }
};
</script>
