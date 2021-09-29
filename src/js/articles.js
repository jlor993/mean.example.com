var articlesApp = (function() {

    function viewArticles(){

        let uri = `${window.location.origin}/api/articles`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', uri);
        
        xhr.setRequestHeader(
            'Content-Type',
            'application/json; charset=UTF-8'
        );
        
        xhr.send();
        
        xhr.onload = function(){
            let app = document.getElementById('app');
            let data = JSON.parse(xhr.response);
            let articles = data.articles;
            let table = '';
            let rows = '';

            for (let i=0; i<articles.length; i++) {
                rows = rows + `<tr>
                <td>
                    <a href="#view-${articles[i]['_id']}">${articles[i]['title']}</a>
                </td>
                <td>${articles[i]['description']}</td>
                </tr>`;
            }

            table = `<div class="card">
                <div class="card-header clearfix">
                    <h2 class="h3 float-left">Articles</h2>
                </div>
                <div class="table-responsive">
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                    </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
                </div>
            </div>`;

            app.innerHTML = table;
        }
    }

    function viewArticle(id){
        let uri = `${window.location.origin}/api/articles/${id}`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', uri);

        xhr.setRequestHeader(
            'Content-Type',
            'application/json; charset=UTF-8'
        );

        xhr.send();

        xhr.onload = function(){
            let app = document.getElementById('app');
            let data = JSON.parse(xhr.response);
            let card = '';

            card = `<div class="card">
            <div class="card-header clearfix">
                <h2 class="h3 float-left">${data.article.title}</h2>
            </div>
            <div class="card-body">
                <div>${data.article.body}</div>
                <div>${data.article.keywords}</div>
                <div>${data.article.description}</div>
                <div>${data.article.published}</div>
            </div>
            </div>`;

            app.innerHTML = card;
        }
    }

    return {
        load: function(){
            let hash = window.location.hash;
            let hashArray = hash.split('-');

            switch(hashArray[0]){

                case '#view':
                viewArticle(hashArray[1]);
                break;

                default:
                viewArticles();
                break;
            }
        }
    }
})();

articlesApp.load();

window.addEventListener("hashchange", function(){
    articlesApp.load();
});