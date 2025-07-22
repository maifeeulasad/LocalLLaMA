import React from 'react';
import {
  Card,
  List,
  Typography,
  Image,
  Collapse,
  Descriptions,
  Tag,
  Space,
} from 'antd';
import MarkdownToHTMLRenderer from '../markdown/MarkdownToHTMLRenderer';

const { Title, Paragraph, Link, Text } = Typography;
const { Panel } = Collapse;

interface RedditChild {
  kind: string;
  data: RedditPost | RedditComment;
}

interface RedditListing {
  kind: string;
  data: {
    children: RedditChild[];
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
  created_utc: number;
  url_overridden_by_dest?: string;
}

interface RedditComment {
  id: string;
  author: string;
  score: number;
  body: string;
  created_utc: number;
  replies?: RedditListing | string;
}

interface RedditListingProps {
  data: RedditListing[];
}

const timeAgo = (utc: number) => {
  const seconds = Math.floor(Date.now() / 1000 - utc);
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  const intervals = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2592000 },
    { unit: 'week', seconds: 604800 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) return rtf.format(-count, interval.unit as any);
  }

  return rtf.format(-seconds, 'second');
};

const RedditListing: React.FC<RedditListingProps> = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  const renderPost = (post: RedditChild) => {
    const d = post.data as RedditPost;
    return (
      <Card
        key={d.id}
        title={
          <Space>
            <Link href={`https://reddit.com${d.permalink}`} target="_blank">
              {d.title}
            </Link>
            <Tag color="blue">{timeAgo(d.created_utc)}</Tag>
          </Space>
        }
        style={{ marginBottom: 24 }}
      >
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          {d.url_overridden_by_dest === undefined && d.thumbnail && d.thumbnail.startsWith('http') && (
            <Image width={200} src={d.thumbnail} alt="thumbnail" />
          )}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {d.url_overridden_by_dest && d.url_overridden_by_dest.startsWith('http') && !d.url_overridden_by_dest.includes('v.redd.it') && (
              <Image
                width={200}
                src={d.url_overridden_by_dest}
                alt={d.url_overridden_by_dest}
              />
            )}
            {d.url_overridden_by_dest && d.url_overridden_by_dest.startsWith('http') && d.url_overridden_by_dest.includes('v.redd.it') && (
              <>
                Video files are not supported in this renderer.
                <Link
                  href={d.url_overridden_by_dest}
                  target="_blank"
                  style={{ display: 'block' }}
                >
                  Open video in new tab
                </Link>
              </>
            )}
          </div>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Subreddit">
              {d.subreddit_name_prefixed}
            </Descriptions.Item>
            <Descriptions.Item label="Author">
              <Link href={`https://reddit.com/user/${d.author}`} target="_blank">
                u/{d.author}
              </Link>
            </Descriptions.Item>
            <Descriptions.Item label="Score">
              <Tag color={d.score >= 1 ? 'geekblue' : 'volcano'}>{d.score}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Created">
              {timeAgo(d.created_utc)}
            </Descriptions.Item>
          </Descriptions>
          {d.selftext && (
            <Paragraph style={{ marginTop: 16 }}>
              <MarkdownToHTMLRenderer markdown={d.selftext} />
            </Paragraph>
          )}
        </Space>
      </Card>
    );
  };

  const renderComment = (comment: RedditChild) => {
    const d = comment.data as RedditComment;
    return (
      <Collapse key={d.id} style={{ marginBottom: 8 }}>
        <Panel
          header={
            <Space>
              <Text strong>{d.author}</Text>
              <Tag color={d.score >= 1 ? 'geekblue' : 'volcano'}>{d.score}</Tag>
              <Text type="secondary">{timeAgo(d.created_utc)}</Text>
            </Space>
          }
          key={d.id}
        >
          <Paragraph>
            <MarkdownToHTMLRenderer markdown={d.body} />
          </Paragraph>
          {d.replies &&
            typeof d.replies !== 'string' &&
            d.replies.data &&
            d.replies.data.children.length > 0 && (
              <div style={{ marginLeft: 24 }}>
                {d.replies.data.children.map((child) =>
                  (child.kind === 't1' ? renderComment(child) : null),
                )}
              </div>
            )}
        </Panel>
      </Collapse>
    );
  };

  return (
    <List
      header={<Title level={3}>📜 Archived Reddit Thread</Title>}
      dataSource={data}
      renderItem={(item) => (
        <div key={item.kind}>
          {item.data.children.map((child) => {
            if (child.kind === 't3') {
              return renderPost(child);
            } if (child.kind === 't1') {
              return renderComment(child);
            }
            return null;
          })}
        </div>
      )}
    />
  );
};

const RedditPostRenderer = RedditListing;
export default RedditPostRenderer;
