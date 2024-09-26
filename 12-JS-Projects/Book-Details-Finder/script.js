
const searchBtn = document.querySelector(".search-btn");
const spinner = document.querySelector(".spinner");
const bookImg = document.querySelector(".book-img");
const bookTitle = document.querySelector(".title");
const authorName = document.querySelector(".author");
const authorKey = document.querySelector(".author-key");
const publishYear = document.querySelector(".year");
const coverID = document.querySelector(".cover-id");
const inputText = document.querySelector("#input-text");


let input = '';


async function bookSearch()
{
    input = inputText.value;

    const apiURL = `https://openlibrary.org/search.json?q=${input}`;

    try
    {
        const response = await fetch(apiURL);

        if(response.ok)
        {
            const data = await response.json();

            //loading spinner
            spinner.style.display = "none";
            
            //Text content
            bookTitle.innerHTML = "Title:  " + data.docs[0].title;
            authorName.innerHTML = "Author Name:  " + data.docs[0].author_alternative_name[0];
            authorKey.innerHTML = "Author key:  " + data.docs[0].author_key;
            publishYear.innerHTML = "First published year:  " + data.docs[0].first_publish_year;
            coverID.innerHTML = "Book cover id:  " + data.docs[0].cover_i;

            //Image part
            const imgURL = `https://covers.openlibrary.org/b/id/${data.docs[0].cover_i}-M.jpg`;

            bookImg.src = imgURL;
            bookImg.style.display = "block";
        }
        else
        {
            console.error('HTTP error:', response.status);
        }
    } catch(err)
    {
        console.log("Fetch error", err);
    }

}

//Button search
searchBtn.addEventListener("click", ()=>{
    spinner.style.display = "block";
    bookSearch();
})

