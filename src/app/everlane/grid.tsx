import StoryCard from "./storyCard";

interface Story {
  id: string;
  image: string;
  caption: string;
  buttonLabel?: string;
}

interface StoryGridProps {
  title?: string;
  stories: Story[];
  variant?: "default" | "progress";
  showButton?: boolean;
  fullWidth?: boolean;
}

export default function StoryGrid({
  title,
  stories,
  variant = "default",
  showButton = false,
  fullWidth = false,
}: StoryGridProps) {
  const isTopStories = title === "The Latest"; // only top grid

  return (
    <section className={fullWidth ? "" : "mx-auto max-w-[clamp(400px,95%,1900px)] px-4 sm:px-6"}>
      {title && (
        <h2 className="font-semibold text-[clamp(1.5rem,4vw,3rem)] mb-2 md:mb-4 leading-tight">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-3  gap-[clamp(0.5rem,2vw,1.5rem)]">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            image={story.image}
            caption={story.caption}
            showButton={showButton}
            extraMargin={isTopStories} // mb-36 only for top stories
            variant={variant}
            buttonLabel={story.buttonLabel}
            href={`everlane/stories/${story.id}`} 
          />
        ))}
      </div>
    </section>
  );
}


// import StoryCard from "./storyCard";

// interface Story {
//   id: string;
//   image: string;
//   caption: string;
//   buttonLabel?: string;
// }

// interface StoryGridProps {
//   title?: string;
//   stories: Story[];
//   variant?: "default" | "progress";
//   showButton?: boolean;
// }

// export default function StoryGrid({
//   title,
//   stories,
//   variant = "default",
//   showButton = false,
// }: StoryGridProps) {
//   const isTopStories = title === "The Latest"; // 👈 only first grid

//   return (
//     <section className="mx-auto max-w-[clamp(320px,90%,1900px)]">
//       {title && (
//         <h2 className="font-bold text-[clamp(1.5rem,4vw,3rem)] mb-6">
//           {title}
//         </h2>
//       )}

//       <div className="grid grid-cols-3 gap-6">
//         {stories.map((story) => (
//           <StoryCard
//             key={story.id}
//             image={story.image}
//             caption={story.caption}
//             showButton={showButton}
//             extraMargin={isTopStories} // 👈 mb-36 only for Top Stories
//             variant={variant}
//             buttonLabel={story.buttonLabel}  
            
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
