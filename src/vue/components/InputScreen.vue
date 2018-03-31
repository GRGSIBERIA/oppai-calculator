<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import OppaiInput from '@/vue/views/OppaiInput.vue';

@Component<VueComponent>({
    components: {
        OppaiInput
    }
})
export default class VueComponent extends Vue { }
</script>

<!-- template -->
<template>
    <OppaiInput />
</template>

<!-- style -->
<style lang="scss">
</style>
