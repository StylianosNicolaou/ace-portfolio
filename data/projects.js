const projects = [
  {
    id: "karate-designs",
    title: "Karate Designs CN",
    year: "2025",
    description:
      "A modern portfolio website for a creative karate design brand. Includes interactive animations, a dynamic gallery, and pastel neon branding.",
    link: "https://karatedesignscn.com",
    image: "/projects/karatedesigns.mp4", // or GIF/MP4
    tech: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "EmailJS", icon: "/icons/emailjs.svg" },
    ],
    side: "right",
  },

  {
    id: "ace-workout",
    title: "The ACE Gym",
    year: "2025",
    side: "left",
    description: "An interactive workout tracker perfect for gym partners.",
    link: "https://workout-woad.vercel.app/",
    image: "/projects/aceGym.mp4",
    tech: [
      { name: "HTML5", icon: "/icons/html.svg" },
      { name: "CSS3", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
    ],
    side: "left",
  },
];

export default projects;
