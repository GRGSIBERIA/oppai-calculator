<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import OppaiCalculate from '@/vue/views/OppaiCalculate.vue';

@Component<VueComponent>({
    components: {
        OppaiCalculate
    }
})
export default class VueComponent extends Vue { }
</script>

<!-- template -->
<template>
    <div id="op-calc">
        <OppaiCalculate />
    </div>
</template>

<!-- style -->
<style lang="scss">
</style>
