<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sukhamay Bardolai Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    />
  </head>
  <body class="bg-black text-white">
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-[#1a1a1a] text-white p-6 flex flex-col justify-between">
        <div>
          <!-- Profile Image -->
          <div class="flex justify-center mb-6">
            <img
              src="jpg.jpg"
              alt="Profile"
              class="rounded-full w-32 h-32 object-cover"
            />
          </div>
          <!-- Navigation -->
          <nav class="space-y-4 font-semibold text-pink-500">
            <a href="#" class="block bg-pink-900 rounded p-2 text-white">🏠 Home</a>
            <a href="#" class="block hover:text-white">✨ Features</a>
            <a href="#" class="block hover:text-white">🎨 Portfolio</a>
            <a href="file:///C:/Users/sukha/OneDrive/Desktop/website/my%20cv%20.pdf" class="block hover:text-white">📄 Resume</a>
            <a href="#" class="block hover:text-white">📁 Projects</a>
            <a href="#" class="block hover:text-white">💵 Pricing</a>
            <a href="#" class="block hover:text-white">📝 Blog</a>
            <a href="#" class="block hover:text-white">📞 Contact</a>
          </nav>
        </div>

        <!-- Social Icons -->
        <div class="flex justify-center space-x-6 mt-20">
          <a href="https://www.instagram.com/sukhamay11th?igsh=MTRpNnk3ZjA5dmZycg=="><i class="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/sukhamay-bardolai-361930324"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.facebook.com/chhoto.bardolai"><i class="fab fa-facebook"></i></a>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-10 relative bg-black text-white">
        <!-- PREMIUM Badge -->
        <div class="absolute t op-5 right-5 bg-yellow-400 text-black font-bold px-4 py-1 rounded">
          PREMIUM
        </div>

        <div class="flex items-center justify-between h-full">
          <!-- Text Section -->
          <div class="max-w-xl">
            <p class="text-red-400 text-lg">HELLO</p>
            <h1 class="text-4xl font-bold mt-2">I’m Sukhamay Bardolai</h1>
            <h2 class="text-3xl text-pink-500 font-bold mt-0.5">A Student of iit(ISM) Dhanbad<span class="animate-pulse">|</span></h2>
            <p class="mt-6 text-blue-400">
              Nothing is Impossible, and always keep your Smile,stay happy and well.
            </p>
            <button class="mt-6 bg-pink-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-pink-700">
              View Portfolio →
            </button>
          </div>

          <!-- Right-side Person Image -->
          <div>
            <img
              src="image.png.png"
              alt="Person"
              class="h-[700px]"
              background="bg-black"
              width="460px"
            />
          </div>
        </div>
      </main>
    </div>
  </body>
</html>
