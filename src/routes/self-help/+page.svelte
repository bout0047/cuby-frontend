<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import TopNav from '$lib/components/TopNav.svelte';

    function dropdownParagraph () {
      const dropdown = document.getElementById("dropdown");
      dropdown?.classList.toggle("hidden");
    }
  </script>
  
  <TopNav />
  
  <main class=" mt-8 items-center justify-center w-full h-screen bg-blue-900">
    <div class="space-y-4 ml-6">
      <div class="flex items-center justify-center">
        <span class="text-black text-3xl font-bold mr-12">Self-Help</span>
      </div>
      <button class="w-full max-w-xs bg-aquamarine text-black font-bold py-4 px-6 rounded-2xl shadow-lg flex justify-between items-center">
        <a href="https://www.youtube.com/watch?v=inpok4MKVLM" target="_blank">
        <span>Meditation 20 minutes</span>
        <span class="text-xl">→</span>
      </button>
      <button class="w-full max-w-xs bg-aquamarine text-black font-bold py-4 px-6 rounded-2xl shadow-lg flex justify-between items-center">
        <a href="https://www.youtube.com/watch?v=djLCTwi3PmU&ab_channel=CharlieFollows" target="_blank">
        <span>Yoga 15 minutes</span>
        <span class="text-xl">→</span>
      </button>
      <button class="w-full max-w-xs bg-aquamarine text-black font-bold py-4 px-6 rounded-2xl shadow-lg flex justify-between items-center">
        <a href="https://www.youtube.com/watch?v=tybOi4hjZFQ&ab_channel=WimHof" target="_blank">
        <span>Breathing exercise 10 minutes</span>
        <span class="text-xl">→</span>
      </button>
      <div>
        <button on:click="{dropdownParagraph}" class="w-full max-w-xs bg-aquamarine text-black font-bold py-4 px-6 rounded-2xl shadow-lg flex justify-between items-center">
          <span>Taking a walk</span>
          <span class="text-xl">→</span>
        </button>
        <div id="dropdown" class="hidden w-full max-w-xs p-3 border-b-lg">
          <p>Taking a walk can mean different things for different people, so this is a recommended way to calm you down, you can deviate from this if its better for you.
  
            To take a walk, simply either go outside or walk around the room if acceptable. this will increase bloodflow that will calm you down. if you cannot, some other phisical activity may also be a good solution.</p>
        </div>
      </div>
      
    </div>
    <footer>
      <NavBar/>
    </footer>
  </main>
  