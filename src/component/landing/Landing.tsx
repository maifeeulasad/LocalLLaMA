import { Typography, Space, Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph, Link } = Typography;

const Landing = () => (
  <div>
    <Typography>
      <Title level={1}>Welcome to LocalLLaMA</Title>
      <Paragraph>
        LocalLLaMA is your local Reddit mirror and knowledge explorer. Browse curated posts,
        read discussions offline, and discover trending community insights without needing
        to visit Reddit directly every time.
      </Paragraph>
      <Paragraph>
        Use the sidebar to navigate the latest scraped posts, explore specific threads,
        and stay connected to the LocalLLaMA subreddit in a clean, distraction-free way.
      </Paragraph>
      <Paragraph>
        This project is fully open source — built with React, TypeScript, and Ant Design.
        If you find it useful, please consider giving it a ⭐️ on GitHub to support its development!
      </Paragraph>
      <Space>
        <Button
          type="primary"
          icon={<GithubOutlined />}
          href="https://github.com/maifeeulasad/LocalLLaMA"
          target="_blank"
          rel="noreferrer"
        >
          Star on GitHub
        </Button>
      </Space>
    </Typography>
  </div>
);

// eslint-disable-next-line import/no-default-export
export default Landing;
