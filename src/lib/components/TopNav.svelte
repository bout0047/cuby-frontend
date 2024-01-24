<script>
  import "../../app.css";
  import { goto } from "$app/navigation";
  import "@fortawesome/fontawesome-free/js/all.js";
  import Cookies from "js-cookie";

  const logout = async () => {
    Cookies.remove("cubySession");
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
    <div><i class="absolute fa-solid fa-cube text-4xl top-8 right-40 text-Navbarblue"></i></div>

    <div class="absolute top-0 right-0 text-2xl p-3 mr-4 mt-5">
      <button on:click={logout} data-testid='logoutbutton'>
        <i class="fa-solid fa-arrow-right-from-bracket" />
      </button>
    </div>
  </section>
</main>

<style>
</style>
