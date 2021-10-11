import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const sectionHeadingStyles = {
  marginTop: 80,
  marginBottom: 32,
}
const paragraphStyles = {
  marginBottom: 48,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

// const docLink = {
//   text: "Documentation",
//   url: "https://www.gatsbyjs.com/docs/",
//   color: "#8954A8",
// }

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const sass_links = [
  {
    text: "Nesting",
    url: "https://codepen.io/seanho96/pen/wvoMPGv",
    description:
      "",
    color: "#E95800",
  },
  {
    text: "Functions",
    url: "https://codepen.io/seanho96/pen/OJpWEXq",
    description:
      "",
    color: "#1099A8",
  },
  {
    text: "Mixins",
    url: "https://codepen.io/seanho96/pen/YzpwEQg",
    description:
      "",
    color: "#BC027F",
  },
  {
    text: "Extend",
    url: "https://codepen.io/seanho96/pen/YzpwEQg",
    description:
      "",
    color: "#0D96F2",
  },
  // {
  //   text: "Plugin Library",
  //   url: "https://www.gatsbyjs.com/plugins",
  //   description:
  //     "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  //   color: "#8EB814",
  // },
  // {
  //   text: "Build and Host",
  //   url: "https://www.gatsbyjs.com/cloud",
  //   badge: true,
  //   description:
  //     "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  //   color: "#663399",
  // },
]

const rwd_links = [
  {
    text: "Why do we need responsive design?",
    url: "https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/",
    description:
      "",
    color: "#E95800",
  },
  {
    text: "Viewport",
    url: "https://codepen.io/matini94/pen/QWdKzYZ",
    description:
      "",
    color: "#1099A8",
  },
  {
    text: "Media Queries",
    url: "https://codepen.io/matini94/pen/RwogEoo?editors=0010",
    description:
      "",
    color: "#BC027F",
  },
  {
    text: "Responsive Media",
    url: "https://codepen.io/matini94/pen/RwogEoo?editors=0010",
    description:
      "",
    color: "#0D96F2",
  },
   {
    text: "Grid Layout",
    url: "https://codepen.io/matini94/pen/LYWLMmw",
    description:
      "",
    color: "#8EB814",
  },
  {
    text: "Flexbox",
    url: "https://codepen.io/matini94/pen/dyvRwdb",
    description:
      "",
    color: "#663399",
  },
  {
    text: "Multiple-column Layout",
    url: "https://codepen.io/matini94/pen/oNBZdQR",
    description:
      "",
    color: "#1099A8",
  },
   {
    text: "Grid Garden",
    url: "https://cssgridgarden.com/",
    badge: true,
    description:
      "",
    color: "#8EB814",
  },
  {
    text: "Flexbox Froggy",
    url: "https://flexboxfroggy.com/",
    badge: true,
    description:
      "",
    color: "#663399",
  },
]

const animation_links = [
  {
    text: "2D/3D Transform",
    url: "https://codepen.io/seanho96/pen/BaQoaEZ",
    description:
      "",
    color: "#E95800",
  },
  {
    text: "Task 1",
    url: "https://codepen.io/seanho96/pen/bGBjvGE",
    description:
      "",
    color: "#1099A8",
  },
  {
    text: "Transition",
    url: "https://codepen.io/seanho96/pen/QWGjBJq",
    description:
      "",
    color: "#BC027F",
  },
  {
    text: "Task 2",
    url: "https://codepen.io/seanho96/pen/NWbBYNr",
    description:
      "",
    color: "#0D96F2",
  },
   {
    text: "Animation",
    url: "https://codepen.io/matini94/pen/YzpWOdP",
    description:
      "",
    color: "#8EB814",
  },
  {
    text: "Species in Pieces",
    url: "http://www.species-in-pieces.com/",
    badge: true,
    description:
      "",
    color: "#663399",
  },
  {
    text: "Your Plan Your Planet",
    url: "https://yourplanyourplanet.sustainability.google/",
    badge: true,
    description:
      "",
    color: "#1099A8",
  },
   {
    text: "One Design Company",
    url: "https://onedesigncompany.com/",
    badge: true,
    description:
      "",
    color: "#8EB814",
  },
]


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Welcome to
        <br />
        <span style={headingAccentStyles}>BeSquare Day 2! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Please find some of the links and resources we'll be covering today here on this page{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        {/* <li style={docLinkStyle}>
          <h2 style={sectionHeadingStyles}>
            SASS
          </h2>
        </li>
        {sass_links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  HOT!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))} */}
        <li style={docLinkStyle}>
          <h2 style={sectionHeadingStyles}>
            Responsive Web Design
          </h2>
        </li>
        {rwd_links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  HOT!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
        <li style={docLinkStyle}>
          <h2 style={sectionHeadingStyles}>
            Animation
          </h2>
        </li>
        {animation_links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  HOT!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
