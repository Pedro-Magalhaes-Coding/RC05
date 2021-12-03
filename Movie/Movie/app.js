document.addEventListener('DOMContentLoaded', () => {
    function getFilmName(){
        var NomeFilme = document.getElementById("nomefilme").value;
        var xhr = new XMLHttpRequest();


        var  url= "http://www.omdbapi.com/?apikey=29f6343d&s=" + NomeFilme;

        console.log(url);

        xhr.open("get", url, true);
    
        xhr.onreadystatechange = function() {
            
            if( xhr.readyState === 4){
                var list = JSON.parse(xhr.responseText);
                console.log(list);
                list.Search.forEach(element => {
                    var newLine = document.createElement('tr');
    
    
                    newLine.innerHTML = `<td><img src="${element.Poster}"/></td>`;
                            document.getElementById("dados").appendChild(newLine);            
                });
            }
        }
        xhr.send(null);
    }
    document.getElementById("btnProcura").addEventListener('click', getFilmName);
    
});

