// වෙබ් පිටුව සම්පූර්ණයෙන්ම ලෝඩ් වුණාට පස්සේ ක්‍රියාත්මක වන කොටස
document.addEventListener("DOMContentLoaded", () => {
    console.log("Ivory Electronic website is fully loaded and ready!");

    // ගැලරියේ පින්තූරයක් ක්ලික් කළොත් ඒක විශාල කරලා පෙන්වීමට පණිවිඩයක් (Alert) දමමු
    const galleryImages = document.querySelectorAll(".gallery-grid img");
    
    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            alert("Viewing Image: " + image.alt);
        });
    });
    function orderProduct(productName, productPrice) {
    // 👇 Change the number inside the quotes to your actual WhatsApp number 👇
    const whatsappNumber = "94722619084"; 

    // This creates the automatic message text
    const message = `Hello Ivory Electronic! 👋%0A%0AI am interested in purchasing the following item from your website:%0A%0A📦 *Product:* ${productName}%0A💰 *Price:* ${productPrice}%0A%0APlease let me know if it is available for pickup or delivery!`;

    // This opens WhatsApp automatically
    const whatsappURL = `https://api.whatsapp.com/send?phone=${94722619084}&text=${hello}`;
}
});
