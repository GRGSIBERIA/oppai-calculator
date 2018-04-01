<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';


@Component<InputForm>({
    watch: {
        done: function(value, oldValue) {
            console.log(`check chenged: ${this.title}, ${this.value}`);
        }
    }
})
export default class InputForm extends Vue {
    @Prop() title: string;
    @Prop() value: string;
}

</script>

<!-- template -->
<template>
    <div>
        {{title}}
    </div>
</template>

<!-- style -->
<style lang="scss">

</style>
