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
        { regex: /\[([^\]]+)]\(([^)]+)\)/, tag: 'a' },
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
                    const isUrl = /^https?:\/\//.test(content);
                    parts.push(
                        <a key={parts.length} href={match[2]} target="_blank" rel="noreferrer">
                            {isUrl ? match[2] : content}
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

    let i = 0;
    while (i < lines.length) {
        const line = lines[i];

        if (/^(\s*)([-*_])(\s*\2){2,}\s*$/.test(line)) {
            flushList(i);
            elements.push(
                <hr key={`hr-${i}`} style={{ margin: '16px 0', border: 'none', borderTop: '1px solid #ccc' }} />
            );
            i++;
            continue;
        }

        if (/^\|(.+)\|$/.test(line) && i + 1 < lines.length && /^\|[-\s|]+?\|$/.test(lines[i + 1])) {
            flushList(i);
            const headers = line.split('|').slice(1, -1).map(h => h.trim());
            const rows: string[][] = [];
            i += 2;

            while (i < lines.length && /^\|(.+)\|$/.test(lines[i])) {
                const cells = lines[i].split('|').slice(1, -1).map(c => c.trim());
                rows.push(cells);
                i++;
            }

            elements.push(
                <table key={`table-${i}`} style={{ borderCollapse: 'collapse', margin: '12px 0' }}>
                    <thead>
                        <tr>
                            {headers.map((h, j) => (
                                <th key={`th-${j}`} style={{ border: '1px solid #ccc', padding: 6, background: '#f7f7f7' }}>
                                    {parseInlineMarkdown(h)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr key={`tr-${rowIndex}`}>
                                {row.map((cell, colIndex) => (
                                    <td key={`td-${rowIndex}-${colIndex}`} style={{ border: '1px solid #ccc', padding: 6 }}>
                                        {parseInlineMarkdown(cell)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
            continue;
        }

        if (line.trim().startsWith('```')) {
            flushList(i);
            if (inCodeBlock) {
                elements.push(
                    <pre
                        key={`code-${i}`}
                        style={{ background: '#1e1e1e', color: '#fff', padding: 12, overflowX: 'auto' }}
                    >
                        <code>{codeBuffer.join('\n')}</code>
                    </pre>
                );
                codeBuffer = [];
                inCodeBlock = false;
            } else {
                inCodeBlock = true;
            }
            i++;
            continue;
        }

        if (inCodeBlock) {
            codeBuffer.push(line);
            i++;
            continue;
        }

        if (line.startsWith('>')) {
            flushList(i);
            elements.push(
                <blockquote key={`quote-${i}`} style={{ borderLeft: '4px solid #ccc', paddingLeft: 12, margin: '12px 0' }}>
                    {parseInlineMarkdown(line.slice(1).trim())}
                </blockquote>
            );
            i++;
            continue;
        }

        const headingMatch = line.match(/^(#{1,6})\s+(.*)/);
        if (headingMatch) {
            flushList(i);
            const level = headingMatch[1].length;
            const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
            elements.push(
                <HeadingTag key={`h-${i}`} style={{ margin: '12px 0' }}>
                    {parseInlineMarkdown(headingMatch[2])}
                </HeadingTag>
            );
            i++;
            continue;
        }

        if (/^\s*[-*+]\s+/.test(line)) {
            const content = line.replace(/^[-*+]\s+/, '');
            currentListItems.push(<li key={`li-${i}`}>{parseInlineMarkdown(content)}</li>);
            i++;
            continue;
        } else {
            flushList(i);
        }

        const trimmed = line.trim();
        if (trimmed.length > 0) {
            elements.push(
                <p key={`p-${i}`}>{parseInlineMarkdown(trimmed)}</p>
            );
        }

        i++;
    }

    flushList(lines.length);

    return elements;
};

const MarkdownToHTMLRenderer: React.FC<MarkdownToHTMLRendererProps> = ({ markdown }) => {
    return <div style={{ fontFamily: 'system-ui', lineHeight: 1.6 }}>{parseMarkdown(markdown)}</div>;
};

export default MarkdownToHTMLRenderer;