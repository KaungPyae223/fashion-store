import BlogCard from "@/customer-side/components/BlogCard";
import Container from "@/customer-side/components/Container";
import Pagination from "@/customer-side/components/Pagination";
import React from "react";

const BlogContainer = () => {
  interface blogInterface {
    img: string;
    title: string;
    date: string;
    description: string;
    link: string;
  }

  const blogs: blogInterface[] = [
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "The History of Nike Air Force 1",
      date: "18 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos maiores? Id cupiditate assumenda aspernatur quisquam optio, totam earum maiores fuga ullam consectetur reiciendis delectus itaque voluptate soluta, nisi, qui modi laborum voluptates quis facere quam error quaerat. Praesentium, consequatur. Quaerat nemo eligendi ut temporibus, placeat accusantium odio, laborum facere vitae ratione quae ullam veritatis eos delectus eius fuga optio voluptates, necessitatibus voluptas corrupti voluptatibus architecto neque nulla? Perspiciatis fuga sed placeat corporis labore soluta veritatis voluptate corrupti voluptatem nisi dicta illo, eaque odit recusandae consequatur porro perferendis voluptates quas quidem inventore eveniet. Excepturi at hic illo autem, ex quisquam omnis magni mollitia repellat eos quaerat veritatis aspernatur sit perferendis quidem facilis, ullam aperiam. Repellat dolores, ipsum exercitationem sequi, ad unde blanditiis modi quis voluptatibus sint distinctio laboriosam illum hic. Sed veritatis, quisquam laborum vero cupiditate voluptatem eius explicabo eos aperiam eum. Fugiat molestias nulla error veritatis, aliquam illo repudiandae?",
      link: "230000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "The Biggest Sneaker Fiar is in November 2024",
      date: "18 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos maiores? Id cupiditate assumenda aspernatur quisquam optio, totam earum maiores fuga ullam consectetur reiciendis delectus itaque voluptate soluta, nisi, qui modi laborum voluptates quis facere quam error quaerat. Praesentium, consequatur. Quaerat nemo eligendi ut temporibus, placeat accusantium odio, laborum facere vitae ratione quae ullam veritatis eos delectus eius fuga optio voluptates, necessitatibus voluptas corrupti voluptatibus architecto neque nulla? Perspiciatis fuga sed placeat corporis labore soluta veritatis voluptate corrupti voluptatem nisi dicta illo, eaque odit recusandae consequatur porro perferendis voluptates quas quidem inventore eveniet. Excepturi at hic illo autem, ex quisquam omnis magni mollitia repellat eos quaerat veritatis aspernatur sit perferendis quidem facilis, ullam aperiam. Repellat dolores, ipsum exercitationem sequi, ad unde blanditiis modi quis voluptatibus sint distinctio laboriosam illum hic. Sed veritatis, quisquam laborum vero cupiditate voluptatem eius explicabo eos aperiam eum. Fugiat molestias nulla error veritatis, aliquam illo repudiandae?",
      link: "230000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "The biggest Sale will Comming Soon",
      date: "18 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos maiores? Id cupiditate assumenda aspernatur quisquam optio, totam earum maiores fuga ullam consectetur reiciendis delectus itaque voluptate soluta, nisi, qui modi laborum voluptates quis facere quam error quaerat. Praesentium, consequatur. Quaerat nemo eligendi ut temporibus, placeat accusantium odio, laborum facere vitae ratione quae ullam veritatis eos delectus eius fuga optio voluptates, necessitatibus voluptas corrupti voluptatibus architecto neque nulla? Perspiciatis fuga sed placeat corporis labore soluta veritatis voluptate corrupti voluptatem nisi dicta illo, eaque odit recusandae consequatur porro perferendis voluptates quas quidem inventore eveniet. Excepturi at hic illo autem, ex quisquam omnis magni mollitia repellat eos quaerat veritatis aspernatur sit perferendis quidem facilis, ullam aperiam. Repellat dolores, ipsum exercitationem sequi, ad unde blanditiis modi quis voluptatibus sint distinctio laboriosam illum hic. Sed veritatis, quisquam laborum vero cupiditate voluptatem eius explicabo eos aperiam eum. Fugiat molestias nulla error veritatis, aliquam illo repudiandae?",
      link: "230000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "The History of Nike Air Force 1",
      date: "18 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos maiores? Id cupiditate assumenda aspernatur quisquam optio, totam earum maiores fuga ullam consectetur reiciendis delectus itaque voluptate soluta, nisi, qui modi laborum voluptates quis facere quam error quaerat. Praesentium, consequatur. Quaerat nemo eligendi ut temporibus, placeat accusantium odio, laborum facere vitae ratione quae ullam veritatis eos delectus eius fuga optio voluptates, necessitatibus voluptas corrupti voluptatibus architecto neque nulla? Perspiciatis fuga sed placeat corporis labore soluta veritatis voluptate corrupti voluptatem nisi dicta illo, eaque odit recusandae consequatur porro perferendis voluptates quas quidem inventore eveniet. Excepturi at hic illo autem, ex quisquam omnis magni mollitia repellat eos quaerat veritatis aspernatur sit perferendis quidem facilis, ullam aperiam. Repellat dolores, ipsum exercitationem sequi, ad unde blanditiis modi quis voluptatibus sint distinctio laboriosam illum hic. Sed veritatis, quisquam laborum vero cupiditate voluptatem eius explicabo eos aperiam eum. Fugiat molestias nulla error veritatis, aliquam illo repudiandae?",
      link: "230000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "The Biggest Sneaker Fiar is in November 2024",
      date: "18 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos maiores? Id cupiditate assumenda aspernatur quisquam optio, totam earum maiores fuga ullam consectetur reiciendis delectus itaque voluptate soluta, nisi, qui modi laborum voluptates quis facere quam error quaerat. Praesentium, consequatur. Quaerat nemo eligendi ut temporibus, placeat accusantium odio, laborum facere vitae ratione quae ullam veritatis eos delectus eius fuga optio voluptates, necessitatibus voluptas corrupti voluptatibus architecto neque nulla? Perspiciatis fuga sed placeat corporis labore soluta veritatis voluptate corrupti voluptatem nisi dicta illo, eaque odit recusandae consequatur porro perferendis voluptates quas quidem inventore eveniet. Excepturi at hic illo autem, ex quisquam omnis magni mollitia repellat eos quaerat veritatis aspernatur sit perferendis quidem facilis, ullam aperiam. Repellat dolores, ipsum exercitationem sequi, ad unde blanditiis modi quis voluptatibus sint distinctio laboriosam illum hic. Sed veritatis, quisquam laborum vero cupiditate voluptatem eius explicabo eos aperiam eum. Fugiat molestias nulla error veritatis, aliquam illo repudiandae?",
      link: "230000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "The biggest Sale will Comming Soon",
      date: "18 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos maiores? Id cupiditate assumenda aspernatur quisquam optio, totam earum maiores fuga ullam consectetur reiciendis delectus itaque voluptate soluta, nisi, qui modi laborum voluptates quis facere quam error quaerat. Praesentium, consequatur. Quaerat nemo eligendi ut temporibus, placeat accusantium odio, laborum facere vitae ratione quae ullam veritatis eos delectus eius fuga optio voluptates, necessitatibus voluptas corrupti voluptatibus architecto neque nulla? Perspiciatis fuga sed placeat corporis labore soluta veritatis voluptate corrupti voluptatem nisi dicta illo, eaque odit recusandae consequatur porro perferendis voluptates quas quidem inventore eveniet. Excepturi at hic illo autem, ex quisquam omnis magni mollitia repellat eos quaerat veritatis aspernatur sit perferendis quidem facilis, ullam aperiam. Repellat dolores, ipsum exercitationem sequi, ad unde blanditiis modi quis voluptatibus sint distinctio laboriosam illum hic. Sed veritatis, quisquam laborum vero cupiditate voluptatem eius explicabo eos aperiam eum. Fugiat molestias nulla error veritatis, aliquam illo repudiandae?",
      link: "230000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "The History of Nike Air Force 1",
      date: "18 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos maiores? Id cupiditate assumenda aspernatur quisquam optio, totam earum maiores fuga ullam consectetur reiciendis delectus itaque voluptate soluta, nisi, qui modi laborum voluptates quis facere quam error quaerat. Praesentium, consequatur. Quaerat nemo eligendi ut temporibus, placeat accusantium odio, laborum facere vitae ratione quae ullam veritatis eos delectus eius fuga optio voluptates, necessitatibus voluptas corrupti voluptatibus architecto neque nulla? Perspiciatis fuga sed placeat corporis labore soluta veritatis voluptate corrupti voluptatem nisi dicta illo, eaque odit recusandae consequatur porro perferendis voluptates quas quidem inventore eveniet. Excepturi at hic illo autem, ex quisquam omnis magni mollitia repellat eos quaerat veritatis aspernatur sit perferendis quidem facilis, ullam aperiam. Repellat dolores, ipsum exercitationem sequi, ad unde blanditiis modi quis voluptatibus sint distinctio laboriosam illum hic. Sed veritatis, quisquam laborum vero cupiditate voluptatem eius explicabo eos aperiam eum. Fugiat molestias nulla error veritatis, aliquam illo repudiandae?",
      link: "230000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "The Biggest Sneaker Fiar is in November 2024",
      date: "18 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos maiores? Id cupiditate assumenda aspernatur quisquam optio, totam earum maiores fuga ullam consectetur reiciendis delectus itaque voluptate soluta, nisi, qui modi laborum voluptates quis facere quam error quaerat. Praesentium, consequatur. Quaerat nemo eligendi ut temporibus, placeat accusantium odio, laborum facere vitae ratione quae ullam veritatis eos delectus eius fuga optio voluptates, necessitatibus voluptas corrupti voluptatibus architecto neque nulla? Perspiciatis fuga sed placeat corporis labore soluta veritatis voluptate corrupti voluptatem nisi dicta illo, eaque odit recusandae consequatur porro perferendis voluptates quas quidem inventore eveniet. Excepturi at hic illo autem, ex quisquam omnis magni mollitia repellat eos quaerat veritatis aspernatur sit perferendis quidem facilis, ullam aperiam. Repellat dolores, ipsum exercitationem sequi, ad unde blanditiis modi quis voluptatibus sint distinctio laboriosam illum hic. Sed veritatis, quisquam laborum vero cupiditate voluptatem eius explicabo eos aperiam eum. Fugiat molestias nulla error veritatis, aliquam illo repudiandae?",
      link: "230000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "The biggest Sale will Comming Soon",
      date: "18 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos maiores? Id cupiditate assumenda aspernatur quisquam optio, totam earum maiores fuga ullam consectetur reiciendis delectus itaque voluptate soluta, nisi, qui modi laborum voluptates quis facere quam error quaerat. Praesentium, consequatur. Quaerat nemo eligendi ut temporibus, placeat accusantium odio, laborum facere vitae ratione quae ullam veritatis eos delectus eius fuga optio voluptates, necessitatibus voluptas corrupti voluptatibus architecto neque nulla? Perspiciatis fuga sed placeat corporis labore soluta veritatis voluptate corrupti voluptatem nisi dicta illo, eaque odit recusandae consequatur porro perferendis voluptates quas quidem inventore eveniet. Excepturi at hic illo autem, ex quisquam omnis magni mollitia repellat eos quaerat veritatis aspernatur sit perferendis quidem facilis, ullam aperiam. Repellat dolores, ipsum exercitationem sequi, ad unde blanditiis modi quis voluptatibus sint distinctio laboriosam illum hic. Sed veritatis, quisquam laborum vero cupiditate voluptatem eius explicabo eos aperiam eum. Fugiat molestias nulla error veritatis, aliquam illo repudiandae?",
      link: "230000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "The History of Nike Air Force 1",
      date: "18 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos maiores? Id cupiditate assumenda aspernatur quisquam optio, totam earum maiores fuga ullam consectetur reiciendis delectus itaque voluptate soluta, nisi, qui modi laborum voluptates quis facere quam error quaerat. Praesentium, consequatur. Quaerat nemo eligendi ut temporibus, placeat accusantium odio, laborum facere vitae ratione quae ullam veritatis eos delectus eius fuga optio voluptates, necessitatibus voluptas corrupti voluptatibus architecto neque nulla? Perspiciatis fuga sed placeat corporis labore soluta veritatis voluptate corrupti voluptatem nisi dicta illo, eaque odit recusandae consequatur porro perferendis voluptates quas quidem inventore eveniet. Excepturi at hic illo autem, ex quisquam omnis magni mollitia repellat eos quaerat veritatis aspernatur sit perferendis quidem facilis, ullam aperiam. Repellat dolores, ipsum exercitationem sequi, ad unde blanditiis modi quis voluptatibus sint distinctio laboriosam illum hic. Sed veritatis, quisquam laborum vero cupiditate voluptatem eius explicabo eos aperiam eum. Fugiat molestias nulla error veritatis, aliquam illo repudiandae?",
      link: "230000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "The Biggest Sneaker Fiar is in November 2024",
      date: "18 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos maiores? Id cupiditate assumenda aspernatur quisquam optio, totam earum maiores fuga ullam consectetur reiciendis delectus itaque voluptate soluta, nisi, qui modi laborum voluptates quis facere quam error quaerat. Praesentium, consequatur. Quaerat nemo eligendi ut temporibus, placeat accusantium odio, laborum facere vitae ratione quae ullam veritatis eos delectus eius fuga optio voluptates, necessitatibus voluptas corrupti voluptatibus architecto neque nulla? Perspiciatis fuga sed placeat corporis labore soluta veritatis voluptate corrupti voluptatem nisi dicta illo, eaque odit recusandae consequatur porro perferendis voluptates quas quidem inventore eveniet. Excepturi at hic illo autem, ex quisquam omnis magni mollitia repellat eos quaerat veritatis aspernatur sit perferendis quidem facilis, ullam aperiam. Repellat dolores, ipsum exercitationem sequi, ad unde blanditiis modi quis voluptatibus sint distinctio laboriosam illum hic. Sed veritatis, quisquam laborum vero cupiditate voluptatem eius explicabo eos aperiam eum. Fugiat molestias nulla error veritatis, aliquam illo repudiandae?",
      link: "230000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "The biggest Sale will Comming Soon",
      date: "18 October 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eos maiores? Id cupiditate assumenda aspernatur quisquam optio, totam earum maiores fuga ullam consectetur reiciendis delectus itaque voluptate soluta, nisi, qui modi laborum voluptates quis facere quam error quaerat. Praesentium, consequatur. Quaerat nemo eligendi ut temporibus, placeat accusantium odio, laborum facere vitae ratione quae ullam veritatis eos delectus eius fuga optio voluptates, necessitatibus voluptas corrupti voluptatibus architecto neque nulla? Perspiciatis fuga sed placeat corporis labore soluta veritatis voluptate corrupti voluptatem nisi dicta illo, eaque odit recusandae consequatur porro perferendis voluptates quas quidem inventore eveniet. Excepturi at hic illo autem, ex quisquam omnis magni mollitia repellat eos quaerat veritatis aspernatur sit perferendis quidem facilis, ullam aperiam. Repellat dolores, ipsum exercitationem sequi, ad unde blanditiis modi quis voluptatibus sint distinctio laboriosam illum hic. Sed veritatis, quisquam laborum vero cupiditate voluptatem eius explicabo eos aperiam eum. Fugiat molestias nulla error veritatis, aliquam illo repudiandae?",
      link: "230000",
    },
  ];

  return (
    <div className="py-10">
      <Container>
        <div className="col-span-full grid grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <BlogCard
              img={blog.img}
              link={blog.link}
              date={blog.date}
              title={blog.title}
              key={i}
            />
          ))}
        </div>
      </Container>
      <Pagination />
    </div>
  );
};

export default BlogContainer;
