
const images = [
    'https://images.pexels.com/photos/29404865/pexels-photo-29404865.jpeg',
    'https://images.pexels.com/photos/28441137/pexels-photo-28441137.jpeg',
    'https://images.pexels.com/photos/15552573/pexels-photo-15552573/free-photo-of-old-rusty-car-covered-in-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/29276536/pexels-photo-29276536.jpeg',
    'https://images.pexels.com/photos/17366887/pexels-photo-17366887/free-photo-of-house-among-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/10603941/pexels-photo-10603941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27260888/pexels-photo-27260888/free-photo-of-the-rock-houses-are-carved-into-the-side-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28848492/pexels-photo-28848492/free-photo-of-rustic-lodge-in-forested-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];
  
  
  const gallery = document.getElementById('gallery');
  
  images.forEach((url) => {
    const img = document.createElement('img');
    img.src = url; 
    img.alt = "Fotografie peisaj"; 
    img.style.width = '200px'; 
    img.style.margin = '10px'; 
    gallery.appendChild(img); 
  });
  
  