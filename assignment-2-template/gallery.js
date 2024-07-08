// Select all thumbnail images and the large image
const galleryImages = document.querySelectorAll("#gallery li img");
const largeImage = document.querySelector("#gallery figure img");
const figcaption = document.querySelector("#gallery figcaption");

// Function to update the large image and caption
function updateGallery(image) {
    // Extract the filename and create the path for the large image
    const imageName = image.src.split('/').pop().replace('-small.jpg', '-large.jpg'); // Extract image name
    const largeImagePath = `images/${imageName}`;

    // Update the large image source and the figcaption text
    largeImage.src = largeImagePath;
    figcaption.textContent = image.alt; // Set caption based on alt text
}

// Add event listeners to all thumbnail images
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        updateGallery(image);
    });
});

// Set the initial image
updateGallery(galleryImages[0]);
