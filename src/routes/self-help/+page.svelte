<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import TopNav from '$lib/components/TopNav.svelte';
  </script>
  
  <TopNav />
  
  <main class=" mt-8 items-center justify-center w-full h-screen bg-blue-900">
    <div class="space-y-4 ml-6">
      <div class="flex items-center justify-center">
        <span class="text-black text-3xl font-bold mr-12">Self-Help</span>
      </div>
      <button class="w-full max-w-xs text-black font-bold py-4 px-6 rounded-2xl shadow-lg flex justify-between items-center transition duration-150 ease-in-out">
        <a href="https://www.youtube.com/watch?v=inpok4MKVLM" target="_blank">
        <span>Meditation 20 minutes</span>
        <span class="text-xl">→</span>
      </button>
      <button class="w-full max-w-xs text-black font-bold py-4 px-6 rounded-2xl shadow-lg flex justify-between items-center transition duration-150 ease-in-out">
        <span>Yoga 15 minutes</span>
        <span class="text-xl">→</span>
      </button>
      <button class="w-full max-w-xs text-black font-bold py-4 px-6 rounded-2xl shadow-lg flex justify-between items-center transition duration-150 ease-in-out">
        <span>Breathing exercise 10 minutes</span>
        <span class="text-xl">→</span>
      </button>
      <button class="w-full max-w-xs text-black font-bold py-4 px-6 rounded-2xl shadow-lg flex justify-between items-center transition duration-150 ease-in-out">
        <span>Taking a walk</span>
        <span class="text-xl">→</span>
      </button>
    </div>
    <footer>
      <NavBar/>
    </footer>
  </main>
  <style>
    /* Your styles go here */
  </style>
  