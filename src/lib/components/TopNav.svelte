<script>
  import '../../app.css';
  import { goto } from '$app/navigation';
  import '@fortawesome/fontawesome-free/js/all.js';

  const logout = async () => {
    localStorage.setItem('userToken', '');
    localStorage.setItem('loggedIn', 'false');
    goto('/');
  }

</script>
  <main>
    <div class="fixed top-0 right-0 text-2xl p-3">
        <button on:click="{logout}">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
    </div>
  </main>
  
  <style>
      
  </style>