<script lang="ts">
    export let size: number;
    export let top: number;
    export let left: number;
    export let color: string;
    export let wings: string;

    let colorStyle = color ? color : 'yellow';
</script>

<style>
    #bird {
        border: solid black 1px;
        position: absolute;
        padding: 0;
    }
</style>

<section
    style="
        background-color: {colorStyle};
        width: {size}px; 
        height: {size}px; 
        top: {top}px; 
        left: {left}px;
        text-align: center"
    id="bird">
    {wings}
</section>