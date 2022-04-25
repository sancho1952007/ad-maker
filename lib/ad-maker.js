function RefreshAds() {
    const ads = document.getElementsByClassName('ad');
    for (let i = 0; i < ads.length; i++) {
        ads[i].addEventListener('click', function() {
            window.open(this.getAttribute('url'), '_blank');
        });
    }

    const ads_img = document.querySelectorAll('.ad>img');
    for (let i = 0; i < ads_img.length; i++) {
        ads_img[i].style.width = ads_img[i].parentNode.getAttribute('width') + "px";
        ads_img[i].style.height = ads_img[i].parentNode.getAttribute('height') + "px";
    }

    const ads_vids = document.querySelectorAll('.ad>video');
    for (let i = 0; i < ads_vids.length; i++) {
        ads_vids[i].style.width = ads_vids[i].parentNode.getAttribute('width') + "px";
        ads_vids[i].style.height = ads_vids[i].parentNode.getAttribute('height') + "px";
        document.addEventListener('mousedown', function() {
            ads_vids[i].play();
            document.removeEventListener('click', function() {});
        });
    }

    const ads_text = document.querySelectorAll('.ad>b');
    for (let i = 0; i < ads_text.length; i++) {
        ads_text[i].style.width = ads_text[i].parentNode.getAttribute('width') + "px";
    }

}

window.onload = function() {
    if (document.querySelector('link[href="https://sancho1952007.github.io/ad-maker/lib/ad-maker.min.css"]') != null || document.querySelector('link[href="https://sancho1952007.github.io/ad-maker/lib/ad-maker.css"]') != null) {
        console.log('Successfully Loaded Ad-Maker (Created By Sancho Godinho)');
    } else {
        console.log('Ad-Maker CSS File Not Loaded');
    }
    RefreshAds();
}