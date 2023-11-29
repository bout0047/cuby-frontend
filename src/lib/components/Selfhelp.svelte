<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meditation Button</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex flex-col items-center justify-center w-full h-screen bg-blue-900">
  <!-- Added margin-top (mt-8) to the top of the container -->
  <div class="flex flex-col items-center space-y-4 mt-8">
    <!-- Self Help Text and Cube Icon Container -->
    <div class="flex items-center justify-center">
      <!-- Self Help Text -->
      <span class="text-black text-lg font-bold mr-14">Self-Help</span>
      <!-- SVG Icon -->
      <svg class="w-12 h-12 text-black" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"></path>
      </svg>
    </div>

    <!-- Meditation Button -->
    <button style="background-color: #fbfff1;" class="w-full max-w-xs hover:bg-gray-100 text-black font-bold py-4 px-6 rounded-2xl shadow-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 active:shadow-inner transform active:scale-95 transition duration-150 ease-in-out">
      <span>Meditation 20 minutes</span>
      <span class="text-xl">→</span>
    </button>

    <!-- Yoga Button -->
    <button style="background-color: #fbfff1;" class="w-full max-w-xs hover:bg-gray-100 text-black font-bold py-4 px-6 rounded-2xl shadow-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 active:shadow-inner transform active:scale-95 transition duration-150 ease-in-out">
      <span>Yoga 15 minutes</span>
      <span class="text-xl">→</span>
    </button>

    <!-- Breathing Exercise Button -->
    <button style="background-color: #fbfff1;" class="w-full max-w-xs hover:bg-gray-100 text-black font-bold py-4 px-6 rounded-2xl shadow-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 active:shadow-inner transform active:scale-95 transition duration-150 ease-in-out">
      <span>Breathing exercise 10 minutes</span>
      <span class="text-xl">→</span>
    </button>
  </div>
</body>
</html>
