<script lang="ts">
  import type { ImageMetadata } from "astro";
  export let images: ImageMetadata[] = [];

  let active = 0;
</script>

<div class="grid grid-cols-5 gap-4 mt-4">
  {#each images as image, i}
    <button
      on:click={() => (active = i)}
      class={`${active === i ? "border border-black" : "border border-opacity-0 border-black"} transition-all relative group`}
    >
      <img src={image.src} alt="doesn mattah" />
      <div
        class="absolute top-0 left-0 h-full w-full bg-white bg-opacity-0 group-hover:bg-opacity-20 group-hover:cursor-pointer transition-all"
      ></div>
    </button>
  {/each}
</div>
