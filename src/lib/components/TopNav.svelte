<script>
  import "../../app.css";
  import { goto } from "$app/navigation";
  import "@fortawesome/fontawesome-free/js/all.js";

  const logout = async () => {
    localStorage.setItem("userToken", "");
    localStorage.setItem("loggedIn", "false");
    goto("/");
  };
</script>

<main>
  <section class="pt-5 flex items-center justify-between">
    <a href="/profile" class="inline-block">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="../src/img/stokstraart.png"
        alt="Profile Picture"
        class="rounded-full shadow-md ml-4 mb-4 w-14 h-14"
      />
    </a>
    <div class="mr-4"><i class="fa-solid fa-cube text-4xl text-Navbarblue"></i></div>
  
    <div class="text-2xl p-3 mt-5">
      <button on:click={logout}>
        <i class="fa-solid fa-arrow-right-from-bracket" />
      </button>
    </div>
  </section>
</main>

<style>
</style>
