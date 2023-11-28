<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Event Page</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
  }
  .event-card {
    width: 350px;
    background-color: #ADD8E6;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  .event-card h1 {
    color: #00008B;
    text-align: center;
    margin: 0;
    padding: 20px;
  }
  .event-image {
    background-color: #808080;
    height: 200px; /* Placeholder height */
  }
  .description {
    background-color: #ffffff;
    padding: 20px;
    color: #333;
  }
  .join-button {
    display: block;
    width: 100%;
    padding: 15px;
    background-color: #00008B;
    color: white;
    border: none;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
</style>
</head>
<body>
<div class="event-card">
    <h1>Event Name</h1>
    <div class="event-image">
      <!-- Image would go here -->
    </div>
    <div class="description">
        <p>In Poland, a dancing potato named Pierogi became the veggie dance champion after a magical disco adventure. The country celebrated with a massive potato party, and Pierogi lived happily ever after, grooving in the fields. The end!</p>
    </div>
    <button class="join-button">Join this event!</button>
</div>
</body>
</html>
