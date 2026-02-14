const mobileNav = document.querySelector(".mobile-nav");
const mainNav = document.querySelector(".main-nav");

if (mobileNav && mainNav) {
  const navIcon = mobileNav.querySelector("i");

  mobileNav.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    mobileNav.classList.toggle("active");

    navIcon.classList.toggle("fa-bars");
    navIcon.classList.toggle("fa-xmark");
    document.body.classList.toggle("no-scroll");
  });

  document.addEventListener("click", (event) => {
    if (!mainNav.contains(event.target) && !mobileNav.contains(event.target)) {
      mainNav.classList.remove("active");
      document.body.classList.remove("no-scroll");

      if (mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active");
        navIcon.classList.toggle("fa-bars");
        navIcon.classList.toggle("fa-xmark");
      }
    }
  });
}

jQuery(document).ready(function ($) {
  $("#load-more").on("click", function () {
    let btnLoadMore = $(this);
    let page = btnLoadMore.data("page");
    page++;

    // Create 3 skeleton placeholders
    const skeletonHTML = `
      <article class="blog-item-skeleton">
        <div class="skeleton-block skeleton-image"></div>
        <div class="skeleton-block skeleton-date"></div>
        <div class="skeleton-block skeleton-title"></div>
        <div class="skeleton-block skeleton-link"></div>
      </article>`;
    const skeletons = $(skeletonHTML.repeat(3));
    $(".blog-grid").append(skeletons);

    $.ajax({
      url: blog_ajax.ajax_url,
      type: "POST",
      dataType: "json",
      data: { action: "load_more_posts", page: page },
      success: function (response) {
        skeletons.remove();
        if (response.html) {
          $(".blog-grid").append(response.html);
          btnLoadMore.data("page", page);
        }
        if (!response.has_more) {
          btnLoadMore.hide();
        }
      },
      error: function () {
        skeletons.remove();
      },
    });
  });
});
