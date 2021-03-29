<template>
    <div class="container">
        <div class="pt-5">
            <InventoryCard/>
        </div>
    </div>
</template>

<script>
import InventoryCard from '../components/Dashboard/InventoryCard'
export default {
      name: "Dashboard",
      components: {
        InventoryCard
      },
}
</script>