import React from "react";
import { Card, List, Typography, Image, Collapse } from "antd";

const { Title, Paragraph, Link, Text } = Typography;
const { Panel } = Collapse;

interface RedditChild {
  kind: string;
  data: RedditPost | RedditComment;
}

interface RedditListing {
  kind: string;
  data: {
    after: string | null;
    dist: number | null;
    modhash: string;
    geo_filter: string;
    children: RedditChild[];
    before: string | null;
  };
}

interface RedditPost {
  id: string;
  title: string;
  permalink: string;
  thumbnail?: string;
  subreddit_name_prefixed: string;
  author: string;
  score: number;
  selftext?: string;
}

interface RedditComment {
  id: string;
  author: string;
  score: number;
  body: string;
  replies?: RedditListing | string;
}

interface RedditListingProps {
  data: RedditListing[];
}

const RedditListing: React.FC<RedditListingProps> = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  const renderPost = (post: RedditChild) => {
    const d = post.data as RedditPost;
    return (
      <Card
        key={d.id}
        title={
          <Link href={`https://reddit.com${d.permalink}`} target="_blank">
            {d.title}
          </Link>
        }
        style={{ marginBottom: 16 }}
      >
        {d.thumbnail && d.thumbnail.startsWith("http") && (
          <Image width={140} src={d.thumbnail} alt="thumbnail" />
        )}
        <Paragraph>
          <Text strong>Subreddit:</Text> {d.subreddit_name_prefixed}
        </Paragraph>
        <Paragraph>
          <Text strong>Author:</Text> {d.author}
        </Paragraph>
        <Paragraph>
          <Text strong>Score:</Text> {d.score}
        </Paragraph>
        {d.selftext && <Paragraph>{d.selftext}</Paragraph>}
      </Card>
    );
  };

  const renderComment = (comment: RedditChild) => {
    const d = comment.data as RedditComment;
    return (
      <Collapse key={d.id} style={{ marginBottom: 8 }}>
        <Panel
          header={
            <span>
              {d.author} | Score: {d.score}
            </span>
          }
          key={d.id}
        >
          <Paragraph>{d.body}</Paragraph>
          {d.replies && typeof d.replies !== 'string' && d.replies.data && d.replies.data.children.length > 0 && (
            <div style={{ marginLeft: 24 }}>
              {d.replies.data.children.map((child) =>
                child.kind === "t1" ? renderComment(child) : null
              )}
            </div>
          )}
        </Panel>
      </Collapse>
    );
  };

  return (
    <List
      header={<Title level={3}>Reddit Listing</Title>}
      dataSource={data}
      renderItem={(item) => {
        const children = item.data.children;
        return (
          <div key={item.kind}>
            {children.map((child) => {
              if (child.kind === "t3") {
                return renderPost(child);
              } else if (child.kind === "t1") {
                return renderComment(child);
              } else {
                return null;
              }
            })}
          </div>
        );
      }}
    />
  );
};

export default RedditListing;
