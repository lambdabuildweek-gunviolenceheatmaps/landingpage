# Shots Fired | Landing Page

**Live Site:** <https://shots-fired-marketing.netlify.com>

## User Interface Developer | Matt Poloni

**Role Description**

* [ ]  You will build a multi-page marketing website that matches the theme chosen by your group and provides the user with details about the product your team has selected to build.
* [ ]  Your marketing website must include responsive mobile and desktop screen widths. Please see the "Responsiveness" portion of your rubric for more information on this.
* [ ]  The call to action on the website should be a login button that links the user over to the React application that your Front End Architect is building.
* [ ]  Your marketing website must be hosted on a hosting platform like "Netlify" or "Github Pages".
* [ ]  For this Marketing site's home page you need to have content and copy that relates to the product that your team is working on.
* [ ]  Descriptions about the product and about the features it provides would be key.
* [ ]  For a second page, you could do an about us section that includes images of the members of your team, and links to one another's socials/Github.

## Design Details

Context          | Google Font          | Fallback
---              |---                   |---
H1-H6            | [Playfair Display SC](https://fonts.google.com/specimen/Playfair+Display+SC) | serif
Body text        | [Open Sans](https://fonts.google.com/specimen/Open+Sans) | sans-serif
Icons            | [Font Awesome (Free)](https://fontawesome.com/) | `none`

Color Variables   | Hex Values |
---               |---         |
@gvhm-red         | #A51212    |
@gvhm-lightred    | #AD2727    |
@gvhm-darkgrey    | #666666    |
@gvhm-darkbluish  | #4F5A62    |
@gvhm-lightbluish | #9FA9B2    |
@gvhm-lightgrey   | #D3D7C8    |
@gvhm-deepblue    | #0A3C60    |

[Visualization of color scheme](https://coolors.co/a51212-666666-4f5a62-9fa9b2-d3d7c8) on coolors.com.

Color scheme inspired by [this palette](https://www.colourlovers.com/palette/453310/Sound_Of_A_Gun).

## Most Recent Style Guide

Style guide image produced by [Andrew Benedict](https://github.com/atbenedict), our Back End Architect.

![Style Guide v01](/design-files/StyleGuide-v01.png)

## Page Structure & Organization

Each page has a fixed navbar, a "splash page"-style section that encapsulates the page's header, and any of three types of content sections with optional spacer divs.

### Navbar

* `body`
    * `nav.nav-site` (first element inside `body`)
        * `a.nav-link`
            * link content

The navbar is a simple `nav` element set outside the `main` element of the page and fixed to the top of the site, using flexbox to space the site navigation links evenly across the top of the page. At particularly small screen widths (below 350px) the navbar goes static in order to free-up room on the screen while scrolling.


### Splash Section

* `main`
    * `div.splash` (first element inside `main`)
        * `header.header-section`
          * `div.header-content` (optional wrapper)
            * `h1`
            * `p.tagline` (optional)
            * `div.cta-wrap` (optional)
              * `button.cta.p1` (optional, multiple)
        * `nav.nav-page`
            * `div.jump[data-sec={section}]` (multiple)
                * jump link content

In order to fully display the background image fixed to the `body` element, this section has no background of its own and the wrapper has a minimum height of `100vh`. The minimum is there in case the content were to overflow somehow, which is advised against. Using flexbox, child elements are positioned in a column with `justify-content: space-between` and `align-items:center`.

The first of that wrapper's two child elements is the page's header, which has a minimum height of 100%, sets the max-width to the common max-width value, and uses flexbox to center its child elements.

If needed, an optional wrapper can be used that would be useful if the header content doesn't contrast well with the page's background. Otherwise, the page's `h1`, `p.tagline`, `button.cta.p`, and any other content can be put directly into the header. Also, if more than one call-to-action button is needed, they can be wrapped in a div that is ready-made for that purpose, though currently unstyled.

At the bottom of the splash section is another `nav` section, a sibling to the header, which specifically has jump-links to the major content sections within `main`. The jump links section is set to spread them evenly along the bottom of the splash section and disappear at mobile widths (500px and below).

These jump-link `div`s are each set with a `data-sec` attribute matching the same attribute on one of the page's major content sections. Javascript will automatically find the links, find their matching content, and use an event listener to smoothly scroll to the start of that element. 


### Generic Section Wrapper

* `section.section-wrap[data-sec={section}]`

These `sections` with class `section-wrap` merely use flexbox to layout their direct children in a column, centered both vertically and horizontally. They wrap every major content section and take a `data-sec` attribute that's matched with the same attribute on one of the jump-links at the bottom of the splash section.

### Banner Sections

* `section.section-wrap.banners[data-sec={section}]`
    * `div.banner-wrap`
        * banner content

The simplest of the content sections, this `section` merely centers its text as a default before its child element `.banner-wrap` sets a max-width for whatever content you wish to display within it, such as a carousel.

#### Carousel

* `section.section-wrap.banners[data-sec={section}]`
    * `div.banner-wrap`
        * header content
      * `div.carousel-wrap`
          * `div.car-btn.prev`
          * `img` (multiple)
          * `div.car-btn.next`

The carousel wrapper sets the common max-width, uses flexbox to center everything vertically and horizontally, and sets margin and padding to allow for proper alignment of the carousel's previous and next buttons. The buttons are simply set to straddle their respective edge of the carousel images.

### Spotlight Sections

* `section.section-wrap.spotlights[data-sec={section}]` (`.rev` optional)
    * `section.spotlight.bg-2`
        * `div.img-wrap`
            * `img`
        * `div.spot-content`
            * image-relevant content

### Grid Sections

* `section.section-wrap.grid[data-sec={section}]`
    * `div.banner-wrap` (grid header)
        * header content
    * `div.grid-wrap`
        * `div.grid-cell` (multiple)
            * cell content

### Spacer Divs

* `div.spacer`