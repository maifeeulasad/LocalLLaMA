import React from 'react';

interface MarkdownToHTMLRendererProps {
    markdown: string;
}

const decodeEntities = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
};

const parseInlineMarkdown = (line: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    const patterns = [
        { regex: /\*\*(.*?)\*\*/, tag: 'strong' },
        { regex: /\*(.*?)\*/, tag: 'em' },
        { regex: /`([^`]+)`/, tag: 'code' },
        { regex: /\[([^\]]+)\]\(([^)]+)\)/, tag: 'a' },
        { regex: /(https?:\/\/[^\s)]+[^\s).,;:'"\]\s])/, tag: 'auto-link' },
    ];

    while (line.length) {
        let matched = false;

        for (const pattern of patterns) {
            const match = line.match(pattern.regex);
            if (match && match.index !== undefined) {
                if (match.index > 0) {
                    parts.push(line.slice(0, match.index));
                }

                const content = match[1];
                const remaining = line.slice(match.index + match[0].length);

                if (pattern.tag === 'strong') {
                    parts.push(<strong key={parts.length}>{content}</strong>);
                } else if (pattern.tag === 'em') {
                    parts.push(<em key={parts.length}>{content}</em>);
                } else if (pattern.tag === 'code') {
                    parts.push(
                        <code
                            key={parts.length}
                            style={{
                                background: '#eee',
                                padding: '2px 4px',
                                borderRadius: '4px',
                                fontFamily: 'monospace',
                            }}
                        >
                            {content}
                        </code>
                    );
                } else if (pattern.tag === 'a') {
                    parts.push(
                        <a key={parts.length} href={match[2]} target="_blank" rel="noreferrer">
                            {content}
                        </a>
                    );
                } else if (pattern.tag === 'auto-link') {
                    parts.push(
                        <a key={parts.length} href={match[1]} target="_blank" rel="noreferrer">
                            {match[1]}
                        </a>
                    );
                }

                line = remaining;
                matched = true;
                break;
            }
        }

        if (!matched) {
            parts.push(line);
            break;
        }
    }

    return parts;
};

const parseMarkdown = (raw: string) => {
    const lines = decodeEntities(raw).split('\n');
    const elements: React.ReactNode[] = [];
    let codeBuffer: string[] = [];
    let inCodeBlock = false;
    let currentListItems: React.ReactNode[] = [];

    const flushList = (index: number) => {
        if (currentListItems.length > 0) {
            elements.push(
                <ul key={`ul-${index}`} style={{ margin: '8px 0 8px 20px' }}>
                    {currentListItems}
                </ul>
            );
            currentListItems = [];
        }
    };

    lines.forEach((line, index) => {
        if (line.trim().startsWith('```')) {
            flushList(index);
            if (inCodeBlock) {
                elements.push(
                    <pre
                        key={`code-${index}`}
                        style={{
                            background: '#1e1e1e',
                            color: '#fff',
                            padding: 12,
                            overflowX: 'auto',
                        }}
                    >
                        <code>{codeBuffer.join('\n')}</code>
                    </pre>
                );
                codeBuffer = [];
                inCodeBlock = false;
            } else {
                inCodeBlock = true;
            }
            return;
        }

        if (inCodeBlock) {
            codeBuffer.push(line);
            return;
        }

        // blockquote
        if (line.startsWith('>')) {
            flushList(index);
            elements.push(
                <blockquote
                    key={`quote-${index}`}
                    style={{
                        borderLeft: '4px solid #ccc',
                        paddingLeft: 12,
                        margin: '12px 0',
                    }}
                >
                    {parseInlineMarkdown(line.slice(1).trim())}
                </blockquote>
            );
            return;
        }

        // heading
        const headingMatch = line.match(/^(#{1,6})\s+(.*)/);
        if (headingMatch) {
            flushList(index);
            const level = headingMatch[1].length;
            const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
            elements.push(
                <HeadingTag key={`h-${index}`} style={{ margin: '12px 0' }}>
                    {parseInlineMarkdown(headingMatch[2])}
                </HeadingTag>
            );
            return;
        }

        // list
        if (/^\s*[-*+]\s+/.test(line)) {
            const content = line.replace(/^[-*+]\s+/, '');
            currentListItems.push(<li key={`li-${index}`}>{parseInlineMarkdown(content)}</li>);
            return;
        } else {
            flushList(index);
        }

        const trimmed = line.trim();
        if (trimmed.length > 0) {
            elements.push(
                <p key={`p-${index}`}>{parseInlineMarkdown(trimmed)}</p>
            );
        }
    });

    // Flush any remaining list at end
    flushList(lines.length);

    return elements;
};

const MarkdownToHTMLRenderer: React.FC<MarkdownToHTMLRendererProps> = ({ markdown }) => {
    return <div style={{ fontFamily: 'system-ui', lineHeight: 1.6 }}>{parseMarkdown(markdown)}</div>;
};

export default MarkdownToHTMLRenderer;
