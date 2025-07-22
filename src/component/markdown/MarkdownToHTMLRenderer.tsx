import React from 'react';

interface MarkdownToHTMLRendererProps {
    markdown: string;
}

const decodeEntities = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
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
                // close code block
                elements.push(
                    <pre key={`code-${index}`} style={{ background: '#1e1e1e', color: '#fff', padding: 12, overflowX: 'auto' }}>
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
                <blockquote key={`quote-${index}`} style={{ borderLeft: '4px solid #ccc', paddingLeft: 12, margin: '12px 0' }}>
                    {line.slice(1).trim()}
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
                    {headingMatch[2]}
                </HeadingTag>
            );
            return;
        }

        // list
        if (/^\s*[-*+]\s+/.test(line)) {
            const content = line.replace(/^[-*+]\s+/, '');
            currentListItems.push(<li key={`li-${index}`}>{content}</li>);
            return;
        } else {
            flushList(index);
        }

        // bold + italic + links + inline code
        const rendered = line
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`([^`]+)`/g, '<code style="background:#eee;padding:2px 4px;border-radius:4px;">$1</code>')
            .replace(/\[([^\]]+)]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

        if (rendered.trim()) {
            elements.push(
                <p key={`p-${index}`} dangerouslySetInnerHTML={{ __html: rendered }} />
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
