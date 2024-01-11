
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


// Adding books to the cart

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


function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
   section.scrollIntoView({ behavior: 'smooth' });
  }
 }


const books =[
  {
    title: "Orbiting Jupiter ",
    author: "Gary Schmidt ",
    price:14.00,
    quantity: 3
  },
  {
    title: "Metamorphosis ",
    author: "Franz Kafka ",
    price: 9.80,
    quantity: 1
  },
   {
    title: "The Mountain Is You",
    author: "Brianna West ",
    price: 11.50,
    quantity:4
  },
   {
    title: "The Stranger",
    author: "Albert Camus",
    price: 15.00,
    quantity:3 
  },
   {
    title: "The Book Thief",
    author: "Markus Zusak",
    price: 13.50,
    quantity:2
  }
];

// reduce function- will calculate the total price
// if the price is invalid, we will throw an error
function calculateTotalPrice(books) {
  try {
    // Use reduce to calculate the total price, throwing an error for invalid prices
    return books.reduce((total, book) => {
      if (typeof book.price !== 'number' || isNaN(book.price) || book.price < 0) {
        throw new Error(`Invalid price for book "${book.title}"`);
      }
      return total + book.price;
    }, 0);
  } catch (error) {
    console.error('Error calculating total price:', error.message);
    return 'Error calculating total price. Please try again later.';
  }
}

const totalPrice = calculateTotalPrice(books);
console.log('Total Price:', totalPrice.toString());


//map function-will return the titles of the books
const bookTitles = books.map(book => book.title);
console.log('Book Titles:', bookTitles);


//filter function - will find expensive books
const expensiveBooks=books.filter(book=>book.price>12);
console.log('Expensive books: ',expensiveBooks);



