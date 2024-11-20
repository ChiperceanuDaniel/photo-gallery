// Array cu imaginile din galerie
const images = [
    'https://www.pexels.com/photo/stunning-glacier-landscape-in-chile-29404865/',
    'https://www.pexels.com/photo/hikers-traverse-snowy-peaks-in-trentino-italy-28441137/',
    'https://www.pexels.com/photo/autumn-forest-scene-with-sunlit-path-in-pilis-29359207/',
    'https://www.pexels.com/photo/scenic-red-cabin-in-bergen-norway-landscape-29276536/',
  ];
  
  // Afișarea imaginilor în galerie
  const gallery = document.getElementById('gallery');
  
  images.forEach((url) => {
    const img = document.createElement('img');
    img.src = url;
    gallery.appendChild(img);
  });
  