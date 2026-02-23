const searchBtn = document.querySelectorAll(".search-btn");
const searchOverlay = document.querySelector(".search-overlay");
const searchCloseBtn = document.querySelector(".btn-search-close");
const searchInput = document.querySelector("#search-term");
const searchResultsContainer = document.querySelector(".search-results-container");
const searchResults = document.querySelector("#search-results");
let isOverlayActive = false;
let isLoadingVisible = false;
let previousValue;
let typingTimer;

const skeletonMarkup = `
	<div class="search-result-item">
					<div class="skeleton skeleton-title"></div>
					<div class="skeleton skeleton-text"></div>
					<div class="skeleton skeleton-text"></div>
					<div class="skeleton skeleton-text"></div>
		</div>
`;

// Methods

const typingLogic = (term) => {
  if (term.target.value !== previousValue) {
    clearTimeout(typingTimer);

    if (term.target.value.trim() === "") {
      searchResults.innerHTML = "";
      isLoadingVisible = false;
      searchResults.classList.remove("active");
      return;
    }

    if (!isLoadingVisible) {
      searchResults.innerHTML = skeletonMarkup.repeat(3);
      isLoadingVisible = true;
    }

    typingTimer = setTimeout(getResults, 400);
  }

  previousValue = term.target.value;
};

const getResults = async () => {
  // searchResults.innerHTML = `<p>Search Results here</p>`;
  // isLoadingVisible = false;

  try {
    const response = await fetch(`${dentish_data.root_url}/wp-json/wp/v2/posts?search=${encodeURIComponent(searchInput.value)}&title_only=1`);
    const postsData = await response.json();
    console.log(postsData);
    // console.log(postsData[0].title.rendered);

    if (postsData.length === 0) {
      searchResults.innerHTML = `<h2>Search Results for: "${searchInput.value}"</h2>
    <p class="no-results-message">No results found. Please try a different search term.</p>
    `;
      isLoadingVisible = false;
      return;
    }

    searchResults.innerHTML = `<h2>Search Results for: "${searchInput.value}"</h2>
    <div class="rendered-results">
    ${postsData
      .map((post) => {
        const excerptText = getExcerptOrContent(post, 20);

        return `<div class="search-result-item">
        <h3><a href=${post?.link}>${post.title?.rendered}</a></h3>
        <p class="search-post-excerpt">
       ${excerptText}
        </p>
      
      </div>
      `;
      })
      .join("")}
    </div>
    `;

    isLoadingVisible = false;
  } catch (error) {
    console.error("Error fetching search results:", error);
    searchResults.innerHTML = `<p class="error-message">An error occurred while fetching search results. Please try again later.</p>`;
    isLoadingVisible = false;
    return;
  }
};

// Event Listeners

searchBtn.forEach((search) => {
  search.addEventListener("click", function () {
    // console.log("Hello");

    searchOverlay.classList.add("active");
    document.body.classList.add("body-no-scroll");
    isOverlayActive = true;
    searchInput.value = "";
    searchResults.innerHTML = "";

    if (searchResults.classList.contains("active")) {
      searchResults.classList.remove("active");
    }

    setTimeout(() => {
      searchInput.focus();
    }, 300);
  });
});

// searchBtn.addEventListener("click", function () {
//   console.log("Hello");

//   searchOverlay.classList.add("active");
//   document.body.classList.add("body-no-scroll");
//   isOverlayActive = true;
//   searchInput.value = "";
//   searchResults.innerHTML = "";

//   if (searchResults.classList.contains("active")) {
//     searchResults.classList.remove("active");
//   }

//   setTimeout(() => {
//     searchInput.focus();
//   }, 300);
// });

searchCloseBtn.addEventListener("click", function () {
  searchOverlay.classList.remove("active");
  document.body.classList.remove("body-no-scroll");
  isOverlayActive = false;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isOverlayActive) {
    searchOverlay.classList.remove("active");
    document.body.classList.remove("body-no-scroll");
    isOverlayActive = false;
  }
});

searchInput.addEventListener("keyup", (e) => {
  searchResults.classList.add("active");
  typingLogic(e);
});

// function limitWords(text, wordLimit = 100) {
//   const words = text.trim().split(/\s+/);

//   if (words.length <= wordLimit) {
//     return text;
//   }

//   return words.slice(0, wordLimit).join(" ") + "...";
// }

function getExcerptOrContent(post, wordLimit = 100) {
  // If excerpt exists and not empty
  if (post.excerpt?.rendered && post.excerpt.rendered.trim() !== "") {
    const cleanExcerpt = stripHTML(post.excerpt.rendered);
    return limitWords(cleanExcerpt, wordLimit);
  }

  // Fallback to content
  if (post.content?.rendered) {
    const cleanContent = stripHTML(post.content.rendered);

    // Remove title if it appears inside content
    const withoutTitle = cleanContent.replace(post.title.rendered, "").trim();

    return limitWords(withoutTitle, wordLimit);
  }

  return "No content available.";
}

function stripHTML(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

function limitWords(text, wordLimit = 100) {
  const words = text.trim().split(/\s+/);

  if (words.length <= wordLimit) return text;

  return words.slice(0, wordLimit).join(" ") + "...";
}
