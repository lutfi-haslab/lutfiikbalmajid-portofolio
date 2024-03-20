type BlogItemFeed = {
  id: string;
  content_html: string;
  url: string;
  title: string;
  date_modified: string;
  author: {
    name: string;
    url: string;
  };
  tags: string[];
};

type BlogFeed = {
  version: string;
  title: string;
  home_page_url: string;
  description: string;
  items: BlogItemFeed[];
};
