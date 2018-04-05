<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Provide } from 'vue-property-decorator';


interface TreeItemInterface {
    name: string;
    children: Array<TreeItemInterface>;
}


class TreeItem implements TreeItemInterface {
    name: string;
    children: Array<TreeItem>;

    constructor(name: string) {
        this.name = name;
    }
}

@Component({})
export default class TreeView extends Vue {
    @Prop() model : TreeItem;

    @Provide('open') open = false;

    // methods---
    toggle() {
        if (!this.isFolder) {
            this.open = !this.open;
        }
    }

    changeType() {
        if (!this.isFolder) {
            Vue.set(this.model, 'children', []);
            this.addChild();
            this.open = true;
        }
    }

    addChild() {
        this.model.children.push(new TreeItem("new stuff"));
    }
    // ---methods

    // computed---
    get isFolder() {
        return this.model.children && this.model.children.length;
    }
    // ---computed
}
</script>

<template>
    <script type="text/x-template" id="item-template">
        <li>
            <div 
                :class="{bold: isFolder}"
                @click="toggle"
                @dblclick="changeType">
                <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
            </div>
            <ul v-show="open" v-if="isFolder">
                <TreeView 
                    class="item"
                    v-for="(model, index) in model.children"
                    :key="index"
                    :model="model">
                </item>
                <li class="add" @click="addChild">+</li>
            </ul>
        </li>
    </script>
</template>

<style lang="scss">

</style>
