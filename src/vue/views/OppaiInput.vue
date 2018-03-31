<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import InputForm from '@/vue/components/InputForm.vue';

@Component<VueComponent>({
    components: {InputForm}
})
export default class VueComponent extends Vue { }
</script>

<!-- template -->
<template>
    <div>
        <p>oppai input</p>
        <p>
            <InputForm :title="test" :value="hoge" />
        </p>
    </div>
</template>

<!-- style -->
<style lang="scss">
</style>
