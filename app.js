//set up the container
let movieRatings = [];

//all indexes start at zero. create an Identification tool to start at zero, which will then identify a targeted element
let currMovieId = 0;

$(function(){
    $('#input-form').on('submit', function(e){
        e.preventDefault();
        
        let $movie = $('#movie-title').val();
        let $rating = $('#rating').val();
        let movieData = { $movie, $rating, currMovieId};

        const movieHtml = transformMovieData(movieData);
        movieRatings.push(movieData);
        currMovieId++;

        $('#table-body').append(movieHtml);
        $('#input-form').trigger("reset");
       
        // $('#input-form').trigger('submit', function(){
        // $movie.innerHtml('');
        // $rating.innerHtml('');
    $('#table-body').on('click', 'delete-movie-data', function(e){
        let deleteRow = movieRatings.findIndex(movie => movie.currMovieId ===+$(evt.target).data("deleteId"));

        movieRatings.splice(deleteRow, 1);

        $(e.target).closest("tr").remove();
        })
    })
    // $("#delete-movie-data").on("click", function(e){
        //how am I going to pull a selected string
    //     let deleteRow = 
    // })
})
    //need to clear form within submit
    
    // $('input-form').empty();
    //AN EVENT NEEDS TO BE TRIGGERED, A -> B -> C, TO CLEAR THE FORM




//Takes an object and returns it as a string template with html text

function transformMovieData(movieData){
    return `
        <tr>
            <td>${movieData.$movie}</td>
            <td>${movieData.$rating}</td>
            <td>
                <button id = "delete-movie-data"> Delete </button>
            </td>
        </tr>
        `;
}