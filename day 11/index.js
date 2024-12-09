



const apiKey = "30da20a5816341658f682fe41a687a12"

const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=30da20a5816341658f682fe41a687a12"


async function fetchdata() {
    try {
        const responce = await fetch(url);
        const data = await responce.json();
    console.log(data);
        

    const container = document.getElementById("container");

    for (let i = 0; i < data.articles.length; i++) {
        const value = data?.articles[i];
        const tag = `
 
        <div class="card">
          <div class="card__header">
            <img src="${value?.urlToImage || "https://source.unsplash.com/600x400/?computer"} alt="card__image" class="card__image" width="600">
          </div>
          <div class="card__body">
            <span class="tag tag-blue">${value.author}</span>
            <h4>${value.title}</h4>
            <p>${value.description}</p>
          </div>
          <div class="card__footer">
            <div class="user">
             
              <div class="user__info">
                <h5>${value.publishedAt}</h5>
                <small>2h ago</small>
              </div>
            </div>
          </div>
        
        
    
      </div>`;
        container.innerHTML += tag;
        // console.log(value.title);

        
    }

    } catch (error) {
        console.log("---error---", error.message);
    }
}   