
// Search form
$(document).ready(function () {
  $(".search").on("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    var searchTerm = $(".search-bar").val().toLowerCase();

    $(".book-card").each(function () {
      var cardTitle = $(this).find("h5").text().toLowerCase();

      // Check if the card title contains the search term
      if (cardTitle.includes(searchTerm)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});



// Adding books to the cart - Ne kete pjese perfshihen try, catch and throw error nese cmimet jane invalide
$(document).ready(function() {
  function addToCart(book) {
    // Validate book price
    var bookPriceText = book.find(".price").text().replace("€", "");
    var bookPrice = parseFloat(bookPriceText);

    if (isNaN(bookPrice) || bookPrice <= 0) {
      // Throw an error if the price is invalid
      throw new Error("Invalid book price: " + bookPriceText);
    }

    var cartBook = book.clone();
    cartBook.find(".btn button").remove();
    cartBook.find(".star-heart").remove();

    // Append the new book card to the cart items
    $(".cart-items").append(cartBook);

    // Update the cart total price
    var totalPrice = parseFloat($("#cart-total-price").text().replace("€", ""));
    totalPrice += bookPrice;
    $("#cart-total-price").text(totalPrice.toFixed(2) + "€");

    // Update the cart count
    var cartCount = parseInt($(".cart-count").text());
    $(".cart-count").text(cartCount + 1);

    // Show the cart window
    $(".cart-window").show();
  }

  // Click event to add a book to the cart
  $(".btn button").click(function() {
    try {
      var book = $(this).closest(".book-card");
      addToCart(book);
    } catch (error) {
      // Handle the error by logging it or showing an alert
      console.error("Error adding book to cart:", error.message);
      alert("Error adding book to cart: " + error.message);
    }
  });

  // Click event to toggle the visibility of the cart window
  $(".cart-toggle-btn").click(function() {
    $(".cart-window").toggle();
  });
});



//add to wishlist
$(document).ready(function() {
    // Function to handle adding a book to the wishlist
      function addToWishlist(book) {
    var cartBook = book.clone();
    cartBook.find(".btn button").remove();
    cartBook.find(".star-heart").remove();
      // Append the new book card to the cart items
      $(".cart-items-1").append(cartBook);

      // Update the cart count
      var cartCount = parseInt($(".cart-count-1").text());
      $(".cart-count-1").text(cartCount + 1);

      // Show the cart window
      $(".cart-window-1").show();
    }

    // Click event to add a book to the wishlist
    $(".wishlist-heart").click(function() {
      var book = $(this).closest(".book-card");
      addToWishlist(book);
    });

    // Click event to toggle the visibility of the cart window
    $(".cart-toggle-btn-1").click(function() {
      $(".cart-window-1").toggle();
    });
  });


//funksionet per validim te te dhenave, te forma ne pjesen e kontaktit
function validateName() {
        var name = document.getElementById("name").value;
        if (name.length === 0) {
            alert("Name cannot be empty");
            return false;
        }
        return true;
    }

    function validateLastname() {
        var lastname = document.getElementById("lastname").value;
        if (lastname.length === 0) {
            alert("Lastname cannot be empty");
            return false;
        }
        return true;
    }

    function validateEmail() {
        var email = document.getElementById("email").value;
        if (email.length === 0 || !email.includes("@")) {
            alert("Invalid email address");
            return false;
        }
        return true;
    }

    function validateForm() {
        var isNameValid = validateName();
        var isLastnameValid = validateLastname();
        var isEmailValid = validateEmail();

        if (isNameValid && isLastnameValid && isEmailValid) {
            return true;
        } else {
            return false;
        }
    }


// Review stars
document.addEventListener("DOMContentLoaded", function() {
  const starsContainers = document.querySelectorAll(".stars");

  starsContainers.forEach((starsContainer) => {
    const stars = starsContainer.querySelectorAll("i");

    stars.forEach((star) => {
      star.addEventListener("click", function() {
        rateStar(this, starsContainer);
      });

      star.addEventListener("mouseover", function() {
        hoverStar(this, stars);
      });

      star.addEventListener("mouseout", function() {
        resetStars(stars);
      });
    });
  });

  function rateStar(clickedStar, starsContainer) {
    const value = clickedStar.getAttribute("data-value");
    alert(`You rated ${starsContainer.id} ${value} stars`);
  }

  function hoverStar(hoveredStar, stars) {
    const value = hoveredStar.getAttribute("data-value");
    resetStars(stars);

    for (let i = 0; i < value; i++) {
      stars[i].classList.add("fas");
      stars[i].classList.remove("far");
    }
  }

  function resetStars(stars) {
    stars.forEach((star) => {
      star.classList.remove("fas");
      star.classList.add("far");
    });
  }
});


// Creating instances of the Book object
var books = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 15.99),
    new Book("To Kill a Mockingbird", "Harper Lee", "Classics", 12.50),
    new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy", 18.75),
];

// Using map to create an array of book titles
var bookTitles = books.map(book => book.title);
console.log("Book Titles:", bookTitles);

// Using filter to get only fiction books
var fictionBooks = books.filter(book => book.genre === "Fiction");
console.log("Fiction Books:", fictionBooks);

// Using reduce to calculate the total price of the books
var CmimiTotal = books.reduce((acc, book) => acc + book.price, 0);
console.log("Total Price of All Books:", CmimiTotal );

// Using map and filter together to get titles of expensive books (price > 15)
var expensiveBookTitles = books
    .filter(book => book.price > 15)
    .map(book => book.title);
console.log("Expensive Book Titles:", expensiveBookTitles);



