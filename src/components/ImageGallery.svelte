<script lang="ts">
  import type { ImageMetadata } from "astro";
  export let images: ImageMetadata[] = [];

  let activeIndex = 0;

  const nextImage = () => {
    if (activeIndex === images.length - 1) {
      activeIndex = 0;
      return;
    }
    activeIndex += 1;
    return;
  };
  const prevImage = () => {
    if (activeIndex === 0) {
      activeIndex = images.length - 1;
      return;
    }
    activeIndex -= 1;
    return;
  };
</script>

<div class={`sm:h-[500px] flex items-center justify-center relative`}>
  <!-- Next Image Button -->
  <button
    on:click={nextImage}
    class="absolute right-2 lg:-right-2 top-1/2 -translate-y-1/2 lg:translate-x-full w-10 h-10 sm:h-12 sm:w-12 hover:text-zinc-200 lg:hover:text-zinc-800 text-zinc-400 lg:text-zinc-800 rounded-full bg-black
     lg:bg-black lg:bg-opacity-10 bg-opacity-50 lg:hover:bg-opacity-20"
    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      ><path
        height="1em"
        width="1em"
        fill="currentColor"
        d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
      /></svg
    ></button
  >
  <!-- Previous Image Button -->
  <button
    on:click={prevImage}
    class="absolute left-2 lg:-left-2 top-1/2 -translate-y-1/2 lg:-translate-x-full w-10 h-10 sm:h-12 sm:w-12 hover:text-zinc-200 lg:hover:text-zinc-800 text-zinc-400 lg:text-zinc-800 rounded-full bg-black
    lg:bg-black lg:bg-opacity-10 bg-opacity-50 lg:hover:bg-opacity-20"
    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      ><path
        width="1em"
        height="1em"
        fill="currentColor"
        d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"
      /></svg
    ></button
  >
  <img class="object-contain h-full" src={images[activeIndex].src} alt="alt" />
</div>
<div class="grid grid-cols-5 sm:gap-4 mt-4">
  {#each images as image, i}
    <button
      on:click={() => (activeIndex = i)}
      class={`${activeIndex === i ? "border border-black" : "border border-opacity-0 border-black"} transition-all relative group`}
    >
      <img src={image.src} alt="doesn mattah" />
      <div
        class="absolute top-0 left-0 h-full w-full bg-white bg-opacity-0 group-hover:bg-opacity-20 group-hover:cursor-pointer transition-all"
      ></div>
    </button>
  {/each}
</div>
