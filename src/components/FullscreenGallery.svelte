<script lang="ts">
  import type { ImageMetadata } from "astro";

  export let isOpen: boolean;
  export let images: ImageMetadata[] = [];
  let activeIndex = 0;

  const closeFullscreen = () => {
    isOpen = false;
    document.body.classList.remove("modal-open");
  };

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

<svelte:window
  on:keydown={(e) => {
    if (isOpen) {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          closeFullscreen();
          break;
        case "ArrowRight":
          e.preventDefault();
          nextImage();
          break;
        case "ArrowLeft":
          e.preventDefault();
          prevImage();
          break;
      }
    }
  }}
/>
<div
  class={`${
    isOpen ? "block" : "hidden"
  } fixed top-0 left-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center bg-opacity-70 z-50`}
>
  <!-- Previous button -->

  <button
    on:click={prevImage}
    class="fixed left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:h-12 sm:w-12 hover:text-zinc-200 text-zinc-400 rounded-full bg-black
    lg:bg-black bg-opacity-50"
    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      ><path
        width="1em"
        height="1em"
        fill="currentColor"
        d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"
      /></svg
    ></button
  >

  <!-- Next button -->

  <button
    on:click={nextImage}
    class="fixed right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:h-12 sm:w-12 hover:text-zinc-200 text-zinc-400 rounded-full bg-black
     lg:bg-black bg-opacity-50"
    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      ><path
        height="1em"
        width="1em"
        fill="currentColor"
        d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
      /></svg
    ></button
  >
  <div>
    {#if images.length > 0}<img
        class="object-contain w-full max-w-screen-xl"
        src={images[activeIndex].src}
        alt="test"
      />
    {/if}
  </div>
  <button
    on:click={() => closeFullscreen()}
    class="absolute top-5 right-5 text-5xl text-black">X</button
  >
</div>
