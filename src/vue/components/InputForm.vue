<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';


@Component<InputForm>({
    props: {
        title: {type: String, required: true},
        value: {type: String, required: true}
    },
    template: `
        <div>
            <p>
                <input v-model="{{title}}">
            </p>
            <p>
                {{value}}
            </p>
        </div>
    `,
    watch: {
        done: function(value, oldValue) {
            console.log(`check chenged: ${this.title}, ${this.value}`);
        }
    }
})
export default class InputForm extends Vue {
    title!: string;
    value!: string;
}

</script>

<!-- template -->
<template>
    
</template>

<!-- style -->
<style lang="scss">

</style>
