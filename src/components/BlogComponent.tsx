import React from "react";
import parser, {
  HTMLReactParserOptions,
  domToReact,
  DOMNode,
} from "html-react-parser";
import type { Element } from "html-react-parser";

const BlogComponent = ({ item }: {item: BlogItemFeed}) => {
  const options: HTMLReactParserOptions = {
    replace(domNode: Element, index) {
      if (domNode.name === "img") {
        return (
          <img
            // className="object-cover w-32 h-32 bg-white"
            className="object-cover w-64"
            src={domNode.attribs.src as string}
            alt=""
          />
        );
      }

      // if (attribs === 'main') {
      //   return <h1 style={{ fontSize: 42 }}>{domToReact(children)}</h1>;
      // }

      // if (attribs.class === 'prettify') {
      //   return (
      //     <span style={{ color: 'hotpink' }}>
      //       {domToReact(children)}
      //     </span>
      //   );
      // }
    },
    trim: true,
  };

  const htmlElements = item ? parser(item.content_html, options) as any : []; //

  // Check if there are at least three elements
  if (htmlElements.length >= 3) {
    return (
      <div className="bg-white rounded-lg shadow-lg flex">
        <div className="relative hidden md:w-1/6 md:flex items-center justify-center">
          {htmlElements[0]}
        </div>
        <div className="w-full md:w-5/6 px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <a className="text-gray-800 hover:text-blue-600" href={item.url} target="_blank">{item.title}</a>
          </div>
          <p className="text-gray-700 text-base mb-4">
            {htmlElements[1]}
          </p>
          <p className="text-gray-600 text-base">
            {htmlElements[2]}
          </p>
          <a href={item.url} target="_blank">view more</a>
          <div className="mt-4 bg-gray-100 py-2 px-4 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://avatars.githubusercontent.com/u/108409669?v=4"
                alt="Author Avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{item.author.name}</p>
                <p className="text-gray-600">Author</p>
              </div>
            </div>
            <span className="text-gray-600 text-sm">{new Date(item.date_modified).toDateString()}</span>
          </div>
        </div>
      </div>
      //   <div className="bg-blue-400 m-2 p-6 rounded">
      //     {htmlElements.splice(0, 3).map((item) => item)}
      //   </div>
    );
  } else {
    return <div>Not enough elements in the HTML string</div>;
  }
};

export default BlogComponent;
