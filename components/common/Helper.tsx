import { isExternal } from "util/types";
import {
  DiscordIcon,
  FacebookIcon,
  InstaIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "./Icons";

export const footerData = [
  {
    title: "Advertisers",
    links: [
      { name: "Advertiser Solutions", href: "advertiser-solutions" },
      { name: "Inventory Packages & PMP’s", href: "inventory-packages-and-pmps" },
      { name: "Case Studies", href: "case-studies" },
      { name: "Support", href: "support", isExternal: true },
    ],
  },
  {
    title: "Publishers",
    links: [
      { name: "Publisher Solutions", href: "/publisher-solutions" },
      { name: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about-us" },
      { name: "Leadership", href: "/leadership" },
      { name: "Careers", href: "/career" },
      { name: "Support", href: "/support", isExternal: true },
      { name: "Privacy Center", href: "/privacy-policy", isExternal: true },
      { name: "Opt-Out/Do Not Sell Personal Info", href: "/do-not-sell-my-personal-information" },
      { name: "Contact", href: "/contactus" },
      { name: "Copyright Notice", href: "/copyright-notice" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Press", href: "/press" },
      { name: "Supply Policy", href: "/supply-policy" },
      { name: "Demand Policy", href: "/demand-policy" },
      { name: "Marketplace Quality Policy", href: "/marketplace-quality-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Brand Guide", href: "#" },
    ],
  },
];
export const socialLinks = [
  { href: "https://www.linkedin.com/company/airitlive", icon: <LinkedinIcon /> },
  { href: "https://www.facebook.com/airitlive", icon: <FacebookIcon /> },
  { href: "https://www.instagram.com/airitlive", icon: <InstaIcon /> },
  { href: "https://www.youtube.com/@AirItLive", icon: <YoutubeIcon /> },
  { href: "https://x.com/AirItLive", icon: <XIcon /> },
  { href: "https://www.quora.com/profile/AirItLive", icon: <DiscordIcon /> },
];
export const networks = [
  { src: "/img/pluto.webp", alt: "Pluto" },
  { src: "/img/discovery.webp", alt: "Discovery" },
  { src: "/img/tubi.webp", alt: "Tubi" },
  { src: "/img/paramount.webp", alt: "Paramount" },
  { src: "/img/mlb.webp", alt: "MLB" },
  { src: "/img/amc.png", alt: "AMC" },
  { src: "/img/fubo.webp", alt: "Fubo" },
  { src: "/img/fox-sports.webp", alt: "Fox Sports" },
  { src: "/img/epsilon.png", alt: "Epsilon" },
  { src: "/img/news18.webp", alt: "News18" },
];
export const testimonialData = [
  {
    id: 1,
    name: "Suzy Ryder",
    role: "Chief Digital Officer",
    company: "OMD UK",
    image: "/img/client-1.jpg",
    feedback:
      "Airit provides a viable path toward a cleaner, greener digital media ecosystem. OMD UK is proud to be an anchor partner for this initiative, bringing more awareness and real solutions to the entire digital media ecosystem.",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Marketing Director",
    company: "ABC Corp",
    image: "/img/client-2.jpg",
    feedback:
      "Airit has transformed the way we approach digital media. Their commitment to sustainability is commendable.",
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Product Manager",
    company: "XYZ Ltd",
    image: "/img/client-3.jpg",
    feedback:
      "We are thrilled with the impact Airit has had on our digital strategy. The results speak for themselves.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Head of Operations",
    company: "Tech Innovators",
    image: "/img/client-4.jpeg",
    feedback:
      "Airit's approach to sustainability in digital media is both innovative and effective. We're proud to be a part of this journey.",
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "CEO",
    company: "GreenTech Solutions",
    image: "/img/client-5.jpg",
    feedback:
      "Partnering with Airit has been a game-changer for our business. Their focus on green digital solutions aligns perfectly with our values.",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    role: "Creative Director",
    company: "Creative Minds",
    image: "/img/client-6.jpg",
    feedback:
      "Airit has empowered us to rethink our digital media strategy. Their dedication to sustainability is inspiring.",
  },
  {
    id: 7,
    name: "David Wilson",
    role: "Chief Technology Officer",
    company: "Innovate Corp",
    image: "/img/client-7.jpg",
    feedback:
      "Airit's platform has enabled us to reduce our carbon footprint while maintaining a strong digital presence.",
  },
  {
    id: 8,
    name: "Sophia Lee",
    role: "VP of Marketing",
    company: "FutureMedia",
    image: "/img/profile.png",
    feedback:
      "Airit's commitment to a greener digital ecosystem is unmatched. We're excited to be a part of this movement.",
  },
];
export const insightsData = [
  {
    id: 1,
    title:
      "Programmatic Advertising in a Cookieless World: Solutions & Strategies",
    description:
      "By now, we've all heard that Google is once again pushing back the retirement of third-party cookies in its Chrome browser.",
    author: "Matthew Workman",
    date: "July 3, 2024",
  },
  {
    id: 2,
    title:
      "Programmatic Advertising in a Cookieless World: Solutions & Strategies",
    description:
      "By now, we've all heard that Google is once again pushing back the retirement of third-party cookies in its Chrome browser.",
    author: "Matthew Workman",
    date: "July 3, 2024",
  },
  {
    id: 3,
    title:
      "Programmatic Advertising in a Cookieless World: Solutions & Strategies",
    description:
      "By now, we've all heard that Google is once again pushing back the retirement of third-party cookies in its Chrome browser.",
    author: "Matthew Workman",
    date: "July 3, 2024",
  },
  {
    id: 4,
    title:
      "Programmatic Advertising in a Cookieless World: Solutions & Strategies",
    description:
      "By now, we've all heard that Google is once again pushing back the retirement of third-party cookies in its Chrome browser.",
    author: "Matthew Workman",
    date: "July 3, 2024",
  },
  {
    id: 5,
    title:
      "Programmatic Advertising in a Cookieless World: Solutions & Strategies",
    description:
      "By now, we've all heard that Google is once again pushing back the retirement of third-party cookies in its Chrome browser.",
    author: "Matthew Workman",
    date: "July 3, 2024",
  },
  {
    id: 6,
    title:
      "Programmatic Advertising in a Cookieless World: Solutions & Strategies",
    description:
      "By now, we've all heard that Google is once again pushing back the retirement of third-party cookies in its Chrome browser.",
    author: "Matthew Workman",
    date: "July 3, 2024",
  },
];

export const problemData = [
  {
    id: 1,
    title: "Underperforming Ad Revenue",
    description:
      "Despite high traffic and quality content, publishers struggle to optimize their ad revenue streams. Many find that their current ad tech solutions fail to maximize their inventory’s potential, leaving money on the table.",
    solutionTitle: "How We Solve It",
    solutionDescription:
      "Air1Live enhances revenue by implementing advanced AI-driven ad optimization strategies, ensuring higher CPMs and fully utilized ad space across all platforms.",
  },
  {
    id: 2,
    title: "Poor in Programmatic Advertising",
    description:
      "Programmatic advertising can be complex and requires constant optimization to ensure high ROI. Publishers often face challenges with inefficiencies and poor targeting capabilities.",
    solutionTitle: "How We Solve It",
    solutionDescription:
      "Air1Live improves programmatic performance by utilizing cutting-edge algorithms that optimize ad placements and targeting, leading to better ROI for publishers.",
  },
  {
    id: 3,
    title: "Complexity of Managing Multi-Platform Monetization",
    description:
      "Handling multiple platforms for monetization can be a daunting task, with each platform requiring different strategies and management tools.",
    solutionTitle: "How We Solve It",
    solutionDescription:
      "Air1Live simplifies this process by providing a unified platform that integrates all your monetization efforts, ensuring consistency and efficiency across all channels.",
  },
  {
    id: 4,
    title: "Fragmented Audience Data",
    description:
      "Audience data is often scattered across various platforms and channels, making it difficult to obtain a holistic view of your audience.",
    solutionTitle: "How We Solve It",
    solutionDescription:
      "Air1Live consolidates audience data from multiple sources into a single platform, allowing for more accurate targeting and personalized ad experiences.",
  },
  {
    id: 5,
    title: "Ensuring Brand Safety & Compliance",
    description:
      "Maintaining brand safety and compliance in a rapidly evolving ad landscape is challenging for publishers.",
    solutionTitle: "How We Solve It",
    solutionDescription:
      "Air1Live ensures brand safety and compliance by offering tools that monitor and enforce policies across all ad placements, protecting your brand’s reputation.",
  },
  {
    id: 6,
    title: "Slow & Poor Ad Tech Support",
    description:
      "Publishers often struggle with delayed and inadequate support from ad tech providers, leading to prolonged downtime and revenue loss.",
    solutionTitle: "How We Solve It",
    solutionDescription:
      "Air1Live provides 24/7 dedicated support with a team of experts ready to resolve any issues quickly, minimizing downtime and maximizing revenue.",
  },
  {
    id: 7,
    title: "Balancing User Experience with Monetization",
    description:
      "Striking the right balance between user experience and monetization can be difficult, with intrusive ads often leading to poor user engagement.",
    solutionTitle: "How We Solve It",
    solutionDescription:
      "Air1Live offers non-intrusive ad solutions that enhance user experience while maximizing ad revenue, ensuring a win-win scenario for publishers and users alike.",
  },
  {
    id: 8,
    title: "Difficulty in Ad Personalization",
    description:
      "Personalizing ads to meet the preferences of different audience segments can be challenging, especially with limited data and tools.",
    solutionTitle: "How We Solve It",
    solutionDescription:
      "Air1Live leverages advanced data analytics to deliver personalized ad experiences that resonate with your audience, increasing engagement and conversion rates.",
  },
  {
    id: 9,
    title: "Navigating the Ad Tech Landscape",
    description:
      "The ad tech landscape is constantly evolving, making it difficult for publishers to stay ahead of the curve.",
    solutionTitle: "How We Solve It",
    solutionDescription:
      "Air1Live keeps you ahead with a future-proof ad tech stack that adapts to industry changes, ensuring you’re always at the forefront of innovation.",
  },
  {
    id: 10,
    title: "Lack of Transparency in Ad Performance",
    description:
      "Publishers often struggle with a lack of transparency in ad performance, making it difficult to optimize and improve their strategies.",
    solutionTitle: "How We Solve It",
    solutionDescription:
      "Air1Live provides detailed and transparent reporting on ad performance, empowering you with the insights needed to make informed decisions and optimize your revenue.",
  },
];
export const sucessslidesData = [
  {
    logo: "/img/major-league-partner.png",
    partner: "Major League Partner",
    percentage: "50%",
    description: "uplift in per-game ad revenue",
  },
  {
    logo: "/img/news-network.png",
    partner: "24/7 News Network",
    percentage: "40%",
    description: "improvement in breaking news monetization",
  },
  {
    logo: "/img/streaming-giant.png",
    partner: "Streaming Giant",
    percentage: "80%",
    description: "increase in completed ad views",
  },
];
