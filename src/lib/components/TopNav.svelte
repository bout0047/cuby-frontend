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
  <section class="pt-5">
    <a href="/profile" class="disply: inline-block"
      ><img
        src="../src/img/stokstraart.png"
        alt="Profile Picture"
        class="rounded-full shadow-md ml-4 mb-4 w-14 h-14"
      />
    </a>
    <div><i class="fixed fa-solid fa-cube text-4xl top-8 right-40 text-Navbarblue"></i></div>

    <div class="fixed top-0 right-0 text-2xl p-3 mr-4 mt-5">
      <button on:click={logout}>
        <i class="fa-solid fa-arrow-right-from-bracket" />
      </button>
    </div>
  </section>
</main>

<style>
</style>
