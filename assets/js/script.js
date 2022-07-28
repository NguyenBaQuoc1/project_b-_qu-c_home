expireDate = new Date
expireDate.setMonth(expireDate.getMonth()+6)
jcount = eval(cookieVal("jaafarCounter"))
jcount++
document.cookie = "jaafarCounter="+jcount+";expires=" + expireDate.toGMTString()

function cookieVal(cookieName) {
    thisCookie = document.cookie.split("; ")
    for (i=0; i<thisCookie.length; i++){
        if (cookieName == thisCookie[i].split("=")[0]){
            return thisCookie[i].split("=")[1]
        }
    }
    return 0
}

function page_counter(){
    for (i=0;i<(6-jcount.toString().length);i++)
        document.write('<span class="counter">0</span>')
    for (y=0;y<(jcount.toString().length);y++)
        document.write('<span class="counter">'+jcount.toString().charAt(y)+'</span>')
}


// Gallery image view

    const galleryItem = document.getElementsByClassName("gallery-item");
    const lightBoxContainer = document.createElement("div");
    const lightBoxContent = document.createElement("div");
    const lightBoxImg = document.createElement("img");
    const lightBoxPrev = document.createElement("div");
    const lightBoxNext = document.createElement("div");

    lightBoxContainer.classList.add("lightbox");
    lightBoxContent.classList.add("lightbox-content");
    lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
    lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

    lightBoxContainer.appendChild(lightBoxContent);
    lightBoxContent.appendChild(lightBoxImg);
    lightBoxContent.appendChild(lightBoxPrev);
    lightBoxContent.appendChild(lightBoxNext);

    document.body.appendChild(lightBoxContainer);

    let index = 1;

    function showLightBox(n) {
    if (n > galleryItem.length) {
    index = 1;
} else if (n < 1) {
    index = galleryItem.length;
}
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

    function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
    for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

    function slideImage(n) {
    showLightBox(index += n);
}
    function prevImage() {
    slideImage(-1);
}
    function nextImage() {
    slideImage(1);
}
    lightBoxPrev.addEventListener("click", prevImage);
    lightBoxNext.addEventListener("click", nextImage);

    function closeLightBox() {
    if (this === event.target) {
    lightBoxContainer.style.display = "none";
}
}
    lightBoxContainer.addEventListener("click", closeLightBox);

//show more
$(document).ready(function(){
    $(".content").slice(0, 6).show();
    $("#loadMore").on("click", function(e){
        e.preventDefault();
        $(".content:hidden").slice(0, 6).slideDown();
        if($(".content:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
        }
    });

})
//filter
$(function(){
    var $btn = $('.category-btn [data-filter]'),
        $list = $('.category-list [data-category]');

    $btn.on('click', function() {
        var $btnCat = $(this).attr('data-filter');

        $list.removeClass('is-animate');

        if ($btnCat == 'all') {
            $list.show().addClass('is-animate');

        } else {
            $list.hide().removeClass('is-animate').filter('[data-category = "' + $btnCat + '"]').show().addClass('is-animate');
        }
        return false;
    });
});

