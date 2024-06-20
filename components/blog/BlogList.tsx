"use client";
import { Separator } from "@/components/ui/separator";

import BlogCard from "@/components/blog/BlogCard";

const mocks = [
  {
    category: "History",
    title: "The Beginning of the End of the World",
    description:
      "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.",
    comment: {
      _count: 32,
    },
    creator: {
      name: "Wittawat",
      profile: "",
    },
  },
  {
    category: "History",
    title: "The big short war",
    description:
      "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
    comment: {
      _count: 4,
    },
    creator: {
      name: "Zach",
      profile: "",
    },
  },
  {
    category: "History",
    title: "The big short war",
    description:
      "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
    comment: {
      _count: 4,
    },
    creator: {
      name: "Zach",
      profile: "",
    },
  },
  {
    category: "History",
    title: "The big short war",
    description:
      "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
    comment: {
      _count: 4,
    },
    creator: {
      name: "Zach",
      profile: "",
    },
  },
  {
    category: "History",
    title: "The big short war",
    description:
      "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
    comment: {
      _count: 4,
    },
    creator: {
      name: "Zach",
      profile: "",
    },
  },
  {
    category: "History",
    title: "The big short war",
    description:
      "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
    comment: {
      _count: 4,
    },
    creator: {
      name: "Zach",
      profile: "",
    },
  },
  {
    category: "History",
    title: "The big short war",
    description:
      "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
    comment: {
      _count: 4,
    },
    creator: {
      name: "Zach",
      profile: "",
    },
  },
  {
    category: "History",
    title: "The big short war",
    description:
      "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
    comment: {
      _count: 4,
    },
    creator: {
      name: "Zach",
      profile: "",
    },
  },
  {
    category: "History",
    title: "The big short war",
    description:
      "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
    comment: {
      _count: 4,
    },
    creator: {
      name: "Zach",
      profile: "",
    },
  },
];

const BlogList = () => {
  return (
    <div className="content p-4">
      {mocks.length == 0 ? (
        <div className="flex justify-center ">
          <p className="w-fit italic p-4 font-semibold ">
            Post what's on your mind ...
          </p>
        </div>
      ) : null}
      <div className="bg-white rounded-lg w-fit">
        {mocks.map((mockData, idx) => {
          return (
            <div key={idx + mockData.title}>
              <BlogCard mockData={mockData} />
              {idx < mocks.length - 1 ? <Separator /> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
