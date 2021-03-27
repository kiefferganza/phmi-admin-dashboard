<template>
    <div class="container">
        <div class="pt-5">
            <div class="card">
                <div class="card-header text-left">
                    Current Inventory
                </div>
                <div class="card-body">
                    <DashboardCard />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardCard from '../components/Inventorycard'
export default {
      name: "Dashboard",
      components: {
        DashboardCard
      },
}
</script>