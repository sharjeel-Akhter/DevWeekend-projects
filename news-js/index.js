const urlA = 'https://newsapi.org/v2/everything?q=business&sortBy=publishedAt';
const card = document.querySelector(".cards");
const categorySpan = document.querySelectorAll(".sections span");
const backUpImg = "https://images.unsplash.com/photo-1495020689067-958852a7765e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169";


const BaseUrl = "https://newsapi.org/v2/";


const apiKey = '&apiKey=713337346dc54dd6bb443af006b0e18b';

const sections = document.querySelector(".sections")

function urlRequest(url){
    req(url).then(data => 
        data.articles.forEach(item => {
            card.innerHTML +=`<div class="card">
                        <img src="${item.urlToImage ? item.urlToImage :backUpImg}" alt="">
                        <div class="information">
                            <p class="title">${item.title}</p>
                            <p class="description">${item.description}</p>
                            <p class="time">
                            <span>${item.publishedAt.replace("Z", "").split("T")[1]}</span>
                            <span>${item.publishedAt.replace("Z", "").split("T")[0]}</</span>
                            </p>
                            <div class="other">
                                <span class="source">${item.source.name}</span>
                                <a class="url" href="${item.url}" target="_blank">Read Article <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>`
        })
    )

}

async function req(url) {
    try{
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }catch(error){
        console.log(error)
    }
    
}

// req(newsD+apiKey).then( data => console.log(data) )


sections.addEventListener("click", (event) => {
    if(event.target.tagName === "SPAN"){
        card.innerHTML = "";
        urlRequest(BaseUrl + event.target.id + apiKey);
        categorySpan.forEach(item => item.classList.remove('active'))
        event.target.classList.add("active");
    }
})

urlRequest(urlA + apiKey);