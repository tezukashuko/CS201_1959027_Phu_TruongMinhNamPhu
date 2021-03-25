
$(document).ready(() => {

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos || currentScrollPos == 0) {
            document.getElementsByClassName("navbar")[0].style.top = "0";
        } else {
            document.getElementsByClassName("navbar")[0].style.top = "-150px";
        }
        prevScrollpos = currentScrollPos;
    };
    getProducts();

})

function getProducts() {
    let url = 'https://fakestoreapi.com/products';
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(JSON.parse(this.responseText));
            loadslider(JSON.parse(this.responseText));
        }
    }
    xhr.send();
}

function loadslider(list) {
    for (let index = 0; index < list.length; index++) {
        console.log(list[index]);
        
        for (let index = 0; index < 20; index++) {
            let newData = `
      <div class="product rounded text-center ">
        <div class="card product shadow-sm rounded w-100 h-100">
        <img class="card-img-top rounded"style="
    height: 300px; width:100%" src="${list[index].image}" alt="Card image cap">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title rounded">${list[index].title}</h5>
          <div class="bottom-price-star">
          <p href="#" class="text-danger fw-bolder fs-1 mb-0 price">$${list[index].price.toLocaleString()}</p>
          </div>
        </div>
        </div>`
            $('.my-slider').append(newData);
        }
    }
    $(".img-banner").append(`<img src="${list[0].image}" class="border-0 img-thumbnail"style="
    height: 300px; width:300px" alt="" srcset="">`);
    // $(".logo1").append(`<img src="${list[1].image}" class="border-0 img-thumbnail"style="
    // height: 100px; width:100px" alt="" srcset="">`);
    // $(".logo2").append(`<img src="${list[2].image}" class="border-0 img-thumbnail"style="
    // height: 100px; width:100px" alt="" srcset="">`);
    loadSlider();
}

function loadSlider() {
    console.log('slider');
    let slider = tns({
        container: '.my-slider',
        items: 1,
        gutter: 20,
        slideBy: 2,
        autoplay: true,
        controlsContainer: '#controls',
        edgePadding: 20,
        prevButton: '.previous',
        nextButton: '.next',
        autoplayButton: '.auto',
        autoplayHoverPause: true,
        nav: false,
        responsive: {
            640: {
                items: 2
            },
            1200: {
                items: 3
            },
            1400: {
                items: 4
            }
        },
    });
}