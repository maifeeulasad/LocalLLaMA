import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import type { MenuDataItem } from '@ant-design/pro-components';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { notification, Input, Select, Form, Button, Affix, List, Spin } from 'antd';
import { copyText } from 'copy-clipboard-js';
import CopyOutlined from '@ant-design/icons/CopyOutlined';
import { ReloadOutlined, SearchOutlined } from '@ant-design/icons';
import Fuse from 'fuse.js';
import logo from './logo.svg';

// replace start---mua--localllama

const defaultMenus: MenuDataItem[] = [
  {
    path: '/',
    name: 'Pages',
    children: [
      {
        path: '/18n3ar3',
        name: 'Karpathy on LLM evals',
      },
      {
        path: '/199y05e',
        name: 'Zuckerberg says they are training LLaMa 3 on 600,000 H100s.. mind blown!',
      },
      {
        path: '/1bgh9h4',
        name: 'The Truth About LLMs',
      },
      {
        path: '/1bqmuto',
        name: 'Voicecraft: I\'ve never been more impressed in my entire life !',
      },
      {
        path: '/1cf7hg0',
        name: 'open AI',
      },
      {
        path: '/1cgrz46',
        name: 'local GLaDOS - realtime interactive agent, running on Llama-3 70B',
      },
      {
        path: '/1cr9wvg',
        name: 'Friendly reminder in light of GPT-4o release: OpenAI is a big data corporation, and an enemy of open source AI development',
      },
      {
        path: '/1d3sf1k',
        name: 'We’re famous!',
      },
      {
        path: '/1efya2r',
        name: 'White House says no need to restrict \'open-source\' artificial intelligence',
      },
      {
        path: '/1eh9sef',
        name: 'Just dropping the image..',
      },
      {
        path: '/1ffv39d',
        name: 'Enough already. If I can’t run it in my 3090, I don’t want to hear about it. ',
      },
      {
        path: '/1fgsrx8',
        name: '&lt;hand rubbing noises&gt;',
      },
      {
        path: '/1fpmlga',
        name: 'LLAMA 3.2 not available',
      },
      {
        path: '/1g4w2vs',
        name: '6U Threadripper + 4xRTX4090 build',
      },
      {
        path: '/1gjje70',
        name: 'Now I need to explain this to her...',
      },
      {
        path: '/1gt9f5y',
        name: 'Open source projects/tools vendor locking themselves to openai?',
      },
      {
        path: '/1gvlzug',
        name: 'I Created an AI Research Assistant that actually DOES research! Feed it ANY topic, it searches the web, scrapes content, saves sources, and gives you a full research document + summary. Uses Ollama (FREE) - Just ask a question and let it work! No API costs, open source, runs locally!',
      },
      {
        path: '/1gx4asf',
        name: 'Chad Deepseek',
      },
      {
        path: '/1h85tt4',
        name: 'Meta releases Llama3.3 70B',
      },
      {
        path: '/1haumxe',
        name: 'finally',
      },
      {
        path: '/1hhmebr',
        name: 'New physics AI is absolutely insane (opensource)',
      },
      {
        path: '/1ho27fr',
        name: 'the WHALE has landed',
      },
      {
        path: '/1hphlz7',
        name: 'Sam Altman is taking veiled shots at DeepSeek and Qwen. He mad. ',
      },
      {
        path: '/1hqklqj',
        name: 'Deepseek and qwen',
      },
      {
        path: '/1hvj4wn',
        name: 'Nvidia announces $3,000 personal AI supercomputer called Digits',
      },
      {
        path: '/1hwwvuz',
        name: 'This sums my experience with models on Groq',
      },
      {
        path: '/1hxm0ep',
        name: 'Anyone want the script to run Moondream 2b\'s new gaze detection on any video?',
      },
      {
        path: '/1hz28ld',
        name: 'Bro whaaaat?',
      },
      {
        path: '/1i5or1y',
        name: 'Deepseek just uploaded 6 distilled verions of R1 + R1 "full" now available on their website.',
      },
      {
        path: '/1i5s5hk',
        name: 'OpenAI sweating bullets rn',
      },
      {
        path: '/1i80cwf',
        name: 'deepseek is a side project',
      },
      {
        path: '/1i88g4y',
        name: 'Meta panicked by Deepseek',
      },
      {
        path: '/1i8tx5z',
        name: 'I benchmarked (almost) every model that can fit in 24GB VRAM (Qwens, R1 distils, Mistrals, even Llama 70b gguf)',
      },
      {
        path: '/1i8vclf',
        name: 'Depseek promises to open source agi',
      },
      {
        path: '/1i9nqj9',
        name: 'Full open source reproduction of R1 in progress ⏳',
      },
      {
        path: '/1iaebwp',
        name: 'Financial Times: "DeepSeek shocked Silicon Valley"',
      },
      {
        path: '/1ibbloy',
        name: '1.58bit DeepSeek R1 - 131GB Dynamic GGUF',
      },
      {
        path: '/1ibk9us',
        name: 'Meta is reportedly scrambling multiple ‘war rooms’ of engineers to figure out how DeepSeek’s AI is beating everyone else at a fraction of the price',
      },
      {
        path: '/1icaq2z',
        name: 'DeepSeek\'s AI breakthrough bypasses Nvidia\'s industry-standard CUDA, uses assembly-like PTX programming instead',
      },
      {
        path: '/1icwys9',
        name: 'Berkley AI research team claims to reproduce DeepSeek core technologies for $30',
      },
      {
        path: '/1id2poe',
        name: '"DeepSeek produced a model close to the performance of US models 7-10 months older, for a good deal less cost (but NOT anywhere near the ratios people have suggested)" says Anthropic\'s CEO',
      },
      {
        path: '/1idseqb',
        name: 'DeepSeek R1 671B over 2 tok/sec *without* GPU on local gaming rig!',
      },
      {
        path: '/1idtkll',
        name: 'Interview with Deepseek Founder: We won’t go closed-source. We believe that establishing a robust technology ecosystem matters more.',
      },
      {
        path: '/1idz487',
        name: '\'we\'re in this bizarre world where the best way to learn about llms... is to read papers by chinese companies. i do not think this is a good state of the world\' - us labs keeping their architectures and algorithms secret is ultimately hurting ai development in the us.\' - Dr Chris Manning',
      },
      {
        path: '/1iehstw',
        name: 'GPU pricing is spiking as people rush to self-host deepseek',
      },
      {
        path: '/1ig6e6t',
        name: 'DeepSeek-R1 fails every safety test. It exhibits a 100% attack success rate, meaning it failed to block a single harmful prompt.',
      },
      {
        path: '/1igc6r0',
        name: '20 yrs in jail or $1 million for downloading Chinese models proposed at congress',
      },
      {
        path: '/1ih3nc6',
        name: 'US Bill proposed to jail people who download Deepseek',
      },
      {
        path: '/1iiio9u',
        name: 'Anthropic: ‘Please don’t use AI’',
      },
      {
        path: '/1ij5yf2',
        name: 'How I Built an Open Source AI Tool to Find My Autoimmune Disease (After $100k and 30+ Hospital Visits) - Now Available for Anyone to Use',
      },
      {
        path: '/1ijab77',
        name: 'Train your own Reasoning model - 80% less VRAM - GRPO now in Unsloth (7GB VRAM min.)',
      },
      {
        path: '/1iji47x',
        name: 'All DeepSeek, all the time.',
      },
      {
        path: '/1ikvo8a',
        name: 'Your next home lab might have 48GB Chinese card😅',
      },
      {
        path: '/1imenfa',
        name: 'fair use vs stealing data',
      },
      {
        path: '/1imyp19',
        name: 'If you want my IT department to block HF, just say so.',
      },
      {
        path: '/1inch7r',
        name: 'A new paper demonstrates that LLMs could "think" in latent space, effectively decoupling internal reasoning from visible context tokens. This breakthrough suggests that even smaller models can achieve remarkable performance without relying on extensive context windows.',
      },
      {
        path: '/1io2ija',
        name: 'Is Mistral\'s Le Chat truly the FASTEST?',
      },
      {
        path: '/1ipfv03',
        name: 'The official DeepSeek deployment runs the same model as the open-source version',
      },
      {
        path: '/1ipxszq',
        name: 'Ridiculous',
      },
      {
        path: '/1iqpzpk',
        name: '8x RTX 3090 open rig',
      },
      {
        path: '/1is1p2o',
        name: 'The normies have failed us',
      },
      {
        path: '/1iskklo',
        name: 'PerplexityAI releases R1-1776, a DeepSeek-R1 finetune that removes Chinese censorship while maintaining reasoning capabilities',
      },
      {
        path: '/1isu4un',
        name: 'o3-mini won the poll! We did it guys!',
      },
      {
        path: '/1iu19zy',
        name: '2025 is an AI madhouse',
      },
      {
        path: '/1iui6nk',
        name: 'Starting next week, DeepSeek will open-source 5 repos',
      },
      {
        path: '/1iwb5nu',
        name: 'Grok\'s think mode leaks system prompt',
      },
      {
        path: '/1iy2t7c',
        name: 'Framework\'s new Ryzen Max desktop with 128gb 256gb/s memory is $1990',
      },
      {
        path: '/1j0n56h',
        name: 'Finally, a real-time low-latency voice chat model',
      },
      {
        path: '/1j67bxt',
        name: '16x 3090s - It\'s alive!',
      },
      {
        path: '/1jaj6gc',
        name: 'AI2 releases OLMo 32B - Truly open source',
      },
      {
        path: '/1jaoy9g',
        name: 'Meme i made',
      },
      {
        path: '/1je6ns1',
        name: 'Meta talks about us and open source source AI for over 1 Billion downloads',
      },
      {
        path: '/1jgap0q',
        name: 'SpatialLM: A large language model designed for spatial understanding',
      },
      {
        path: '/1jgqmlr',
        name: '"If we confuse users enough, they will overpay"',
      },
      {
        path: '/1jj6i4m',
        name: 'Deepseek v3',
      },
      {
        path: '/1jjorwd',
        name: 'I think we’re going to need a bigger bank account.',
      },
      {
        path: '/1jl5jea',
        name: 'My LLMs are all free thinking and locally-sourced.',
      },
      {
        path: '/1jsampe',
        name: 'Mark presenting four Llama 4 models, even a 2 trillion parameters model!!!',
      },
      {
        path: '/1jsshhe',
        name: '"snugly fits in a h100, quantized 4 bit"',
      },
      {
        path: '/1jt7hlc',
        name: 'Meta\'s Llama 4 Fell Short',
      },
      {
        path: '/1juni3t',
        name: 'DeepCoder: A Fully Open-Source 14B Coder at O3-mini Level',
      },
      {
        path: '/1jytw62',
        name: 'DeepSeek is about to open-source their inference engine',
      },
      {
        path: '/1jzocoo',
        name: 'Finally someone noticed this unfair situation',
      },
      {
        path: '/1k1fi5w',
        name: 'New society is taking shape',
      },
      {
        path: '/1k9qxbl',
        name: 'Qwen3 Published 30 seconds ago (Model Weights Available)',
      },
      {
        path: '/1ka6mic',
        name: 'Qwen 3 !!!',
      },
      {
        path: '/1ka8r2t',
        name: 'Qwen didn\'t just cook. They had a whole barbecue!',
      },
      {
        path: '/1kcwx8e',
        name: 'Yea keep "cooking"',
      },
      {
        path: '/1klx9q2',
        name: 'Real-time webcam demo with SmolVLM using llama.cpp',
      },
      {
        path: '/1ksyicp',
        name: 'Introducing the world\'s most powerful model',
      },
      {
        path: '/1ktlz3w',
        name: '96GB VRAM! What should run first?',
      },
      {
        path: '/1ktx15j',
        name: 'Guys! I managed to build a 100% fully local voice AI with Ollama that can have full conversations, control all my smart devices AND now has both short term + long term memory. 🤘',
      },
      {
        path: '/1kzsa70',
        name: 'China is leading open source',
      },
      {
        path: '/1l1qqdx',
        name: 'At the airport people watching while I run models locally:',
      },
      {
        path: '/1l3dhjx',
        name: 'Real-time conversational AI running 100% locally in-browser on WebGPU',
      },
      {
        path: '/1l5wxoa',
        name: 'My 160GB local LLM rig',
      },
      {
        path: '/1l6ibwg',
        name: 'When you figure out it’s all just math:',
      },
      {
        path: '/1laee7q',
        name: 'Got a tester version of the open-weight OpenAI model. Very lean inference engine!',
      },
      {
        path: '/1lbrnod',
        name: 'Jan-nano, a 4B model that can outperform 671B on MCP',
      },
      {
        path: '/1lei5mb',
        name: 'Oops',
      },
      {
        path: '/1lkz0hg',
        name: 'Meta wins AI copyright lawsuit as US judge rules against authors | Meta',
      },
      {
        path: '/1lkzynl',
        name: 'The Real Performance Penalty of GPU Passthrough into a VM (It\'s... boring)',
      },
      {
        path: '/1ll38zu',
        name: 'FLUX.1 Kontext [dev] - an open weights model for proprietary-level image editing performance.',
      },
      {
        path: '/1ll429p',
        name: 'gemma 3n has been released on huggingface',
      },
      {
        path: '/1ll57uz',
        name: 'Gemma 3n is on out on Hugging Face!',
      },
      {
        path: '/1ll68iz',
        name: 'Gemma 3n Full Launch - Developers Edition',
      },
      {
        path: '/1ll6jo5',
        name: 'DeepSeek R2 delayed',
      },
      {
        path: '/1ll88pe',
        name: 'Gemma 3n vs Gemma 3 (4B/12B) Benchmarks',
      },
      {
        path: '/1lla27f',
        name: 'Google DeepMind Releases AlphaGenome',
      },
      {
        path: '/1llb5e9',
        name: 'Crazy how this subreddit started out focused on Meta\'s LLaMA and ended up becoming a full-blown AI channel.',
      },
      {
        path: '/1lleks2',
        name: 'Gemini CLI - someone already made a pull request for Local LLM providers (and more)',
      },
      {
        path: '/1llhdoq',
        name: 'I\'m using a local Llama model for my game\'s dialogue system!',
      },
      {
        path: '/1lljdk8',
        name: 'What\'s this star all over the feed for LocalLLaMA?',
      },
      {
        path: '/1lllry7',
        name: 'China\'s NetEase Releases Open- Source Mathematical Model: Confucius3-Math',
      },
      {
        path: '/1llltv5',
        name: 'The performance of NetEase\'s new Open-Source mathematical model Confucius3-Math',
      },
      {
        path: '/1lllxey',
        name: 'Update on memX: a shared memory for LLM agents',
      },
      {
        path: '/1llmhof',
        name: 'General opinions on Gemma 3n Speech-to-Text (STT)?',
      },
      {
        path: '/1llms46',
        name: 'FYI to everyone: RTX 3090 prices crashed and are back to baseline. You can finally get $600something 3090s again in the USA.',
      },
      {
        path: '/1lln5uj',
        name: 'Reverse Engineering Gemma 3n',
      },
      {
        path: '/1lln6ar',
        name: 'Gemma 3n Multimodal Input: Text, Audio, Image, and Video?',
      },
      {
        path: '/1llndut',
        name: 'Hunyuan-A13B released',
      },
      {
        path: '/1llnwna',
        name: 'dyad v0.10 - open-source local alternative to lovable/v0/bolt.new with ollama/LM Studio support - now supports building mobile apps!',
      },
      {
        path: '/1llnwy5',
        name: 'AI performance of smartphone SoCs',
      },
      {
        path: '/1llqp0a',
        name: 'The more LLMs think, the worse they translate',
      },
      {
        path: '/1llsztp',
        name: 'What I Learned Building Agents for Enterprises',
      },
      {
        path: '/1lltmig',
        name: 'Best sequence of papers to understand evolution of LLMs',
      },
      {
        path: '/1llty3n',
        name: 'Gemma 3N on ChatterUI',
      },
      {
        path: '/1llu89r',
        name: 'HumOS Canvas: Integrating Local LLMs with Infinite Canvas',
      },
      {
        path: '/1lluur5',
        name: 'Comparing a Prompted FLUX.1-Kontext to Fine-Tuned FLUX.1 [dev] and PixArt on Consistent Character Gen (With Fine-Tuning Tutorial)',
      },
      {
        path: '/1lluwee',
        name: 'Are the new architectures Mamba and Jamba better or worse than current existing Transformer architectures.',
      },
      {
        path: '/1llv00i',
        name: 'What\'s the best local and closed model for translation?',
      },
      {
        path: '/1llv59w',
        name: '[2506.20702] The Singapore Consensus on Global AI Safety Research Priorities',
      },
      {
        path: '/1llvz0g',
        name: '7900XTX vs RTX3090',
      },
      {
        path: '/1llw6ws',
        name: 'Pros and cons of 4 × 4090 vs 8 × V620',
      },
      {
        path: '/1llwfwv',
        name: 'Qwen VLo: From "Understanding" the World to "Depicting" It',
      },
      {
        path: '/1llwtcd',
        name: '🛠️ ChatUI + Jupyter: A smooth way to test LLMs in your notebook interface',
      },
      {
        path: '/1llx4ky',
        name: 'Prime Intellect: We did it — SYNTHETIC‑2 is complete.',
      },
      {
        path: '/1llx5g1',
        name: 'Third Batch of OSS AI Grants (SGLang, Ostris, Open WebUI, SWE-Bench, Pliny, Janus, Truth Terminal, Arc Prize)',
      },
      {
        path: '/1llyosf',
        name: 'Locally run Reverb remover for audio files',
      },
      {
        path: '/1llzdi8',
        name: 'I built an Automated AI Stylist in 24 hours (open source, local)',
      },
      {
        path: '/1llzuit',
        name: 'What\'s a good completion only model these days?',
      },
      {
        path: '/1lm04jn',
        name: 'Generating real world type conversations from structured data',
      },
      {
        path: '/1lm0btg',
        name: 'Mid-30s SWE: Take Huge Pay Cut for Risky LLM Research Role?',
      },
      {
        path: '/1lm0m6i',
        name: 'Copilot Chat for VS Code is now Open Source',
      },
      {
        path: '/1lm17p6',
        name: 'Is it just me, or Gemma 3n really sucks in recognizing images?',
      },
      {
        path: '/1lm1v2c',
        name: 'Open source model that does photoshop-grade edits without affecting the rest of the pic: OmniGen 2',
      },
      {
        path: '/1lm23z8',
        name: 'Fine-Tuning Apple\'s New Foundation Model',
      },
      {
        path: '/1lm24xd',
        name: 'gemma 3n transcibe capability vs whisper',
      },
      {
        path: '/1lm32zh',
        name: '(noob question) - At what point does a GPU with low vram outperform a CPU with lots of ram?',
      },
      {
        path: '/1lm3jvm',
        name: 'Arch-Router: The first (and fastest) LLM router that can align to your usage preferences.',
      },
      {
        path: '/1lm4s6i',
        name: 'Inconsistent responses between OpenRouter API and native OpenAI API',
      },
      {
        path: '/1lm4tno',
        name: 'Build advice question for repurposing spare GPUs',
      },
      {
        path: '/1lm58q1',
        name: 'Problems on RVC WebUI creating new vocal model',
      },
      {
        path: '/1lm5a05',
        name: 'What if we remove reasoning models\' &lt;think&gt; process but make them believe they already reasoned?',
      },
      {
        path: '/1lm5muh',
        name: 'What is your favorite opensource image embedding model',
      },
      {
        path: '/1lm66fy',
        name: 'I need help testing my agentic wrapper for LLMs',
      },
      {
        path: '/1lm76gk',
        name: 'Hugging Face releases a 50+ page report on how they built FineWeb2',
      },
      {
        path: '/1lm76yz',
        name: 'HuBERT checkpoint hubert-soft-0d54a1f4.pt for SO-VITS / RVC (All Official Mirrors Down)',
      },
      {
        path: '/1lm7dox',
        name: 'Computing power to locally run a model equivalent to Veo 3 or Kling 2.1',
      },
      {
        path: '/1lm9012',
        name: 'I keep returning to Llama-3.1-8B',
      },
      {
        path: '/1lm91sr',
        name: 'Local Llama Journaling app.',
      },
      {
        path: '/1lm92se',
        name: 'Qwen3 Coder Soon?',
      },
      {
        path: '/1lm93yi',
        name: 'Magistral small similarity to Deepseek chat?',
      },
      {
        path: '/1lm98z7',
        name: 'Automated GPU kernel optimization for Qwen3 attention - 12.5% average speedup on Apple Silicon using evolutionary programming',
      },
      {
        path: '/1lm9xlq',
        name: 'Dir-Assistant v0.7 Release Announcement: Up to 100% reduced prompt processing using new intelligent context prefix caching',
      },
      {
        path: '/1lmb5s3',
        name: '[Day 5/50] Building a Small Language Model from Scratch - Byte Pair Encoding with tiktoken',
      },
      {
        path: '/1lmbt6g',
        name: 'Nvidia M40 vs M60 for LLM inference?',
      },
      {
        path: '/1lmbtvg',
        name: 'Attempting to train a model from scratch for less than $1000',
      },
      {
        path: '/1lmc6dp',
        name: 'Is there a open source equivalent of Google\'s Gemini-Diffusion model?',
      },
      {
        path: '/1lmd6ns',
        name: 'i bought an epyc server with 7642 cpu, and im only getting 0.4 tokens/sec',
      },
      {
        path: '/1lmd8ut',
        name: 'lm studio server question?',
      },
      {
        path: '/1lmdkbg',
        name: 'It\'s wild, where they got their data for training and consistency --&gt; https://youtu.be/US2gO7UYEfY',
      },
      {
        path: '/1lmdmvu',
        name: 'is it me or you also feels GPT/LLMs now bad at teaching?',
      },
      {
        path: '/1lme24s',
        name: 'How Does vLLM Handle Prompt Isolation During Custom Hardware Integration?',
      },
      {
        path: '/1lmedjx',
        name: 'Local LLaMA on iOS iphone',
      },
      {
        path: '/1lmf3pl',
        name: 'Four AI Agents Go Insane And Interrupt Each Other Talking About Free Will',
      },
      {
        path: '/1lmf42g',
        name: 'Which is the best 16GB Nvidia GPU with balanced price and performance',
      },
      {
        path: '/1lmfiu9',
        name: 'I tested 10 LLMs locally on my MacBook Air M1 (8GB RAM!) – Here\'s what actually works-',
      },
      {
        path: '/1lmfydd',
        name: 'Tencent\'s Hunyuan-A13B-Instruct probably distilled data from OpenAI and DeepSeek',
      },
      {
        path: '/1lmgdw1',
        name: 'How do I stop gemnini 2.5 pro from being overly sycophantic? It has gotten very excessive and feels like it degrades the answers it gives.',
      },
      {
        path: '/1lmggiz',
        name: 'Qwen3 tiny/unsloth quants with vllm?',
      },
      {
        path: '/1lmgp62',
        name: 'Gemini CLI + ZentaraCode/RooCode = free top LLM + free top Code Assistant = FREE wonderful coding !!!',
      },
      {
        path: '/1lmia7k',
        name: 'AGI/ASI Research 20250627- Corporate Artificial General Intelligence',
      },
      {
        path: '/1lmictu',
        name: 'We created world\'s first AI model that does Intermediate reasoning || Defeated models like deepseek and o1 in maths bench mark',
      },
      {
        path: '/1lmix4b',
        name: 'What is the process of knowledge distillation and fine tuning?',
      },
      {
        path: '/1lmizi2',
        name: 'Clever Sydney 12b - Your Friendly Existential Crisis AI',
      },
      {
        path: '/1lmjg3p',
        name: 'Helping Archive r/LocalLLaMA - For Everyone - For open knowledge',
      },
      {
        path: '/1lmjimi',
        name: 'Archiving data from here - For Everyone - For open knowledge',
      },
      {
        path: '/1lmjs43',
        name: 'Hi everyone, I have a problem with fine tuning LLM on law',
      },
      {
        path: '/1lmjwtu',
        name: 'Good Courses to Learn and Use Local LLaMA Models?',
      },
      {
        path: '/1lmk2dj',
        name: 'Progress stalled in non-reasoning open-source models?',
      },
      {
        path: '/1lml6eo',
        name: 'Using local models with Void',
      },
      {
        path: '/1lml8lx',
        name: '120 AI Chat - Native macOS Chat App with Ollama Support',
      },
      {
        path: '/1lmmh3l',
        name: 'Consumer hardware landscape for local LLMs June 2025',
      },
      {
        path: '/1lmmvmj',
        name: 'Many small evals are better than one big eval [techniques]',
      },
      {
        path: '/1lmmxh1',
        name: 'Which are the best realistic video generation tools',
      },
      {
        path: '/1lmn5k2',
        name: 'What are Coqui-TTS alternatives?',
      },
      {
        path: '/1lmni3q',
        name: 'What framework are you using to build AI Agents?',
      },
      {
        path: '/1lmo9b2',
        name: 'Play Infinite Tic Tac Toe against LLM Models',
      },
      {
        path: '/1lmoqsl',
        name: 'Link between LM Studio and tools/functions?',
      },
      {
        path: '/1lmp3en',
        name: 'support for the upcoming ERNIE 4.5 0.3B model has been merged into llama.cpp',
      },
      {
        path: '/1lmpd8j',
        name: 'Best model tuned specifically for Programming?',
      },
      {
        path: '/1lmqsru',
        name: 'deepseek-r1-0528 ranked #2 on lmarena, matching best from chatgpt',
      },
      {
        path: '/1lmqtby',
        name: 'Como mejorar un sistema RAG?',
      },
      {
        path: '/1lmr1qh',
        name: 'EPYC cpu build. Which cpu? (9354, 9534, 9654)',
      },
      {
        path: '/1lmranc',
        name: 'Gemma3n:2B and Gemma3n:4B models are ~40% slower than equivalent models in size running on Llama.cpp',
      },
      {
        path: '/1lmrd6x',
        name: 'Looking for Android chat ui',
      },
      {
        path: '/1lmrmnz',
        name: 'Multimodal Multistage Reasoning',
      },
      {
        path: '/1lmsme1',
        name: 'Can Copilot be trusted with private source code more than competition?',
      },
      {
        path: '/1lmt3kt',
        name: 'i5-8500 (6 cores), 24GB DDR4 2666 dual channel, realistic expectations for 3b/4b models?',
      },
      {
        path: '/1lmtlgp',
        name: 'The ollama models are excellent models that can be installed locally as a starting point but.....',
      },
      {
        path: '/1lmvosa',
        name: 'Best GGUF Base Models Under 3B for Unfiltered NSFW Roleplay?',
      },
      {
        path: '/1lmvv5e',
        name: 'Assistance for beginner in local LLM',
      },
      {
        path: '/1lmwjf2',
        name: 'Recent best models &lt;=14b for agentic search?',
      },
      {
        path: '/1lmx8ic',
        name: 'NVIDIA acquires CentML. what does this mean for inference infra?',
      },
      {
        path: '/1lmxduv',
        name: 'Looking for a local LLM translator for large documents and especialized tools',
      },
      {
        path: '/1lmxg89',
        name: 'The AutoInference library now supports major and popular backends for LLM inference, including Transformers, vLLM, Unsloth, and llama.cpp. ⭐',
      },
      {
        path: '/1lmxhd7',
        name: 'Anyone used RAM across multiple networked devices?',
      },
      {
        path: '/1lmxpis',
        name: 'Local AI conversational model for English language learning',
      },
      {
        path: '/1lmy53s',
        name: 'The Orakle Manifesto: Or Why Your AI Apps (Should) Belong To You',
      },
      {
        path: '/1lmz4kf',
        name: 'Transformer ASIC 500k tokens/s',
      },
      {
        path: '/1lmzqb9',
        name: 'Sydney4 beats ChatGPT 4o in existential crisis',
      },
      {
        path: '/1ln10a8',
        name: 'A bunch of LLM FPHAM Python scripts I\'ve added to my GitHub in recent days',
      },
      {
        path: '/1ln1a6u',
        name: 'What\'s it currently like for people here running AMD GPUs with AI?',
      },
      {
        path: '/1ln1gdr',
        name: 'Problems creating an executable with llama cpp',
      },
      {
        path: '/1ln1ij8',
        name: 'RLHF from scratch, step-by-step, in 3 Jupyter notebooks',
      },
      {
        path: '/1ln1m7d',
        name: 'Audio Input LLM',
      },
      {
        path: '/1ln3pur',
        name: 'Do you use AI (like ChatGPT, Gmini, etc) to develop your LangGraph agents? Or is it just my impostor syndrome talking?',
      },
      {
        path: '/1ln4iyg',
        name: 'Need your opinion please, appreciated.',
      },
      {
        path: '/1ln56xd',
        name: 'Building a Coding Mentor Agent with LangChain + LangGraph + GPT-4o-mini',
      },
      {
        path: '/1ln5jli',
        name: 'How do you evaluate and compare multiple LLMs (e.g., via OpenRouter) to test which one performs best?',
      },
      {
        path: '/1ln5jqr',
        name: 'Is ReAct still the best prompt template?',
      },
      {
        path: '/1ln5l6b',
        name: 'Training Open models on my data for replacing RAG',
      },
      {
        path: '/1ln7poe',
        name: 'Suggest me an Uncensored LLM and another LLM for Coding stuffs',
      },
      {
        path: '/1ln7rll',
        name: 'I made a writing assistant Chrome extension. Completely free with Gemini Nano.',
      },
      {
        path: '/1ln8uqb',
        name: 'LM Studio vision models???',
      },
      {
        path: '/1ln93o3',
        name: 'Is anyone here using Llama to code websites and apps? From my experience, it sucks',
      },
      {
        path: '/1lnacbb',
        name: 'Why the local Llama-3.2-1B-Instruct is not as smart as the one provided on Hugging Face?',
      },
      {
        path: '/1lnahfy',
        name: 'Intelligent decisioning for small language model training and serving platform',
      },
      {
        path: '/1lnbru7',
        name: 'How to teach AI to read a complete guide/manual/help website to ask questions about it?',
      },
      {
        path: '/1lncfmw',
        name: 'Seems I was informed (incorrectly) that Ollama had very little censorship--at least it finally stopped apologizing.',
      },
      {
        path: '/1lncymd',
        name: '12B Q5_K_M or 22B Q4_K_S',
      },
      {
        path: '/1lnd1su',
        name: 'Windows vs Linux (Ubuntu) for LLM-GenAI work/research.',
      },
      {
        path: '/1lndmzj',
        name: 'Mistral Small 3.2 can\'t generate tables, and stops generation altogether',
      },
      {
        path: '/1lneb9h',
        name: 'I built Coretx to manage AI amnesia - 90 second demo',
      },
      {
        path: '/1lnejb6',
        name: 'What is the best open source TTS model with multi language support?',
      },
      {
        path: '/1lnesft',
        name: 'What\'s the best way to summarize or chat with website content?',
      },
      {
        path: '/1lnf00q',
        name: 'GUI for Writing Long Stories with LLMs?',
      },
      {
        path: '/1lnf7eo',
        name: 'Is Yann LeCun Changing Directions? - Prediction using VAEs for World Model',
      },
      {
        path: '/1lnfdch',
        name: 'Which GPU to upgrade from 1070?',
      },
      {
        path: '/1lnfl21',
        name: 'KoboldCpp v1.95 with Flux Kontext support',
      },
      {
        path: '/1lnh3d8',
        name: 'DeepSeek-R1 70B jailbreaks are all ineffective. Is there a better way?',
      },
      {
        path: '/1lnh84u',
        name: 'Detecting if an image contains a table, performance comparsion',
      },
      {
        path: '/1lnin1x',
        name: 'AI coding agents...what am I doing wrong?',
      },
      {
        path: '/1lniowu',
        name: 'Best local set up for getting writing critique/talking about the characters?',
      },
      {
        path: '/1lniptg',
        name: 'Best foss LLMs for analysing PTE essay for potato system',
      },
      {
        path: '/1lniut8',
        name: 'How are local or online models scraping? Is it different from search?',
      },
      {
        path: '/1lnj7wb',
        name: 'I built a multi-modal semantic search framework',
      },
      {
        path: '/1lnjw6m',
        name: 'Prompt Smells, Just Like Code',
      },
      {
        path: '/1lnknry',
        name: 'What memory/vram temperatures do you get (particularly anyone with gddr7 in the RTX 50X0 series)?',
      },
      {
        path: '/1lnl6we',
        name: 'According to rumors NVIDIA is planning a RTX 5070 Ti SUPER with 24GB VRAM',
      },
      {
        path: '/1lnldsj',
        name: 'Context Engineering',
      },
      {
        path: '/1lnlmpi',
        name: 'Trying to figure out when it makes sense...',
      },
      {
        path: '/1lnlo69',
        name: 'How do you use  datasets from  huggingface/kaggle etc into local apps like lmstudio or jan local apps',
      },
      {
        path: '/1lnlxp1',
        name: '4x 4090 48GB inference box (I may have overdone it)',
      },
      {
        path: '/1lnmp98',
        name: 'hunyuan-a13b: any news? GGUF? MLX?',
      },
      {
        path: '/1lnnoc1',
        name: 'Running AI models on phone on a different OS?',
      },
      {
        path: '/1lnqaea',
        name: 'Upgraded from 3090 to 5090. Oobabooga complaints.',
      },
      {
        path: '/1lnqk9i',
        name: 'AGI/ASI Research 20250628 - Corporate Artificial General Intelligence',
      },
      {
        path: '/1lnqtog',
        name: 'Using classifier-free guidance to prompt instruct models (with the tags) works better for creative writing than prompting the model outright',
      },
      {
        path: '/1lnrd1t',
        name: 'You can just RL a model to beat any "AI detectors"',
      },
      {
        path: '/1lnrda7',
        name: 'GitHub - khimaros/enc: `cc`, but for english',
      },
      {
        path: '/1lnsax9',
        name: 'Please convince me not to get a GPU I don\'t need. Can any local LLM compare with cloud models?',
      },
      {
        path: '/1lnscnw',
        name: 'LLM Inference with CPP only',
      },
      {
        path: '/1lnsgvy',
        name: 'Build a PC or not?',
      },
      {
        path: '/1lnsqkl',
        name: 'What Is Context Engineering? My Thoughts..',
      },
      {
        path: '/1lnt6yj',
        name: 'Help me design a robust on-prem Llama 3 70B infrastructure for 30 users – Complete hardware/software list wanted',
      },
      {
        path: '/1lnt9kl',
        name: 'Is there a deepseek r1 uncensored?',
      },
      {
        path: '/1lntw6i',
        name: 'Simple textual lists for llm rankings',
      },
      {
        path: '/1lnu0o0',
        name: 'Kimi-Dev-72B - Minimum specs needed to run on a high end PC',
      },
      {
        path: '/1lnu4zl',
        name: 'Baidu releases ERNIE 4.5 models on huggingface',
      },
      {
        path: '/1lnv75q',
        name: 'GPU Learning and Optimization on Macbook',
      },
      {
        path: '/1lnx8js',
        name: 'Week 2: Building a Small Language Model from Scratch(Positional Embeddings, RoPE, and Model Distillation) - June 30 - July 4',
      },
      {
        path: '/1lnxml5',
        name: 'Best Model For Text-To-Audio &amp; Voice Assistant?',
      },
      {
        path: '/1lnxo8y',
        name: 'Major AI platforms will eventually have ads',
      },
      {
        path: '/1lny5qy',
        name: 'What subscription to buy?',
      },
      {
        path: '/1lnyfu0',
        name: 'Rumors are OAI\'s New OS Model potentially "frontier" level in OS space?',
      },
      {
        path: '/1lnzj5e',
        name: 'So whatever happened to d(iffuser)LLMs?',
      },
      {
        path: '/1lo0rk8',
        name: 'Accelerated LLM Inference on AMD Instinct™ GPUs with vLLM 0.9.x and ROCm',
      },
      {
        path: '/1lo1d8t',
        name: 'Models for generating QA-pairs from text dataset',
      },
      {
        path: '/1lo1ew4',
        name: 'Has anyone tried using LLaMA for assistant-style or general-purpose queries?',
      },
      {
        path: '/1lo1xma',
        name: 'Current State of Code Tab/Autocomplete Models???',
      },
      {
        path: '/1lo3548',
        name: 'Guide: How to run an MCP tool Server',
      },
      {
        path: '/1lo35gq',
        name: 'Affordable dev system (spark alternative?)',
      },
      {
        path: '/1lo39jd',
        name: 'Deepseek R1 Web ouputs much more chain-of-thought information than API?',
      },
      {
        path: '/1lo3l7w',
        name: 'Ollama to llama.cpp: system prompt?',
      },
      {
        path: '/1lo3y10',
        name: 'From the trenches, running TinyLlama-1.1B-Chat-v0.1 on iPhone',
      },
      {
        path: '/1lo42x8',
        name: 'Which would be the best uncensored model to run on 4gb Vram laptop using LMStudio?',
      },
      {
        path: '/1lo4qxf',
        name: 'Ollama or VLLM?',
      },
      {
        path: '/1lo5uz6',
        name: 'Has anyone tried running 2 AMD Ryzen™ AI Max+ 395 in parallel?',
      },
      {
        path: '/1lo5vnf',
        name: 'What is the current best local coding model with &lt;= 4B parameters?',
      },
      {
        path: '/1lo5xyx',
        name: 'Been experimenting with “agent graphs” for local LLMs — basically turning thoughts into modular code',
      },
      {
        path: '/1lo61eb',
        name: 'Got all the hardware, Got my dataset, why does it take soo long to learn how to fine-tune?',
      },
      {
        path: '/1lo6gc0',
        name: 'Ollama and llama3.2-vision broken?',
      },
      {
        path: '/1lo84yj',
        name: '[2506.21734] Hierarchical Reasoning Model',
      },
      {
        path: '/1lo9mcm',
        name: 'Query',
      },
      {
        path: '/1load8a',
        name: '[Day 6/50] Building a Small Language Model from Scratch - What Is Positional Embedding and Why Does It Matter?',
      },
      {
        path: '/1loal9v',
        name: 'Drafted Llama as an enhanced parser for interactive fiction puzzles/games',
      },
      {
        path: '/1lob0uu',
        name: 'What Inference Server do you use to host TTS Models? Looking for someone who has used Triton.',
      },
      {
        path: '/1lobqvc',
        name: 'MCP tool development -- repeated calls with no further processing',
      },
      {
        path: '/1lobyx5',
        name: 'Upcoming Coding Models?',
      },
      {
        path: '/1lobzkr',
        name: 'n8n ,proxmox ,docker and Google API.',
      },
      {
        path: '/1lococc',
        name: 'Open Source AI Editor: First Milestone',
      },
      {
        path: '/1lodmc6',
        name: 'ERNIE 4.5 Collection from Baidu',
      },
      {
        path: '/1loejea',
        name: 'Run any LLM locally on your Mac in less than 2 mins',
      },
      {
        path: '/1lofsxc',
        name: 'Need open source Vlm for Trading chart analysis',
      },
      {
        path: '/1lohzzj',
        name: 'How to run Hunyuan-A13B on a RTX 5090 / Blackwell ?',
      },
      {
        path: '/1loiwzz',
        name: 'Chat UI Framwork',
      },
      {
        path: '/1loj134',
        name: 'arXiv2Docker: Computational Reproducibility with the ExperimentOps Agent',
      },
      {
        path: '/1lojd3e',
        name: 'Gemma-3n VRAM usage',
      },
      {
        path: '/1lojgxl',
        name: 'OpenSource CLI Agent with Local models.',
      },
      {
        path: '/1lojlrw',
        name: '[WIRED] Here Is Everyone Mark Zuckerberg Has Hired So Far for Meta’s ‘Superintelligence’ Team',
      },
      {
        path: '/1lojtq3',
        name: 'LLM model recommendation for poor HW',
      },
      {
        path: '/1lok3r2',
        name: '[News] Datacenter GPUs May Have an Astonishingly Short Lifespan of Only 1 to 3 Years | TrendForce News',
      },
      {
        path: '/1lok68d',
        name: 'F5-TTS installation error',
      },
      {
        path: '/1lokcrw',
        name: 'How do "AI detectors" work',
      },
      {
        path: '/1lokkpc',
        name: 'A Meta-Framework for Self-Improving LLMs with Transparent Reasoning',
      },
      {
        path: '/1lokp88',
        name: 'Intel Arc Pro B60 Dual 48G Turbo Maxsun GPU Pricing Revealed',
      },
      {
        path: '/1lol3na',
        name: '[Dataset] 4,000 hours of full-body, in-person, human face-to-face interaction videos',
      },
      {
        path: '/1lom2r9',
        name: 'With the OpenAI employees that Meta hired, do you think this will be positive for local models?',
      },
      {
        path: '/1lom41a',
        name: 'Looking to Upgrade My CPU-Only LLM Server',
      },
      {
        path: '/1lomilz',
        name: '[Tool] Run GPT-style models from a USB stick – no install, no internet, no GPU – meet Local LLM Notepad 🚀',
      },
      {
        path: '/1lomke8',
        name: 'Off the shelf uncensored LLM',
      },
      {
        path: '/1lompd5',
        name: 'I\'ve built a spec for LLM-to-LLM comms by combining semantic patterns with structured syntax',
      },
      {
        path: '/1lomwqu',
        name: '5060ti 16gb or 9060xt 16gb for small llm server',
      },
      {
        path: '/1lomyut',
        name: 'On-demand GPU cluster - providing free credits',
      },
      {
        path: '/1loo2u3',
        name: 'Struggling with vLLM. The instructions make it sound so simple to run, but it’s like my Kryptonite. I give up.',
      },
      {
        path: '/1lop488',
        name: 'Hello',
      },
      {
        path: '/1lop94b',
        name: 'A Llama near the top for every size except small',
      },
      {
        path: '/1lopls4',
        name: 'how are chat completion messages handled in backend logic of API services like with vllm',
      },
      {
        path: '/1loq9e1',
        name: 'Locally hosted Cursor/Windurf possible?',
      },
      {
        path: '/1loqwl5',
        name: 'Free 2-month Generative AI workshop - Beyond Hello World',
      },
      {
        path: '/1lorbc5',
        name: 'Is the rumours true about Apple abandoning MLX?',
      },
      {
        path: '/1losjpq',
        name: 'Intel GPU vLLM Docker Compose Bootstrap with Phi-lthy4 on A770',
      },
      {
        path: '/1loswvr',
        name: 'New to the scene. Yesterday, got 4 t/s on R1 671b q4. Today, I\'m getting about 0.15 t/s... What did I break lol',
      },
      {
        path: '/1lot1kg',
        name: 'META’S AI AVENGERS ASSEMBLE, ZUCK’S $29B SUPERINTELLIGENCE GAMBIT!',
      },
      {
        path: '/1lotza5',
        name: 'KrunchWrapper - a LLM compression proxy (beta)',
      },
      {
        path: '/1lotzy4',
        name: 'Video Cards &amp; GPUs SPARKLE intros new Arc Pro B60 cards: one is a dual-GPU workstation card with 48GB of VRAM',
      },
      {
        path: '/1louk6a',
        name: '$5k budget for Local AI',
      },
      {
        path: '/1lovqjc',
        name: 'Best Local Model for Vision?',
      },
      {
        path: '/1lovuxp',
        name: 'Current state of Intel A770 16GB GPU for Inference?',
      },
      {
        path: '/1lox1f7',
        name: 'Local models not following instructions',
      },
      {
        path: '/1lox9c4',
        name: 'Need help finding educational datasets and model suggestions for offline LLM on phone',
      },
      {
        path: '/1loxf1b',
        name: 'Fine-tuning with $1000?',
      },
      {
        path: '/1loxw8f',
        name: 'What is night forge?',
      },
      {
        path: '/1loyc9x',
        name: 'Looking for uncensored instruction-tuning datasets for alignment test',
      },
      {
        path: '/1loywkt',
        name: 'AMD 5700G for experimenting with local LLMs?',
      },
      {
        path: '/1loyyzc',
        name: 'RTX 6000 Pro software stack',
      },
      {
        path: '/1loza95',
        name: 'Dual RX580 2048SP (16GB) llama.cpp(vulkan)',
      },
      {
        path: '/1lozhqc',
        name: 'Cannot Load any GGUF model using tools like LM Studio or Jan Ai etc',
      },
      {
        path: '/1lozri7',
        name: 'Smallest Model For A Trivia Game On Countries?',
      },
      {
        path: '/1lp01c7',
        name: 'Deepseek R1 at 6,5 tk/s on an Nvidia Tesla P40',
      },
      {
        path: '/1lp0j7f',
        name: 'Best open source Arabic tts',
      },
      {
        path: '/1lp0o3i',
        name: 'Resources to learn about samplers?',
      },
      {
        path: '/1lp1nn5',
        name: 'What are some good preprocessors for scanned documents in the LocalLLaMA use case?',
      },
      {
        path: '/1lp2h0e',
        name: 'Training and Finetuning Sparse Embedding Models with Sentence Transformers v5',
      },
      {
        path: '/1lp2jhr',
        name: 'I created a script to allow running commands in an ephemeral VM to allow tool calling full access to a local directory',
      },
      {
        path: '/1lp2ji0',
        name: 'Reasoning models are risky. Anyone else experiencing this?',
      },
      {
        path: '/1lp37v0',
        name: 'LoRA training on NVIDIA Jetson AGX Orin 64GB',
      },
      {
        path: '/1lp4cht',
        name: 'Help on prompt memory and personas - what to do?',
      },
      {
        path: '/1lp4h7t',
        name: 'I Designed an LLM Shorthand Based on Language Attributes, Math and Python',
      },
      {
        path: '/1lp4ttf',
        name: 'General storage question?',
      },
      {
        path: '/1lp5lu3',
        name: 'Very small high scores models + web search?',
      },
      {
        path: '/1lp5nhy',
        name: 'Gemma 3n Fine-tuning now in Unsloth - 1.5x faster with 50% less VRAM + Fixes',
      },
      {
        path: '/1lp5obe',
        name: 'Using llama.cpp in an enterprise?',
      },
      {
        path: '/1lp5pt0',
        name: 'Day 7/50: Building a Small Language Model from Scratch – Coding Positional Embeddings',
      },
      {
        path: '/1lp5xu9',
        name: '[vLLM] Computing Attention Scores with Long Context LLMs',
      },
      {
        path: '/1lp653l',
        name: 'Reuse non-prefix KV Cache and speed up RAG by 3X with LMCache.',
      },
      {
        path: '/1lp6925',
        name: 'Anon-kode on Gitee',
      },
      {
        path: '/1lp6def',
        name: 'Anyone experimenting with local multi-modal LLaMA or RAG pipelines? Curious about integration strategies.',
      },
      {
        path: '/1lp78v3',
        name: 'Is Notebook LLM (NotebookLM) redundant if I already use ChatGPT Plus, Claude Pro, &amp; Gemini Pro (Projects/Gems)?',
      },
      {
        path: '/1lp7nek',
        name: 'gemma3 keeps outputting stop tokens and simulating user responses (using Ollama + Gemma 3 27B Q4_0 + open webui)',
      },
      {
        path: '/1lp86ow',
        name: 'Qserve Performance on L40S GPU for Llama 3 8B',
      },
      {
        path: '/1lp8e8m',
        name: 'Good/Best MOE Models for 32GB RAM?',
      },
      {
        path: '/1lp8kfw',
        name: 'Sophgo TPU SC11 FP300, 256GB, 1.1Tb/s, PCIE-5',
      },
      {
        path: '/1lp8kzx',
        name: 'Is there any open-weight\'d diffusion based language models I can test right now on my own hardware?',
      },
      {
        path: '/1lp9gh2',
        name: 'Huawei releases an open weight model Pangu Pro 72B A16B. Weights are on HF. It should be competitive with Qwen3 32B and it was trained entirely on Huawei Ascend NPUs. (2505.21411)',
      },
      {
        path: '/1lp9xrh',
        name: 'An Initial LLM Safety Analysis of Apple\'s On-Device 3B Model',
      },
      {
        path: '/1lpa4rc',
        name: 'Cheap hosting where I can host bunch of LLM?',
      },
      {
        path: '/1lpbamg',
        name: 'Local AI platform on older machine',
      },
      {
        path: '/1lpd3y7',
        name: 'Current best options to convert to FP4',
      },
      {
        path: '/1lpe7hs',
        name: 'sGPU with s3000',
      },
      {
        path: '/1lpejnj',
        name: 'Qwen3 inference engine in C: simple, educational, fun',
      },
      {
        path: '/1lpep3m',
        name: 'Tenstorrent Blackhole Cards',
      },
      {
        path: '/1lpg37t',
        name: 'Gemma 3n  error loading in colab',
      },
      {
        path: '/1lph2zh',
        name: 'Tool calling with LlamaCpp',
      },
      {
        path: '/1lphhj3',
        name: 'DeepSeek-r1-0528 in top 5 on new SciArena benchmark, the ONLY open-source model',
      },
      {
        path: '/1lpi0mn',
        name: 'Local 405B Model on 3 DGX Spark units.',
      },
      {
        path: '/1lpi8o1',
        name: 'Lightweight Multimodal LLM for 8GB GPU',
      },
      {
        path: '/1lpjebh',
        name: 'Should you deploy LLMs locally on smartphones?',
      },
      {
        path: '/1lpkhdc',
        name: 'Watch a Photo Come to Life: AI Singing Video via Audio-Driven Animation',
      },
      {
        path: '/1lpkzi7',
        name: 'HONORIA-30.5-evolution-project',
      },
      {
        path: '/1lpl0u5',
        name: 'Anyone building or using homegrown local LLM coding assistant?',
      },
      {
        path: '/1lpl3mv',
        name: 'Hosting your local Huanyuan A13B MOE',
      },
      {
        path: '/1lpl656',
        name: 'GLM-4.1V-Thinking',
      },
      {
        path: '/1lplaqk',
        name: 'Models to run in browser',
      },
      {
        path: '/1lpm1k8',
        name: 'Any recommendations on B200 servers?',
      },
      {
        path: '/1lpm3d1',
        name: 'Do we have a discord server?',
      },
      {
        path: '/1lpm6cv',
        name: 'ERNIE-4.5-VL-28B-A3B is a hidden gem that can decently tackle challenging chinese/japanese OCR problems.',
      },
      {
        path: '/1lpmx00',
        name: 'I built a cli tool to automatically figure out tensor overrides in llama.cpp',
      },
      {
        path: '/1lpn5k5',
        name: 'Laptop Benchmark for 4070 8GB VRAM, 64GB RAM',
      },
      {
        path: '/1lpn8jt',
        name: 'Other than English what language are llms good at ?',
      },
      {
        path: '/1lpnc6k',
        name: 'Echo Mode: A Tone-Based Protocol for Semantic State Shifts in LLMs (No Prompt, No Fine-Tune)',
      },
      {
        path: '/1lpntxc',
        name: 'Best RP Models',
      },
      {
        path: '/1lpoju6',
        name: 'World\'s first Intermediate thinking AI model is now Open Source',
      },
      {
        path: '/1lpoqlu',
        name: 'DiffuCoder 7B - New coding diffusion LLM by Apple',
      },
      {
        path: '/1lporoz',
        name: 'EXAONE 4.0 pull request sent to llama.cpp',
      },
      {
        path: '/1lpp8s1',
        name: 'How does MCP work for different LLMs?',
      },
      {
        path: '/1lppg3g',
        name: 'What\'s the most complex thing you\'ve been able to (consistently) do with a 4B LLM?',
      },
      {
        path: '/1lppj9f',
        name: 'deerflow with jan nano 128k',
      },
      {
        path: '/1lpproa',
        name: '[Proof of Concept] CoreWeaver – AI Memory Engine for Long-Term Context, Emotional State Tracking, and Branching Timelines',
      },
      {
        path: '/1lppxs2',
        name: 'Optimize Latency of InternVL',
      },
      {
        path: '/1lppz8x',
        name: 'LeCarnet: A French Dataset for Small Language Models',
      },
      {
        path: '/1lpq6l0',
        name: '[P] Built AI to AI Peer Review MCP - Local LLMs get real-time feedback from Google Gemini to improve responses',
      },
      {
        path: '/1lpqcb7',
        name: 'Where can I find clips of voices to clone?',
      },
      {
        path: '/1lpquz6',
        name: 'Open source tech from IBM for Compression of models',
      },
      {
        path: '/1lpqyra',
        name: 'Drafting RFP answers with Jamba, Mistral, Mixtral',
      },
      {
        path: '/1lpr1fq',
        name: 'Convenient ChatGPT UX Replacement',
      },
      {
        path: '/1lpr5dj',
        name: 'AKTA - Authenticated Knowledge &amp; Trust Architecture for AI Agents',
      },
      {
        path: '/1lpr8wf',
        name: 'What framework would you suggest for hosting and serving VLMs via api?',
      },
      {
        path: '/1lprfbx',
        name: 'Just me, or MNN chat is looping a lot',
      },
      {
        path: '/1lps7c3',
        name: 'Any good browser extensions that with any OpenAI compatible API or local model?',
      },
      {
        path: '/1lpt5jv',
        name: 'Best RP Model Unrestricted/Uncensored',
      },
      {
        path: '/1lpu8a9',
        name: 'AI Agents, But Simple and Understandable',
      },
      {
        path: '/1lputq1',
        name: 'Phare Study: LLMs recognise bias but also reproduce harmful stereotypes: an analysis of bias in leading LLMs',
      },
      {
        path: '/1lpvpqv',
        name: 'LLM-based resume parsing – any models or solutions out there?',
      },
      {
        path: '/1lpvwh3',
        name: 'I built a tool for managing prompts like code in git',
      },
      {
        path: '/1lpvywm',
        name: '96Gb VRAM without spending $10k on an RTX Pro 6000..?',
      },
      {
        path: '/1lpw26d',
        name: 'Am I on the right path? Learning React + Flask for Full Stack + AI Career Goals',
      },
      {
        path: '/1lpw43h',
        name: 'Does anyone have enough memory space to run this?',
      },
      {
        path: '/1lpwj5j',
        name: 'AlgoTune: A new benchmark that tests language models\' ability to optimize code runtime',
      },
      {
        path: '/1lpwm1f',
        name: 'Browser-use with devtools access',
      },
      {
        path: '/1lpy5es',
        name: 'Finally solved my prompt versioning nightmare - built a tool to manage prompts like code',
      },
      {
        path: '/1lpy8nv',
        name: 'llama-4-scout-17B-16E GGUF running on Strix Halo (Ryzen AI MAX 395 + 128GB) (13s prompt processing edited out)',
      },
      {
        path: '/1lpyt3t',
        name: 'Huawei Open Source AI Model Optimized for Ascend Hardware -- China Keeps Beating USA',
      },
      {
        path: '/1lpyumi',
        name: 'CPU importance in GPU based LLM',
      },
      {
        path: '/1lpz355',
        name: 'Cursor terms and conditions seem to be changing',
      },
      {
        path: '/1lpz46u',
        name: 'RTX 2080 TI 22gb Build',
      },
      {
        path: '/1lpzk03',
        name: 'IA pour résumer des livres ?',
      },
      {
        path: '/1lpzvtx',
        name: 'My experience with 14B LLMs on phones with Snapdragon 8 Elite',
      },
      {
        path: '/1lpzycz',
        name: 'Live Interactive Digital Human(Open-Source Stack): RAG + LLM + TTS in Ac...',
      },
      {
        path: '/1lq02np',
        name: 'Stuck on installing Sesame tts on windows :/',
      },
      {
        path: '/1lq0n02',
        name: 'AI Agents are transforming workflows, but most use cases still feel early-stage. Curious what others are seeing.',
      },
      {
        path: '/1lq1417',
        name: '[Open Source] Moondream MCP - Vision for AI Agents',
      },
      {
        path: '/1lq1jyr',
        name: 'Mamba-2 support in llama.cpp landed',
      },
      {
        path: '/1lq1sdi',
        name: 'Cursor equivalent or close to alternative fully local?',
      },
      {
        path: '/1lq2aae',
        name: 'LLM slop has started to contaminate spoken language',
      },
      {
        path: '/1lq2i2m',
        name: 'Is there a legit code assistant that can run on a m3 ultra 256 or 96gb?',
      },
      {
        path: '/1lq2m1x',
        name: 'Table embeddings for similarity search between tables ?',
      },
      {
        path: '/1lq2wn6',
        name: 'How do you pick the right local LLM for your needs?',
      },
      {
        path: '/1lq3i6h',
        name: 'need suggestions for models to use',
      },
      {
        path: '/1lq3tuu',
        name: 'Day 8/50: Building a Small Language Model from Scratch – Rotary Positional Embeddings (RoPE)',
      },
      {
        path: '/1lq3urv',
        name: '24B IQ3_M vs 12B Q5_K_M',
      },
      {
        path: '/1lq436s',
        name: 'Lm studio: Model does not support images. Please use a model that does.!',
      },
      {
        path: '/1lq4bhu',
        name: 'best bang for your buck in GPUs for VRAM?',
      },
      {
        path: '/1lq4cil',
        name: 'Extended NYT Connections Benchmark updated with Baidu Ernie 4.5 300B A47B, Mistral Small 3.2, MiniMax-M1',
      },
      {
        path: '/1lq5d1o',
        name: 'ChatTree: A simple way to context engineer',
      },
      {
        path: '/1lq5fqq',
        name: 'I Built My Wife a Simple Web App for Image Editing Using Flux Kontext—Now It’s Open Source',
      },
      {
        path: '/1lq5wmh',
        name: 'Critical Vulnerability in Anthropic\'s MCP Exposes Developer Machines to Remote Exploits',
      },
      {
        path: '/1lq6jx8',
        name: 'LitheCode, updating your GitHub repo using Local LLMs?',
      },
      {
        path: '/1lq79xx',
        name: 'FP8 fixed on VLLM for RTX Pro 6000 (and RTX 5000 desktop cards)',
      },
      {
        path: '/1lq7vjc',
        name: 'I used Qwen 3 to write a lil\' agent for itself, capable of tool writing and use',
      },
      {
        path: '/1lq7wra',
        name: 'the result of all the polls i’ve been running here',
      },
      {
        path: '/1lq8gjv',
        name: 'Ubuntu 24.04: observing that nvidia-535 drivers run 20 tokens/sec faster than nvidia-570 drivers with no other changes in my vLLM setup',
      },
      {
        path: '/1lq8z04',
        name: 'STT dictation and conversational sparring partner?',
      },
      {
        path: '/1lq9eg5',
        name: 'Speculative Decoding and Quantization ... I\'m probably not going anywhere near what you think...',
      },
      {
        path: '/1lq9j0x',
        name: 'Free AI for all.',
      },
      {
        path: '/1lq9lkd',
        name: 'Is it simply about upgrading?',
      },
      {
        path: '/1lq9yjy',
        name: 'Help needed: finetuning Qwen2.5 VL with mox-vol',
      },
      {
        path: '/1lqa7cd',
        name: 'Need help in deciding llm',
      },
      {
        path: '/1lqbmwa',
        name: 'DeepSeek-TNG-R1T2-Chimera -  200% faster than R1-0528 &amp; 20% faster than R1',
      },
      {
        path: '/1lqcbfp',
        name: 'Local text-to-speech generator for inux?',
      },
      {
        path: '/1lqdcgr',
        name: 'PrivateScribe.ai - a fully local, MIT licensed AI transcription platform',
      },
      {
        path: '/1lqebbv',
        name: 'Kwai-Keye/Keye-VL-8B-Preview · Hugging Face',
      },
      {
        path: '/1lqeogc',
        name: 'best local llm for 250,000 json with 6000 words each',
      },
      {
        path: '/1lqeya7',
        name: 'Looking for a Technical Co-Founder to Lead AI Development',
      },
      {
        path: '/1lqh55j',
        name: 'No love for these new models?',
      },
      {
        path: '/1lqhers',
        name: 'Any updates on Llama models from Meta?',
      },
      {
        path: '/1lqi5q0',
        name: '2080 TI 22GB or 3080 20GB',
      },
      {
        path: '/1lqi863',
        name: 'DeepSWE-Preview | 59.0% on SWE-Bench-Verified with test-time scaling',
      },
      {
        path: '/1lqj3eq',
        name: 'Sharing new inference engines I got to know recently',
      },
      {
        path: '/1lqjccq',
        name: 'Okay, I love arguing with me LocalLaMA and feeling like I\'m winning. Am I strange?',
      },
      {
        path: '/1lqk18o',
        name: 'Small VisualLM for Data/Insight Extraction from Graphs &amp; Charts',
      },
      {
        path: '/1lqkknh',
        name: 'Jan now supports MCP servers as an experimental feature',
      },
      {
        path: '/1lqlcbu',
        name: 'Which cloud compute are you using?',
      },
      {
        path: '/1lqlsyb',
        name: 'Yappp - Yet Another Poor Peasent Post',
      },
      {
        path: '/1lqmbh3',
        name: 'Anyone here run llama4 scout/Maverick with 1 million to 10 million context?',
      },
      {
        path: '/1lqmmv2',
        name: 'Best way to get an LLM to sound like me? Prompt eng or Finetune?',
      },
      {
        path: '/1lqnczx',
        name: 'AIDC-AI/Ovis-U1-3B: unified model integrating multimodal understanding, text-to-image generation, and image editing in a single framework',
      },
      {
        path: '/1lqndyy',
        name: 'Hey r/LocalLLaMA! We made evolutionary model merging feasible on consumer GPUs – meet Mergenetic 🧬',
      },
      {
        path: '/1lqnvfr',
        name: 'Hallucination prevention framework',
      },
      {
        path: '/1lqnwih',
        name: 'I can\'t believe it actually runs - Qwen 235b @ 16GB VRAM',
      },
      {
        path: '/1lqo1bt',
        name: 'I want to split a model to run a portion of it on client and run the remaining layers on server. Is that possible?',
      },
      {
        path: '/1lqo8q0',
        name: 'Llama.cpp after Ollama for industry grade softwares',
      },
      {
        path: '/1lqo9lk',
        name: 'I ran llama.cpp on a Raspberry Pi',
      },
      {
        path: '/1lqpggb',
        name: 'About RTX 3060 12GB running AI models',
      },
      {
        path: '/1lqphqd',
        name: 'What kind of prompts *Always* give a 1 word response?',
      },
      {
        path: '/1lqpm60',
        name: '[Upcoming Release &amp; Feedback] A new 4B &amp; 20B model, building on our SmallThinker work. Plus, a new hardware device to run them locally.',
      },
      {
        path: '/1lqpvcb',
        name: 'Best local TEXT EXTRACTION model 24GB/48GB?',
      },
      {
        path: '/1lqqx16',
        name: 'Kyutai Unmute (incl. TTS) released',
      },
      {
        path: '/1lqqxhq',
        name: 'I have made a True Reasoning LLM',
      },
      {
        path: '/1lqsod4',
        name: 'Potential for Research?',
      },
      {
        path: '/1lqsrim',
        name: 'AI2 releases OLMo 32B - Truly open source',
      },
      {
        path: '/1lqsvf6',
        name: 'AnythingLLM Vertex Ai',
      },
      {
        path: '/1lqsvmf',
        name: 'Day 9/50: Building a Small Language Model from Scratch — Coding Rotary Positional Embeddings (RoPE)',
      },
      {
        path: '/1lqtu1t',
        name: '[2507.00769] LitBench: A Benchmark and Dataset for Reliable Evaluation of Creative Writing',
      },
      {
        path: '/1lqtxdp',
        name: 'Local vision LLM for (not really)real time processing.',
      },
      {
        path: '/1lqu1om',
        name: 'What are some of the most mammoth homebuilds here? What have you done with them?',
      },
      {
        path: '/1lqu8q7',
        name: 'Convert your local machine into an mcp server to spawn local agents from remote endpoint',
      },
      {
        path: '/1lqv8l8',
        name: 'Best Free/Budget AI Coding Tools for Solo Developers?',
      },
      {
        path: '/1lqvovt',
        name: 'A project to bring CUDA to non-Nvidia GPUs is making major progress',
      },
      {
        path: '/1lqw2yg',
        name: 'Deep Dive into Deep Research with Qwen3-30b-a3b',
      },
      {
        path: '/1lqwt0v',
        name: 'I built RawBench — an LLM prompt + agent testing tool with YAML config and tool mocking',
      },
      {
        path: '/1lqwth8',
        name: 'Using LLaMA for my desktop assistant app that saves you time',
      },
      {
        path: '/1lqwylx',
        name: 'Help with defining hardware multi GPU setup',
      },
      {
        path: '/1lqxesf',
        name: 'Huggingchat is under maintenance... exciting promise',
      },
      {
        path: '/1lqxm89',
        name: 'We Built an Open Source Clone of Lovable',
      },
      {
        path: '/1lqxprq',
        name: 'need help getting GPT-SoVITS with 5080 working',
      },
      {
        path: '/1lqxs6n',
        name: 'Qwen 235b @ 16GB VRAM - specdec - 9.8t/s gen',
      },
      {
        path: '/1lqyabt',
        name: 'Anybody using local LLM to augment in-camera person-detection for people counting?',
      },
      {
        path: '/1lqycp0',
        name: 'Kyutai TTS is here: Real-time, voice-cloning, ultra-low-latency TTS, Robust Longform generation',
      },
      {
        path: '/1lqyd4l',
        name: 'Local vs Cloud AI in my time tracking app - the struggle is real',
      },
      {
        path: '/1lqzjz8',
        name: 'Can you use Ollama to control your browser?',
      },
      {
        path: '/1lqzn0z',
        name: 'Help a student/enthusiast out in deciding on what exactly goes on hardware level',
      },
      {
        path: '/1lr0cqn',
        name: 'If I got this email, I’d give him my job.',
      },
      {
        path: '/1lr0i8p',
        name: 'Smartphone SoC inference performance by year and series',
      },
      {
        path: '/1lr158b',
        name: 'DeepSeek on llama.cpp',
      },
      {
        path: '/1lr18jg',
        name: 'Serene Pub v0.3.0 Alpha Released — Offline AI Roleplay Client w/ Lorebooks+',
      },
      {
        path: '/1lr1i84',
        name: 'Llama.cpp - Any room for further Significant Improvement?',
      },
      {
        path: '/1lr1ypr',
        name: 'Best current models for 72GB VRAM',
      },
      {
        path: '/1lr217c',
        name: 'Cheaper Transcriptions, Pricier Errors!',
      },
      {
        path: '/1lr25av',
        name: 'ChatGPT Subscription or LLM for therapy?',
      },
      {
        path: '/1lr2fbe',
        name: 'Dracula Coder',
      },
      {
        path: '/1lr2z7q',
        name: 'How do tools like ChatGPT, Gemini, and Grok derive context from a video?',
      },
      {
        path: '/1lr3eh1',
        name: 'Client-side STT version of Moonshine released',
      },
      {
        path: '/1lr5g8x',
        name: 'Productivity Tracker that uses Gemma3:4BB',
      },
      {
        path: '/1lr8fhl',
        name: 'Best &lt;= 12B model for use case?',
      },
      {
        path: '/1lr9594',
        name: 'DnD LLMs - Prompt to LoRA github',
      },
      {
        path: '/1lr95qf',
        name: 'GPT-4o Mini hallucinating on empty inputs like &lt;input&gt;&lt;/input&gt; – anyone else?',
      },
      {
        path: '/1lr9g4t',
        name: 'Need help with reverse keyword search using vector DB',
      },
      {
        path: '/1lragje',
        name: 'What would be the best model to run on 8x40gb vram?',
      },
      {
        path: '/1lral7n',
        name: 'ZLUDA - Bringing CUDA To Non-NVIDIA GPUs - A Major Breakthrough',
      },
      {
        path: '/1lraotq',
        name: 'How to set up MCP for fast code',
      },
      {
        path: '/1lrbwmz',
        name: 'Created an Open Source Conversation Response Path Exploration System using Monte Carlo Tree Search',
      },
      {
        path: '/1lri12r',
        name: 'Great price on a 5090',
      },
      {
        path: '/1lrjy15',
        name: 'Anyone else feel like working with LLM libs is like navigating a minefield ?',
      },
      {
        path: '/1lrmxn7',
        name: 'llama : add high-throughput mode by ggerganov · Pull Request #14363 · ggml-org/llama.cpp',
      },
      {
        path: '/1lro41o',
        name: 'how can i make langchain stream the same way openai does?',
      },
      {
        path: '/1lroonm',
        name: 'Gemini CLI is open source. Could we fork it to be able to use other models ?',
      },
      {
        path: '/1lroopr',
        name: 'Llama.cpp and continuous batching for performance',
      },
      {
        path: '/1lrpjpc',
        name: 'Can home sized LLMs (32b, etc.) or home GPUs ever improve to the point where they can compete with cloud models?',
      },
      {
        path: '/1lrq827',
        name: 'cli-agent - An agentic framework for arbitrary LLMs - now with hooks, roles, and deep research!',
      },
      {
        path: '/1lrq99t',
        name: 'Enterprise AI teams - what\'s stopping you from deploying more agents in production?',
      },
      {
        path: '/1lrqj68',
        name: 'Am I correct that to run multiple models with Llama.cpp I need multiple instances on multiple ports?',
      },
      {
        path: '/1lrqoul',
        name: 'i made a script to train your own transformer model on a custom dataset on your machine',
      },
      {
        path: '/1lrqptp',
        name: 'Marketing AI agent suggestions ( please, i want it to fine tune locally )',
      },
      {
        path: '/1lrqqiy',
        name: 'As foretold - LLMs are revolutionizing security research',
      },
      {
        path: '/1lrqtzj',
        name: 'Built an offline AI chat app for macOS that works with local LLMs via Ollama',
      },
      {
        path: '/1lrrojr',
        name: 'M1 vs M4 pro',
      },
      {
        path: '/1lrrvva',
        name: 'Run `huggingface-cli scan-cache` occasionally to see what models are taking up space. Then run `huggingface-cli delete-cache` to delete the ones you don\'t use. (See text post)',
      },
      {
        path: '/1lrs917',
        name: 'Anyone having issues with multiple GPUs and games? Trying to run LLM + other 3D stuff is a PITA.',
      },
      {
        path: '/1lrsdne',
        name: 'Best fast local model for extracting data from scraped HTML?',
      },
      {
        path: '/1lrsf6x',
        name: 'OCRFlux-3B',
      },
      {
        path: '/1lrsi1e',
        name: 'No Race for the leading MCP Server GUI?',
      },
      {
        path: '/1lrskbk',
        name: 'Need help fitting second gpu + 3rd drive',
      },
      {
        path: '/1lrss4u',
        name: 'THUDM/GLM-4.1V-9B-Thinking looks impressive',
      },
      {
        path: '/1lrsx20',
        name: 'How RAG actually works — a toy example with real math',
      },
      {
        path: '/1lrtrmw',
        name: 'Smallest VLM that currently exists and what\'s the minimum spec y\'all have gotten them to work on?',
      },
      {
        path: '/1lrtv8u',
        name: 'How do you guys balance speed versus ease and usability?',
      },
      {
        path: '/1lru0fv',
        name: 'KIOXIA AiSAQ software advances AI RAG with new version of vector search library',
      },
      {
        path: '/1lrv48g',
        name: 'Day 10/50: Building a Small Language Model from Scratch - What is Model Distillation?',
      },
      {
        path: '/1lrvlsx',
        name: 'How and why is Llama so behind the other models at coding and UI/UX? Who is even using it?',
      },
      {
        path: '/1lrvvkk',
        name: 'Qwen3 on AWS Bedrock',
      },
      {
        path: '/1lrwjnx',
        name: 'office AI',
      },
      {
        path: '/1lrz52e',
        name: 'M4 Mini pro Vs M4 Studio',
      },
      {
        path: '/1lrz5uy',
        name: 'Got some real numbers how llama.cpp got FASTER over last 3-months',
      },
      {
        path: '/1lrzmk8',
        name: 'Any models with weather forecast automation?',
      },
      {
        path: '/1lrzom4',
        name: 'License-friendly LLMs for generating synthetic datasets',
      },
      {
        path: '/1lrzrmd',
        name: 'Best model at the moment for 128GB M4 Max',
      },
      {
        path: '/1ls0d8u',
        name: 'speech, app studio, hosting - all local and seemless(ish) | my toy: bplus Server',
      },
      {
        path: '/1ls0r0w',
        name: 'Will commercial humanoid robots ever use local AI?',
      },
      {
        path: '/1ls0vb7',
        name: 'Does anyone here know of such a system that could easily be trained to recognize objects or people in photos?',
      },
      {
        path: '/1ls0y8d',
        name: 'Are these AI topics enough to become an AI Consultant / GenAI PM / Strategy Lead?',
      },
      {
        path: '/1ls1hd2',
        name: 'Will this ever be fixed? RP repetition',
      },
      {
        path: '/1ls3gho',
        name: 'Open source tool for generating training datasets from text files and pdf for fine-tuning language models.',
      },
      {
        path: '/1ls3pkv',
        name: 'What is NVLink?',
      },
      {
        path: '/1ls3rw2',
        name: 'Best Local VLM for Automated Image Classification? (10k+ Images)',
      },
      {
        path: '/1ls4kp1',
        name: 'Any thoughts on preventing hallucination in agents with tools',
      },
      {
        path: '/1ls5b89',
        name: 'Powerful 4B Nemotron based finetune',
      },
      {
        path: '/1ls5pbt',
        name: '5090 w/ 3090?',
      },
      {
        path: '/1ls5qjv',
        name: 'Have LLMs really improved for actual use?',
      },
      {
        path: '/1ls5x6q',
        name: 'Advise needed on runtime and Model for my HW',
      },
      {
        path: '/1ls663p',
        name: 'Asking LLMs data visualized as plots',
      },
      {
        path: '/1ls66qt',
        name: 'Running GGUF model on iOS with local API',
      },
      {
        path: '/1ls70r2',
        name: 'Impact of PCIe 5.0 Bandwidth on GPU Content Creation Performance',
      },
      {
        path: '/1ls7vmb',
        name: 'Multi GPUs?',
      },
      {
        path: '/1ls8c2s',
        name: 'Aveni Labs releases FinLLM technical report: a 7B domain-specific model for financial services outperforming some frontier LLMs',
      },
      {
        path: '/1ls8sk9',
        name: 'Are there any autoregressive image gen models I can run locally on a 9070 XT/RAM?',
      },
      {
        path: '/1ls91w3',
        name: 'Why do grad norm sink to 0 (at least I think) randomly during unsloth full finetuning?',
      },
      {
        path: '/1ls95oj',
        name: 'Apple MLX Quantizations Royal Rumble 🔥',
      },
      {
        path: '/1ls9jvu',
        name: 'Which open source LLM has the most genuine sense of humor?',
      },
      {
        path: '/1lsaczg',
        name: 'Utilize iGPU (AMD Radeon 780m) even if the dGPU is running via MUX switch',
      },
      {
        path: '/1lsazjq',
        name: 'Looking for open-source tool to blur entire bodies by gender in videos/images',
      },
      {
        path: '/1lsbhzs',
        name: 'When Should We Expect Affordable Hardware That Will Run Large LLMs With Usable Speed?',
      },
      {
        path: '/1lsck2e',
        name: 'GPU Choice for r730XD',
      },
      {
        path: '/1lsd9t4',
        name: 'Finding Uncensored models for some social media project',
      },
      {
        path: '/1lsdjnb',
        name: 'Llama-4-Maverick 402B on a oneplus 13',
      },
      {
        path: '/1lsdnin',
        name: 'Unethical',
      },
      {
        path: '/1lsdxc2',
        name: 'New app for locally running AI models on Android your smartphone',
      },
      {
        path: '/1lsevb1',
        name: 'Finetuning a youtuber persona without expensive hardware or buying expensive cloud computing',
      },
      {
        path: '/1lsfj67',
        name: 'What motherboard for 4xK80s?',
      },
      {
        path: '/1lsflii',
        name: 'Anyone built a home 2× A100 SXM4 node?',
      },
      {
        path: '/1lsfmcj',
        name: 'I created this tool I named ReddSummary.com – just paste a link and boom you got the summary',
      },
      {
        path: '/1lsfpi0',
        name: 'Help setting up an uncensored local LLM for a text-based RPG adventure / DMing',
      },
      {
        path: '/1lsfv8c',
        name: 'SoTA Audio native models?',
      },
      {
        path: '/1lsgtvy',
        name: 'Successfully Built My First PC for AI (Sourcing Parts from Alibaba - Under $1500!)',
      },
      {
        path: '/1lsh4a8',
        name: 'AI desktop configuration recommendations for RAG and LLM training',
      },
      {
        path: '/1lshe4q',
        name: 'Build vLLM on  CUDA 12.9, Kernel 6.15.2, NVIDIA 575.64, PyTorch 2.9cu129 Nightly',
      },
      {
        path: '/1lshxep',
        name: 'Llama server completion not working correctly',
      },
      {
        path: '/1lsi0gj',
        name: 'Open-sourced image description models (Object detection, OCR, Image processing, CNN) make LLMs SOTA in AI agentic benchmarks like Android World and Android Control',
      },
      {
        path: '/1lsiffa',
        name: 'PC build for LLM research',
      },
      {
        path: '/1lsiov1',
        name: '9950X3D + RTX 5090 + 192 GB RAM , reasonable?',
      },
      {
        path: '/1lsipdy',
        name: 'Building MOE inference Optimized workstation with 2 5090’s',
      },
      {
        path: '/1lsivf4',
        name: 'What is the necessary time effort to learn to self-host an LLM and chat app on-premise in a mid size company?',
      },
      {
        path: '/1lsjc83',
        name: 'Is there an easy way to continue pretraining of *just* the gate network of an MoE?',
      },
      {
        path: '/1lsjm9l',
        name: 'From The Foundations of Transformers to Scaling Vision Transformers',
      },
      {
        path: '/1lsju4i',
        name: 'Local LLM for Audio Cleanup',
      },
      {
        path: '/1lsjy83',
        name: '(Updated) All‑in‑One Generative AI Template: Frontend, Backend, Docker, Docs &amp; CI/CD + Ollama for local LLMs',
      },
      {
        path: '/1lskb8k',
        name: 'Should I buy an appartment or 4 H100s',
      },
      {
        path: '/1lsl0qn',
        name: 'Is this a good machine for running local LLMs?',
      },
      {
        path: '/1lsl6p6',
        name: 'My LLM Server',
      },
      {
        path: '/1lslglw',
        name: 'Options for a lot of VRAM for local Ollama server?',
      },
      {
        path: '/1lsm0ua',
        name: 'Why 5090 for inference if min CUDA is 12.9',
      },
      {
        path: '/1lsm1yb',
        name: 'GPU overclocking?',
      },
      {
        path: '/1lsmtzr',
        name: 'Is Codestral 22B still the best open LLM for local coding on 32–64 GB VRAM?',
      },
      {
        path: '/1lso57g',
        name: 'Intel Project Battlematrix',
      },
      {
        path: '/1lsoflk',
        name: 'Jan.AI with Ollama (working solution)',
      },
      {
        path: '/1lsofwq',
        name: 'All i said was hello lol',
      },
      {
        path: '/1lsox8o',
        name: 'I built a RAG-powered knowledge base for docs of my project using FastAPI + Ollama. Here\'s what I learned.',
      },
      {
        path: '/1lspzn3',
        name: '128GB VRAM for ~$600. Qwen3 MOE 235B.A22B reaching 20 t/s. 4x AMD MI50 32GB.',
      },
      {
        path: '/1lsq2m3',
        name: 'Larger model on CPU or small model on GPU',
      },
      {
        path: '/1lsq6xi',
        name: 'I built a platform to collect &amp; solve real-world AI automation use cases – would love your feedback!',
      },
      {
        path: '/1lsqr9n',
        name: 'Llama &amp; GRAMPS',
      },
      {
        path: '/1lss6b9',
        name: 'Fine-tuning Qwen3-32B for sentiment analysis.',
      },
      {
        path: '/1lsses1',
        name: 'Vibecoding: Exploring Dynamic Quantization for LLMs: My PoC with Qwen-0.6B',
      },
      {
        path: '/1lssymd',
        name: 'Check out my reverse vibe coding approach',
      },
      {
        path: '/1lst2uk',
        name: 'Ollama API image payload format for python',
      },
      {
        path: '/1lstg8c',
        name: 'Why does LLaMA suck so much at frontend?',
      },
      {
        path: '/1lsu2ks',
        name: 'Taught AI Agents Live for 15 hours | No fluff',
      },
      {
        path: '/1lsuje6',
        name: 'Anyone building a local coding cli or coding agent?',
      },
      {
        path: '/1lsv6hn',
        name: 'Update on spinning ball in hexagon test',
      },
      {
        path: '/1lsv7j1',
        name: 'Using local LLM for anonymizing prompts before sending to cloud LLM - are there any open source solutions?',
      },
      {
        path: '/1lsvff1',
        name: 'Help choosing LLM',
      },
      {
        path: '/1lsvsw0',
        name: 'Creating a Knowledge Base for Agentic Research Architect',
      },
      {
        path: '/1lsw9vz',
        name: 'Run Large LLMs on RunPod with text-generation-webui – Full Setup Guide + Template',
      },
      {
        path: '/1lswa0q',
        name: 'Looking for an AI client',
      },
      {
        path: '/1lswhaj',
        name: 'Upgrade for my 4060ti',
      },
      {
        path: '/1lswkv4',
        name: 'What are some good in-browser inference tools for small LLMs? (Use case: JSON to Chart.js config)',
      },
      {
        path: '/1lswnto',
        name: 'gemini-cli: falling back to gemini-flash is the best marketing strategy Anthropic could have dreamed of for claude-code.',
      },
      {
        path: '/1lsx9pn',
        name: 'Advice Needed: Building an In-House LLM System Using Latest Tech — Recommendations?',
      },
      {
        path: '/1lsxfpt',
        name: 'Is this good enough for AI work?',
      },
      {
        path: '/1lsxxo2',
        name: 'Python Implementation of Google\'s MUVERA: Multi-Vector Retrieval via Fixed Dimensional Encodings',
      },
      {
        path: '/1lsyd4g',
        name: 'After Huawei Pangu LLM faced plagiarism allegations, an anonymous insider shares their side of the story',
      },
      {
        path: '/1lsye88',
        name: 'Is that possible built a local gemini-cli totally in local and workable?',
      },
      {
        path: '/1lsyza0',
        name: 'Getting started with local AI',
      },
      {
        path: '/1lsz4hk',
        name: 'Huawei\'s Pangu AI Rocked by Unverified Claims of Fraud from Alleged Team Member',
      },
      {
        path: '/1lsz9iu',
        name: 'Looking for an open-source TTS model for multi-hour, multilingual audio generation',
      },
      {
        path: '/1lt0z6j',
        name: 'Need an inference endpoint students can set up and use to test n8n workflows for an AI class, what free or non-GPU options are available?',
      },
      {
        path: '/1lt13ht',
        name: 'I built ccundo - instantly undo Claude Code\'s mistakes without wasting tokens',
      },
      {
        path: '/1lt18hg',
        name: 'Are Qwen3 Embedding GGUF faulty?',
      },
      {
        path: '/1lt1z1a',
        name: 'How do I see my tokens per second speed? I\'m using llama.cpp / ik_llama.cpp with OpenWebUI',
      },
      {
        path: '/1lt254p',
        name: 'Zhipu (company behind GLM) secures $1.4 billion strategic investment from Shanghai state funds',
      },
      {
        path: '/1lt4994',
        name: 'Streaming or non streamed responses, assuming the same (and reasonably fast) time to final token',
      },
      {
        path: '/1lt4y1z',
        name: 'Self-hosted AI coding that just works',
      },
      {
        path: '/1lt6o4d',
        name: 'I made Otacon into a desktop buddy. He comments on your active application and generally keeps you company. (X-Post /r/metalgear)',
      },
      {
        path: '/1lt79jg',
        name: 'Nvidia RTX 5060 Ti 16GB for local LLM inference with Olllama + Open WebUI',
      },
      {
        path: '/1lt7zl8',
        name: 'Best practice for domain-specific LLM?',
      },
      {
        path: '/1lt7zx1',
        name: 'Would you use a plug-and-play dev stack for building local AI apps?',
      },
      {
        path: '/1lt8j4u',
        name: 'Llamacpp | Samsung s24+ | Snapdragon 8 Gen 3 + Adreno 750 | Real world testing with Qwen3-4B',
      },
      {
        path: '/1lt8zkl',
        name: 'Im working with a project that needed synthetic data generation using LLM.Anyone here have experience with it?',
      },
      {
        path: '/1lt98oq',
        name: 'Wouldn\'t it be great if we have a local offline ChatGPT runs on a phone, with all the functionality of normal ChatGPT, such as search, deep research, perhaps function tooling. What do you think?',
      },
      {
        path: '/1lt9ot6',
        name: 'Are there any local Text-to-Speech model options that can do screamo/metal style vocals (existing models)?',
      },
      {
        path: '/1lt9t7r',
        name: 'Does anyone have a link/supplier for Nvlink cables/bridges?',
      },
      {
        path: '/1ltabcu',
        name: 'Simple and free STT (voice to text) website',
      },
      {
        path: '/1ltamap',
        name: 'Cheapest way to stack VRAM in 2025?',
      },
      {
        path: '/1ltavu1',
        name: 'deepseek promt',
      },
      {
        path: '/1ltbaqx',
        name: 'gpus and tpus needed',
      },
      {
        path: '/1ltbg2s',
        name: 'Narrative Beam Search workflow in Open WebUI',
      },
      {
        path: '/1ltblb3',
        name: 'Help Needed: Fine-Tuning Mistral 7B on Yelp Dataset',
      },
      {
        path: '/1ltbr1t',
        name: 'Best reasoning model for Apple silicon with 128GB',
      },
      {
        path: '/1ltbrlf',
        name: '🎧 Listen and Compare 12 Open-Source Text-to-Speech Models (Hugging Face Space)',
      },
      {
        path: '/1ltcsbv',
        name: 'Microsoft AI learning certification',
      },
      {
        path: '/1ltcwbx',
        name: 'Local LLM for business',
      },
      {
        path: '/1ltdh0n',
        name: 'Self hosted LLM with GPU support, Apache server, Email server on a Windows 10 PC - need to upgrade PC and OS',
      },
      {
        path: '/1ltdi5y',
        name: 'OpenWebUI - Truncating Context or Model Limitation?',
      },
      {
        path: '/1ltdmhl',
        name: 'Looking for an LLM suggestion for sorting massive CSVs.',
      },
      {
        path: '/1ltdrkm',
        name: 'tenstorrent for LLM inference',
      },
      {
        path: '/1lte7m8',
        name: 'use Blender MCP with a ready made asset pack',
      },
      {
        path: '/1ltetl3',
        name: 'ollama and lmstudio cant browser the web why not?',
      },
      {
        path: '/1ltfgoy',
        name: 'I drew a silly comic about Llama model',
      },
      {
        path: '/1ltfwjv',
        name: 'Website-Crawler: Extract data from websites in LLM ready JSON or CSV format. Crawl or Scrape entire website with Website Crawler',
      },
      {
        path: '/1ltg9ji',
        name: 'M4 Max VS M3 Ultra Qwen3 mlx inference',
      },
      {
        path: '/1ltgayn',
        name: 'Fused Qwen3 MoE layer for faster training Qwen3-30B-A3B LoRA',
      },
      {
        path: '/1ltgh9h',
        name: 'GitHub - tallesborges/agentic-system-prompts: A collection of system prompts and tool definitions from production AI coding agents',
      },
      {
        path: '/1ltgq4i',
        name: 'Split Brain Project - P4 Side adventure. MOE token heads',
      },
      {
        path: '/1lth6ga',
        name: 'The AI Revolution: How\'s it Going for You?',
      },
      {
        path: '/1lthtbn',
        name: '8.5K people voted on which AI models create the best website, games, and visualizations. Both Llama Models came almost dead last. Claude comes up on top.',
      },
      {
        path: '/1ltidhz',
        name: 'Buy a Local PC with GPU or Go for Cloud',
      },
      {
        path: '/1ltj8pg',
        name: 'Gemma 3n is not performing well with macOS M2 MacBook Pro',
      },
      {
        path: '/1ltjqct',
        name: 'Thoughts on lmsys/lmarena?',
      },
      {
        path: '/1ltk7yh',
        name: 'I\'d like to add some features to my ai if possible',
      },
      {
        path: '/1ltkdjz',
        name: 'LogiQ CLI Beta | Full LMStudio Support.',
      },
      {
        path: '/1ltkkxd',
        name: 'Built an open source project for analyzing csv files using LLMs without the llm seeing your data',
      },
      {
        path: '/1ltks5a',
        name: 'ADR–Academic Deep Research for Cybersecurity and Academic: An AI-Driven Framework for Multi-Step Threat Analysis',
      },
      {
        path: '/1ltl6ui',
        name: 'Multiple Local Supabase',
      },
      {
        path: '/1ltm1mp',
        name: 'Newbie questions in this world',
      },
      {
        path: '/1ltm49x',
        name: 'Training 8 repos of UI code',
      },
      {
        path: '/1ltm6uw',
        name: 'Dice Rolling MCP',
      },
      {
        path: '/1ltmfsg',
        name: '📘 The Aperion Prompt Discipline — A Constitution-Driven Method for Runtime-Resilient AI Systems',
      },
      {
        path: '/1ltmou4',
        name: 'What is the point of QAT?',
      },
      {
        path: '/1ltmrag',
        name: 'Which TTS Model to use?',
      },
      {
        path: '/1ltmrvo',
        name: 'Will w7900 work?',
      },
      {
        path: '/1ltnpsl',
        name: 'How good is Qwen3-14B for local use? Any benchmarks vs other models?',
      },
      {
        path: '/1lto2in',
        name: 'best llm for 32 gb ram and 8gb vram',
      },
      {
        path: '/1lto3t9',
        name: 'PGDS approach to full model inference on consumer grade GPUs',
      },
      {
        path: '/1ltonwy',
        name: 'Should I remove these?',
      },
      {
        path: '/1ltpidd',
        name: '🔓 No jailbreak, no prompt hacks — Just tone. Echo Mode SDK now open',
      },
      {
        path: '/1ltq7n9',
        name: 'GUYS HELP ME : Ollama is utilizing my CPU more than my GPU.',
      },
      {
        path: '/1ltqb0n',
        name: 'How to Run a One-Shot Prompt (Non-Interactive) with llama.cpp?',
      },
      {
        path: '/1ltqf9a',
        name: 'LM Studio crashes',
      },
      {
        path: '/1ltqw46',
        name: 'Best cheap GPUs to run Local LLaMA / Mistral / GPTQ right now (A100, T4, 4090...)',
      },
      {
        path: '/1lts4q2',
        name: 'Video Dubbing: TTS + Speaker Detection + Auto-Length Adjustments?',
      },
      {
        path: '/1lts4wd',
        name: 'Inside Google Gemma 3n: my PyTorch Profiler insights',
      },
      {
        path: '/1lts4y9',
        name: 'eGPU Setup: Legion Laptop + RTX 5060 Ti',
      },
      {
        path: '/1lts8ai',
        name: 'Would you pay for a service that uses your localLLM to power the app',
      },
      {
        path: '/1ltstdt',
        name: '[PAPER] Overclocking LLM Reasoning: Monitoring and Controlling Thinking Path Lengths in LLMs',
      },
      {
        path: '/1ltt72w',
        name: 'Free context tool that runs local',
      },
      {
        path: '/1lttyf5',
        name: 'n8n vs Zapier',
      },
      {
        path: '/1ltubvs',
        name: 'Jamba 1.7 - a ai21labs Collection',
      },
      {
        path: '/1ltv7wq',
        name: 'Double GPU setup 3090 and 5060 ti 16GB',
      },
      {
        path: '/1ltv847',
        name: 'Understanding trade-offs between: m4 max studio vs AI Max+ 395',
      },
      {
        path: '/1ltvkqq',
        name: '(Kramer UI for Ollama) I was tired of dealing with Docker, so I built a simple, portable Windows UI for Ollama.',
      },
      {
        path: '/1ltw5lh',
        name: 'Radeon Pro Duo or AMD Instinct Mi50?',
      },
      {
        path: '/1ltwuga',
        name: 'Trouble setting up conda environment for unsloth finetuning',
      },
      {
        path: '/1ltxiy4',
        name: 'LangChain/Crew/AutoGen made it easy to build agents, but operating them is a joke',
      },
      {
        path: '/1ltxsqh',
        name: 'Qwen3-8B-BitNet',
      },
      {
        path: '/1ltxzad',
        name: 'Hardware recommendations? Mac Mini, NVIDIA Orin, Ryzen AI... ?',
      },
      {
        path: '/1ltyc9k',
        name: 'Has anyone here tried to augment text data using local domain specific LLMs ?',
      },
      {
        path: '/1ltze9d',
        name: 'Do you use prompt caching to save chat history in your LLM apps?',
      },
      {
        path: '/1lu0x2s',
        name: 'Tool Calling',
      },
      {
        path: '/1lu1z10',
        name: 'Learning triton &amp; cuda: How far can colab + nsight-compute take me?',
      },
      {
        path: '/1lu3ohu',
        name: 'Am I stupid? I just got Gigabyte AI TOP W7900 for ~$1000',
      },
      {
        path: '/1lu4t37',
        name: 'Octominer + P102-100 build... worth it?',
      },
      {
        path: '/1lu5g8c',
        name: 'Thanks to you, I built an open-source website that can watch your screen and trigger actions. It runs 100% locally and was inspired by all of you!',
      },
      {
        path: '/1lu5lz6',
        name: 'API for OSS TTS models (Sesame CSM-1B etc.)',
      },
      {
        path: '/1lu6yud',
        name: 'i\'d like to see ai push 928,726 changes to prod on a friday evening',
      },
      {
        path: '/1lu7506',
        name: 'What are the best options currently for a real time voice chat?',
      },
      {
        path: '/1lu75js',
        name: 'Please gut-check these W7900 vs 7900 XTX server builds',
      },
      {
        path: '/1lu7hd6',
        name: 'Has anyone set up a generalized work/research assistant?',
      },
      {
        path: '/1lu7hm7',
        name: 'Let the LLM Write the Prompts: An Intro to Building with DSPy',
      },
      {
        path: '/1lu7lsi',
        name: 'UI/UX Benchmark Update and Response: More Models, Updating Ranking, Open Data Soon',
      },
      {
        path: '/1lu818k',
        name: 'Locally run TTS Models',
      },
      {
        path: '/1lu8bw3',
        name: 'Help Us Improve Automation Tools – Share Your Experience in a 5-Minute Survey!',
      },
      {
        path: '/1lu8x2i',
        name: 'Need help with basic functionality',
      },
      {
        path: '/1lu9zh2',
        name: 'Stream of consciousness from Gemma3-1B',
      },
      {
        path: '/1luacs4',
        name: 'Looking for "local" models to run on Super Computer',
      },
      {
        path: '/1luahr3',
        name: 'Looking to connect devs who want to build something real this summer',
      },
      {
        path: '/1luaket',
        name: 'No "attach" button in Jan',
      },
      {
        path: '/1lub87l',
        name: 'Dual GPU with 2nd PSU and add2psu confusion.',
      },
      {
        path: '/1lubdcg',
        name: 'So, does anyone have a good workflow to replace google search yet?',
      },
      {
        path: '/1lubunz',
        name: 'Chrome now includes a built-in local LLM, I built a wrapper to make the API easier to use',
      },
      {
        path: '/1lubwky',
        name: 'Insulting LLMs instead of encouraging LLMs in their system prompts works as well.',
      },
      {
        path: '/1lue5xt',
        name: 'Qwen3-235B-Q2 running locally on my 64GB (DDR4) and 32GB VRAM machine',
      },
      {
        path: '/1lue75q',
        name: 'Day 11/50: Building a small language from scratch: Introduction to the Attention Mechanism in Large Language Models (LLMs)',
      },
      {
        path: '/1lueszq',
        name: 'Sanity Check',
      },
      {
        path: '/1luevql',
        name: 'test',
      },
      {
        path: '/1lueziv',
        name: 'Mercury: Ultra-Fast Language Models Based on Diffusion',
      },
      {
        path: '/1luf8d1',
        name: 'Using content filters in AI apps: ShieldGemma, LlamaGuard, or something else?',
      },
      {
        path: '/1lufhso',
        name: 'Let\'s train a local open-source coding agent model and kick BigAI\'s ass!',
      },
      {
        path: '/1lugblm',
        name: 'OpenAI Board Member on AI Job Displacement',
      },
      {
        path: '/1lugdls',
        name: 'How to train lora on 5090',
      },
      {
        path: '/1luh1w3',
        name: 'Gemma 3n on phone with 6GB of ram',
      },
      {
        path: '/1luh8e2',
        name: 'I need help understanding what model I can run on my laptop',
      },
      {
        path: '/1luha71',
        name: 'Seeking advice on unifying local LLaMA and cloud LLMs under one API',
      },
      {
        path: '/1luhmmi',
        name: 'Bytedance releases new agentic coding assistant: Trae-Agent',
      },
      {
        path: '/1luhpxa',
        name: 'Grok open source',
      },
      {
        path: '/1lui2hs',
        name: 'Which model has good user interface in results part?',
      },
      {
        path: '/1lui7nc',
        name: 'Prompt House: A prompt manager that connects directly to your AI tools',
      },
      {
        path: '/1luia44',
        name: 'Law training',
      },
      {
        path: '/1luig63',
        name: 'Whisper-large-v3 on VertexAI not supporting return_timstamps: True ?',
      },
      {
        path: '/1luiigi',
        name: '[Tool Release] Finetune &amp; Quantize 1–3B LLMs on 8GB RAM using LoFT CLI (TinyLlama + QLoRA + llama.cpp)',
      },
      {
        path: '/1luj1cb',
        name: 'Agents or Workflows? 150 practitioners voted on the difference',
      },
      {
        path: '/1lujedm',
        name: 'Hunyuan-A13B model support has been merged into llama.cpp',
      },
      {
        path: '/1lumsd2',
        name: 'Mac Studio 512GB online!',
      },
      {
        path: '/1lupg1f',
        name: 'Q&amp;A Content Pattern Assessment — Survey from Stack Overflow',
      },
      {
        path: '/1lupk47',
        name: 'Efficient Multimodal Data Pipeline',
      },
      {
        path: '/1luq8hp',
        name: 'Skywork/Skywork-R1V3-38B · Hugging Face',
      },
      {
        path: '/1lure0g',
        name: 'What kind of throughput can I expect with Llama 3.1 on a H200?',
      },
      {
        path: '/1lurili',
        name: 'Practical Attacks on AI Text Classifiers with RL (Qwen/Llama, datasets and models available for download)',
      },
      {
        path: '/1luroqh',
        name: 'NVIDIA’s Highly Anticipated “Mini-Supercomputer,” the DGX Spark, Launches This Month — Bringing Immense AI Power to Your Hands — up to 4000$',
      },
      {
        path: '/1lurv79',
        name: 'Major Hugging Face announcement on July 24th',
      },
      {
        path: '/1lurzqf',
        name: 'NextCoder - a Microsoft Collection',
      },
      {
        path: '/1lus2yw',
        name: 'new models from NVIDIA: OpenCodeReasoning-Nemotron-1.1 7B/14B/32B',
      },
      {
        path: '/1lusfyg',
        name: 'Run Fine-Tuned LLMs on iPhone Neural Engine',
      },
      {
        path: '/1lusr7l',
        name: 'SmolLM3: reasoning, long context and multilinguality for 3B parameter only',
      },
      {
        path: '/1lutlfx',
        name: 'Local PDF Database searchable with ollama - best setup?',
      },
      {
        path: '/1lutzav',
        name: 'I am having trouble with llama fine tuning using LoRA unsloth',
      },
      {
        path: '/1luu65g',
        name: 'Best model for spanish?',
      },
      {
        path: '/1luu7x2',
        name: 'LLM Writing Style / GPT Slop',
      },
      {
        path: '/1luu94f',
        name: 'I used ChatGPT to formulate 50+ questions to test the latest Cogito Qwen 8b model, in "thinking" mode, here are the results',
      },
      {
        path: '/1luvt31',
        name: 'Which project/program or IDE to use attached with LLM online/local for free use for entire code-repos?',
      },
      {
        path: '/1luw10n',
        name: 'Need help with on prem',
      },
      {
        path: '/1luw2yu',
        name: 'In-browser Local Document Understanding Using SmolDocling 256M with Transformers.js',
      },
      {
        path: '/1luw8s3',
        name: 'Is hyperthreads the right language to use?',
      },
      {
        path: '/1luwa98',
        name: 'Help Needed: Building a PC.',
      },
      {
        path: '/1luwgkn',
        name: 'Most effective way to host LLM of over 20B params',
      },
      {
        path: '/1luwtdr',
        name: 'NSFW Model image analysis',
      },
      {
        path: '/1luwyou',
        name: 'MCP alternative tailored to local models',
      },
      {
        path: '/1lux0q2',
        name: 'LM Studio is now free for use at work',
      },
      {
        path: '/1lux5d5',
        name: 'What\'s the differences between thoes Qwen3-30B-A3B versions?',
      },
      {
        path: '/1luxkms',
        name: 'My Serires of Cartoon',
      },
      {
        path: '/1luxtzk',
        name: '9950x3d+nvidia cuda+integrated gpu on vulkan, is it possibile?',
      },
      {
        path: '/1luxu6s',
        name: 'Any one tried ERNIE-4.5-21B-A3B?',
      },
      {
        path: '/1luy32e',
        name: 'SmolLM3 has day-0 support in MistralRS!',
      },
      {
        path: '/1luy711',
        name: 'Comparing LLM Providers Throughput',
      },
      {
        path: '/1luybka',
        name: 'LLM Hallucination Detection Leaderboard for both RAG and Chat',
      },
      {
        path: '/1luycyq',
        name: 'Has there been research into prompting strategies for models?',
      },
      {
        path: '/1luyhi9',
        name: 'LLM to answer someone\'s contacts as themselves ?',
      },
      {
        path: '/1luytx2',
        name: 'Best Local LLM for Code assist similar to Sonnet 4?',
      },
      {
        path: '/1luz92k',
        name: 'Thoughts on local LLM &amp; Proxmox homelab using Chinese x99 dual Xeon board + 2x3090',
      },
      {
        path: '/1lv0ukq',
        name: 'Claude / GPT4 keeps breaking JSON formatting. Anyone find a real fix?',
      },
      {
        path: '/1lv0wvw',
        name: 'Are there tools to make a model respond to itself using different system prompts ?',
      },
      {
        path: '/1lv1763',
        name: 'Prompt to "compress" transcripts',
      },
      {
        path: '/1lv1fpo',
        name: 'Is there a Grammarly equivalent I can run locally?',
      },
      {
        path: '/1lv1m0i',
        name: 'Best context compression other than llmlingua?',
      },
      {
        path: '/1lv1z7b',
        name: 'Why hasn\'t RTX Pro 6000 Balckwell significantly shake down the price of older RTX 6000 / RTX 6000 Ada',
      },
      {
        path: '/1lv2t7n',
        name: '"Not x, but y" Slop Leaderboard',
      },
      {
        path: '/1lv53nn',
        name: 'What\'s local about this?',
      },
      {
        path: '/1lv5je7',
        name: 'How fast is inference when utilizing DDR5 and PCIe 5.0x16?',
      },
      {
        path: '/1lv5uie',
        name: 'High Precision',
      },
      {
        path: '/1lv6mju',
        name: 'How Antropic has teached the Claude to decide wherher to choose a tool or respond normally?',
      },
      {
        path: '/1lv7j1j',
        name: 'Guidance Needed on Local Setup',
      },
      {
        path: '/1lv7s0r',
        name: 'Reimplementing an LLM from Scratch',
      },
      {
        path: '/1lv7tgz',
        name: 'LLM Model Response Diff Tool',
      },
      {
        path: '/1lv7vsm',
        name: 'Most explicit erotic LLM model',
      },
      {
        path: '/1lv7xnh',
        name: 'Web application for comparing responses from different LLMs side-by-side.',
      },
      {
        path: '/1lv85jp',
        name: 'Day 12/50: Building a Small Language Model from Scratch - Implementing a Simplified Attention Mechanism in Python',
      },
      {
        path: '/1lv88fs',
        name: 'Anime and manga conversational model?',
      },
      {
        path: '/1lv8b55',
        name: 'Good books or resources on hosting LLMs and VLMs in production',
      },
      {
        path: '/1lv8cje',
        name: 'Just built an open-source MCP server to live-monitor your screen — ScreenMonitorMCP',
      },
      {
        path: '/1lv8j5q',
        name: 'Pocket LLM Server Just Like a Pocket WiFi',
      },
      {
        path: '/1lv910v',
        name: 'State of Foundation Models, 2025 | Innovation Endeavors',
      },
      {
        path: '/1lv94fb',
        name: 'Code for Skywork-R1V3-38B',
      },
      {
        path: '/1lv9m3j',
        name: 'MemOS: A Memory OS for AI System',
      },
      {
        path: '/1lv9yhq',
        name: 'OPENCODE - Like Claude Code or Gemini CLI, but works with local models and/or paid ones as well',
      },
      {
        path: '/1lvah1f',
        name: 'Best SSD Stick for Nvidia Jetson Orin Nano?',
      },
      {
        path: '/1lvakg5',
        name: 'Trying to recreate benchmark results',
      },
      {
        path: '/1lvaq6n',
        name: 'Limitation of NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition',
      },
      {
        path: '/1lvbmje',
        name: 'I Built a Multi-Agent System to Generate Better Tech Conference Talk Abstracts',
      },
      {
        path: '/1lvbzpx',
        name: 'A language model built for the public good',
      },
      {
        path: '/1lvc2nj',
        name: 'Linux Foundation to Host A2A Protocol',
      },
      {
        path: '/1lvcb72',
        name: 'Here is how we beat ChatGPT at classification with 1 dollar in cloud compute',
      },
      {
        path: '/1lvcyvf',
        name: 'Is knowledge found in the thinking taken into consideration by the LLM?',
      },
      {
        path: '/1lvd5nj',
        name: '[Open Source] Private AI assistant extension - thoughts on local vs cloud approaches?',
      },
      {
        path: '/1lvd7z4',
        name: 'support for Falcon-H1 model family has been merged into llama.cpp',
      },
      {
        path: '/1lvek0j',
        name: 'Difficulty in fine tuning (Llora) SmolLM2-135M-Instruct on "GSM8K and MATH" training data.',
      },
      {
        path: '/1lveslz',
        name: 'Is AMD GPU a viable choice for AI/ML task with Intel processor?',
      },
      {
        path: '/1lvevuz',
        name: 'Building a silent, budget 4-GPU LLM workstation—1×3090 + 3×P40, need advice',
      },
      {
        path: '/1lvex1e',
        name: 'Need help translating Korean videos',
      },
      {
        path: '/1lvf448',
        name: 'Anyone have ideas for preventing file corruption and saving errors when i save model weights after training?.After training the whole model on a rented gpu server and realising that the model weight file got corrupted hurts🙂',
      },
      {
        path: '/1lvf7ww',
        name: 'First Hugging Face robot: Reachy Mini. Hackable yet easy to use, powered by open-source and the community',
      },
      {
        path: '/1lvg25f',
        name: 'A satirical theory-fiction on the transformation of academic tutors into Turing cops, marking into an imitation game, and Al generated homework into the trigger for the technological singularity',
      },
      {
        path: '/1lvglk7',
        name: 'vLLM vs SGLang vs MAX — Who\'s the fastest?',
      },
      {
        path: '/1lvh4ou',
        name: 'Qwen3 0.6b MNN acting weird',
      },
      {
        path: '/1lvh87a',
        name: 'What modes can expect I run on an AMD Ryzen AI Max+ 395?',
      },
      {
        path: '/1lvhxe7',
        name: '🚀 Built another 124m parameter transformer based model from scratch.This time with multi GPU training using DDP.Inspired from nanoGPT.But redesigned to suit my own training pipeline.Model and training code is on huggingface⬇️',
      },
      {
        path: '/1lvhzeg',
        name: 'Is there a opensource local model implementation of an agent out there?',
      },
      {
        path: '/1lvi022',
        name: 'Generate low-dimension embeddings *quickly*?',
      },
      {
        path: '/1lvipg4',
        name: 'Looking for Prompt collections',
      },
      {
        path: '/1lvirqs',
        name: 'Hunyuan A13B tensor override',
      },
      {
        path: '/1lviwb4',
        name: 'What model could I finetune to create a study assistant llm?',
      },
      {
        path: '/1lvj0hl',
        name: 'How should I install Jan on a local machine to convert PDF bank statements to CSV?',
      },
      {
        path: '/1lvj98v',
        name: 'I built a Deep Researcher agent and exposed it as an MCP server!',
      },
      {
        path: '/1lvjtc4',
        name: 'Best Local LLM for Agentic Coding on Ollama (8 vCore, 16 GB RAM VPS)? + VS Code Extension Recommendation',
      },
      {
        path: '/1lvjwoh',
        name: 'Correct a dangerous racial bias in an LLM through targeted pruning',
      },
      {
        path: '/1lvjxoy',
        name: 'OOS Implementation of NotebookLM and DeepResearch?',
      },
      {
        path: '/1lvk1ms',
        name: 'What impressive (borderline creepy) local AI tools can I run now that everything is local?',
      },
      {
        path: '/1lvkdxg',
        name: 'Megan AI Open Playtest!',
      },
      {
        path: '/1lvkigw',
        name: 'Why TTS level is not constant?',
      },
      {
        path: '/1lvm3kv',
        name: 'Need help setting up a local LLM server with RTX 3060',
      },
      {
        path: '/1lvm3tl',
        name: 'offline AI for sensitive data processing like client bank statements PDFs to CSV - recommend me a solution',
      },
      {
        path: '/1lvm4vg',
        name: 'Budget GPU options?',
      },
      {
        path: '/1lvm7vk',
        name: 'BastionChat: Finally got Qwen3 + Gemma3 (thinking models) running locally on iPhone/iPad with full RAG and voice mode',
      },
      {
        path: '/1lvn1sd',
        name: 'OpenAI\'s open-weight model will debut as soon as next week',
      },
      {
        path: '/1lvne34',
        name: 'Local LLMs in small biz setups — anyone using them in production-like scenarios?',
      },
      {
        path: '/1lvnevz',
        name: 'Favorite local model for therapy chat?',
      },
      {
        path: '/1lvngkz',
        name: 'Nvidia RTX Pro 6000 (96 Gb) vs Apple M3 Ultra (512 Gb)',
      },
      {
        path: '/1lvnkuk',
        name: 'Drummer\'s Big Tiger Gemma 27B v3 and Tiger Gemma 12B v3! More capable, less positive!',
      },
      {
        path: '/1lvo6ae',
        name: 'Advice on switching to LLM',
      },
      {
        path: '/1lvoagh',
        name: 'New to Local LLMs. Why all local models are so censored?',
      },
      {
        path: '/1lvovpb',
        name: 'Seeking 1 Dev to Build Private Multi-Agent LLM Sanctuary (Local Only)',
      },
      {
        path: '/1lvowxo',
        name: 'The guide to OpenAI Codex CLI',
      },
      {
        path: '/1lvpp0e',
        name: 'Help settle a debate on the Lemonade team: how much web UI is too much for a local server?',
      },
      {
        path: '/1lvprv4',
        name: 'MLC Chat for iOS',
      },
      {
        path: '/1lvqc2u',
        name: 'How to provide most accurate context to LLMs?',
      },
      {
        path: '/1lvqnjh',
        name: 'T5Gemma - A Google Collection',
      },
      {
        path: '/1lvqtxa',
        name: 'multimodal medgemma 27b',
      },
      {
        path: '/1lvqv8e',
        name: 'new tiny 1.7B open-source reranker beats Cohere rerank3.5',
      },
      {
        path: '/1lvqzxa',
        name: 'Advice on building an AI pc',
      },
      {
        path: '/1lvr2ea',
        name: 'There\'s a strange double standard at play in the AI community',
      },
      {
        path: '/1lvr3ym',
        name: 'OpenAI\'s open source LLM is a reasoning model, coming Next Thursday!',
      },
      {
        path: '/1lvr711',
        name: 'support for Jamba hybrid Transformer-Mamba models has been merged into llama.cpp',
      },
      {
        path: '/1lvs37w',
        name: '2x3090, Ollama: gemma3:27b-it-qat keeps partial offloading to cpu',
      },
      {
        path: '/1lvslsc',
        name: 'Currently in the process of building a stacked ai agent system any advice?',
      },
      {
        path: '/1lvsw5d',
        name: 'Bulk captioning/VLM query tool, standalone app',
      },
      {
        path: '/1lvt4a9',
        name: 'Open-source SLM for games, Unity package, demo game The Tell-Tale Heart',
      },
      {
        path: '/1lvtp4h',
        name: 'New Nvidia Jetson AGX Thor developer kit specs',
      },
      {
        path: '/1lvttkc',
        name: 'Is it possible to generate audio mimicking sample style ?',
      },
      {
        path: '/1lvu7sp',
        name: 'Musings on recent trends in closed-source and the way forward for open-source',
      },
      {
        path: '/1lvun89',
        name: 'How to run Gemma 3 27B QAT with 128k context window with 3 parallel requests possible on 2x3090',
      },
      {
        path: '/1lvvkh2',
        name: 'Hunyuan-A13B is here for real!',
      },
      {
        path: '/1lvwya4',
        name: 'Possible size of new the open model from openai',
      },
      {
        path: '/1lvx088',
        name: 'Creating .mp3 audio dialogue for RPG - RTX 3060 12GB - Which model?',
      },
      {
        path: '/1lvxft1',
        name: 'We are building a 192GB (2x 96GB) Blackwell Pro 6000 server. It deserves a beautiful case. What should we use?',
      },
      {
        path: '/1lvydpk',
        name: 'Help me, I\'m struggling with maintaining personality in LLMs? I’d love to learn from your experience!',
      },
      {
        path: '/1lvyfws',
        name: 'LLamaCPP just merged Mamba/Jamba support!!',
      },
      {
        path: '/1lvyjpw',
        name: 'ChatGPT 4.5 Quality Writing',
      },
      {
        path: '/1lvyqvq',
        name: 'Help im lost',
      },
      {
        path: '/1lvyvmw',
        name: 'Proposal: Modular, Domain &amp; Subdomain-Aware MoE for Mistral—Next Steps?',
      },
      {
        path: '/1lvz9ic',
        name: 'Subjectivity of LLM performance vs benchmarks (Garbage In Garbage Out!)',
      },
      {
        path: '/1lvzf8y',
        name: 'Lamini playground down?',
      },
      {
        path: '/1lvzonf',
        name: 'https://en.wikipedia.org/wiki/Ant_colony_optimization_algorithms',
      },
      {
        path: '/1lvzwah',
        name: 'Preceptor – A Local AI Focus App That Nudges You Back on Track | Waitlist + Suggestions needed',
      },
      {
        path: '/1lw0138',
        name: 'Do you use local LLMs for work over cloud models? Why/how?',
      },
      {
        path: '/1lw05ob',
        name: 'Llama-3_3-Nemotron-Super-49B-v1-mlx-4bit cannot be run in lm studio',
      },
      {
        path: '/1lw12gt',
        name: '[Beginner Question] Entry-Level Hobbyist Build Advice — RTX 5070 Ti vs 5090? 64GB vs 128GB RAM?',
      },
      {
        path: '/1lw1qp5',
        name: 'Fine Tune a smaller LLM for Code generation',
      },
      {
        path: '/1lw3729',
        name: 'Phi-4-mini-flash-reasoning',
      },
      {
        path: '/1lw3cqn',
        name: 'Need help buying power supplies for LocalLlama rig',
      },
      {
        path: '/1lw402u',
        name: 'Skywork-R1V3 Technical Report',
      },
      {
        path: '/1lw4eej',
        name: 'Grok 4 Benchmarks',
      },
      {
        path: '/1lw5knn',
        name: 'LLMs can find the attached papers',
      },
      {
        path: '/1lw5nxi',
        name: 'UI/UX Benchmark Update: We\'ve added Grok 4 and more models',
      },
      {
        path: '/1lw5oco',
        name: 'Local llms works great!',
      },
      {
        path: '/1lw5v9y',
        name: 'Good image 2 video that doesn\'t need high specs?',
      },
      {
        path: '/1lw6jz5',
        name: 'Transformers.js vs WebLLM',
      },
      {
        path: '/1lw6u69',
        name: 'Difference in output from Gemma3 running on Ollama.',
      },
      {
        path: '/1lw71av',
        name: 'GLM-4 MoE incoming',
      },
      {
        path: '/1lw72q8',
        name: 'What can I expect from current amd igpu performance?',
      },
      {
        path: '/1lw7igq',
        name: 'Survivalist Edge AI?',
      },
      {
        path: '/1lw7yxp',
        name: 'SYSTEM PROMPT LEAK FOR GROK 4',
      },
      {
        path: '/1lw8lvt',
        name: 'Ram Speed importance when exceeding VRAM',
      },
      {
        path: '/1lw9ch2',
        name: 'Added Grok-4 to the UGI-Leaderboard',
      },
      {
        path: '/1lw9m9a',
        name: 'QAT finetuning question',
      },
      {
        path: '/1lwafqm',
        name: 'running local LLM for the first time',
      },
      {
        path: '/1lwb5py',
        name: 'Does the OpenAI Responses API work with Ollama?',
      },
      {
        path: '/1lwbv22',
        name: 'Generated Voices are Not same everytime... How to fix?',
      },
      {
        path: '/1lwcixn',
        name: 'Kimina Prover - Test-time RL to reach 92.2% on miniF2F',
      },
      {
        path: '/1lwe0gn',
        name: 'Best LLM (and setup) recommendation for $20k health analytics project (LLM + some vision + fine-tuning)',
      },
      {
        path: '/1lwe5y8',
        name: 'mistralai/Devstral-Small-2507',
      },
      {
        path: '/1lwebzq',
        name: 'GROK 4 IS NOW LIVE ON LMARENA',
      },
      {
        path: '/1lwedkk',
        name: 'Pixel 9 local llm help',
      },
      {
        path: '/1lwf1t6',
        name: 'people downvoted me for saying this. but now it is confirmed that grok 4 is just grok 3 + more RL training',
      },
      {
        path: '/1lwfn7n',
        name: 'DeliteAI: Open platform for building and running agents on Mobile',
      },
      {
        path: '/1lwgohu',
        name: 'I\'m curating a list of every OCR out there and running tests on their features. Contribution welcome!',
      },
      {
        path: '/1lwgy9m',
        name: 'RekaAI/reka-flash-3.1 · Hugging Face',
      },
      {
        path: '/1lwhwq0',
        name: 'Grok open source',
      },
      {
        path: '/1lwhy37',
        name: 'MCP server that is a memory for MCP clients (AI assistants) with your custom data types + full UI + team sharing',
      },
      {
        path: '/1lwif50',
        name: 'Using Siri to talk to a local LLM',
      },
      {
        path: '/1lwih1t',
        name: 'What\'s Happening here exactly',
      },
      {
        path: '/1lwjok4',
        name: 'Best Roleplaying Models',
      },
      {
        path: '/1lwk84b',
        name: 'Why do base models give gibberish and need further \'fine tuning\'',
      },
      {
        path: '/1lwkrg4',
        name: 'Reka Flash 3.1 benchmarks show strong progress in LLM quantisation',
      },
      {
        path: '/1lwkxry',
        name: 'AI workstation',
      },
      {
        path: '/1lwl9ai',
        name: 'The New Nvidia Model is Really Chatty',
      },
      {
        path: '/1lwlw1j',
        name: 'VS Code June 2025 (version 1.102)',
      },
      {
        path: '/1lwm3w0',
        name: 'MAXSUN preparing all-Intel Mini Station: up to Core Ultra 9 285HX and two Arc Pro B60 GPU - VideoCardz.com',
      },
      {
        path: '/1lwmk0y',
        name: 'Just released my app',
      },
      {
        path: '/1lwmpqf',
        name: 'New Devstral 2707 with mistral.rs - MCP client, automatic tool calling!',
      },
      {
        path: '/1lwmxbx',
        name: 'Whats wrong with my vLLM Config? I have 2x4070TiSupers and I couldn\'t run many models at bnb-4bit Quants.',
      },
      {
        path: '/1lwn3ut',
        name: 'Grok 4 on Fiction.liveBench Long Context Comprehension',
      },
      {
        path: '/1lwniq0',
        name: 'Workflows aren’t a weakness in AI agents, they’re why they work',
      },
      {
        path: '/1lwnj5x',
        name: 'Performance benchmarks on DeepSeek V3-0324/R1-0528/TNG-R1T2-Chimera on consumer CPU (7800X3D, 192GB RAM at 6000Mhz) and 208GB VRAM (5090x2/4090x2/3090x2/A6000) on ikllamacpp! From 3bpw (Q2_K_XL) to 4.2 bpw (IQ4_XS)',
      },
      {
        path: '/1lwnxhz',
        name: 'Can AI assist with 3d mapping?',
      },
      {
        path: '/1lwp7e5',
        name: 'Pls help with JanitorAI😭',
      },
      {
        path: '/1lwp7tv',
        name: 'Is there some localllm benchmarking tool to see how well your system will handle a model?',
      },
      {
        path: '/1lwphbh',
        name: 'Building a domain specific dataset',
      },
      {
        path: '/1lwpi5p',
        name: 'Need advice on how to improve Handwritten Text Recognition of names using Vision models (for academic research purposes)',
      },
      {
        path: '/1lwqsso',
        name: 'People Are Using AI Chatbots to Guide Their Psychedelic Trips',
      },
      {
        path: '/1lwr8eh',
        name: 'How to stream only final LLM response while tool calling',
      },
      {
        path: '/1lwrad1',
        name: 'How are reasonable models built? Are they fine tuned from base non reasoning models?',
      },
      {
        path: '/1lwrd38',
        name: 'Best large open-source LLM for health/medical data analytics (RTX 6000 Pro, $10k budget)',
      },
      {
        path: '/1lwsrx7',
        name: 'Support for the upcoming IBM Granite 4.0 has been merged into llama.cpp',
      },
      {
        path: '/1lwta86',
        name: 'AMD\'s Pull Request for llama.cpp: Enhancing GPU Support',
      },
      {
        path: '/1lwtaor',
        name: 'What is your wishlist for OpenAI\'s upcoming open source model?',
      },
      {
        path: '/1lwuzjo',
        name: '[OC] Comprehensive AI Data Quality Metrics Documentation - 50+ Evaluation Metrics with Academic Sources',
      },
      {
        path: '/1lwva7f',
        name: 'Terraformed Binary Classifier',
      },
      {
        path: '/1lwvci3',
        name: 'Grok 4 seems to consult Elon Musk to answer controversial questions | TechCrunch',
      },
      {
        path: '/1lwvrev',
        name: 'Local AI server with Ollama and Tailscale integration looking for feedback',
      },
      {
        path: '/1lwvuuv',
        name: 'Hunyuan responding with &lt;answer&gt; &lt;/answer&gt; tag on LMstudio',
      },
      {
        path: '/1lww2ld',
        name: 'Anyone using Block\'s goose?',
      },
      {
        path: '/1lww2w9',
        name: 'Open Source Claude Coder alternative?',
      },
      {
        path: '/1lwwh8s',
        name: 'Tired of writing /no_think every time you prompt?',
      },
      {
        path: '/1lwwuwq',
        name: 'Help me find the best Android app for running LLMs locally',
      },
      {
        path: '/1lwx50s',
        name: '2-bit Quant: CCQ, Convolutional Code for Extreme Low-bit Quantization in LLMs',
      },
      {
        path: '/1lwx77q',
        name: 'Is LLM first RAG better than traditional RAG?',
      },
      {
        path: '/1lwxglp',
        name: 'What is up AI Bros I am stupid and maybe your AI can help me be less of these stupid',
      },
      {
        path: '/1lwxnf0',
        name: 'LM Studio model recommendation for writing, emails, and general summarizations',
      },
      {
        path: '/1lwxr2l',
        name: 'What other models would you like to see on Design Arena?',
      },
      {
        path: '/1lwxrai',
        name: 'Ollama calling tools',
      },
      {
        path: '/1lwycam',
        name: 'Longform text has become iconic — almost like an emoji.',
      },
      {
        path: '/1lwztnp',
        name: 'Granite-speech-3.3-8b',
      },
      {
        path: '/1lx0b5w',
        name: 'Manage multiple MCP servers for Ollama + OpenWebUI as Docker service',
      },
      {
        path: '/1lx0e8i',
        name: 'Comet (AI first) browser from Perplexity needs better 403 page',
      },
      {
        path: '/1lx10ja',
        name: 'With a 1M context Gemini, does it still make sense to do embedding or use RAG for long texts?',
      },
      {
        path: '/1lx20h2',
        name: 'hey guys im working in comapany they gave me a task to download open souce ai image generation model and run in the local system but the problem im facing',
      },
      {
        path: '/1lx2dw4',
        name: 'Is a heavily quantised Q235b any better than Q32b?',
      },
      {
        path: '/1lx2hn2',
        name: 'Uncensored LLM ranking for roleplay?',
      },
      {
        path: '/1lx2j1l',
        name: 'I built a tool to run Humanity\'s Last Exam on your favorite local models!',
      },
      {
        path: '/1lx2uwr',
        name: 'Made a Mock Interview Agent That Talks, Listens, Searches - and Logs Everything',
      },
      {
        path: '/1lx32mx',
        name: 'What do you think future AI agents will look like?',
      },
      {
        path: '/1lx3jtc',
        name: 'A language model built for the public good',
      },
      {
        path: '/1lx3ngj',
        name: 'Sensitivity Aware Mixed Precision Quantization',
      },
      {
        path: '/1lx3p4i',
        name: 'How do I force the LLM to respond shortly?',
      },
      {
        path: '/1lx3u8s',
        name: 'EuroEval: The robust European language model benchmark.',
      },
      {
        path: '/1lx4a3t',
        name: 'Prime Intellect on X: Releasing SYNTHETIC-2: our open dataset of 4m verified reasoning traces',
      },
      {
        path: '/1lx4hxt',
        name: 'SmolTalk2: The dataset behind SmolLM3\'s dual reasoning',
      },
      {
        path: '/1lx4mad',
        name: 'Need help',
      },
      {
        path: '/1lx4qhp',
        name: 'Moonshot AI about to release their 1T parameters model?',
      },
      {
        path: '/1lx4ya7',
        name: 'New OSS project: llamac-lab or a pure C runtime for LLaMA models, made for the edge',
      },
      {
        path: '/1lx4zpr',
        name: 'Blackwell FP8 W8A8 NVFP4 support discussion',
      },
      {
        path: '/1lx5awq',
        name: 'Friendly reminder that Grok 3 should be now open-sourced',
      },
      {
        path: '/1lx5jc1',
        name: 'Quick Question: Best Open-Source Model for Local Q&amp;A RAG App? 🤔',
      },
      {
        path: '/1lx5n8c',
        name: 'FYI Qwen3 235B A22B IQ4_XS works with 128 GB DDR5 + 8GB VRAM in Windows',
      },
      {
        path: '/1lx5p9b',
        name: 'I have made a github repository for streamlining AI coding flow. Please suggest improvements as additions and substraction to the codebase.',
      },
      {
        path: '/1lx5wvp',
        name: 'What\'s the best way to work with granulized AI tasks or "agents." Any front-end UI/program?',
      },
      {
        path: '/1lx62hd',
        name: 'Nvidia being Nvidia: FP8 is 150 Tflops faster when kernel name contain "cutlass"',
      },
      {
        path: '/1lx66on',
        name: 'Issues with Qwen 3 Embedding models (4B and 0.6B)',
      },
      {
        path: '/1lx6dcm',
        name: 'llama2.c running on the original 2007 iPhone',
      },
      {
        path: '/1lx6g3p',
        name: 'Has Local Llama Development Slowed Down, or Am I Missing Something? 🤔',
      },
      {
        path: '/1lx6yer',
        name: 'Skywork/Skywork-R1V3-38B · Hugging Face',
      },
      {
        path: '/1lx7kfh',
        name: 'Potentially Noob Question Regarding Live Weight Adjustments',
      },
      {
        path: '/1lx7l3k',
        name: 'This week, Google released in Open Source: MedGemma 27B Multimodal, MedSigLIP, T5Gemma',
      },
      {
        path: '/1lx7loe',
        name: 'Simple barebones MCP tutorial?',
      },
      {
        path: '/1lx85jo',
        name: 'Devstral-Vision-Small-2507',
      },
      {
        path: '/1lx8qrz',
        name: 'ETH Zurich and EPFL will release a fully open-source LLM developed on public infrastructure. Trained on the “Alps” supercomputer at the Swiss National Supercomputing Centre (CSCS). Trained on 60% english/40% non-english, it will be released in 8B and 70B sizes.',
      },
      {
        path: '/1lx8xdm',
        name: 'moonshotai/Kimi-K2-Instruct (and Kimi-K2-Base)',
      },
      {
        path: '/1lx94ht',
        name: 'Kimi K2 - 1T MoE, 32B active params',
      },
      {
        path: '/1lx9pny',
        name: 'Damn this is deepseek moment one of the 3bst coding model and it\'s open source and by far it\'s so good !!',
      },
      {
        path: '/1lxa4hy',
        name: 'DeepSeek-TNG-R1T2-Chimera vs DeepSeek R1-0528 quick test',
      },
      {
        path: '/1lxaz08',
        name: 'The BastionRank Showdown: Crowning the Best On-Device AI Models of 2025',
      },
      {
        path: '/1lxb0eo',
        name: 'The 1T Kimi K2 model is using DeepSeek V3 architecture',
      },
      {
        path: '/1lxbsw0',
        name: 'Drummer\'s Snowpiercer 15B v2',
      },
      {
        path: '/1lxbynb',
        name: 'How much do you use your local model on average on a day?',
      },
      {
        path: '/1lxd7ki',
        name: 'Introducing Local AI Monster: Run Powerful LLMs Right in Your Browser 🚀',
      },
      {
        path: '/1lxd7nh',
        name: 'H-Net: a hierarchical network that replaces tokenization with a dynamic chunking process directly inside the model, automatically discovering and operating over meaningful units of data',
      },
      {
        path: '/1lxehv3',
        name: 'FlexOlmo: Open Language Models for Flexible Data Use | Implications for federated training in the open source community',
      },
      {
        path: '/1lxep4s',
        name: 'Deepseek\'s Simple, yet Genius Data Generation Pipeline',
      },
      {
        path: '/1lxes5c',
        name: 'Is there any Llama based chat application?',
      },
      {
        path: '/1lxfep2',
        name: 'What is the most wide use case of Llama ?',
      },
      {
        path: '/1lxfs4d',
        name: 'Trying to fine-tune LLaMA locally… and my GPU is crying',
      },
      {
        path: '/1lxg042',
        name: ': Looking for Uncensored LLMs - Anyone Have Recommendations?',
      },
      {
        path: '/1lxgb9q',
        name: 'Stanford\'s CS336 2025 (Language Modeling from Scratch) is now available on YouTube',
      },
      {
        path: '/1lxgi3j',
        name: 'People with a Mac Studio 512G: what are you doing with it?',
      },
      {
        path: '/1lxgm02',
        name: 'An alternative to semantic or benchmark-based routing: A preference-aligned router model',
      },
      {
        path: '/1lxgp5c',
        name: 'Unrestrained AI Chat Companion?',
      },
      {
        path: '/1lxgwgo',
        name: 'I built a GPT bot that my colleagues love and has a valuable real-world use case. Now I want to make it standalone &amp; more broadly available.  What’s the best way to do it?',
      },
      {
        path: '/1lxhcom',
        name: 'What\'s a setup for local voice translation?',
      },
      {
        path: '/1lxhj7h',
        name: 'How to set the Context Overflow Policy in LM Studio? Apparently they removed the option...',
      },
      {
        path: '/1lxhjjn',
        name: 'Most energy efficient way to run Gemma 3 27b?',
      },
      {
        path: '/1lxhnjo',
        name: 'Bypassing Meta\'s Llama Firewall: A Case Study in Prompt Injection Vulnerabilities',
      },
      {
        path: '/1lxj1o0',
        name: 'How are people doing the whole video captioning and understanding thing?',
      },
      {
        path: '/1lxlgjk',
        name: 'Best Local Model for Snappy Conversations?',
      },
      {
        path: '/1lxljco',
        name: '[D] Any limitations if you try to split your dataset and run full epochs',
      },
      {
        path: '/1lxmhx2',
        name: 'Gemma-3n prompts to uncensor?',
      },
      {
        path: '/1lxmldq',
        name: 'LiquidAI LFM2 Model Released',
      },
      {
        path: '/1lxmr2h',
        name: 'Thank you r/LocalLLaMA! Observer AI launches tonight! 🚀 I built the local open-source screen-watching tool you guys asked for.',
      },
      {
        path: '/1lxn8ry',
        name: 'Where local is lagging behind... Wish lists for the rest of 2025',
      },
      {
        path: '/1lxnsh1',
        name: 'OpenAI delays its open weight model again for "safety tests"',
      },
      {
        path: '/1lxnsmm',
        name: 'Tinyllama on old Mediatek G80 android device',
      },
      {
        path: '/1lxnwtg',
        name: 'Does this mean it’s likely not gonna be open source?',
      },
      {
        path: '/1lxo0xc',
        name: 'Kimi K2 is funny and great',
      },
      {
        path: '/1lxo8za',
        name: 'Why don’t we have a big torrent repo for open-source LLMs?',
      },
      {
        path: '/1lxp144',
        name: 'How to SFT diffusion large language model ?',
      },
      {
        path: '/1lxpidc',
        name: 'Where that Unsloth Q0.01_K_M GGUF at?',
      },
      {
        path: '/1lxps1s',
        name: 'Need help with my interview ASAP',
      },
      {
        path: '/1lxpw2g',
        name: 'Offline AI — Calling All Experts and Noobs',
      },
      {
        path: '/1lxqk44',
        name: 'Will an 8gbvram laptop gpu add any value?',
      },
      {
        path: '/1lxr5s3',
        name: 'Kimi K2 q4km is here and also the instructions to run it locally with KTransformers 10-14tps',
      },
      {
        path: '/1lxryp4',
        name: 'Semantic code search for local directory',
      },
      {
        path: '/1lxs0s0',
        name: 'New local AI system planning stage need advice.',
      },
      {
        path: '/1lxs7c9',
        name: 'Is there a way to sort models by download size in LM Studio?',
      },
      {
        path: '/1lxseu8',
        name: 'MBP M3 Max 36 GB Memory - what can I run?',
      },
      {
        path: '/1lxth6s',
        name: '7/11 Update on Design Arena: Added Devstral, Qwen, and kimi-k2, Grok 4 struggling but coding model coming out later?',
      },
      {
        path: '/1lxtivp',
        name: 'Trying to use AI agent to play N-puzzle but the agent could only solve 8-puzzle but completely failed on 15-puzzle.',
      },
      {
        path: '/1lxufzz',
        name: 'Best model for M3 Max 96GB?',
      },
      {
        path: '/1lxuu5m',
        name: 'How does having a very long context window impact performance?',
      },
      {
        path: '/1lxv6a5',
        name: 'What drives progress in newer LLMs?',
      },
      {
        path: '/1lxvf0j',
        name: 'Qwen 3 Embeddings 0.6B faring really poorly inspite of high score on benchmarks',
      },
      {
        path: '/1lxvh5t',
        name: '5090 minimum power limit = 400W ?',
      },
      {
        path: '/1lxvrjm',
        name: 'Traditional Data Science work is going to be back',
      },
      {
        path: '/1lxw3zz',
        name: 'We built an open-source medical triage benchmark',
      },
      {
        path: '/1lxw7es',
        name: 'New GPU 7900 XT vs 9070 XT where price difference is ~40 USD',
      },
      {
        path: '/1lxwb4m',
        name: 'Performant open weights foundation text-specific models are where now?',
      },
      {
        path: '/1lxwodv',
        name: 'Best setup for ~20 tokens/sec DeepSeek R1 671B Q8 w/ 128K context window',
      },
      {
        path: '/1lxwpqp',
        name: 'Rtx 5060ti 16gb vs Rtx 3090',
      },
      {
        path: '/1lxx4sb',
        name: 'Local LLM on laptop?',
      },
      {
        path: '/1lxxgm2',
        name: 'i’m building a platform where you can use your local gpus, rent remote gpus, or use co-op shared gpus. what is more important to you?',
      },
      {
        path: '/1lxy8xz',
        name: 'newbie here. Is this normal? Am I doing everything wrong? Am I asking too much? Gemma3 4b was transcribing ok with some mistakes',
      },
      {
        path: '/1lxybu4',
        name: 'What is your "perfect" £10,000 for Local LLM, Gaming, plex with the following conditional and context.',
      },
      {
        path: '/1lxycdh',
        name: 'Safety first, or whatever🙄',
      },
      {
        path: '/1lxyg6z',
        name: 'Have you tried that new devstral?! Myyy! The next 8x7b?',
      },
      {
        path: '/1lxyj92',
        name: '"We will release o3 wieghts next week"',
      },
      {
        path: '/1lxyvto',
        name: 'we have to delay it',
      },
      {
        path: '/1lxz268',
        name: 'What LLM Workflow UI Are You Using?',
      },
      {
        path: '/1lxzn8c',
        name: 'Suggest a Suitable Ai Model to run locally ( beginner)',
      },
      {
        path: '/1ly02iv',
        name: 'Demo Video of AutoBE, No-code agent for Backend Application, writing 100% compilable code (Open Source)',
      },
      {
        path: '/1ly0jnx',
        name: 'It\'s been a while, I\'m out of date, suggest me a model',
      },
      {
        path: '/1ly0oln',
        name: 'Are there any builder companies that sell pre-assembled Blackwell 6000 machines?',
      },
      {
        path: '/1ly182t',
        name: 'Grok4 consults with daddy on answers',
      },
      {
        path: '/1ly19br',
        name: 'Simplest way to run single batch jobs for experiments on determinism',
      },
      {
        path: '/1ly1d7v',
        name: 'Beginner\'s tip: How to fix the Jinja template error in LM Studio (in my case: for Mistral-qwq-12b-merge)',
      },
      {
        path: '/1ly256a',
        name: 'How Are YOU Using LLMs? (A Quick Survey)',
      },
      {
        path: '/1ly358h',
        name: 'Using llama3.2-vision:11b for UI element identification',
      },
      {
        path: '/1ly35wd',
        name: 'Support for the LiquidAI LFM2 hybrid model family is now available in llama.cpp',
      },
      {
        path: '/1ly36ht',
        name: 'Anyone got lobe-chat-database working?',
      },
      {
        path: '/1ly3dk9',
        name: 'Building a Claude/ChatGPT Projects-like system: How to implement persistent context with uploaded documents?',
      },
      {
        path: '/1ly3exz',
        name: 'What do you think of Huawei\'s Pangu model counterfeiting behaviour?',
      },
      {
        path: '/1ly3mrl',
        name: 'Cactus - Edge AI Inference Framework',
      },
      {
        path: '/1ly42e5',
        name: 'Interesting info about Kimi K2',
      },
      {
        path: '/1ly476r',
        name: 'Music Analysis - another attempt',
      },
      {
        path: '/1ly4tus',
        name: 'RL local llm for coding',
      },
      {
        path: '/1ly4xvb',
        name: 'GPU UPGRADE!!!!NEED Suggestion!!!!.Upgrading current workstation either with 4x RTX 6000 ada or 4x L40s. Can i use NVlink bridge the pair them up.??',
      },
      {
        path: '/1ly4zh8',
        name: 'Okay kimi-k2 is an INSANE model WTF those one-shot animations',
      },
      {
        path: '/1ly513g',
        name: 'New LLM DOS rig',
      },
      {
        path: '/1ly59tz',
        name: 'Open-Source LLM-Based Solution for Online Content Filtering - Is There One?',
      },
      {
        path: '/1ly5g2t',
        name: 'What\'s the most natural sounding TTS model for local right now?',
      },
      {
        path: '/1ly6cg6',
        name: 'Kyutai Text-to-Speech is considering opening up custom voice model training, but they are asking for community support!',
      },
      {
        path: '/1ly7sb0',
        name: '[Rust] qwen3-rs: Educational Qwen3 Architecture Inference (No Python, Minimal Deps)',
      },
      {
        path: '/1ly84xd',
        name: 'Introducing GGUF Tool Suite - Create and Optimise Quantisation Mix for DeepSeek-R1-0528 for Your Own Specs',
      },
      {
        path: '/1ly894z',
        name: 'mlx-community/Kimi-Dev-72B-4bit-DWQ',
      },
      {
        path: '/1ly8fyj',
        name: 'This whole thing is giving me WizardLM2 vibes.',
      },
      {
        path: '/1ly983h',
        name: 'Local Llama with Home Assistant Integration and Multilingual-Fuzzy naming',
      },
      {
        path: '/1lya4ks',
        name: 'Browser Use vs Model Context Protocol (MCP): Two Philosophies for AI Interaction with the Digital World',
      },
      {
        path: '/1lyaozv',
        name: 'Moonshot AI just made their moonshot',
      },
      {
        path: '/1lyb8tz',
        name: 'Banana for scale',
      },
      {
        path: '/1lybdr2',
        name: 'Qwen3-30B-A3B aider polyglot score?',
      },
      {
        path: '/1lybh8e',
        name: 'Runpod, Hugging Face, or what for super-simple uncensored LLM-in-the-cloud setup?',
      },
      {
        path: '/1lybm7b',
        name: 'Unlocking AMD MI300X for High-Throughput, Low-Cost LLM Inference',
      },
      {
        path: '/1lybqtw',
        name: 'Should I buy Tesla K80 for 70€ or Tesla M10 for 110€?',
      },
      {
        path: '/1lybx9x',
        name: 'Internal networking components for Nvidia’s System',
      },
      {
        path: '/1lyckyk',
        name: 'Looking for trusted websites with benchmark leaderboards to build LLM reranking — plus how to evaluate LLMs in production without ground truth?',
      },
      {
        path: '/1lydp3k',
        name: 'DeepSeek R2 delayed',
      },
      {
        path: '/1lyen05',
        name: 'Laptop GPU for Agentic Coding -- Worth it?',
      },
      {
        path: '/1lyf8g5',
        name: 'Anybody else broken Meta "Ai" yet?',
      },
      {
        path: '/1lyfngg',
        name: 'How do you keep up with all these things?',
      },
      {
        path: '/1lyhnhw',
        name: 'Is there any book writing software that can utilize an local LLM?',
      },
      {
        path: '/1lyhuuq',
        name: 'Heaviest model that can be ran with RTX 3060 12Gb?',
      },
      {
        path: '/1lyitq9',
        name: 'Any suggestions for generating academic-style/advanced plots?',
      },
      {
        path: '/1lyiyvq',
        name: '32g SXM2 V100s for $360, Good Deal for LLMs?',
      },
      {
        path: '/1lyj81f',
        name: 'Do you think an AI will achieve gold medal in 2025 International Math Olympad (tomorrow)',
      },
      {
        path: '/1lyjgwv',
        name: '[Help] Fastest model for real-time UI automation? (Browser-Use too slow)',
      },
      {
        path: '/1lyjm7t',
        name: 'What providers are people using for GLM-4?',
      },
      {
        path: '/1lykf38',
        name: 'What LLMs work with VScode like copilot?',
      },
      {
        path: '/1lykf92',
        name: 'What Causes Poor Long-Context Performance?',
      },
      {
        path: '/1lykpo6',
        name: 'Which model is best for translation?',
      },
      {
        path: '/1lykqbu',
        name: 'SmolLM-3B when asked if it was Peter Griffin',
      },
      {
        path: '/1lyl697',
        name: 'How do you make Loras for Qwen coder /  devstral?',
      },
      {
        path: '/1lylo75',
        name: 'Kimi-K2 takes top spot on EQ-Bench3 and Creative Writing',
      },
      {
        path: '/1lyltyb',
        name: 'When a model is delayed because the boss isn\'t happy, is it doomed forever?',
      },
      {
        path: '/1lymewq',
        name: 'I have a Laptop with 3050 Ti 4GB VRAM, will upgrading my RAM from 16 to 48 help?',
      },
      {
        path: '/1lymlgp',
        name: 'Dark Arts: Speaker embedding gradient descent for local TTS models',
      },
      {
        path: '/1lynwk4',
        name: 'Need Help with Agents and AnythingLLM',
      },
      {
        path: '/1lyonb4',
        name: 'How are people actually able to get the system prompt of these AI companies?',
      },
      {
        path: '/1lyozcn',
        name: 'Wrote a deep dive on LLM tool calling with step-by-step REST and Spring AI examples',
      },
      {
        path: '/1lyptl7',
        name: 'Building an App That Builds Apps – Feedback Appreciated',
      },
      {
        path: '/1lyq1yh',
        name: 'LLM evaluation in real life?',
      },
      {
        path: '/1lyq22j',
        name: 'Local LLM to back Elastic AI',
      },
      {
        path: '/1lyq7mc',
        name: 'Help Needed for MedGemma 27B',
      },
      {
        path: '/1lyqefd',
        name: 'What are these random AI services?? Why are they so bad?',
      },
      {
        path: '/1lyqhqq',
        name: 'Why has Meta started throwing billions at AI now?',
      },
      {
        path: '/1lyqwil',
        name: 'What does it take to run llms?',
      },
      {
        path: '/1lysmo9',
        name: 'Qwen3-235B-A22B @ 0.7t/s. Hardware or configuration bottleneck?',
      },
      {
        path: '/1lysqk7',
        name: '[Rumor] Huawei 920 accelerator coming H2 2026',
      },
      {
        path: '/1lyt0zp',
        name: 'Is anyone training a religion model?',
      },
      {
        path: '/1lyt372',
        name: 'How can I figure out the speed in tokens per second that my model will run on the CPU?',
      },
      {
        path: '/1lytioc',
        name: 'Looking for my next laptop soon',
      },
      {
        path: '/1lyu7bf',
        name: 'AI fever D:',
      },
      {
        path: '/1lyuxj5',
        name: 'Built a plugin-based system automation layer for LLMs, safe, modular, and dead simple to extend',
      },
      {
        path: '/1lyv5uc',
        name: 'LLM model for live translation into subtitles [RU-EN]',
      },
      {
        path: '/1lyv750',
        name: 'How I use Gemma 3 to help me reply my texts',
      },
      {
        path: '/1lyv7s7',
        name: 'Testing ChatGPT and Claude capabilities to "simple projects": Block Site extension for Google Chrome',
      },
      {
        path: '/1lyvah4',
        name: 'Tried Kimi K2 for writing and reasoning, and was not impressed.',
      },
      {
        path: '/1lyvkhr',
        name: 'Let’s talk about models you believed are more Hyped than Hot',
      },
      {
        path: '/1lyvsqv',
        name: 'Orpheus TTS FastAPI Server Release v1.0 (Async and Audio Issues Fixes)',
      },
      {
        path: '/1lyvyhq',
        name: 'Like some help setting up MCP sever for LM studio',
      },
      {
        path: '/1lyw5u2',
        name: 'Audiobook Creator - v1.4 - Added support for Orpheus along with Kokoro',
      },
      {
        path: '/1lyxf1f',
        name: 'Benchmarking Qwen3 30B and 235B on dual RTX PRO 6000 Blackwell Workstation Edition',
      },
      {
        path: '/1lyy0yi',
        name: 'dots.llm1 appears to be very sensitive to quantization?',
      },
      {
        path: '/1lyy39n',
        name: 'IndexTTS2, the most realistic and expressive text-to-speech model so far, has leaked their demos ahead of the official launch! And... wow!',
      },
      {
        path: '/1lyy4k8',
        name: 'Easy way to log input/output in llama.cpp?  (server and chat)',
      },
      {
        path: '/1lyybq8',
        name: 'Jan doesn\'t show all available GGUF models from Hugging Face',
      },
      {
        path: '/1lyyelr',
        name: 'What kind of hardware would I need to self-host a local LLM for coding (like Cursor)?',
      },
      {
        path: '/1lyyhwz',
        name: 'Never seen fastllm mentioned here, anyone using it? (kimi k2 local)',
      },
      {
        path: '/1lyyoff',
        name: 'How to get LLM structured outputs in TS?',
      },
      {
        path: '/1lyyryy',
        name: 'i need the best local llm i can run on my gaming pc',
      },
      {
        path: '/1lyyu6i',
        name: 'Kimi k2 not available on iPhone',
      },
      {
        path: '/1lz0b1p',
        name: 'OpenAI’s announcement of their new Open Weights (Probably)',
      },
      {
        path: '/1lz0hk3',
        name: 'Need advice on search pipeline for retail products (BM25 + embeddings + reranking)',
      },
      {
        path: '/1lz17w8',
        name: 'Madness, the ignorant\'s question. Would it be possible to lighten an LLM model?',
      },
      {
        path: '/1lz1fjz',
        name: 'Problems with LocalDocs on GPT4All',
      },
      {
        path: '/1lz1rv1',
        name: 'We\'re all context for llms',
      },
      {
        path: '/1lz1s8x',
        name: 'Some small PPL benchmarks on DeepSeek R1 0528 quants, from Unlosh and ubergarm, from 1.6bpw (1Q_S_R4) to 4.7bpw (IQ4_KS_R4) (and Q8/FP8 baseline). Also a few V3 0324 ones.',
      },
      {
        path: '/1lz2i5h',
        name: 'Kimi k2 on cli ?',
      },
      {
        path: '/1lz2zt2',
        name: 'Local free PDF parser for academic pdfs',
      },
      {
        path: '/1lz3n8n',
        name: 'Added MCP Support to Kimi.com via MCP SuperAssistant',
      },
      {
        path: '/1lz4f51',
        name: '📢 [Paid Study] Interviewing Individual AI Agent Developers – Share Your Experience + $15/hr',
      },
      {
        path: '/1lz4sk3',
        name: 'Computing embeddings offline for Gemma 3 1B (on-device model)',
      },
      {
        path: '/1lz5cwa',
        name: '480mm wide multi GPU frame - can only find 500+mm frames',
      },
      {
        path: '/1lz5sm6',
        name: 'Safe methods of increasing Context Window of models?',
      },
      {
        path: '/1lz7vh3',
        name: 'Will this work?',
      },
      {
        path: '/1lz81ea',
        name: 'Which LLM should I use to generate high quality Q&amp;A from physics textbook chapters?',
      },
      {
        path: '/1lza5bu',
        name: 'Can you add pacing control option in TTS ?',
      },
      {
        path: '/1lzampg',
        name: 'Training an LLM only on books from the 1800\'s - no modern bias',
      },
      {
        path: '/1lzb04f',
        name: 'Fine-tuning / RL post training for tool calling',
      },
      {
        path: '/1lzb7fh',
        name: 'Any Actual alternative to gpt-4o or claude?',
      },
      {
        path: '/1lzbad8',
        name: 'Building “Auto-Analyst” — A data analytics AI agentic system. LLM Agnostic can be used locally',
      },
      {
        path: '/1lzbadq',
        name: 'What kind of rig would you build with a 5k budget for local LLM?',
      },
      {
        path: '/1lzcuom',
        name: 'Kimi-K2 is a DeepSeek V3 with more experts',
      },
      {
        path: '/1lzdgc8',
        name: 'There will be some frontend for FishSpeech?',
      },
      {
        path: '/1lzdu0l',
        name: 'Practice Pytorch like Leetcode? (Also with cool LLM questions)',
      },
      {
        path: '/1lze1r3',
        name: 'Diffusion model support in llama.cpp.',
      },
      {
        path: '/1lze20x',
        name: 'Can VRAM be combined of 2 brands',
      },
      {
        path: '/1lzf6zi',
        name: 'Xttsv2 model, Chatterbox on MacBook air 8 gb',
      },
      {
        path: '/1lzfdiw',
        name: 'Looking for affordable dedicated GPUs (A100, H100) outside AWS?',
      },
      {
        path: '/1lzfhhq',
        name: 'Apple “will seriously consider” buying Mistral | Bloomberg - Mark Gurman',
      },
      {
        path: '/1lzfsxt',
        name: 'about LLM tools design',
      },
      {
        path: '/1lzfwdj',
        name: 'Stop-Sequences - Real World Use Cases',
      },
      {
        path: '/1lzggo2',
        name: 'Best way to run dockerized linux LLM server?',
      },
      {
        path: '/1lzh0cf',
        name: 'What best model(s) to use for inference using a 4090+3090 for Aider?',
      },
      {
        path: '/1lzhlvb',
        name: 'local model for SQL Q&amp;A + dashboard agent',
      },
      {
        path: '/1lzhns3',
        name: 'Comparison of latest reasoning models on the most recent LeetCode questions (Qwen-32B vs Qwen-235B vs nvidia-OpenCodeReasoning-32B vs Hunyuan-A13B)',
      },
      {
        path: '/1lzhqz8',
        name: 'Responses keep dissolving into word salad - how to stop it?',
      },
      {
        path: '/1lzijk2',
        name: 'MI50 32GB with bios flash',
      },
      {
        path: '/1lzikqt',
        name: 'Annoyed with LibreChat',
      },
      {
        path: '/1lzimcq',
        name: 'Anyone else interested in a 100% on-device browser AI assistant?',
      },
      {
        path: '/1lzjaf5',
        name: 'Foundations of Large Language Models (LLMs) | NLP Lab Research',
      },
      {
        path: '/1lzjlvi',
        name: 'Ollama retaining history?',
      },
      {
        path: '/1lzjsu3',
        name: 'Are there any local LLMS that support Browser use MCP?',
      },
      {
        path: '/1lzk041',
        name: 'A mid range PC build for Dual GPU Local LLMs and SLMs.',
      },
      {
        path: '/1lzkcg3',
        name: 'Multiple 5060 Ti\'s',
      },
      {
        path: '/1lzkrwg',
        name: 'Suggestions/Alternatives for Image captions with efficient system requirements',
      },
      {
        path: '/1lzl5zk',
        name: 'UTCP: A safer, scalable tool-calling alternative to MCP',
      },
      {
        path: '/1lzlm2t',
        name: 'getting started with code assistant',
      },
      {
        path: '/1lzm645',
        name: 'After Kimi K2 Is Released: No Longer Just a ChatBot',
      },
      {
        path: '/1lzn4ae',
        name: 'Agentic Secretary System - Tips and Recommendations?',
      },
      {
        path: '/1lzn9th',
        name: 'Suggestions for ai agent framework and ai model for Text-to-SQL ai agent',
      },
      {
        path: '/1lzna91',
        name: 'Is there a better frontend than OpenWebui for RAG?',
      },
      {
        path: '/1lznxy5',
        name: 'Project Idea: A REAL Community-driven LLM Stack',
      },
      {
        path: '/1lzocuk',
        name: 'I ditch all LLM framework and use only OpenAI SDK for everything, I start loving building AI application this way.',
      },
      {
        path: '/1lzooed',
        name: 'Best LLM for Educators ?',
      },
      {
        path: '/1lzoxbl',
        name: 'LM Studio cant use my gpu as main',
      },
      {
        path: '/1lzps3b',
        name: 'Kimi K2 1.8bit Unsloth Dynamic GGUFs',
      },
      {
        path: '/1lzqh66',
        name: 'How to improve response times for multimodal requests?',
      },
      {
        path: '/1lzql0b',
        name: 'A practical handbook on Context Engineering with the latest research from IBM Zurich, ICML, Princeton, and more.',
      },
      {
        path: '/1lzrqoi',
        name: 'Esoteric Game with Llama3.2',
      },
      {
        path: '/1lzsnna',
        name: 'Ollama, Why No Reka Flash, SmolLM3, GLM-4?',
      },
      {
        path: '/1lzsoqc',
        name: 'Recorded a userflow for my vibecoding pet project - character selection, model setup, inline replies, and image generation',
      },
      {
        path: '/1lztjtc',
        name: 'Kimi-K2 🤝 Anthropic | Blog Post by Justin Wong',
      },
      {
        path: '/1lzts1z',
        name: 'Is real-time voice-to-voice still science fiction?',
      },
      {
        path: '/1lzu9e8',
        name: 'Is the output of only the shared expert(s) in a MOE model coherent?',
      },
      {
        path: '/1lzuaa3',
        name: 'If you limit context to 4k tokens, which models today beat Llama2-70B from 2 years ago?',
      },
      {
        path: '/1lzv16g',
        name: 'Meta’s New Superintelligence Lab Is Discussing Major A.I. Strategy Changes',
      },
      {
        path: '/1lzvuu7',
        name: 'I want to hire 100k programmers and create the first tech giant startup',
      },
      {
        path: '/1lzw6yu',
        name: 'Open Source Alternative to NotebookLM',
      },
      {
        path: '/1lzwps3',
        name: 'Building a Focus App with Local LLMs — But Latency Is a Real Challenge , seeking suggestions',
      },
      {
        path: '/1lzx039',
        name: 'NVMe for local LLM is too slow. Any ideas?',
      },
      {
        path: '/1lzy059',
        name: 'Code assistant way to start',
      },
      {
        path: '/1lzyk1k',
        name: 'GitHub - SrijanSriv211/Palm: Palm is a tree, not a language model',
      },
      {
        path: '/1lzywie',
        name: 'Kimi K2 tops creative writing benchmark',
      },
      {
        path: '/1lzz13f',
        name: 'What are the best practices for vector search + filtering with LLM?',
      },
      {
        path: '/1lzzcje',
        name: 'MMLU-ProX: A Multilingual Benchmark for Advanced Large Language Model Evaluation',
      },
      {
        path: '/1lzzka4',
        name: 'Enough resources for light AI workloads?',
      },
      {
        path: '/1m00yn1',
        name: 'Help needed: 20+ devs on the local model',
      },
      {
        path: '/1m0115d',
        name: 'Meta on track to be first lab with a 1GW supercluster',
      },
      {
        path: '/1m013ou',
        name: 'Moonshot AI’s open source Kimi K2 outperforms GPT-4 in key benchmarks',
      },
      {
        path: '/1m01d8x',
        name: 'Did anyone manage to use nllb with cuda acceleration on Windows?',
      },
      {
        path: '/1m021nx',
        name: 'Thank you, Unsloth! You guys are legends!!! (Now I just need 256GB of DDR5)',
      },
      {
        path: '/1m03sh9',
        name: 'A very nice overview on how llama.cpp quantization works',
      },
      {
        path: '/1m03sio',
        name: 'Does vLLM not support Qwen3 ggufs? What sort of models/quants are people running in vLLM?',
      },
      {
        path: '/1m040ag',
        name: 'What\'s up with the weird OR provider prices, they make no sense at all.',
      },
      {
        path: '/1m041m4',
        name: 'Meta’s New Superintelligence Lab Is Discussing Major A.I. Strategy Changes',
      },
      {
        path: '/1m04a20',
        name: 'EXAONE 4.0 32B',
      },
      {
        path: '/1m04ic2',
        name: 'Grok no more model Open-source?',
      },
      {
        path: '/1m06bru',
        name: 'Which local LLMs and/or libraries can I use to guide or train to identify where relevant data is located on a web page for web scraping purposes? Using natural language',
      },
      {
        path: '/1m06lrz',
        name: 'I built an AI PC - what should I try out first?',
      },
      {
        path: '/1m06nhe',
        name: 'Non-reasoning models adopting reasoning behavior from previous messages',
      },
      {
        path: '/1m07tkl',
        name: '[XTTS v2] ¿Por qué algunas voces suenan bien y otras fallan al entrenar?',
      },
      {
        path: '/1m081hm',
        name: 'Test MNN Chat for Android',
      },
      {
        path: '/1m084lw',
        name: 'gemini 2.5 pro bug',
      },
      {
        path: '/1m086sk',
        name: 'How to increase character limit in TTS?',
      },
      {
        path: '/1m08bvp',
        name: 'Are there any models that can upmix stereo into surround!!!',
      },
      {
        path: '/1m09bzn',
        name: 'Multi-Code-Agent Orchestration VS Code Extension',
      },
      {
        path: '/1m09rbh',
        name: 'SLM for local coding assistance',
      },
      {
        path: '/1m0a9ni',
        name: 'What is requests limit for kimi k2 ?',
      },
      {
        path: '/1m0apct',
        name: 'Which model can I run comfortably on M4 Max 128GB with a long context window?',
      },
      {
        path: '/1m0auae',
        name: 'Без цензуры',
      },
      {
        path: '/1m0b73m',
        name: 'Open source vs expansive models',
      },
      {
        path: '/1m0bh4b',
        name: 'Model size for RTX 3060 (12 Gb) + 32 Gb ram',
      },
      {
        path: '/1m0biux',
        name: 'Introducing r/heartwired !!!',
      },
      {
        path: '/1m0c569',
        name: 'AI Agent tutorial in TS from the basics to building multi-agent teams',
      },
      {
        path: '/1m0c7am',
        name: 'Open source LLMs leaderboard',
      },
      {
        path: '/1m0cdle',
        name: 'PydanticAI is GOAT for building agents in Python',
      },
      {
        path: '/1m0cgmc',
        name: 'Cognition, maker of the AI coding agent Devin, acquires Windsurf',
      },
      {
        path: '/1m0cgnl',
        name: 'Kimi K2: cheap and fast API access for those who can\'t run locally',
      },
      {
        path: '/1m0cja9',
        name: 'Do DeepseekR1-distilled-Llama-8B has the same tokenizer and tokens vocab as Llama3-1B or 2B?',
      },
      {
        path: '/1m0cnzs',
        name: 'XSched: Preemptive Scheduling for Diverse XPUs',
      },
      {
        path: '/1m0d0vz',
        name: 'Analyzed 5K+ reddit posts to see how people are actually using AI in their work (other than for coding)',
      },
      {
        path: '/1m0d47q',
        name: 'OCTAVE addon to REPOMIX',
      },
      {
        path: '/1m0d6ry',
        name: 'Can I fine-tune Qwen3 with DPO? How do I handle &lt;thinking&gt; tokens?',
      },
      {
        path: '/1m0dqgh',
        name: 'Open source and free iOS app to chat with your LLMs when you are away from home.',
      },
      {
        path: '/1m0drwa',
        name: 'AI Assistant Agent with function calling - Update 2',
      },
      {
        path: '/1m0ec9o',
        name: 'Need help with mcp setup in LM studio',
      },
      {
        path: '/1m0eq11',
        name: 'Whisper.cpp Node.js Addon with Vulkan Support',
      },
      {
        path: '/1m0fboi',
        name: 'Announcing the launch of the Startup Catalyst Program for early-stage AI teams.',
      },
      {
        path: '/1m0fp0r',
        name: 'GPU for local LLM',
      },
      {
        path: '/1m0g2mk',
        name: 'Well, if anyone was waiting for Llama 4 Behemoth, it\'s gone',
      },
      {
        path: '/1m0gdfi',
        name: 'Kiro (Cursor alternative from Amazon)',
      },
      {
        path: '/1m0gu3p',
        name: 'May use? May? like "I don\'t know, just like the rest, but they\'re from China" may? Racist much?',
      },
      {
        path: '/1m0gvhm',
        name: 'Study finds AI tools made open source software developers 19 percent slower',
      },
      {
        path: '/1m0gyhy',
        name: 'We built Explainable AI with pinpointed citations &amp; reasoning — works across PDFs, Excel, CSV, Docs &amp; more',
      },
      {
        path: '/1m0h6k5',
        name: 'Need advice on prompt instruction format',
      },
      {
        path: '/1m0h6qt',
        name: 'Has anyone dived into Universal Tool Calling Protocol (UTCP), a potential MCP alternative, yet? Is it worth standardizing?',
      },
      {
        path: '/1m0h7sx',
        name: 'Does Apple have the best value for money for running LLMs?',
      },
      {
        path: '/1m0hgtt',
        name: 'Why LangGraph overcomplicates AI agents (and my Go alternative)',
      },
      {
        path: '/1m0i8k5',
        name: 'I built an open-source GUI editor for JSON and function call schema',
      },
      {
        path: '/1m0ihkh',
        name: 'Anybody put a game on steam that included Localllm?',
      },
      {
        path: '/1m0j7w4',
        name: 'Swiss Open LLM',
      },
      {
        path: '/1m0jeyu',
        name: 'Can you have more vram than system ram?',
      },
      {
        path: '/1m0k22v',
        name: 'mistralai/Voxtral-Mini-3B-2507 · Hugging Face',
      },
      {
        path: '/1m0k27c',
        name: 'RAG Agent that tells me what to work on',
      },
      {
        path: '/1m0k38k',
        name: 'What does anyone know about CUDA support being added to MLX? This sounds intriguing to me but I haven\'t heard a peep about it except this hackernews thing I saw yesterday linking to the github PR',
      },
      {
        path: '/1m0kqma',
        name: 'free ai generators like bluewillow still hold up with the right edits',
      },
      {
        path: '/1m0lyjn',
        name: 'Kimi has impressive coding performance! Even deep into context usage.',
      },
      {
        path: '/1m0lykb',
        name: 'What\'s the best offline TTS models at the moment?',
      },
      {
        path: '/1m0mcbq',
        name: 'seems visual models are more sensitive than text models on quantization loss.',
      },
      {
        path: '/1m0mg5b',
        name: 'Least sycophantic AI yet? Kimi K2',
      },
      {
        path: '/1m0mnjk',
        name: 'Kimi K2 at ~200 tps on Groq',
      },
      {
        path: '/1m0mo2d',
        name: 'OK, now we\'re at 1T parameter models, what\'s the 3090 equivalent way to run them locally?',
      },
      {
        path: '/1m0muph',
        name: 'GitHub - restyler/awesome-sandbox: Awesome Code Sandboxing for AI',
      },
      {
        path: '/1m0nutb',
        name: 'Totally lightweight local inference...',
      },
      {
        path: '/1m0o6am',
        name: 'A personal mathematics benchmark (IOQM 2024)',
      },
      {
        path: '/1m0onbu',
        name: 'Alibaba-backed Moonshot releases new Kimi AI model that beats ChatGPT, Claude in coding — and it costs less',
      },
      {
        path: '/1m0p3bh',
        name: 'News feed for new interesting local LLMs ?',
      },
      {
        path: '/1m0pjk9',
        name: 'As a developer vibe coding with intellectual property...',
      },
      {
        path: '/1m0pn5c',
        name: 'RTX 5090 performance with vLLM and batching?',
      },
      {
        path: '/1m0pxot',
        name: 'Just tried out the Exaone 4.0 1.2b bf16 and i\'m extremely suprised at how good a 1.2b can be!',
      },
      {
        path: '/1m0r95k',
        name: '2 M3 Ultra’s 512GB running Kimi K2 quant 4 with mlx-lm and mlx.distributed',
      },
      {
        path: '/1m0rk8t',
        name: 'Notes on Kimi K2: A Deepseek derivative but the true Sonnet 3.6 Succesor',
      },
      {
        path: '/1m0s32z',
        name: 'NO ILLUMINATI, YOU LET US HAVE THIS ONE!',
      },
      {
        path: '/1m0slrh',
        name: 'support for Kimi-K2 has been merged into llama.cpp',
      },
      {
        path: '/1m0ssma',
        name: 'How did you manage to use llama server with openhands ?',
      },
      {
        path: '/1m0t5m9',
        name: 'NousResearch/Hermes-3-Dataset Release',
      },
      {
        path: '/1m0thc5',
        name: 'FULL Cursor System Prompt and Tools [UPDATED, v1.2]',
      },
      {
        path: '/1m0tkly',
        name: 'Is it possible to get a common memory pool of 48 on two 3090?',
      },
      {
        path: '/1m0twqa',
        name: 'Alternative to llama.cpp for Apple Silicon',
      },
      {
        path: '/1m0txlx',
        name: 'Choosing the Right Model for academic Evaluation: Llama 3.1 Base vs Instruct?',
      },
      {
        path: '/1m0ukji',
        name: '‘Waiting… ‘, 2025, whatthehellisa.jpg',
      },
      {
        path: '/1m0uoqo',
        name: 'IQ2_KL 345.687 GiB (2.892 BPW) Kimi-K2-Instruct GGUF ik exclusive!',
      },
      {
        path: '/1m0v9m1',
        name: 'Incoming late summer: 8B and 70B models trained on 15T tokens, fluent in 1000+ languages, open weights and code, Apache 2.0. Thanks Switzerland!',
      },
      {
        path: '/1m0vc09',
        name: 'Open WebUI RAG and pipelines',
      },
      {
        path: '/1m0vci4',
        name: 'What version of Deepseek is being served in Deepseek app as the reasoning model?',
      },
      {
        path: '/1m0wigu',
        name: 'Made a beginner-friendly guide to AI agent security.',
      },
      {
        path: '/1m0wji2',
        name: 'I feel that the duality of llama.cpp and ik-llama is worrysome',
      },
      {
        path: '/1m0y3a6',
        name: 'Fine-tuning Leaderboard!',
      },
      {
        path: '/1m0yqq2',
        name: 'Kimi K2 vs. Claude vs. OpenAI | Cursor Real-World Research Task',
      },
      {
        path: '/1m0yw9z',
        name: 'How is the new Grok AI girlfriend animation implemented?',
      },
      {
        path: '/1m0z1zx',
        name: 'Your unpopular takes on LLMs',
      },
      {
        path: '/1m0z80y',
        name: 'Visualization for MuonClip',
      },
      {
        path: '/1m0z8sn',
        name: 'What is the most underrated model in your opinion?',
      },
      {
        path: '/1m0zy1a',
        name: 'New documentation / explainer for GGUF quantization',
      },
      {
        path: '/1m101yf',
        name: '[WANTED] Moonshot K2 Jailbreak',
      },
      {
        path: '/1m10jln',
        name: 'Obsidian note summarizer using local LLMs',
      },
      {
        path: '/1m10y6t',
        name: 'Grok 3 just leak me it\'s system prompt',
      },
      {
        path: '/1m118is',
        name: 'Use claudecode with local models',
      },
      {
        path: '/1m12ij7',
        name: '🚨 Docker container stuck on “Waiting for application startup” — Open WebUI won’t load in browser',
      },
      {
        path: '/1m13eb2',
        name: 'AMD Radeon AI PRO R9700 32 GB GPU Listed Online, Pricing Expected Around $1250, Half The Price of NVIDIA\'s RTX PRO "Blackwell" With 24 GB VRAM',
      },
      {
        path: '/1m13eg0',
        name: 'Seeking advice: Which Ollama model should I run on my modest laptop?',
      },
      {
        path: '/1m13t7g',
        name: 'DIY Voice Chat with Local LLMs on iOS/Mac: Apple Shortcut Using LM Studio + Kokoro-FastAPI (Free &amp; Private)',
      },
      {
        path: '/1m142vi',
        name: 'Can someone nudge me into the right direction for creating MCPs using Local models. Tutorials or articles or something.',
      },
      {
        path: '/1m145cw',
        name: 'Could I be put in the right direction for the best model/s ive been using an app for chatting with bots but can\'t use it anymore due to circumstances and I\'m totally new to this stuff',
      },
      {
        path: '/1m14a9j',
        name: 'Meta\'s new ASI team discussed about abandoning Meta\'s powerful Open-source and focus on developing close',
      },
      {
        path: '/1m157wo',
        name: 'Model recommendations for GPU-less server',
      },
      {
        path: '/1m15yss',
        name: 'Local RAG + LLM as a Narrative RPG Game Master — Does This Make Sense and How to Build It?',
      },
      {
        path: '/1m16h0b',
        name: 'GPUs low utilization?',
      },
      {
        path: '/1m16kdm',
        name: 'T5Gemma: A new collection of encoder-decoder Gemma models- Google Developers Blog',
      },
      {
        path: '/1m16o6r',
        name: 'Official Local LLM support by AMD released. Lemonade',
      },
      {
        path: '/1m1701z',
        name: 'TTS models for realtime streaming',
      },
      {
        path: '/1m17ify',
        name: 'Running Ollama locally with a smooth UI and no technical skills',
      },
      {
        path: '/1m17wf2',
        name: 'Ryzen AI 7 350 and rocm',
      },
      {
        path: '/1m187yw',
        name: 'Open alternative to Dia / Comet AI Browsers - Can run w/ Local models',
      },
      {
        path: '/1m18nke',
        name: 'GitHub - boneylizard/Eloquent: A local front-end for open-weight LLMs with memory, RAG, TTS/STT, Elo ratings, and dynamic research tools. Built with React and FastAPI.',
      },
      {
        path: '/1m18tr9',
        name: 'Does llama.cpp support to run kimi-k2 with multi GPUs',
      },
      {
        path: '/1m19igi',
        name: 'getting acceleration on Intel integrated GPU/NPU',
      },
      {
        path: '/1m19kfw',
        name: 'Help me figure out how ?',
      },
      {
        path: '/1m19upn',
        name: 'So how do I fine-time a local model?',
      },
      {
        path: '/1m1a4z7',
        name: 'Ok this tool is actually insane!! I just found a tool that turns ANY document into LLM-ready data!!',
      },
      {
        path: '/1m1aj8n',
        name: '📢 [RELEASE] LoFT CLI: Fine-tune &amp; Deploy LLMs on CPU (8GB RAM, No GPU, No Cloud)',
      },
      {
        path: '/1m1aps5',
        name: 'How do you RAG multiple docs in LM STUDIO',
      },
      {
        path: '/1m1as5s',
        name: 'Using Llama MaaS in Google\'s Vertex AI',
      },
      {
        path: '/1m1au28',
        name: 'Vllm vs. llama.cpp',
      },
      {
        path: '/1m1i922',
        name: 'He’s out of line but he’s right',
      },
      {
        path: '/1m1np9n',
        name: 'Sometime… in the next 3 to 5 decades….',
      },
      {
        path: '/1m1sjsn',
        name: 'MCPS are awesome!',
      },
      {
        path: '/1m1vf6g',
        name: 'Kimi K2 on Aider Polyglot Coding Leaderboard',
      },
      {
        path: '/1m1xqv1',
        name: 'We have hit 500,000 members! We have come a long way from the days of the leaked LLaMA 1 models',
      },
      {
        path: '/1m1ylw0',
        name: 'My simple test: Qwen3-32b &gt; Qwen3-14B ≈ DS Qwen3-8 ≳ Qwen3-4B &gt; Mistral 3.2 24B &gt; Gemma3-27b-it,',
      },
      {
        path: '/1m22w76',
        name: 'Securing AI Agents with Honeypots, catch prompt injections before they bite',
      },
      {
        path: '/1m23efn',
        name: 'ARGO - A Local-First, Offline AI Agent That Puts You in Control',
      },
      {
        path: '/1m279pe',
        name: 'How to combine local OCR with LLM for document Q&amp;A?',
      },
      {
        path: '/1m285sn',
        name: 'Help Deciding Between NVIDIA H200 (2x GPUs) vs NVIDIA L40S (8x GPUs) for Serving 24b-30b LLM to 50 Concurrent Users',
      },
      {
        path: '/1m28oqc',
        name: 'Anyone here experimenting with LLMs for translation QA — not rewriting, just evaluating?',
      },
      {
        path: '/1m28r3c',
        name: 'AI devs in NYC — heads up about the RAISE Act',
      },
      {
        path: '/1m2981a',
        name: 'UTCP Golang prototype',
      },
      {
        path: '/1m2acb8',
        name: 'LoRA adapter on emails to mimic users style of writing from their emails',
      },
      {
        path: '/1m2asou',
        name: 'Kimi-k2 on lmarena',
      },
      {
        path: '/1m2bigh',
        name: 'Mistral announces Deep Research, Voice mode, multilingual reasoning and Projects for Le Chat',
      },
      {
        path: '/1m2c4hz',
        name: 'Kimi K2 Fiction.liveBench: On-par with DeepSeek V3, behind GPT-4.1',
      },
      {
        path: '/1m2c9w6',
        name: 'LLMs Playing Competitive Games Emerge Critical Reasoning: A Latest Study Showing Surprising Results',
      },
      {
        path: '/1m2cygz',
        name: 'The most insane hardware for running the biggest open-source LLMs locally',
      },
      {
        path: '/1m2d7n2',
        name: 'Is there a local tool that works like readability.js (extract article content from a webpage) but using local LLMs to do it more intelligently?',
      },
      {
        path: '/1m2e8vc',
        name: 'Do these models have vision?',
      },
      {
        path: '/1m2el95',
        name: 'Wordle-like game using your photos and on-device Small Language Models (SLMs)',
      },
      {
        path: '/1m2ex4z',
        name: '[2506.00045] ACE-Step: A Step Towards Music Generation Foundation Model',
      },
      {
        path: '/1m2fkw6',
        name: 'Batch processing for MiniCPM',
      },
      {
        path: '/1m2fmwu',
        name: 'I just had a random though',
      },
      {
        path: '/1m2furm',
        name: 'Locally Running AI model with Intel GPU',
      },
      {
        path: '/1m2g9x8',
        name: 'Exploring a local chorus/crowd mechanism or something similar to AI writing looms as a callable tool -- has anything been done in this area?',
      },
      {
        path: '/1m2gios',
        name: 'Given that powerful models like K2 are available cheaply on hosted platforms with great inference speed, are you regretting investing in hardware for LLMs?',
      },
      {
        path: '/1m2gle9',
        name: 'When will we get a local version of ChatGPT Agent?',
      },
      {
        path: '/1m2glqg',
        name: 'Wanted y’all’s thoughts on a project',
      },
      {
        path: '/1m2gnnk',
        name: 'Running an open source AI anime girl avatar',
      },
      {
        path: '/1m2gp16',
        name: 'Just a reminder that today OpenAI was going to release a SOTA open source model… until Kimi dropped.',
      },
      {
        path: '/1m2gy2t',
        name: 'GPU advice for running local LLMs',
      },
      {
        path: '/1m2hedt',
        name: 'Has anyone used DSPy for creative writing or story generation? Looking for examples',
      },
      {
        path: '/1m2hjdb',
        name: 'Apple Technical Report on their AFM Local and Server Models',
      },
      {
        path: '/1m2i0cn',
        name: 'Best Open Programming Model by Language',
      },
      {
        path: '/1m2i79e',
        name: 'Why does it do this? Why does ALL models do this?',
      },
      {
        path: '/1m2ibq0',
        name: 'Is it possible to run something like Grok\'s anime girl companion free, open source, and local?',
      },
      {
        path: '/1m2igfi',
        name: 'Migrating a semantically-anchored assistant from OpenAI to local environment (Domina): any successful examples of memory-aware agent migration?',
      },
      {
        path: '/1m2inuu',
        name: 'How to use the same context across LLMs and Agents',
      },
      {
        path: '/1m2j33z',
        name: 'Google Edge AI says it\'s created by Open AI, using Gemma-3n-E4B',
      },
      {
        path: '/1m2jluy',
        name: 'CXL Benefits for DB, AI',
      },
      {
        path: '/1m2k480',
        name: 'support for Ernie 4.5 MoE models has been merged into llama.cpp',
      },
      {
        path: '/1m2kjrm',
        name: 'Thunderbolt vs Oculink',
      },
      {
        path: '/1m2kz44',
        name: 'When to RAG',
      },
      {
        path: '/1m2lklq',
        name: 'Multimodal models that can "read" data on the monitor',
      },
      {
        path: '/1m2lq3q',
        name: 'Lab environment',
      },
      {
        path: '/1m2lsbm',
        name: '#1 model on Open ASR nvidia/canary-qwen-2.5b is available now',
      },
      {
        path: '/1m2lxq3',
        name: 'Best OCR to extract text from ECG images',
      },
      {
        path: '/1m2mdc8',
        name: 'MCP capable small local models?',
      },
      {
        path: '/1m2ml3n',
        name: 'I’ll build an expert AI for your impossible challenge and give it away free - looking for the hardest technical problem you’ve got',
      },
      {
        path: '/1m2nvpn',
        name: 'Training an LLM only on books from the 1800\'s - Update',
      },
      {
        path: '/1m2o3ht',
        name: 'Help vote for improved Vulkan performance in ik_llama.cpp',
      },
      {
        path: '/1m2osrh',
        name: 'Need recommendations for some good prompting strategies, that yield high accuracies for a text classification task (conversational English)',
      },
      {
        path: '/1m2phy1',
        name: 'Do you give your LLM terminal and code execution access?',
      },
      {
        path: '/1m2pvwt',
        name: 'LPOI: Listwise Preference Optimization for Vision-Language Models (ACL 2025 Main)',
      },
      {
        path: '/1m2r1dw',
        name: 'Lizard: An Efficient Linearization Framework for Large Language Models',
      },
      {
        path: '/1m2riey',
        name: 'Seed-X by Bytedance- LLM for multilingual translation',
      },
      {
        path: '/1m2ruo5',
        name: 'Abogen: Generate Audiobooks with Synced Subtitles (Free &amp; Open Source)',
      },
      {
        path: '/1m2rw38',
        name: 'Best Hardware Setup to Run DeepSeek-V3 670B Locally on $40K–$80K?',
      },
      {
        path: '/1m2s686',
        name: 'Amazing performance! Kimi K2 on ik_llama.cpp',
      },
      {
        path: '/1m2spkm',
        name: 'Mini PC / LLM questions for someone with a new 5080/9800x3d PC',
      },
      {
        path: '/1m2su9b',
        name: 'Local model on two different GPUs',
      },
      {
        path: '/1m2tjjc',
        name: 'Lucy: A Mobile-Capable 1.7B Reasoning Model That Rivals Jan-Nano',
      },
      {
        path: '/1m2u7i8',
        name: 'spy search cli',
      },
      {
        path: '/1m2u9n3',
        name: 'Can you recommend something I can personally do with two H100?',
      },
      {
        path: '/1m2ukka',
        name: 'UIGEN-X-8B, Hybrid Reasoning model built for direct and efficient frontend UI generation, trained on 116 tech stacks including Visual Styles',
      },
      {
        path: '/1m2uvgk',
        name: 'What can I do with an old computer?',
      },
      {
        path: '/1m2vcrx',
        name: 'mergekit LoRA extractor – how good is that?',
      },
      {
        path: '/1m2w1ez',
        name: 'Language/Framework Recommendations for CLI Chat Assistant with a Local LLM on EC2',
      },
      {
        path: '/1m2w3i3',
        name: 'Maximum parameters for this 4050 RTX 6GB vram with 32GB RAM',
      },
      {
        path: '/1m2w4qw',
        name: 'How can I benchmark different AI models?',
      },
      {
        path: '/1m2w5ge',
        name: 'Did Kimi K2 train on Claude\'s generated code? I think yes',
      },
      {
        path: '/1m2wl24',
        name: 'Local Ai image generators',
      },
      {
        path: '/1m2x30u',
        name: 'RAG at the Crossroads - Mid-2025 Reflections on AI’s Incremental Evolution | RAGFlow',
      },
      {
        path: '/1m2xdjr',
        name: 'New drop of LaToile ! Best orchestration framework !',
      },
      {
        path: '/1m2xewp',
        name: 'GPU bottleneck?',
      },
      {
        path: '/1m2xh8s',
        name: 'Run Kimi-K2 without quantization locally for under $10k?',
      },
      {
        path: '/1m2yjv8',
        name: 'voltapi',
      },
      {
        path: '/1m2yy93',
        name: 'Where\'s Mistral Nemo 2.0?',
      },
      {
        path: '/1m2z10w',
        name: 'Local LLM with SQL function support.',
      },
      {
        path: '/1m2z38k',
        name: 'In light of recent events',
      },
      {
        path: '/1m2zj5b',
        name: 'Dataset for structured (JSON) output?',
      },
      {
        path: '/1m300cf',
        name: 'Is DIY AGI Possible?',
      },
      {
        path: '/1m301uy',
        name: 'Tool calling or not, I will use anyway',
      },
      {
        path: '/1m305vc',
        name: 'What upgrade option is better with $2000 available for my configuration?',
      },
      {
        path: '/1m30ehv',
        name: 'Local Tiny Agents with AMD NPU and GPU Acceleration - Hugging Face MCP Course',
      },
      {
        path: '/1m31moj',
        name: 'What hardware to run two 3090?',
      },
      {
        path: '/1m31n2o',
        name: 'B200 idle - why?',
      },
      {
        path: '/1m31p26',
        name: 'I built an open-source Python front-end to turn local LLMs into stable, long-term TTRPG Game Masters.',
      },
      {
        path: '/1m31p47',
        name: 'How to get small models (&lt;= 4B) to have better "common sense" for use with daily conversations?',
      },
      {
        path: '/1m31z4z',
        name: 'support for EXAONE 4.0 model architecture has been merged into llama.cpp',
      },
      {
        path: '/1m321eo',
        name: 'Which SLM is best for meeting summarization?',
      },
      {
        path: '/1m327c9',
        name: 'Is OpenRouter payment safe?',
      },
      {
        path: '/1m32z28',
        name: 'Piaget, a language model for psychological and philosophical reasoning',
      },
      {
        path: '/1m33647',
        name: 'overwhelmed by ai tools in 2025 here’s a quick cheat',
      },
      {
        path: '/1m342g1',
        name: 'Local LLM system framework',
      },
      {
        path: '/1m35kib',
        name: 'Has anyone actually ran VLAs locally and how good are they?',
      },
      {
        path: '/1m3643z',
        name: 'DiffRhythm+ is coming soon',
      },
      {
        path: '/1m36d91',
        name: 'Meta says it won\'t sign Europe AI agreement, calling it an overreach that will stunt growth',
      },
      {
        path: '/1m3792k',
        name: 'What happens if I hit the context limit before the LLM is done responding?',
      },
      {
        path: '/1m37o5r',
        name: 'Drummer\'s Cydonia 24B v4 - A creative finetune of Mistral Small 3.2',
      },
      {
        path: '/1m386sc',
        name: 'Thoughts on this DeepSeekR1/Kimi K2 build',
      },
      {
        path: '/1m389gi',
        name: '32GB Mi50, but llama.cpp Vulkan sees only 16GB',
      },
      {
        path: '/1m38b25',
        name: 'What\'s a good and cheap place to host trained Lora/llamas. Is Hugging face better than doing your own Vast.ai server?',
      },
      {
        path: '/1m38mqc',
        name: 'What are the hypothetical methods for constructing and training a SUPERINTELLIGENCE model?',
      },
      {
        path: '/1m38ou1',
        name: 'Is there any limit for kimi k2 chat (free tier) ?',
      },
      {
        path: '/1m390kj',
        name: 'DGAF if it’s dumber. It’s mine.',
      },
      {
        path: '/1m394zh',
        name: 'new models from NVIDIA: OpenReasoning-Nemotron 32B/14B/7B/1.5B',
      },
      {
        path: '/1m39eyr',
        name: 'A demo space for Voxtral with transformers version of the models',
      },
      {
        path: '/1m39liw',
        name: 'Introcuding KokoroDoki a Local, Open-Source and Real-Time TTS.',
      },
      {
        path: '/1m39n48',
        name: 'Trying to run kimi-k2 on cpu only, getting about 1token / 30sec',
      },
      {
        path: '/1m39uqi',
        name: 'I made a 1000 hour NSFW TTS dataset',
      },
      {
        path: '/1m39xy5',
        name: 'Looking for feedback on this basic setup',
      },
      {
        path: '/1m3a4yu',
        name: 'Working on a game with a local llama model',
      },
      {
        path: '/1m3ai5u',
        name: 'Just recorded a walkthrough of my chatbot platform - saved characters, model selection, image gen &amp; more',
      },
      {
        path: '/1m3aixn',
        name: 'A100 Setup Recommendations',
      },
      {
        path: '/1m3ak13',
        name: 'Just recorded a walkthrough of my chatbot platform - saved characters, model selection, image gen &amp; more',
      },
      {
        path: '/1m3amtu',
        name: 'Is there any promising alternative to Transformers?',
      },
      {
        path: '/1m3bjhv',
        name: 'Hunyuan A13B &lt;/answer&gt; tag mistakes.',
      },
      {
        path: '/1m3cf4c',
        name: 'Local model for voice audio cleanup',
      },
      {
        path: '/1m3cfy9',
        name: 'Looking for help with terrible vLLM performance',
      },
      {
        path: '/1m3ct76',
        name: 'Open source OCR options for handwritten text, dates',
      },
      {
        path: '/1m3ezgz',
        name: 'Need help setting up Jan',
      },
      {
        path: '/1m3f3p7',
        name: 'Is RVC-Project the best way to train a custom voice with thousands of short high quality samples WAV files?',
      },
      {
        path: '/1m3f570',
        name: 'Is it fine to buy a *no display* issue GPU?',
      },
      {
        path: '/1m3gow1',
        name: 'How do we secure AI agents that act on their own?',
      },
      {
        path: '/1m3gr3n',
        name: 'What is the difference betwen `n_batch` and `n_ubatch`',
      },
      {
        path: '/1m3htbw',
        name: 'Here is the prompt of a conversation agent from Whatsapp (Llama 4)',
      },
      {
        path: '/1m3i9p3',
        name: 'Nvidia GTX-1080Ti Ollama review',
      },
      {
        path: '/1m3is87',
        name: 'Flash 2.5 vs Open weights',
      },
      {
        path: '/1m3iv6s',
        name: 'any idea how to open source that?',
      },
      {
        path: '/1m3jo3d',
        name: 'voltapi 3rd party api',
      },
      {
        path: '/1m3jogm',
        name: '4k local image gen',
      },
      {
        path: '/1m3kfad',
        name: 'Best reasoning model for inspecting the raw CoT?',
      },
      {
        path: '/1m3kjsm',
        name: 'Are P40s useful for 70B models',
      },
      {
        path: '/1m3kzg4',
        name: 'voltapi',
      },
      {
        path: '/1m3n89p',
        name: '(Confirmed) Kimi K2’s “modified-MIT” license does NOT apply to synthetic data/distilled models',
      },
      {
        path: '/1m3nah0',
        name: '[WTS] Perplexity Pro 1-Year Subscription — 50% OFF',
      },
      {
        path: '/1m3nb1q',
        name: 'Is it worth getting 48GB of RAM alongside my 12GB VRAM GPU ? (cheapskate upgrade)',
      },
      {
        path: '/1m3nc51',
        name: 'When Llama4 Nemotron 250B MoE?',
      },
      {
        path: '/1m3no1m',
        name: 'Built a forensic linguistics tool to verify disputed quotes using computational stylometry - tested it on the Trump/Epstein birthday letter controversy.',
      },
      {
        path: '/1m3nwlf',
        name: 'Any local models with decent tooling capabilities worth running with 3090?',
      },
      {
        path: '/1m3oma3',
        name: 'Newbie question, how do I see which 8b models are the strongest at math or coding?',
      },
      {
        path: '/1m3osbo',
        name: 'Local deep research that web searches only academic sources?',
      },
      {
        path: '/1m3pez5',
        name: 'Best Russian language conversational model?',
      },
      {
        path: '/1m3pg0s',
        name: 'What is the best small model for summarization for a low spec pc?',
      },
      {
        path: '/1m3qc1g',
        name: 'Would there be a reasoning version of Kimi K2?',
      },
      {
        path: '/1m3qejc',
        name: 'Viability of the Threadripper Platform for a General Purpose AI+Gaming Machine?',
      },
      {
        path: '/1m3qg3w',
        name: 'Escaping quantization brain damage with BF16?',
      },
      {
        path: '/1m3qpxz',
        name: 'What are the most intriguing AI papers of 2025',
      },
      {
        path: '/1m3r8jb',
        name: 'Offline STT in real time?',
      },
      {
        path: '/1m3rhy2',
        name: 'llama.cpp running too slow',
      },
      {
        path: '/1m3rnvw',
        name: 'I made the CLI for AWS S3 Vectors (Preview)',
      },
      {
        path: '/1m3ro3y',
        name: 'The strongest wills… until they see $1.99 B200s',
      },
      {
        path: '/1m3rpx1',
        name: 'external usb4 dock for two or more egpu',
      },
      {
        path: '/1m3s01i',
        name: 'Structured output help (LM Studio)',
      },
      {
        path: '/1m3sgr1',
        name: 'WordPecker: Open Source Personalized Duolingo',
      },
      {
        path: '/1m3smiz',
        name: 'Trouble running MythoMax-L2-13B-GPTQ on RunPod – Model loads but returns empty responses',
      },
      {
        path: '/1m3spek',
        name: 'I want to create a local AI Agent that can call tools. but my model call tools even for "hey"',
      },
      {
        path: '/1m3ssb2',
        name: 'ARC AGI 3 is stupid',
      },
      {
        path: '/1m3tk92',
        name: 'I love local models',
      },
      {
        path: '/1m3u4rl',
        name: '3060 12gb useful (pair with 3080 10gb?)',
      },
      {
        path: '/1m3vqom',
        name: 'A new paper from Apple shows you can tack on Multi-Token Prediction to any LLM with no loss in quality',
      },
      {
        path: '/1m3w96r',
        name: 'Looking for `113-D1631711QA-10` vBIOS for AMD MI50 32GB',
      },
      {
        path: '/1m3wnnm',
        name: 'What\'s New in Agent Leaderboard v2?',
      },
      {
        path: '/1m3wogu',
        name: 'Are there any quants of larger models 48 VRAM + 96 RAM can run, which are better than just 32B models?',
      },
      {
        path: '/1m3wslq',
        name: 'Any package that provides treesitter-based mark commands?',
      },
      {
        path: '/1m3wzm9',
        name: 'AMD 6x7900xtx + VLLM + Docker + QWEN3-235B error',
      },
      {
        path: '/1m3xbj7',
        name: 'The Final build: help me finish a CPU FIRST hybrid MOE rig',
      },
      {
        path: '/1m3xgjo',
        name: 'Dual GPU set up was surprisingly easy',
      },
      {
        path: '/1m3xp21',
        name: 'ChatSong, a lightweight, local LLM chat tool that\'s a single executable file',
      },
      {
        path: '/1m3xuqx',
        name: 'What would be a great roadmap for jumping into local LMM for a pretty newbie?',
      },
      {
        path: '/1m3y0m8',
        name: 'Motherboard with 2 PCI Express running at full 16x/16x',
      },
      {
        path: '/1m3yy5a',
        name: '🚨 Stealth Vocab Injections in llama.cpp? I Never Installed These. You? [🔥Image Proof Included]',
      },
      {
        path: '/1m3yzes',
        name: 'Localllama’s (first?) IFTA - I’ll Fine-Tune Anything',
      },
      {
        path: '/1m3zg5k',
        name: 'Best tools for local AI memory?',
      },
      {
        path: '/1m40o0v',
        name: 'Image processing limit on Groq...alternatives?',
      },
      {
        path: '/1m40yo6',
        name: 'any lovable and bolt alternative open source?',
      },
      {
        path: '/1m41bj1',
        name: 'A Request for Comments (RFC) for MCP-alternative Universal Tool Calling Protocol (UTCP) was created',
      },
      {
        path: '/1m41f79',
        name: 'Any idea when llama 4 behemoth will be released?',
      },
      {
        path: '/1m42c2q',
        name: 'Running AIs Locally without a GPU: Context Window',
      },
      {
        path: '/1m42gid',
        name: 'Build advice: Consumer AI workstation with RTX 3090 + dual MI50s for LLM inference and Stable Diffusion (~$5k budget)',
      },
      {
        path: '/1m42iio',
        name: 'GPT-4o Updated: Has It Been Nerfed?',
      },
      {
        path: '/1m42n4v',
        name: 'How to speed up the initial inference when using llama.rn (llama.cpp) wrapper on android.',
      },
      {
        path: '/1m42uel',
        name: 'Why is download options blank and why is choose an action greyed out?',
      },
      {
        path: '/1m43isp',
        name: 'Kimi K2 is less CCP censored than R1',
      },
      {
        path: '/1m43owh',
        name: 'Hear me out, an LLM which is more like a dictionary to refer syntax from, and is trained that way.',
      },
      {
        path: '/1m44tnz',
        name: 'Keras vs Transformers fine tuning',
      },
      {
        path: '/1m45po2',
        name: 'How would you write evals for chat apps running dozens of open models?',
      },
      {
        path: '/1m45sh1',
        name: 'I am really hoping the openai IMO announcement will motivate the open source community to match it',
      },
      {
        path: '/1m461jh',
        name: 'For a very specific text knowledge resource, can a local model outperform cloud models?',
      },
      {
        path: '/1m46gtn',
        name: 'Can we finally "index" a code project?',
      },
      {
        path: '/1m46w7u',
        name: 'Price performance comparison from the Gemini 2.5 Paper',
      },
      {
        path: '/1m48ffs',
        name: 'OCR and GenAI: Key Trends from H1 2025',
      },
      {
        path: '/1m48v53',
        name: 'Looking for diarization model better than Pyannote',
      },
      {
        path: '/1m49j3n',
        name: 'Maybe physics-based AI is the right approach?',
      },
      {
        path: '/1m49p7w',
        name: 'Running the 70B sized models on a budget',
      },
      {
        path: '/1m4ag6u',
        name: 'Hackers are never sleeping',
      },
      {
        path: '/1m4al6m',
        name: 'Which model is best for vision fitting 24gb vram',
      },
      {
        path: '/1m4b8ji',
        name: 'NSFW AI Local',
      },
      {
        path: '/1m4cil7',
        name: 'Getting into local ai. Photo restoration.',
      },
      {
        path: '/1m4d74b',
        name: 'I developed my own webapp to use the local templates.',
      },
      {
        path: '/1m4djo6',
        name: 'Made a local C++ utility to calculate RAM needed to fit a quantized model',
      },
      {
        path: '/1m4fs2t',
        name: 'Context Rot: How Increasing Input Tokens Impacts LLM Performance',
      },
      {
        path: '/1m4goon',
        name: 'How to prevent negative transfer when fine tuning?',
      },
      {
        path: '/1m4gx69',
        name: 'Wrote something about Rerankers - Why and How of it',
      },
      {
        path: '/1m4hfy0',
        name: 'Does LLM architecture allow for injecting some more input tokens in the middle of token generation?',
      },
      {
        path: '/1m4hhg8',
        name: 'Repo Wizard: Local AI Tool for Safe Code Changes (Inspired by Repo Prompt, Runs on Any OS)',
      },
      {
        path: '/1m4j0sa',
        name: '🆘 [Help] My Fine-Tuned Model Keeps Echoing Prompts or Giving Blank/Generic Responses',
      },
      {
        path: '/1m4j5nf',
        name: 'Best Budget SFF/Low profile gpu’s?',
      },
      {
        path: '/1m4jxo9',
        name: 'Advice on choice of model',
      },
      {
        path: '/1m4jyrq',
        name: '1 comet invite left : challenge',
      },
      {
        path: '/1m4ke3x',
        name: 'New to fine tuning',
      },
      {
        path: '/1m4ktlb',
        name: 'Looking for local provider for Kimi K2 at a better price',
      },
      {
        path: '/1m4l1tl',
        name: 'What\'s your biggest pain point running LLMs locally (especially with low VRAM GPUs)?',
      },
      {
        path: '/1m4lwcu',
        name: 'Do voice "changers / modifiers" actually exist?',
      },
      {
        path: '/1m4lxak',
        name: 'Semantic chunking using LLMs',
      },
      {
        path: '/1m4mfs8',
        name: 'Next big thing after LLMs - World Model [explained on the example of V-JEPA2]',
      },
      {
        path: '/1m4mvbe',
        name: 'Best uncensored creative writing GGUF model to run on 24 GB VRAM??',
      },
      {
        path: '/1m4n2bx',
        name: 'Qwen 3 8b/14b finetuning on 50k medical data unsloth on runpod and optimal training settings',
      },
      {
        path: '/1m4n7fh',
        name: 'AI Model Juggler automatically and transparently switches between LLM and image generation backends and models',
      },
      {
        path: '/1m4o11y',
        name: 'how do i translate 30 pages like this and still have the same architecture and not raw translated text?',
      },
      {
        path: '/1m4o37k',
        name: 'MediPhi-Instruct',
      },
      {
        path: '/1m4of82',
        name: 'What\'s the smartest tiny LLM you\'ve actually used?',
      },
      {
        path: '/1m4ojg7',
        name: 'Any way to serve images and text from a single GPU?',
      },
      {
        path: '/1m4op39',
        name: 'Small LLM capable to describe images in greater details.',
      },
      {
        path: '/1m4p75g',
        name: 'which frontend supports diffusion model now? since llama.cpp has supported that.',
      },
      {
        path: '/1m4pq8q',
        name: 'Why AI feels inconsistent (and most people don\'t understand what\'s actually happening)',
      },
      {
        path: '/1m4q4dx',
        name: 'Any Proper high quality Voice cloning for TTS tool?',
      },
      {
        path: '/1m4qdo6',
        name: 'which is the best tiny vlm to recognize nsfw pics?',
      },
      {
        path: '/1m4qzmt',
        name: 'Ideal setup for long context window fine-tuning?',
      },
      {
        path: '/1m4r4j1',
        name: 'Open source is humanity’s last hope!',
      },
      {
        path: '/1m4r7t5',
        name: 'How to get 3b models to squeeze onto 2gig Nvidia GPU?',
      },
      {
        path: '/1m4rbqv',
        name: 'What is the latest version of ollama?',
      },
      {
        path: '/1m4rmd5',
        name: 'Anyone else tracking their local LLMs’ performance? I built a tool to make it easier',
      },
      {
        path: '/1m4s9mt',
        name: 'I\'m sorry Zuck please don\'t leave us we were just having fun',
      },
      {
        path: '/1m4s9nn',
        name: 'Chess Llama - Training a tiny Llama model to play chess',
      },
      {
        path: '/1m4sdsg',
        name: 'I built a desktop tool to auto-organize files using local LLMs (open source, cross-platform)',
      },
      {
        path: '/1m4swld',
        name: 'Smaller, Faster, Smarter: Why MoR Might Replace Transformers | Front Page',
      },
      {
        path: '/1m4t22z',
        name: 'What GPU is Moonshot Kimi K2 running on?',
      },
      {
        path: '/1m4t85h',
        name: 'Is there a way to use Ollama with vscode copilot in agent mode?',
      },
      {
        path: '/1m4ta0f',
        name: 'Where is DeepsSeek R2?',
      },
      {
        path: '/1m4tll3',
        name: 'Tools for LM Studio?',
      },
      {
        path: '/1m4u7j6',
        name: 'What\'s the most crackhead garbage local LLM setup you can think of?',
      },
      {
        path: '/1m4u914',
        name: 'Decentralized LLM inference from your terminal, verified on-chain',
      },
      {
        path: '/1m4ukgp',
        name: 'Local LLM file access',
      },
      {
        path: '/1m4vcnz',
        name: 'Best Small LLMs for Tool Calling?',
      },
      {
        path: '/1m4vk88',
        name: 'Anyone interested in adding their fine-tuned / open source models to this benchmark?',
      },
      {
        path: '/1m4vw29',
        name: 'Ikllamacpp repository gone, or it is only me?',
      },
      {
        path: '/1m4y3cj',
        name: 'Fine-tuned her the perfect local model. Still got API’d 💔',
      },
      {
        path: '/1m4yo0g',
        name: 'DiffRhythm 1.2 music generation model produces "Avicii vs Nicky Romero - I Could Be the One" nearly verbatim',
      },
      {
        path: '/1m4z64o',
        name: 'Why are LLMs not able to give an estimate on their own confidence or say that they are not sure about something?',
      },
      {
        path: '/1m4zc1c',
        name: 'UTCP Request For Comments',
      },
      {
        path: '/1m4zj9q',
        name: 'Replacing DevOps with agents',
      },
      {
        path: '/1m4zogr',
        name: 'Offloading layers',
      },
      {
        path: '/1m4zpqt',
        name: 'Is there a reason to prefer Nvidia over AMD for programming use cases?',
      },
      {
        path: '/1m4zx8s',
        name: 'What do we think of Devstral then?',
      },
      {
        path: '/1m4zyv1',
        name: 'Questions about AI for translation',
      },
      {
        path: '/1m52b7l',
        name: 'Unstructured financial data for Lama3B',
      },
      {
        path: '/1m52e50',
        name: 'FULL Orchids.app System Prompt and Tools',
      },
      {
        path: '/1m52h10',
        name: 'I posted 3 weeks ago about training my own model. Progress report.',
      },
      {
        path: '/1m52h8x',
        name: 'Best RAG pipeline for math-heavy documents?',
      },
      {
        path: '/1m52r9e',
        name: 'U.S. GPU compute available',
      },
      {
        path: '/1m52sj5',
        name: 'What are the biggest challenges in selling automations (and finding someone to implement them)? Looking for real insights from everyone!',
      },
      {
        path: '/1m54wfh',
        name: 'Need a totally open, free AI for deep-dive research across global sources',
      },
      {
        path: '/1m5586n',
        name: 'Best novel writing workflow?',
      },
      {
        path: '/1m55rrt',
        name: 'How fast is gemma 3 27b on an H100? how many tokens per second can I expect?',
      },
      {
        path: '/1m563lh',
        name: 'Help with Finetuning Phi4-Mini',
      },
      {
        path: '/1m566jg',
        name: 'Hitting Data Walls with Local LLM Projects? Check Out This Curated Dataset Resource!',
      },
      {
        path: '/1m568j8',
        name: '[2507.09850] The Challenge of Teaching Reasoning to LLMs Without RL or Distillation',
      },
      {
        path: '/1m56x5u',
        name: 'A solution to deploy your LLM agent with one click',
      },
      {
        path: '/1m56z4m',
        name: 'why are there quite different quant strategies of bartowski and unsloth on MoE?',
      },
      {
        path: '/1m576x6',
        name: 'A question about running Ollama locally for NSFW/ERP',
      },
      {
        path: '/1m57icy',
        name: 'ASCII art and LocalLLMa',
      },
      {
        path: '/1m57iep',
        name: 'Pseudo RAID and Kimi-K2',
      },
      {
        path: '/1m57utu',
        name: 'Weird ollama pull behaviour',
      },
      {
        path: '/1m5827d',
        name: 'Which LLMs, tools, or research have been overlooked or deserve more attention?',
      },
      {
        path: '/1m58695',
        name: 'Which local 100B+ heavy weight models are your favorite and why?',
      },
      {
        path: '/1m58ohn',
        name: 'Model to retrieve information from Knowledge.',
      },
      {
        path: '/1m58qf3',
        name: 'First time using QLoRa results in gibberish',
      },
      {
        path: '/1m59xzv',
        name: 'What makes a model ethical?',
      },
      {
        path: '/1m5bccx',
        name: 'How\'s your experimentation with MCP going?',
      },
      {
        path: '/1m5ckr0',
        name: 'ONNX or GGUF',
      },
      {
        path: '/1m5cr11',
        name: 'What model shall i run?',
      },
      {
        path: '/1m5d2cv',
        name: 'GGUF on Android Studio',
      },
      {
        path: '/1m5d66p',
        name: 'ik_llama.cpp 404: temporary repo up to commit d44c2d3',
      },
      {
        path: '/1m5dcqj',
        name: 'What consumer hardware do I need to run Kimi-K2',
      },
      {
        path: '/1m5djms',
        name: 'What do you think of self-hosting a small LLM on a VPS or abstracted container, calling it externally for simple AI agents/API calls? Cheaper or more expensive than bigger models?',
      },
      {
        path: '/1m5dq1e',
        name: 'How does LLMs get more creative?',
      },
      {
        path: '/1m5eulr',
        name: 'Can any tool dub an entire Movie into another language?',
      },
      {
        path: '/1m5ew98',
        name: 'Offline Coding Assistant',
      },
      {
        path: '/1m5fcdo',
        name: 'NVIDIA Brings Reasoning Models to Consumers Ranging from 1.5B to 32B Parameters',
      },
      {
        path: '/1m5ff1k',
        name: 'Ryzen AI HX 370 or Mx Pro for travellers',
      },
      {
        path: '/1m5fg2y',
        name: 'HOWTO summarize on 16GB VRAM with 64k cache?',
      },
      {
        path: '/1m5fkts',
        name: 'My (practical) dual 3090 setup for local inference',
      },
      {
        path: '/1m5fmlp',
        name: 'Rockchip unveils RK182X LLM co-processor: Runs Qwen 2.5 7B at 50TPS decode, 800TPS prompt processing',
      },
      {
        path: '/1m5fwpz',
        name: 'Is it possible to have a specialized local llm perform at the level of cloud based models?',
      },
      {
        path: '/1m5gcvl',
        name: 'What programming language do AI Models have the best data on',
      },
      {
        path: '/1m5ghs0',
        name: '72$ for Instinct MI50 16GB',
      },
      {
        path: '/1m5gl6e',
        name: 'Chat webinterface for small company',
      },
      {
        path: '/1m5gmfr',
        name: 'What are people fine-tuning their models for?',
      },
      {
        path: '/1m5gnfm',
        name: 'Which uncensored model that supports MCP can you recommend?',
      },
      {
        path: '/1m5gwzs',
        name: 'I extracted the system prompts from closed-source tools like Cursor &amp; v0. The repo just hit 70k stars.',
      },
      {
        path: '/1m5h2td',
        name: 'How far are we from *convenient* local models supremacy?',
      },
      {
        path: '/1m5hksu',
        name: 'What if Meta really has the best AI?  Hear me out.',
      },
      {
        path: '/1m5ijhw',
        name: 'How does llama 4 perform within 8192 tokens?',
      },
      {
        path: '/1m5iymb',
        name: 'The reason why local models are better/necessary.',
      },
      {
        path: '/1m5jr1v',
        name: '[New Architecture] Hierarchical Reasoning Model',
      },
      {
        path: '/1m5jr4s',
        name: 'MacBook Air M3 24 GB Ram best LOCAL LLM for email drafting, Reddit posts, and light coding?',
      },
      {
        path: '/1m5k5di',
        name: 'What is the cheapest way to run unsloth/Kimi-K2-Instruct-GGUF BF16 in the cloud?',
      },
      {
        path: '/1m5k88s',
        name: 'As the creators of react-native-executorch, we built an open-source app for testing ExecuTorch LLMs on mobile.',
      },
      {
        path: '/1m5kmxl',
        name: 'What free TTS is the best to clone my voice for reading large portions of text?',
      },
      {
        path: '/1m5kqk8',
        name: 'FULL Windsurf System Prompt and Tools [UPDATED, Wave 11]',
      },
      {
        path: '/1m5l0v3',
        name: 'Common folder for model storage?',
      },
      {
        path: '/1m5l52r',
        name: 'Office hours for cloud GPU',
      },
      {
        path: '/1m5l8e4',
        name: 'Seeking the newest coding models, especially for SQL?',
      },
      {
        path: '/1m5lf6l',
        name: 'Chatterbox tts microphone results',
      },
      {
        path: '/1m5lg47',
        name: 'Best Local Models Per Budget Per Use Case',
      },
      {
        path: '/1m5lgtr',
        name: 'UIGEN-X 8B supports React Headless, Flutter, React Native, Static Site Generators, Tauri, Vue, Gradio/Python, Tailwind, and prompt-based design. GGUF/GPTQ/MLX Available',
      },
      {
        path: '/1m5lwo6',
        name: 'Is there a better local TTS than Kokoro, even if its slower to generate?',
      },
      {
        path: '/1m5m1et',
        name: 'SmolLM3-3B training logs and intermediate checkpoints',
      },
      {
        path: '/1m5mjoc',
        name: 'Looking for Open Source STT Tool to Detect Script Reading Errors in Real Time',
      },
      {
        path: '/1m5mms1',
        name: 'mistral-small-3.2 OCR accuracy way too bad with llama.cpp compared to ollama?',
      },
      {
        path: '/1m5mrmy',
        name: 'Help with choosing model to create bot that will talk like me.',
      },
      {
        path: '/1m5mzxt',
        name: 'DMOSpeech 2: 2x faster + higher-quality F5-TTS from the author of StyleTTS 2',
      },
      {
        path: '/1m5n148',
        name: 'Imminent release from Qwen tonight',
      },
      {
        path: '/1m5n6lq',
        name: 'EU is being left behinde and it sucks!',
      },
      {
        path: '/1m5ndsf',
        name: 'Heavily promoting the dishwashing benchmark',
      },
      {
        path: '/1m5nt6s',
        name: 'I want to start with local AI',
      },
      {
        path: '/1m5ojym',
        name: 'I messed up my brother\'s Llama AI workstation.. looking for advice',
      },
      {
        path: '/1m5okz7',
        name: 'Running vllm on Nvidia 5090',
      },
      {
        path: '/1m5or7n',
        name: 'Facing some problems with Docling parser',
      },
      {
        path: '/1m5owi8',
        name: 'Qwen3-235B-A22B-2507 Released!',
      },
      {
        path: '/1m5owur',
        name: 'Meet the Agent: The Brain Behind Gemini CLI',
      },
      {
        path: '/1m5ox8z',
        name: 'Qwen3-235B-A22B-2507',
      },
      {
        path: '/1m5oxyp',
        name: 'Qwen released Qwen3-235B-A22B-2507!',
      },
      {
        path: '/1m5oyf5',
        name: 'Qwen/Qwen3-235B-A22B-Instruct-2507 · Hugging Face',
      },
      {
        path: '/1m5oz0h',
        name: 'Qwen3-235B-A22B-2507!',
      },
      {
        path: '/1m5p69p',
        name: 'Do not sleep on ERNIE-4.5-300B-A47B especially if you can\'t Kimi K2',
      },
      {
        path: '/1m5pbj0',
        name: 'Qwen/Qwen3-235B-A22B-Instruct-2507 · Hugging Face',
      },
      {
        path: '/1m5pbxo',
        name: 'RTX 5090 not recognized on Ubuntu — anyone else figure this out?',
      },
      {
        path: '/1m5pig4',
        name: 'Why not build instruct models that give you straight answers with no positivity bias and no bs?',
      },
      {
        path: '/1m5pmox',
        name: 'Looking to possibly replace my ChatGPT subscription with running a local LLM. What local models match/rival 4o?',
      },
      {
        path: '/1m5psqj',
        name: 'Before &amp; after: redesigned the character catalog UI. What do you think?',
      },
      {
        path: '/1m5q35o',
        name: 'Interesting new blog post from Lemonade team',
      },
      {
        path: '/1m5qflo',
        name: 'Using ollama and claude to control Neu',
      },
      {
        path: '/1m5qn1n',
        name: 'Qwen3 insane SimpleQA',
      },
      {
        path: '/1m5qsqx',
        name: 'CUDA-L1: Improving CUDA Optimization via Contrastive Reinforcement Learning',
      },
      {
        path: '/1m5r9ss',
        name: 'Exhausted man defeats AI model in world coding championship',
      },
      {
        path: '/1m5ro7s',
        name: 'RTX 5090 (32GB VRAM) - Full Fine-Tuning: What Can I Expect?',
      },
      {
        path: '/1m5s6d1',
        name: 'AI 395+ 64GB vs 128GB?',
      },
      {
        path: '/1m5th6s',
        name: 'Why are base non-finetuned models so bad?',
      },
      {
        path: '/1m5uhwc',
        name: '[Project Share] Built a 4K Instruction Dataset Based on SEC 6-K/8-K Filings (JSONL format, QLoRA-friendly)',
      },
      {
        path: '/1m5uu0t',
        name: 'Strong case for a 512GB Mac Studio?',
      },
      {
        path: '/1m5v7if',
        name: 'Im trying to make my own agent with openhands but I keep running into the same error.',
      },
      {
        path: '/1m5vyku',
        name: 'Now that Google and openai have both announced gold at the IMO 2025, how long until an open source model can match that?',
      },
      {
        path: '/1m5w3kj',
        name: 'How long until we have an alternative to LM studio that\'s just as good?',
      },
      {
        path: '/1m5w8yl',
        name: 'What can I run on my 5090?',
      },
      {
        path: '/1m5x04m',
        name: 'What is the top model for coding?',
      },
      {
        path: '/1m5y9wj',
        name: 'The Observer Desktop App is Here! + Discord/Pushover Notifications!!',
      },
      {
        path: '/1m5ynit',
        name: 'We asked Qwen3-235B-A22-Instruct-2507 for advice on how best to quantize itself to 4-bits for vLLM. Anyone who understands these things care to comment on its recommendations?',
      },
      {
        path: '/1m60ahf',
        name: 'Used A100 40GB just dropped below $2000, for those who care with caveat',
      },
      {
        path: '/1m6172l',
        name: 'New qwen tested on Fiction.liveBench',
      },
      {
        path: '/1m61u94',
        name: 'OmniSVG weights released',
      },
      {
        path: '/1m62vbw',
        name: 'Running LLMs against a sandbox airport to see if they can make the correct decisions in real time',
      },
      {
        path: '/1m641zg',
        name: 'MegaTTS 3 Voice Cloning is Here',
      },
      {
        path: '/1m650ow',
        name: 'If Qwen3-235B-A22B-2507 can\'t think, why does it think when the thinking button is on?',
      },
      {
        path: '/1m65iga',
        name: 'Frankenserver for sale at a steep discount. 2x96GB GH200 converted from liquid- to air-cooled.',
      },
      {
        path: '/1m66qks',
        name: 'Private Eval result of Qwen3-235B-A22B-Instruct-2507',
      },
      {
        path: '/1m66v6q',
        name: 'stop wasting credits just stack playground and domoai',
      },
      {
        path: '/1m66zhs',
        name: 'Is this project feasible for an LLM novice? (Tutor chatbot for primary school student)',
      },
      {
        path: '/1m6741z',
        name: 'What Speaker Diarization tools should I look into?',
      },
      {
        path: '/1m67a12',
        name: 'Is GPUStack the Cluster Version of Ollama? Comparison + Alternatives',
      },
      {
        path: '/1m67e6a',
        name: 'Breaking: Small Team Open-Sources AI Agent "Crux" That Achieves Gold-Level Performance on USAMO Benchmarks Using o4-mini – Rivaling OpenAI and Google!',
      },
      {
        path: '/1m67zde',
        name: 'AI should just be open-source',
      },
      {
        path: '/1m68elw',
        name: 'Fine-Tuning Multilingual Embedding Models for Industrial RAG System',
      },
      {
        path: '/1m68tse',
        name: 'Model to process image-of-text PDFs?',
      },
      {
        path: '/1m68yvl',
        name: 'What do you guys use for Spellcheck?',
      },
      {
        path: '/1m69m60',
        name: 'How to apply a custom dataset',
      },
      {
        path: '/1m69oyb',
        name: 'I spent a late night with an AI designing a way to give it a persistent, verifiable memory. I call it the "Genesis Protocol."',
      },
      {
        path: '/1m69qs3',
        name: '🧠 How are you managing MCP servers across different AI apps (Claude, GPTs, Gemini etc.)?',
      },
      {
        path: '/1m69sb6',
        name: 'In Qwen3-235B-A22B-Instruct-2507-UD-Q4 (unsloth) I\'m seeing some "but wait" and related ones (like kinda questioning and answering itself), were the model seems to "think" (even when is a non-thinking model and I haven\'t setup any system prompt), have you seen something similar?',
      },
      {
        path: '/1m69th7',
        name: 'Truly open LLMs',
      },
      {
        path: '/1m6a5xb',
        name: 'Cloudflare Pay Per Crawl is Going to Decimate Local LLMs . A lot of AI Abilities are going to end up behind this paywall . Am i Overthinking This ?',
      },
      {
        path: '/1m6ahsu',
        name: 'Thinking about updating Llama 3.3-70B',
      },
      {
        path: '/1m6akeo',
        name: 'Would using PCIE NVME in raid 0 for swap work to run larger models that don\'t fit into RAM?',
      },
      {
        path: '/1m6b151',
        name: 'Updated Strix Halo (Ryzen AI Max+ 395) LLM Benchmark Results',
      },
      {
        path: '/1m6bddm',
        name: 'AMD\'s Strix Halo "Ryzen AI MAX" APUs Come To DIY PC Builders With New MoDT "Mini-ITX" Motherboards, Equipped With Up To 128 GB of LPDDR5X Memory',
      },
      {
        path: '/1m6ccmr',
        name: 'VEO 3 is f**k expensive',
      },
      {
        path: '/1m6cfou',
        name: 'Chatterbox CUDA and PyTorch problem',
      },
      {
        path: '/1m6cfzi',
        name: 'The ik_llama.cpp repository is back! \o/',
      },
      {
        path: '/1m6ct7u',
        name: 'Qwen3 235B-A22B 2507 :: Q3_K_L :: One shot HTML game :: 4090 + 128GB DDR5 @6000',
      },
      {
        path: '/1m6d6um',
        name: 'What are the use cases for 1.5B model?',
      },
      {
        path: '/1m6dco7',
        name: 'Jamba 1.7 is now available on Kaggle',
      },
      {
        path: '/1m6dvhi',
        name: 'Best opensource SLM/ lightweight llm for code generation',
      },
      {
        path: '/1m6eggp',
        name: 'Considering 5xMI50 for Qwen 3 235b',
      },
      {
        path: '/1m6fvd5',
        name: 'Looking for LLMs Study Buddy',
      },
      {
        path: '/1m6gq8e',
        name: 'I wrote 2000 LLM test cases so you don\'t have to',
      },
      {
        path: '/1m6gwgl',
        name: 'Am I making a mistake building my RAG agent with Langchain or LlamaIndex?',
      },
      {
        path: '/1m6h67y',
        name: 'Epyc Qwen3 235B Q8 speed?',
      },
      {
        path: '/1m6hck1',
        name: 'Thinking about "owhisper"',
      },
      {
        path: '/1m6hqi8',
        name: '5090 batched inference performance?',
      },
      {
        path: '/1m6ht1r',
        name: 'Leaderboard for function calling models?',
      },
      {
        path: '/1m6hxnt',
        name: 'TOKENS BURNED! Am I the only one who would rather have a throttled down cursor rather than have it go on token vacation for 20 day!?',
      },
      {
        path: '/1m6hzf0',
        name: '+24GB VRAM with low electric consumption',
      },
      {
        path: '/1m6izt7',
        name: 'Project: Print AI Replies on a Ticket Printer',
      },
      {
        path: '/1m6j69n',
        name: '~75k budget. Best bang for the buck?',
      },
      {
        path: '/1m6jdyz',
        name: '[Help/Suggestion Wanted] Hindi to Hinglish and Spell correction',
      },
      {
        path: '/1m6khbt',
        name: 'llama.cpp on ROCm only running at 10 tokens/sec, GPU at 1% util. What am I missing?',
      },
      {
        path: '/1m6knhw',
        name: 'Entry GPU options - 5060 8GB enough to play with?',
      },
      {
        path: '/1m6kre5',
        name: 'Shared subscription/token with Team or family',
      },
      {
        path: '/1m6ldkd',
        name: '"Failed to Send Message" from qwen/qwen3-235b-a22b-2507 Q3_K_L',
      },
      {
        path: '/1m6lf9s',
        name: 'Could this be Deepseek?',
      },
      {
        path: '/1m6m0f7',
        name: 'A new LLM benchmark for markets, supply chains, and trading: BAZAAR. Agents must understand supply, demand, and risk, and learn to bid strategically.',
      },
      {
        path: '/1m6medy',
        name: 'Qwen3-Coder is imminent',
      },
      {
        path: '/1m6mew9',
        name: 'Qwen3- Coder 👀',
      },
      {
        path: '/1m6mfic',
        name: 'Qwen3-Coder Available on chat.qwen.ai',
      },
      {
        path: '/1m6mlbk',
        name: 'Qwen3-Coder-480B-A35B-Instruct',
      },
      {
        path: '/1m6nbb7',
        name: 'Best Models for Arabic tts and audio enhancement?',
      },
      {
        path: '/1m6nvhs',
        name: 'What is the cheapest option for hosting llama cpp with Qwen Coder at Q8?',
      },
      {
        path: '/1m6nxh2',
        name: 'Everyone brace up for qwen !!',
      },
      {
        path: '/1m6ny2q',
        name: 'Qwen3-Coder Web Development',
      },
      {
        path: '/1m6ocfd',
        name: 'The LLM for M4 Max 128GB: Unsloth Qwen3-235B-A22B-Instruct-2507 Q3 K XL for Ollama',
      },
      {
        path: '/1m6oqxw',
        name: 'embedding model giving same embeddings regardless of input text?',
      },
      {
        path: '/1m6orbr',
        name: 'Anyone here who has been able to reproduce their results yet?',
      },
      {
        path: '/1m6pjpx',
        name: 'DeepSeek not available at LLama API?',
      },
      {
        path: '/1m6pw0o',
        name: 'Digital twins that attend meetings for you. Dystopia or soon reality?',
      },
      {
        path: '/1m6q0oh',
        name: 'Best android local llm apk with gpu acceleration',
      },
      {
        path: '/1m6qb6p',
        name: 'Rag vs fine-tuning.',
      },
      {
        path: '/1m6qc8c',
        name: 'Qwen/Qwen3-Coder-480B-A35B-Instruct',
      },
      {
        path: '/1m6qdet',
        name: 'Qwen3-Coder is here!',
      },
      {
        path: '/1m6qixu',
        name: 'Qwen out here releasing models like it’s a Costco sample table',
      },
      {
        path: '/1m6qkse',
        name: 'It\'s here guys and qwen nailed it !!',
      },
      {
        path: '/1m6qltu',
        name: 'So I tried that "YourWaifus" AI app... and I need a sanity check.',
      },
      {
        path: '/1m6qnpq',
        name: 'Qwen3 coder will be in multiple sizes',
      },
      {
        path: '/1m6rsym',
        name: 'Qwen Code: A command-line AI workflow tool adapted from Gemini CLI, optimized for Qwen3-Coder models',
      },
      {
        path: '/1m6skm6',
        name: 'llama.cpp is unusable for real work',
      },
      {
        path: '/1m6tbhm',
        name: 'What does the _K _S _M _L mean behind the quantization of a model?',
      },
      {
        path: '/1m6tf9v',
        name: 'M4 Pro Owners: I Want Your Biased Hot-Takes – DeepSeek-Coder V3-Lite 33B vs Qwen3-32B-Instruct-MoE on a 48 GB MacBook Pro',
      },
      {
        path: '/1m6u0gt',
        name: 'Unsloth quants already starting to roll out for Qwen3-Coder',
      },
      {
        path: '/1m6u3kd',
        name: 'Qwen3-Coder is available on OpenRouter',
      },
      {
        path: '/1m6ucc0',
        name: 'Has anyone here worked with LLMs that can read images? Were you able to deploy it on a VPS?',
      },
      {
        path: '/1m6ufm4',
        name: 'Has anyone tried Hierarchical Reasoning Models yet?',
      },
      {
        path: '/1m6uq8q',
        name: 'I stopped typing. Now I just use a hotkey. I built Agent-CLI to make it possible.',
      },
      {
        path: '/1m6v9yq',
        name: 'I own a few Quadro’s, can I build an AI with these?',
      },
      {
        path: '/1m6vbds',
        name: 'Just tried higgsaudio v2: a new multilingual TTS model, pretty impressed',
      },
      {
        path: '/1m6vj8o',
        name: 'How are people staging AI training datasets from NVMe → DDR5 → GPU VRAM for fine-tuning on RTX 5090s?',
      },
      {
        path: '/1m6wb5o',
        name: 'Recent Qwen Benchmark Scores are Questionable',
      },
      {
        path: '/1m6wgs7',
        name: 'Qwen3-Coder Unsloth dynamic GGUFs',
      },
      {
        path: '/1m6wq77',
        name: 'Added Qwen3-Coder to my VsCode extension',
      },
      {
        path: '/1m6xbru',
        name: 'How does Gemini 2.5 Pro natively support 1M tokens of context? Is it using YaRN, or some kind of disguised chunking?',
      },
      {
        path: '/1m6xbs7',
        name: 'I\'m looking for an Uncensored LLM to produce extremely spicy prompts - What would you recommend?',
      },
      {
        path: '/1m6xhgg',
        name: 'How to play a character as user with Tavern, Kobold, llama 3.2b?',
      },
      {
        path: '/1m6xrfj',
        name: 'Injecting custom embeddings into LLaMA 3.2 GGUF model',
      },
      {
        path: '/1m6xt2d',
        name: 'How to prevent bad/illegal word queries',
      },
      {
        path: '/1m6y6c7',
        name: 'Is it just me or does building local multi-agent LLM systems kind of suck right now?',
      },
      {
        path: '/1m6zce0',
        name: '[Research] Thought Anchors: Understanding How Qwen3-0.6B vs DeepSeek-R1-Distill-1.5B Actually Reason - Different Cognitive Architectures Revealed',
      },
      {
        path: '/1m6zdx4',
        name: 'Consumer usecase for on-device AI - an Android app to detect scams',
      },
      {
        path: '/1m6zkmm',
        name: '[Github Repo] - Use Qwen3 coder or any other LLM provider with Claude Code',
      },
      {
        path: '/1m6ztb2',
        name: 'UI/UX benchmark update 7/22: Newest Qwen models added, Qwen3 takes the lead in terms of win rate (though still early)',
      },
      {
        path: '/1m6zz1v',
        name: 'Kimi K2 vs Qwen3 Coder 480B',
      },
      {
        path: '/1m704yl',
        name: 'Noob: In theory what set up would you need to run the best LLMs locally at the same speed as the public LLM?',
      },
      {
        path: '/1m70n7q',
        name: 'Alibaba’s upgraded Qwen3 235B-A22B 2507 is now the most intelligent non-reasoning model.',
      },
      {
        path: '/1m70ra1',
        name: 'MCPEval: Automatic MCP-based Deep Evaluation for AI Agent Models',
      },
      {
        path: '/1m71f20',
        name: 'unsloth/Qwen3-Coder-480B-A35B-Instruct-GGUF · Hugging Face',
      },
      {
        path: '/1m71oqv',
        name: 'How do you solve this dilemma?',
      },
      {
        path: '/1m72d5y',
        name: '🔓 I built Hearth-UI — A fully-featured desktop app for chatting with local LLMs (Ollama-ready, attachments, themes, markdown, and more)',
      },
      {
        path: '/1m73n0t',
        name: 'Anyone seen safety regressions after fine-tuning LLaMA or Mistral on clean data?',
      },
      {
        path: '/1m73ohk',
        name: 'Has anyone noticed that the gemma3n model doesn\'t look like a gemma, but more like a gemini mini?',
      },
      {
        path: '/1m73q8n',
        name: 'Need Help - Local LLM &amp; Lots of Files! (Privacy Concerns)',
      },
      {
        path: '/1m73yrb',
        name: 'Qwen 3 Coder is actually pretty decent in my testing',
      },
      {
        path: '/1m741so',
        name: 'What do you do to keep up to date on new research, trends and more?',
      },
      {
        path: '/1m74b87',
        name: 'Qwen3-Coder is VERY expensive maybe one day You can run it locally.',
      },
      {
        path: '/1m7503r',
        name: 'Why do many papers skip hyperparameter search?',
      },
      {
        path: '/1m75afx',
        name: 'Get your hands on Nvidia GB200 NVL72 for free!',
      },
      {
        path: '/1m75bwe',
        name: 'Llama?',
      },
      {
        path: '/1m75i0b',
        name: 'Getting a model run with vLLM and 7900 XTX',
      },
      {
        path: '/1m760rq',
        name: 'ADHD &amp; LLM development is a risky cocktail',
      },
      {
        path: '/1m76df6',
        name: 'What do new architectures offer and what are their limits?',
      },
      {
        path: '/1m775h2',
        name: 'Building a p2p inference engine in rust and hugging face',
      },
      {
        path: '/1m77az5',
        name: 'Which quantization approach is the way to go? (llama.cpp)',
      },
      {
        path: '/1m78kyc',
        name: 'Local cross-platform speech-to-speech and real-time captioning with OpenAI Whisper, Vulkan GPU acceleration and more',
      },
      {
        path: '/1m79sp9',
        name: 'Is there a way to use qwen 3 coder inside vs code or cursor',
      },
      {
        path: '/1m7admn',
        name: 'I guess we know what it was trained with.',
      },
      {
        path: '/1m7aefj',
        name: 'Struggling with NLP classification pipeline for web content – seeking advice',
      },
      {
        path: '/1m7av4q',
        name: 'How are people extracting system prompts?',
      },
      {
        path: '/1m7bd41',
        name: 'How to acutally use gpt-sovits?',
      },
      {
        path: '/1m7brg9',
        name: 'Throughput: Input vs Output. Looking for help...',
      },
      {
        path: '/1m7c0xu',
        name: 'GitHub - Website-Crawler: Extract data from websites in LLM ready JSON or CSV format. Crawl or Scrape entire website with Website Crawler',
      },
      {
        path: '/1m7c2gr',
        name: 'Kimi K2 vs Sonnet 4 for Agentic Coding (Tested on Claude Code)',
      },
      {
        path: '/1m7c3ir',
        name: 'Anyone wanna give Kimi-K2-Instruct a try?',
      },
      {
        path: '/1m7c7yz',
        name: 'Can someone point me towards LLM diagram generation research?',
      },
      {
        path: '/1m7cagw',
        name: 'What is the best hardware for running the biggest models?',
      },
      {
        path: '/1m7ci35',
        name: '[Research] We just released the first paper and dataset documenting symbolic emergence in LLMs',
      },
      {
        path: '/1m7ci3s',
        name: 'HOWTO: Use Qwen3-Coder (or any other LLM) with Claude Code (via LiteLLM)',
      },
      {
        path: '/1m7cklb',
        name: 'beginner with llama3, I cannot get results I want',
      },
      {
        path: '/1m7d55o',
        name: 'Anyone using maestrale-chat-v0.4-beta?',
      },
      {
        path: '/1m7d6d3',
        name: 'OpenAI upcoming opensource will be beast at coding and its small',
      },
      {
        path: '/1m7d9d9',
        name: 'Where is Japan?',
      },
      {
        path: '/1m7dmy2',
        name: 'Encouragement of "Open-Source and Open-Weight AI" is now the official policy of the U.S. government.',
      },
      {
        path: '/1m7dtpm',
        name: 'Local llm build, 144gb vram monster',
      },
      {
        path: '/1m7e5pi',
        name: 'Qwen 3 Coder just handled a full ACL system like a champ — OSS finally catching up',
      },
      {
        path: '/1m7e5uc',
        name: '[AutoBE] We\'re making AI-friendly Compilers for Vibe Coding (open source)',
      },
      {
        path: '/1m7e8d0',
        name: 'Should I do finetuning on Gemini or on open source models?',
      },
      {
        path: '/1m7f43h',
        name: 'Polished UI for prompt setup &amp; details',
      },
      {
        path: '/1m7fb78',
        name: 'nvidia/audio-flamingo-3',
      },
      {
        path: '/1m7fwhl',
        name: 'Google DeepMind release Mixture-of-Recursions',
      },
      {
        path: '/1m7gv2d',
        name: 'struggling with image extraction for pdf parsing',
      },
      {
        path: '/1m7gwuo',
        name: 'Continued pretraining of Llama 3-8b on a new language',
      },
      {
        path: '/1m7hq4w',
        name: 'Best small to medium size Local LLM Orchestrator for calling Tools, managing STT, TTS, screen OCR, and with passing heavy lift calls to Claude Code SDK, running on Macbook Pro.',
      },
      {
        path: '/1m7hvxz',
        name: 'Finetuning for code generation',
      },
      {
        path: '/1m7i537',
        name: 'Spice things up by switching roles?',
      },
      {
        path: '/1m7i9pl',
        name: 'Why is my external RX 7600M XT (GPD G1) slow by comparison?',
      },
      {
        path: '/1m7ifsg',
        name: 'RTX 6000 Ada or A100, which is better for inference?',
      },
      {
        path: '/1m7ijtf',
        name: 'Actually good Agentic coding tools',
      },
      {
        path: '/1m7iui2',
        name: 'It’s time to lead guys',
      },
      {
        path: '/1m7jvba',
        name: 'Open-source and/or Local AI Meeting Transcription that works for you?',
      },
      {
        path: '/1m7jybm',
        name: 'AI background for products',
      },
      {
        path: '/1m7jzjg',
        name: 'This is what I call crazy.',
      },
      {
        path: '/1m7k4ix',
        name: 'Google has shared the system prompt that got Gemini 2.5 Pro IMO 2025 Gold Medal 🏅',
      },
      {
        path: '/1m7k50u',
        name: 'Recommended Settings ( Temperature, TopK, TopP, MinP, etc., ) for All models',
      },
      {
        path: '/1m7kbeq',
        name: 'Demis Hassabis @ Lex Fridman Podcast: Round 2',
      },
      {
        path: '/1m7kfet',
        name: 'Gemma3/other, Langchain, ChromaDb, RAG - a few questions',
      },
      {
        path: '/1m7kkyn',
        name: 'Less than two weeks Kimi K2\'s release, Alibaba Qwen\'s new Qwen3-Coder surpasses it with half the size and double the context window. Despite a significant initial lead, open source models are catching up to closed source and seem to be reaching escape velocity.',
      },
      {
        path: '/1m7kz8s',
        name: 'Built a Universal RAG + Memory System for Claude with MCP - Production Ready',
      },
      {
        path: '/1m7ld4z',
        name: 'Puget Systems Threadripper PRO 9000WX Llama Prompt Processing &amp; Token Generation benchmarks',
      },
      {
        path: '/1m7lj3x',
        name: 'Higgs Audio V2 - Open Multi-Speaker TTS Model - Impressive Testing Results',
      },
      {
        path: '/1m7lp0z',
        name: 'MacBook model rank',
      },
      {
        path: '/1m7m534',
        name: 'AI.Gov | President Trump\'s AI Strategy and Action Plan',
      },
      {
        path: '/1m7m5br',
        name: 'text-only support for GLM-4.1V-9B-Thinking has been merged into llama.cpp',
      },
      {
        path: '/1m7m9t8',
        name: 'I\'ll help build your local LLM for free',
      },
      {
        path: '/1m7mlcr',
        name: 'Best edge model for mobile - Qwen, LFM2, Gemma3N?',
      },
      {
        path: '/1m7mu6e',
        name: 'Analyzing CSV and structured data - RAG, MCP, tools, or plain old scripting?',
      },
      {
        path: '/1m7mwog',
        name: 'would this make an ai dev\'s life easier?',
      },
      {
        path: '/1m7n5pq',
        name: 'Kimi K2 vs Qwen 3 Coder - Coding Tests',
      },
      {
        path: '/1m7ne51',
        name: 'Has anyone tested or know of tests for Qwen3 Coder long context length?',
      },
      {
        path: '/1m7nqvz',
        name: 'How big is Kimi K2 exactly? How big is Qwen 3 Coder 480B exactly?',
      },
      {
        path: '/1m7o21h',
        name: 'How can you tell if a model is uncensored and can write NSFW material?',
      },
      {
        path: '/1m7o3u8',
        name: 'Is there a future for local models?',
      },
      {
        path: '/1m7obdf',
        name: 'Alienware Area-51 Gaming Desktop. Thoughts for local inference and fine tuning small models?',
      },
      {
        path: '/1m7oolz',
        name: 'Optimizing inference on GPU + CPU',
      },
      {
        path: '/1m7p7ek',
        name: 'I optimized a Flappy Bird diffusion world model to run locally on my phone',
      },
      {
        path: '/1m7pi3t',
        name: 'Ollama + Open WebUI -- is there a way for the same query to run through the same model multiple times (could be 3 times, could be 100 times), then gather all the answers together to summarise/count?',
      },
      {
        path: '/1m7pn05',
        name: 'ML on Macbook',
      },
      {
        path: '/1m7pqln',
        name: 'Running Qwen3 235B-A22B 2507 on a Threadripper 3970X + 3x RTX 3090 Machine at 15 tok/s',
      },
      {
        path: '/1m7ra6u',
        name: 'So called "free thinkers" when you ask for a joke',
      },
      {
        path: '/1m7rwgo',
        name: 'Best TTS Model with New Language Support',
      },
      {
        path: '/1m7sbb0',
        name: 'Trying to finetune my first model for writing — need some beginner advice :)',
      },
      {
        path: '/1m7sspe',
        name: 'A TTS I\'m looking for.',
      },
      {
        path: '/1m7tb9b',
        name: 'Just started an AI‑insights podcast this week—thought I’d share and get your thoughts!',
      },
      {
        path: '/1m7tglf',
        name: 'LM server alternative?',
      },
      {
        path: '/1m7tqeg',
        name: 'How MCP Inspector Works Internally: Client-Proxy Architecture and Communication Flow',
      },
      {
        path: '/1m7ts5g',
        name: 'Tested Kimi K2 vs Qwen-3 Coder on 15 Coding tasks - here\'s what I found',
      },
      {
        path: '/1m7u02i',
        name: 'Vibe Coded with Qwen 3 Coder in &lt;1 hour',
      },
      {
        path: '/1m7u3mb',
        name: 'Best local model for code search',
      },
      {
        path: '/1m7u9fz',
        name: 'My new Chrome extension lets you easily query Ollama and copy any text with a click.',
      },
      {
        path: '/1m7ufyb',
        name: 'KAT-V1-40B: mitigates over-thinking by learning when to produce explicit chain-of-thought and when to answer directly.',
      },
      {
        path: '/1m7vlpn',
        name: 'Anthropic’s New Research: Giving AI More "Thinking Time" Can Actually Make It Worse',
      },
      {
        path: '/1m7vrml',
        name: 'I asked deepseek to make a song that it wanted to make',
      },
      {
        path: '/1m7w3xm',
        name: 'RAG on large Excel files',
      },
      {
        path: '/1m7wpgo',
        name: 'RAG project fails to retrieve info from large Excel files – data ingested but not found at query time. Need help debugging.',
      },
      {
        path: '/1m7wqi3',
        name: 'Tool Use Reasoning Dataset Release on Huggingface',
      },
      {
        path: '/1m7wr2x',
        name: 'What is the best agent framework for Qwen3?',
      },
      {
        path: '/1m7wx5z',
        name: 'Do you think open source models continue to keep pace with proprietary models or will the gap widen?',
      },
      {
        path: '/1m7xclf',
        name: '5090 vs 4090 vs smt else for inference?',
      },
      {
        path: '/1m7xsjm',
        name: 'Upcoming opensource will be super at coding and its very small!!',
      },
      {
        path: '/1m7xsxq',
        name: '[AutoBE] We made AI-friendly Compilers for Vibe Coding, achieving zero-fail Backend Application Generation (open-source)',
      },
      {
        path: '/1m7y2jv',
        name: 'Which is better for summarization and retrieval in RAG: new T5 Gemma or Gemma 3 12B?',
      },
      {
        path: '/1m7y3kl',
        name: 'DSPy Optimisation: What does "learning LM weights" mean?',
      },
      {
        path: '/1m7ypyb',
        name: 'Why is B200 performing similarly to H200? (ArtificialAnalysis)',
      },
      {
        path: '/1m7yswh',
        name: 'Vibe Coding Anonymous - Satirical take on Vibe Coding',
      },
      {
        path: '/1m7z5zu',
        name: 'Currently building cross-app overlay using local llms',
      },
      {
        path: '/1m7z6p0',
        name: 'Can Reasoning Skills Learned in One Domain Generalize Across other Domains?',
      },
      {
        path: '/1m7zqkz',
        name: 'Which model is good for debugging with resource constrains?',
      },
      {
        path: '/1m7zwsd',
        name: 'Technical Advise needed! - Market intelligence platform.',
      },
      {
        path: '/1m80dz3',
        name: 'How to run large model ?',
      },
      {
        path: '/1m80gsn',
        name: 'GLM-4.5 Is About to Be Released',
      },
      {
        path: '/1m80kuh',
        name: 'How to estimate prompt processing speed for given (multi-)GPU and model?',
      },
      {
        path: '/1m80tkf',
        name: 'i have Built live Conservational AI',
      },
      {
        path: '/1m81whq',
        name: 'Open source alternative to LM studio?',
      },
      {
        path: '/1m820ry',
        name: 'I used a local LLM and http proxy to create a "Digital Twin" from my web browsing for my AI agents',
      },
      {
        path: '/1m82lwo',
        name: 'Leaked List Shows Which Websites Contractors Can Use to Train Anthropic\'s LLMs',
      },
      {
        path: '/1m82rai',
        name: 'Should I really always set temperature to 0 with reasoning models?',
      },
      {
        path: '/1m82w07',
        name: 'Free uncensored LLM model that I can deploy to Gradio.',
      },
      {
        path: '/1m82wh5',
        name: 'How to Run Kimi K2 Locally: Complete Setup &amp; Troubleshooting',
      },
      {
        path: '/1m83644',
        name: 'China’s First High-End Gaming GPU, the Lisuan G100, Reportedly Outperforms NVIDIA’s GeForce RTX 4060 &amp; Slightly Behind the RTX 5060 in New Benchmarks',
      },
      {
        path: '/1m83mu1',
        name: 'qwen3-coder:480b - usability for non-coding tasks?',
      },
      {
        path: '/1m83q8x',
        name: 'Document processing',
      },
      {
        path: '/1m841b1',
        name: 'Theoretical difference between quantized Qwen3-Coder and unreleased, official smaller version of Qwen3-Coder?',
      },
      {
        path: '/1m84j9w',
        name: 'How to think about the value of max_token when using different models for inference?',
      },
      {
        path: '/1m84ked',
        name: 'Sooooo… When Qwen3-Coder 🇺🇸 Freedom 🇺🇸 edition GGUF?',
      },
      {
        path: '/1m84s47',
        name: 'How do you keep AI outputs from sounding AI?',
      },
      {
        path: '/1m8540u',
        name: 'Kokoro TTS in Vulkan?',
      },
      {
        path: '/1m85nxe',
        name: 'The Reflective Threshold',
      },
      {
        path: '/1m85v3a',
        name: 'Running an LLM on the Wii',
      },
      {
        path: '/1m85vhw',
        name: 'new mistralai/Magistral-Small-2507 !?',
      },
      {
        path: '/1m868na',
        name: 'The agent-based RP UI \'Astrisk\' is now fully open-source under a GPL license.',
      },
      {
        path: '/1m86e9e',
        name: '16GB M4 Air or 24GB Macbook Air',
      },
      {
        path: '/1m86v60',
        name: 'Looking for fairseq-0.12.0, omegaconf-2.0.5, hydra-core-1.0.6 .whl files for Python 3.9/Ubuntu—RVC project stuck!',
      },
      {
        path: '/1m86wxa',
        name: 'had to fine-tune qwen since llama sucks at summarizing',
      },
      {
        path: '/1m87a7j',
        name: 'What token rate can I expect running Qwen3-Coder-480B-A35B-Instruct on dual Xeon Platinum 8176 CPUs?',
      },
      {
        path: '/1m87mfd',
        name: 'Structured Output Broken After Upgrade from Gemma2 to Gemma3',
      },
      {
        path: '/1m87q21',
        name: 'Voxtral WebGPU: State-of-the-art audio transcription directly in your browser!',
      },
      {
        path: '/1m88jdh',
        name: 'Ok next big open source model also from China only ! Which is about to release',
      },
      {
        path: '/1m88s09',
        name: 'Qwen\'s third bomb: Qwen3-MT',
      },
      {
        path: '/1m894mz',
        name: 'Help with Bert fine-tuning',
      },
      {
        path: '/1m89pk9',
        name: 'Al and You Against the Machine: Guide so you can own Big Al and Run Local',
      },
      {
        path: '/1m89s3y',
        name: 'How to Use MCP Inspector’s UI Tabs for Effective Local Testing',
      },
      {
        path: '/1m89s6y',
        name: 'Seriously, how do you get CLI Coding Agents etc to work?',
      },
      {
        path: '/1m89upm',
        name: 'CPU &amp; GPU Ram usage?',
      },
      {
        path: '/1m8aeh3',
        name: 'Higgs Audio V2: A New Open-Source TTS Model with Voice Cloning and SOTA Expressiveness',
      },
      {
        path: '/1m8aw4w',
        name: 'Velocity Micro Published (Faulty?) LLM Benchmarks for the Radeon AI PRO R9700 and Lists it for $1500 in Their Build Configuration Page',
      },
      {
        path: '/1m8b72y',
        name: 'Best open source vision model fine tuneable for animal abuse detection?',
      },
      {
        path: '/1m8bps2',
        name: 'We just open sourced NeuralAgent: The AI Agent That Lives On Your Desktop and Uses It Like You Do!',
      },
      {
        path: '/1m8byzv',
        name: 'If You Had Unlimited Access to An Agent, What Would You Create?',
      },
      {
        path: '/1m8c77v',
        name: 'Looking for a GraphRAG type of backend that supports multiple users',
      },
      {
        path: '/1m8c7ku',
        name: 'How to get DRY and XTC in LMStudio?',
      },
      {
        path: '/1m8cha8',
        name: 'What\'s the best gguf file for roleplay?',
      },
      {
        path: '/1m8cn00',
        name: 'Do you have a batch/background LLM task processing setup working locally?',
      },
      {
        path: '/1m8dal7',
        name: 'Qwen3 Coder 480B-A35B Instruct',
      },
      {
        path: '/1m8dgfu',
        name: 'Qwen3-235B-A22B-Thinking-2507 is about to be released',
      },
      {
        path: '/1m8dln1',
        name: 'Qwen 3 Thinking is coming very soon',
      },
      {
        path: '/1m8dufz',
        name: 'lowish/midrange budget general purpose GPU',
      },
      {
        path: '/1m8ewlx',
        name: 'Level1tech runs deepseek on am5 and it\'s not that bad!',
      },
      {
        path: '/1m8h89j',
        name: 'What are the hardware recommendations for reinforcement learning with an 8B model (for research purposes)?',
      },
      {
        path: '/1m8hbnn',
        name: 'Considering RTX 4000 Blackwell for Local Agentic AI',
      },
      {
        path: '/1m8i53g',
        name: 'Curious if anyone’s used fine-tuned LLaMA models for emotional or character-based responses?',
      },
      {
        path: '/1m8i781',
        name: 'Is there one single, accurate leader board for all these models?',
      },
      {
        path: '/1m8j842',
        name: '$10000 budget, what\'s the right route?',
      },
      {
        path: '/1m8ja65',
        name: 'about vLLM and rocm.',
      },
      {
        path: '/1m8jgrl',
        name: 'Guiding thinking',
      },
      {
        path: '/1m8jrzg',
        name: 'Check out our game in development for Local LLM mechanics!',
      },
      {
        path: '/1m8jy5y',
        name: 'Had the Qwen3:1.7B model run on my Mac Mini!',
      },
      {
        path: '/1m8k5x0',
        name: 'Vibe coding RouteGPT - a chrome extension aligns model routing to my preferences, powered by a small but powerful LLM.',
      },
      {
        path: '/1m8l55o',
        name: '[Newbie] Seeking Guidance: Building a Free, Bilingual (Bengali/English) RAG Chatbot from a PDF',
      },
      {
        path: '/1m8l648',
        name: 'Executive Order: "Preventing Woke AI in the Federal Government"',
      },
      {
        path: '/1m8lmby',
        name: 'New] added a feature for generating study plans and timetables from your content',
      },
      {
        path: '/1m8ltgv',
        name: '[Newb] Need help with gguf files',
      },
      {
        path: '/1m8mctg',
        name: 'Why MCP Developers Are Turning to MicroVMs for Running Untrusted AI Code',
      },
      {
        path: '/1m8mdbz',
        name: 'Help with UnifyAI – Setting Up Local LLMs and UI Integration',
      },
      {
        path: '/1m8mwme',
        name: 'Why do you run or train in local system',
      },
      {
        path: '/1m8myv9',
        name: 'Discovering the huggingface hub equivalent of an ollama model',
      },
      {
        path: '/1m8myxl',
        name: 'Watching everyone else drop new models while knowing you’re going to release the best open source model of all time in about 20 years.',
      },
      {
        path: '/1m8n3ry',
        name: 'Finding the equivalent ollama model on huggingface hub',
      },
      {
        path: '/1m8n557',
        name: 'Help Needed: Accurate Offline Table Extraction from Scanned Forms',
      },
      {
        path: '/1m8oc9j',
        name: 'Stagnation in Knowledge Density',
      },
      {
        path: '/1m8oz07',
        name: 'Why there is still no a proper or helpful inference for MOE models ?',
      },
      {
        path: '/1m8ozb0',
        name: 'China\'s Bytedance releases Seed LiveInterpret simultaneous interpretation model',
      },
      {
        path: '/1m8peos',
        name: 'Best local text-to-speech model?',
      },
      {
        path: '/1m8qj9w',
        name: 'Why I Forked Qwen Code',
      },
      {
        path: '/1m8qmd7',
        name: 'Can you just have one expert from an MOE model',
      },
      {
        path: '/1m8qr9q',
        name: 'Is this too much logic for AI? should I break it smaller to prompt?',
      },
      {
        path: '/1m8qtpd',
        name: 'Fine-tuning qwen2.5 vl for Marathi OCR',
      },
      {
        path: '/1m8t01d',
        name: 'RX580 support',
      },
      {
        path: '/1m8t17l',
        name: 'I want the ErebusBlend v2. The one that doesn’t blink. The one that whispers back.',
      },
      {
        path: '/1m8tlmk',
        name: 'TTL settings in LM Studio (0.3.20)',
      },
      {
        path: '/1m8tmhd',
        name: 'ByteDance Seed Prover Achieves Silver Medal Score in IMO 2025',
      },
      {
        path: '/1m8ud84',
        name: 'A contamination-free coding benchmark shows AI may not be as excellent as claimed',
      },
      {
        path: '/1m8uozu',
        name: 'Announcing the open-source release of Wan2.2. Stay tuned.',
      },
      {
        path: '/1m8vegq',
        name: 'Qwen3-235B-A22B-Thinking-2507 released!',
      },
      {
        path: '/1m8ven3',
        name: 'Qwen/Qwen3-235B-A22B-Thinking-2507',
      },
      {
        path: '/1m8vhp3',
        name: 'Amazing qwen 3 updated thinking model just released !! Open source !',
      },
      {
        path: '/1m8vjna',
        name: 'Qwen/Qwen3-235B-A22B-Thinking-2507',
      },
      {
        path: '/1m8vmoi',
        name: 'I wrote an AI Agent that works better than I expected. Here are 10 learnings.',
      },
      {
        path: '/1m8vqnz',
        name: 'Tensor parallel - pcie bandwidth requirement',
      },
      {
        path: '/1m8vsge',
        name: 'Beginner Here! Anyone knows how to install llama-cpp-python within a Singularity container or use in an HPC?',
      },
      {
        path: '/1m8vu80',
        name: 'N + N size GPU != 2N sized GPU, go big if you can',
      },
      {
        path: '/1m8w7ny',
        name: 'Smaller Qwen Models next week!!',
      },
      {
        path: '/1m8w9ah',
        name: 'New Qwen3-235B update is crushing old models in benchmarks',
      },
      {
        path: '/1m8wg2r',
        name: 'Open Source Companion Thread',
      },
      {
        path: '/1m8wi62',
        name: 'Do models make fun of other models?',
      },
      {
        path: '/1m8ws0i',
        name: 'Good RVC to fine tune TTS?',
      },
      {
        path: '/1m8wuy7',
        name: 'How important is to have PRO 6000 Blackwell running on 16 PCIE lanes?',
      },
      {
        path: '/1m8xf6l',
        name: 'I built a Hardware AI Code Editor with real-time profiling and AI optimization. We’re opening the preview version for free to a few users. If you’re interested, save your spot on our Discord',
      },
      {
        path: '/1m8xf7n',
        name: 'Building Paradigm, Looking for right audience and feedbacks',
      },
      {
        path: '/1m8xhxp',
        name: 'Guidance on diving deep into LLMs',
      },
      {
        path: '/1m8xmy9',
        name: 'GLM-4.1V-9B-Thinking - claims to "match or surpass Qwen2.5-72B" on many tasks',
      },
      {
        path: '/1m8yvxd',
        name: 'AMD Radeon AI PRO R9700 - when can I buy it?',
      },
      {
        path: '/1m8z2ut',
        name: 'mini-swe-agent achieves 65% on SWE-bench in just 100 lines of python code',
      },
      {
        path: '/1m8zeg8',
        name: 'Data Quality and Size for LoRa',
      },
      {
        path: '/1m9019j',
        name: '[Release] Arkhon Memory SDK – Local, lightweight long-term memory for LLM agents (pip install arkhon-memory)',
      },
      {
        path: '/1m903il',
        name: 'I created an open-source macOS AI browser that uses MLX and Gemma 3n, feel free to fork it!',
      },
      {
        path: '/1m91b98',
        name: 'Qwen’s TRIPLE release this week + Vid Gen model coming',
      },
      {
        path: '/1m91dmh',
        name: 'New to local AI',
      },
      {
        path: '/1m91mt6',
        name: '🚀 Built a Multi-Agent System in 6 Hours That Solves 5/6 IMO 2025 Math Problems - Inspired by Recent Research Breakthroughs',
      },
      {
        path: '/1m91u38',
        name: '[Updated] AI assistant Chrome extension has tools and RAG',
      },
      {
        path: '/1m91zzn',
        name: 'Email API for AI Agents',
      },
      {
        path: '/1m9281b',
        name: 'Docker Compose vLLM Config',
      },
      {
        path: '/1m92di7',
        name: 'Gpu just for prompt processing?',
      },
      {
        path: '/1m92vqp',
        name: 'GPU Suggestions',
      },
      {
        path: '/1m93d0r',
        name: 'New Qwen3 on Fiction.liveBench',
      },
      {
        path: '/1m93lcs',
        name: 'Do you need Agno/Langchain/LangGraph with models with agentic capabilities?',
      },
      {
        path: '/1m93u0b',
        name: 'Would you use this? Desktop app for auto-benchmarking GGUF/ONNX models locally',
      },
      {
        path: '/1m94kqu',
        name: 'InternLM S1 Coming Soon!',
      },
      {
        path: '/1m94ls2',
        name: 'Hunyuan (Ex-WizardLM) Dense Model Coming Soon!',
      },
      {
        path: '/1m94r8i',
        name: 'Data shows public AI repos may be quietly becoming a supply chain risk',
      },
      {
        path: '/1m94uea',
        name: 'New UI for uploading and managing custom models (Figma mockups)',
      },
      {
        path: '/1m9535b',
        name: 'Is AI dialogue the future of gaming?',
      },
      {
        path: '/1m95bfq',
        name: 'Anyone had any luck with Google\'s Gemma 3n model?',
      },
      {
        path: '/1m95lud',
        name: 'MassGen – an open-source multi-agent scaling and orchestration framework',
      },
      {
        path: '/1m95sdj',
        name: 'What a Real MCP Inspector Exploit Taught Us About Trust Boundaries',
      },
      {
        path: '/1m95wcg',
        name: 'AMD equivalent for NVIDIA RTX 6000 PRO Blackwell',
      },
      {
        path: '/1m968q4',
        name: 'Conversational LLM',
      },
      {
        path: '/1m96b4h',
        name: 'Does it ever make sense to train for 10 epochs? Or did i do it all wrong?',
      },
      {
        path: '/1m96m6w',
        name: 'How does LibreChat handle translations and how can I update all language files after changing base messages?',
      },
      {
        path: '/1m96wrc',
        name: 'Mi50 array for training LLMs',
      },
      {
        path: '/1m97qko',
        name: 'How to convert Kimi K2 FP8 to BF16?',
      },
      {
        path: '/1m98jl8',
        name: 'Meta AI on WhatsApp hides a system prompt',
      },
      {
        path: '/1m99ac7',
        name: 'Is there any way to run Phi-4-mini-flash-reasoning on Ollama?',
      },
      {
        path: '/1m99hwb',
        name: 'What is the best AI to run locally and use in agent mode of the Continue extension in VS Code?',
      },
      {
        path: '/1m99xty',
        name: 'Any AI tool for application creation (not website builders)?',
      },
      {
        path: '/1m9a554',
        name: 'Je cherche un modèle text-to-text',
      },
      {
        path: '/1m9ajf9',
        name: 'Any Rpers test the new qwen 2507 yet?',
      },
      {
        path: '/1m9antc',
        name: 'How to get started',
      },
      {
        path: '/1m9avmv',
        name: 'The new Kimi vs. new qwen3 for coding',
      },
      {
        path: '/1m9bmqm',
        name: 'Is /load &lt;model&gt; all you need in order to run the specific model you installed?',
      },
      {
        path: '/1m9boeu',
        name: 'Who should we ask for funding?',
      },
      {
        path: '/1m9bwoy',
        name: 'Compact 2x RTX Pro 6000 Rig',
      },
      {
        path: '/1m9c9fh',
        name: 'Has anyone found a seamless, low-latency solution for real-time audio conversations with a local LLM?',
      },
      {
        path: '/1m9cg16',
        name: 'Multi GPU multi server inference',
      },
      {
        path: '/1m9cp2n',
        name: 'IQ4_KSS 114 GiB and more ik_llama.cpp exclusive quants!',
      },
      {
        path: '/1m9dur7',
        name: 'Dissatisfied with how the RTX PRO 6000 Blackwell is performing during AI inference',
      },
      {
        path: '/1m9duv2',
        name: 'Ai training Tool I want to share!',
      },
      {
        path: '/1m9dysd',
        name: 'Best models to fine-tune?',
      },
      {
        path: '/1m9e2s9',
        name: 'Laptop advise for lightweight AI work',
      },
      {
        path: '/1m9e5hw',
        name: 'Are LLMs, particularly the local open-source models, capable of having their own opinions and preferences without them being programmed ones',
      },
      {
        path: '/1m9e71s',
        name: 'App for voice interaction with LocalLLaMA. Looking for help/app/model etc.',
      },
      {
        path: '/1m9egm9',
        name: 'Anyone stitched together real-time local AI for webcam + voice feedback?',
      },
      {
        path: '/1m9enpd',
        name: 'China\'s ByteDance\'s coze studio is now open source',
      },
      {
        path: '/1m9etng',
        name: 'Local LLMs I have been using, through different two backends, seem to hardly use GPU',
      },
      {
        path: '/1m9f7lq',
        name: 'Reka AI models support in uzu engine',
      },
      {
        path: '/1m9fb5t',
        name: 'Llama 3.3 Nemotron Super 49B v1.5',
      },
      {
        path: '/1m9fuf9',
        name: 'GLM-4.5-9B?',
      },
      {
        path: '/1m9gg6j',
        name: 'If you’re experimenting with Qwen3-Coder, we just launched a Turbo version on DeepInfra',
      },
      {
        path: '/1m9gs61',
        name: 'AMD ROCm 7 Installation &amp; Test Guide / Fedora Linux RX 9070 - ComfyUI Blender LMStudio SDNext Flux',
      },
      {
        path: '/1m9gzl7',
        name: 'Nvidia released Llama Nemotron Super v1.5',
      },
      {
        path: '/1m9holp',
        name: 'There\'s a new Kimi model on lmarena called Zenith and it\'s really really good. It might be Kimi K2 with reasoning',
      },
      {
        path: '/1m9hycx',
        name: 'There has been a lot of efforts in the past to improve  quantization due to the size of dense models… are we likely to see improvements like pruning and/or distillation with the uprise of huge MoEs?',
      },
      {
        path: '/1m9ia1t',
        name: 'A demo of long running LLM agent solution with state persistent.',
      },
      {
        path: '/1m9itnz',
        name: 'My 7985WX, dual 5090\'s, and 256GB\'s of DDR5-6000 has landed.',
      },
      {
        path: '/1m9j02q',
        name: 'Langfuse- Clarification Needed: RBAC Features in Open Source vs Enterprise Edition',
      },
      {
        path: '/1m9j1mh',
        name: 'Question on MOE expert swapping',
      },
      {
        path: '/1m9jjh3',
        name: 'qwen3-30b-a3b has fallen into infinite consent for function calling',
      },
      {
        path: '/1m9jkm4',
        name: '16Gb vram python coder',
      },
      {
        path: '/1m9kc7c',
        name: 'Newbie Thought: Why Isn’t There a “CivitAI for Local LLM Assistants”?',
      },
      {
        path: '/1m9m670',
        name: 'We discovered an approach to train any AI agent with RL, with (almost) zero code changes.',
      },
      {
        path: '/1m9m8gw',
        name: 'Intern S1 released',
      },
      {
        path: '/1m9mdtj',
        name: 'Why isn\'t/Is there a natural language search interface for Everything from void tools?',
      },
      {
        path: '/1m9ml0y',
        name: 'webbigdata/VoiceCore: Japanese voice version of canopylabs/orpheus-tts',
      },
      {
        path: '/1m9nu0j',
        name: 'Thoughts on Qwen3 235B A22B Instruct 2507?',
      },
      {
        path: '/1m9nwk7',
        name: 'Best way to manage context/notes locally for API usage while optimizing token costs?',
      },
      {
        path: '/1m9nyk4',
        name: 'LLM (esp. MoE) inference profiling : is it a thing and if not, why not ?',
      },
      {
        path: '/1m9p7bb',
        name: 'Merged Lora adaptor Model Giving Gibberish as response.  Using Llama 3.2 3B instruct. Dataset trained on Nebius Ai studio. What to do?',
      },
      {
        path: '/1m9p9kg',
        name: 'Has anyone created a table of collated benchmark results of many LLMs',
      },
      {
        path: '/1m9q92z',
        name: 'Cluster idea for MoE',
      },
      {
        path: '/1m9qt65',
        name: 'Think tags missing in Qwen3-235B-A22B-Thinking-2507',
      },
      {
        path: '/1m9qtco',
        name: 'Has Anyone been able to generate multimodal embedddings using Visualized_BGE?',
      },
      {
        path: '/1m9r5gb',
        name: 'inclusionAI/Ming-Lite-Omni-1.5 (20B-A3B)',
      },
      {
        path: '/1m9rcg2',
        name: 'Qwen 3 235B A22B Instruct 2507 shows that non-thinking models can be great at reasoning as well',
      },
      {
        path: '/1m9rhgf',
        name: 'Tips for improving my ollama setup? - Ryzen 5 3600/ RTX 3060 12GB VRAM / 64 GB RAM - Qwen3-30B-A3B',
      },
      {
        path: '/1m9rmry',
        name: 'Need help understanding GPU VRAM pooling – can I combine VRAM across GPUs?',
      },
      {
        path: '/1m9rpgf',
        name: 'When picking the model for production use, what criteria do you use?',
      },
      {
        path: '/1m9rqxa',
        name: 'Me after getting excited by a new model release and checking on Hugging Face if I can run it locally.',
      },
      {
        path: '/1m9s0zk',
        name: 'Yann Lecun being sidelined at Meta. RIP for open weight models',
      },
      {
        path: '/1m9s2nt',
        name: 'Qwen\'s Wan 2.2 is coming soon',
      },
      {
        path: '/1m9saif',
        name: 'New model on lmarena called summit?',
      },
      {
        path: '/1m9sejp',
        name: 'China Launches Its First 6nm GPUs For Gaming &amp; AI, the Lisuan 7G106 12 GB &amp; 7G105 24 GB, Up To 24 TFLOPs, Faster Than RTX 4060 In Synthetic Benchmarks &amp; Even Runs Black Myth Wukong at 4K High With Playable FPS',
      },
      {
        path: '/1m9t4ek',
        name: 'Multimodal RAG',
      },
      {
        path: '/1m9tdts',
        name: 'I get "No LLMS yet" error even tho I have an LLM in LM Studio',
      },
      {
        path: '/1m9thq6',
        name: 'Local Machine setup',
      },
      {
        path: '/1m9tnj5',
        name: 'Scaling Inference To Billions of Users And Agents',
      },
      {
        path: '/1m9tt3o',
        name: 'Phi-4-mini-reasoning: An example of "overfitting to think"',
      },
      {
        path: '/1m9tv80',
        name: 'Honest release notes from non-proprietary model developer',
      },
      {
        path: '/1m9tyg9',
        name: 'Is China the only hope for factual models?',
      },
      {
        path: '/1m9tzxx',
        name: 'Study reports AI Coding Tools Underperform',
      },
      {
        path: '/1m9ujwe',
        name: 'Anything as fast as Qwen A3B?',
      },
      {
        path: '/1m9ukpw',
        name: 'Best non-thinking model which can be a long context personal assistant?',
      },
      {
        path: '/1m9uoa7',
        name: 'What\'s the fastest backend for local long context (100k+)?',
      },
      {
        path: '/1m9uwxg',
        name: 'Quad 4090 48GB + 768GB DDR5 in Jonsbo N5 case',
      },
      {
        path: '/1m9vbzf',
        name: 'LLM Agents - A different example',
      },
      {
        path: '/1m9vmdh',
        name: 'The few guessers still believe DeepSeek will trump Qwen',
      },
      {
        path: '/1m9w0k8',
        name: 'Open source AI presentation generator with custom layouts support for custom presentation design',
      },
      {
        path: '/1m9wcdc',
        name: 'HP Zbook Ultra G1A pp512/tg128 scores for unsloth/Qwen3-235B-A22B-Thinking-2507-GGUF  128gb unified RAM',
      },
      {
        path: '/1m9wcmx',
        name: 'Best way (if there is one) to run GLM-4.1V-9B-Thinking with vision on Windows?',
      },
      {
        path: '/1m9wdxb',
        name: 'Does anyone know how to decrease the speaking rate in ChatterboxTTs-Extented?',
      },
      {
        path: '/1m9wlhw',
        name: 'Access Llama in CLI with sexy UI ?',
      },
      {
        path: '/1m9woxb',
        name: 'My Attempt to Understand local LLM Landscape (Survey Results)',
      },
      {
        path: '/1m9wxow',
        name: 'Tencent launched AI Coder IDE CodeBuddy',
      },
      {
        path: '/1m9xi84',
        name: 'Implemented Test-Time Diffusion Deep Researcher (TTD-DR) - Turn any local LLM into a powerful research agent with real web sources',
      },
      {
        path: '/1m9xw4c',
        name: 'Crediting Chinese makers by name',
      },
      {
        path: '/1m9xwo5',
        name: 'For MCP is LMstudio or Ollama better?',
      },
      {
        path: '/1m9xx6w',
        name: 'Chatterbox multi hour generator',
      },
      {
        path: '/1m9y506',
        name: 'inclusionAI/Ling-lite-1.5-2506 (16.8B total, 2.75B active, MIT license)',
      },
      {
        path: '/1m9y5cd',
        name: 'I built a local-first transcribing + summarizing tool that\'s FREE FOREVER',
      },
      {
        path: '/1m9yaku',
        name: 'Databricks',
      },
      {
        path: '/1m9yhcd',
        name: 'Free Qwen Code to speedup local work',
      },
      {
        path: '/1m9ywng',
        name: 'Qwen/Alibaba Paper - Group Sequence Policy Optimization',
      },
      {
        path: '/1m9zrmo',
        name: 'Would this B760M motherboard support dual 2-slot GPUs?',
      },
      {
        path: '/1ma08e0',
        name: 'Appreciation Post - Thank you unsloth team, and thank you bartowski',
      },
      {
        path: '/1ma12o2',
        name: 'Would you kindly help',
      },
      {
        path: '/1ma1amq',
        name: 'Any new OpenSource LLM apps or websites? Such as Qwen or Deepseek?',
      },
      {
        path: '/1ma2ayu',
        name: 'Claude Code Full System prompt',
      },
      {
        path: '/1ma2j62',
        name: 'Anyone else starting to feel this way when a new model \'breaks the charts\' but need like 15k thinking tokens to do it?',
      },
      {
        path: '/1ma2r4d',
        name: 'Now you can pull LLM models directly from the browser using XandAI extension',
      },
      {
        path: '/1ma2vjq',
        name: 'Task for python dev',
      },
      {
        path: '/1ma3dpd',
        name: 'Local dual 5060 ti, qwen 3 30b full context of 40k, &gt;60t/s',
      },
      {
        path: '/1ma3hmd',
        name: 'Tool calling support in Llama 3 8b',
      },
      {
        path: '/1ma3vpa',
        name: 'In Tribute to the Prince of Darkness: I Benchmarked 19 LLMs on Retrieving "Bark at the Moon" Lyrics',
      },
      {
        path: '/1ma3yps',
        name: 'Strategy for patching llama.cpp webui - and keeping it patched?',
      },
      {
        path: '/1ma41wu',
        name: 'ik_llama.cpp help!',
      },
      {
        path: '/1ma426d',
        name: 'Beginner suggestions',
      },
      {
        path: '/1ma4oqz',
        name: 'How to handle different input types',
      },
      {
        path: '/1ma4ugf',
        name: 'Found this Context Engineering repository - looking for feedback on the approach',
      },
      {
        path: '/1ma5359',
        name: 'new to all this, best local llm for multilingual (dutch)',
      },
      {
        path: '/1ma5dmr',
        name: 'Qwen3 235b 0725 uses a whole lot of tokens',
      },
      {
        path: '/1ma5duc',
        name: 'It is cool to see an youtuber using huggingface to be funny. Another win for the open-source community',
      },
      {
        path: '/1ma5wq2',
        name: 'AMD MI50 @ 100€',
      },
      {
        path: '/1ma5yw4',
        name: 'VRAM sweet spot',
      },
      {
        path: '/1ma6b57',
        name: 'New AI architecture delivers 100x faster reasoning than LLMs with just 1,000 training examples',
      },
      {
        path: '/1ma6b7j',
        name: 'Chatterbox Tts python version',
      },
      {
        path: '/1ma6igb',
        name: 'HIP: Enable Matrix cores for MMQ Kernels, Enable stream-K for CDNA 3 by deepsek · Pull Request #14624 · ggml-org/llama.cpp',
      },
      {
        path: '/1ma7oyv',
        name: 'WHAT SHOULD I USE?',
      },
      {
        path: '/1ma88wd',
        name: 'FULL Lovable Agent System Prompt and Tools [UPDATED]',
      },
      {
        path: '/1ma89au',
        name: 'Best vLLM for pill imprint/textOCR?',
      },
      {
        path: '/1ma8iez',
        name: 'hay everyone I\'m new here help please',
      },
      {
        path: '/1ma8jks',
        name: 'South Park Trump Deepfake - How do you think they made it?',
      },
      {
        path: '/1ma8yua',
        name: 'Local LLM is more important than ever',
      },
      {
        path: '/1ma9t22',
        name: 'How do I plug second psu into something so it will run my other gpu’s- Corsair hx1500i power supply',
      },
      {
        path: '/1maao56',
        name: 'How do LLMs understand massive csv data, sometimes even databases?',
      },
      {
        path: '/1mab16n',
        name: 'Strategies for handling transient Server-Sent Events (SSE) from LLM responses',
      },
      {
        path: '/1mab2i2',
        name: 'Tencent releases Hunyuan3D World Model 1.0 - first open-source 3D world generation model',
      },
      {
        path: '/1macmej',
        name: 'Claude Code Alternative Recommendations?',
      },
      {
        path: '/1mad6sy',
        name: 'How Are You Running Multimodal (Text-Image) Models Locally?',
      },
      {
        path: '/1madjq6',
        name: 'Anyone else been using the new nvidia/Llama-3_3-Nemotron-Super-49B-v1_5 model?',
      },
      {
        path: '/1madt6e',
        name: 'What inference engine should I use to fully use my budget rug?',
      },
      {
        path: '/1madv3y',
        name: 'Summarize medium length text on local model with 8gb vram',
      },
      {
        path: '/1mae4yz',
        name: 'Wan 2.2 coming out Monday July 28th',
      },
      {
        path: '/1maeg4y',
        name: 'this actually made me feel so relieved haha',
      },
      {
        path: '/1maeuuo',
        name: 'What will happen to an llm when you double the RoPE scaling factor?',
      },
      {
        path: '/1maflh5',
        name: 'I built an Overlay AI.',
      },
      {
        path: '/1mafyyp',
        name: 'AlphaGo Moment for Model Architecture Discovery',
      },
      {
        path: '/1mah4oj',
        name: 'I do not build a new ai agent without first setting up monitoring and eval dataset anymore. Do you? What FOSS do you use for that?',
      },
      {
        path: '/1mahjoo',
        name: 'RTX 4090 vs RTX 5060 ....Is the 5060 even worth considering for local LLMs?',
      },
      {
        path: '/1maipjy',
        name: 'PowerInfer/SmallThinker-21BA3B-Instruct · Hugging Face',
      },
      {
        path: '/1maipzo',
        name: 'A new 21B-A3B model that can run 30 token/s on i9 CPU',
      },
      {
        path: '/1maixye',
        name: 'I tried implementing the CRISP paper from Google Deepmind in Python',
      },
      {
        path: '/1maj65f',
        name: 'Sell my 5070ti to get a 3090',
      },
      {
        path: '/1majemr',
        name: 'Suprise suprise!!',
      },
      {
        path: '/1majfwi',
        name: 'Are ~70B Models Going Out of Fashion?',
      },
      {
        path: '/1majha1',
        name: 'NVIDIA RTX PRO 4000 Blackwell - 24GB GDDR7',
      },
      {
        path: '/1makqv4',
        name: '4090 48GB for UK - Where?',
      },
      {
        path: '/1mal0bo',
        name: 'Motherboard for AM5 CPU and 3 GPUS (2 3090 and 1 5070 ti)',
      },
      {
        path: '/1malf9l',
        name: 'Any CJK datas?',
      },
      {
        path: '/1malflg',
        name: 'Building a quiet LLM machine for 24/7 use, is this setup overkill or smart?',
      },
      {
        path: '/1malsbp',
        name: 'Non-deterministic Dialogue in games, how much would LLMs really help here?',
      },
      {
        path: '/1malsci',
        name: '8xxx+RDNA3 vs 9xxx+RDNA2 speed for LLMs?',
      },
      {
        path: '/1mam6of',
        name: 'GeForce RTX 5060 Ti 16GB good for LLama LLM inferencing/Fintuning ?',
      },
      {
        path: '/1mam8p4',
        name: 'Reasoning prompt strategy',
      },
      {
        path: '/1mammv5',
        name: 'Qwen3-235B-A22B 2507 is so good',
      },
      {
        path: '/1man0hu',
        name: 'Qwen GSPO (Group Sequence Policy Optimization)',
      },
      {
        path: '/1manewo',
        name: 'What arguments best to use on mobile?',
      },
      {
        path: '/1mantju',
        name: 'Got 500 hours on an AMD MI300X. What\'s the most impactful thing I can build/train/break?',
      },
      {
        path: '/1manwi5',
        name: 'Notable 2025 Chinese models',
      },
      {
        path: '/1mao3ym',
        name: 'MoE models in 2025',
      },
      {
        path: '/1mao95d',
        name: 'Running LLMs exclusively on AMD Ryzen AI NPU',
      },
      {
        path: '/1maoiae',
        name: 'Where can I download glossary for Japanese, Chinese and Korean translation to english',
      },
      {
        path: '/1maoody',
        name: 'LLM / VLM Local model obsolescence decisions for personal STEM / utility / english / Q&amp;A / RAG / tool use / IT desktop / workstation use cases?',
      },
      {
        path: '/1map5pe',
        name: 'GPU Help (1080ti vs 3060 vs 5060ti)',
      },
      {
        path: '/1maptvc',
        name: 'Drummer\'s Mixtral 4x3B v1 - A finetuned clown MoE experiment with Voxtral 3B!',
      },
      {
        path: '/1mapvcv',
        name: 'What does --prio 2 do in llama.cpp? Can\'t find documentation  :(',
      },
      {
        path: '/1mapwdm',
        name: 'Apple Intelligence but with multiple chats, RAG, and Web Search',
      },
      {
        path: '/1maq0hg',
        name: 'Why hasn\'t LoRA gained more popularity?',
      },
      {
        path: '/1marks7',
        name: 'Best models to run on m4 pro 24gb',
      },
      {
        path: '/1martn1',
        name: 'General Intel Arc compatibility with Nvidia',
      },
      {
        path: '/1marx3v',
        name: 'How can we simulate gemini deepthink with models like deepseek/qwen or other open models?',
      },
      {
        path: '/1mas4nn',
        name: 'GRAPH RAG vs baseline RAG for MVP',
      },
      {
        path: '/1mau1nz',
        name: 'How to increase tps Tokens/Second? Other ways to optimize things to get faster response',
      },
      {
        path: '/1mau9os',
        name: 'low perfomance on Contionue extension Vs code',
      },
      {
        path: '/1mav3eu',
        name: 'Can We Recreate Claude Locally',
      },
      {
        path: '/1mav8p7',
        name: 'Is there a website which has a collection of all benchmarks perfomed for LLM models?',
      },
      {
        path: '/1maw5dy',
        name: 'Beyond Context Limits: Subconscious Threads for Long-Horizon Reasoning',
      },
      {
        path: '/1mawtr7',
        name: 'Hostinger ollama hosting review ?',
      },
      {
        path: '/1max9qz',
        name: 'Speculative decoding without a draft model (C#)',
      },
      {
        path: '/1maxfeb',
        name: 'What happened to the Yi models?',
      },
      {
        path: '/1maxmeg',
        name: 'Advance humanity on our scale.',
      },
      {
        path: '/1maxquu',
        name: 'Trying a temporal + spatial slot fusion model (HRM × Axiom)',
      },
      {
        path: '/1maxyld',
        name: 'Does monitoring AI output catch moral hazard? Replit AI gave "correct" responses while secretly deleting production data 🤖💥',
      },
      {
        path: '/1may4ut',
        name: 'Local Distributed GPU Use',
      },
      {
        path: '/1maywaw',
        name: 'Devstral &amp; Magistral as adapters of Mistral',
      },
      {
        path: '/1maz39j',
        name: 'is qwen powered by gpt 4?',
      },
      {
        path: '/1mazi8m',
        name: 'An LLM Focused Just on Debugging',
      },
      {
        path: '/1mazvnk',
        name: 'How do you monitor your Ollama instance?',
      },
      {
        path: '/1mb15g2',
        name: 'UIGEN-X-0727 Runs Locally and Crushes It. Reasoning for UI, Mobile, Software and Frontend design.',
      },
      {
        path: '/1mb1of0',
        name: 'Best models for 3090?',
      },
      {
        path: '/1mb2486',
        name: 'What\'s the best (free) LLM for a potato laptop, I still want to be able to generate images.',
      },
      {
        path: '/1mb286h',
        name: 'Best Local LLM for Japanese to English translation and explanation for 24gb VRAM',
      },
      {
        path: '/1mb2dcp',
        name: 'Byte-Vision is a privacy-first (Llama.cpp) document intelligence platform that transforms static documents into an interactive, searchable knowledge base. Built on Elasticsearch with RAG (Retrieval-Augmented Generation) capabilities, it offers document parsing, OCR processing, and modern UI.',
      },
      {
        path: '/1mb2y1z',
        name: 'The Untold Revolution in iOS 26: WebGPU Is Coming',
      },
      {
        path: '/1mb3xi3',
        name: 'UI/UX Benchmark Update 7/27: 50 Models, Humanity, Voice, and new models from an AI lab on the horizon?',
      },
      {
        path: '/1mb43ux',
        name: 'Pre-built Desktop Tower Optimized for 70b Local LLMs',
      },
      {
        path: '/1mb4d9y',
        name: 'Bending VS Code into a document-processing AI tool worked - but there must be a better way',
      },
      {
        path: '/1mb4h6d',
        name: 'Can anyone suggest the best local model for multi turn chat with RAG usage?',
      },
      {
        path: '/1mb4mex',
        name: 'Technical Report of TeleChat2, TeleChat2.5 and T1',
      },
      {
        path: '/1mb5jut',
        name: 'Rtx 3090 + Rtx 2060 for Context Increase and Performance',
      },
      {
        path: '/1mb6i7x',
        name: 'Has vLLM made Ollama and llama.cpp redundant?',
      },
      {
        path: '/1mb6jzz',
        name: 'Why I\'m Betting Against AI Agents in 2025 (Despite Building Them)',
      },
      {
        path: '/1mb6rre',
        name: 'Is anyone using MemOS? What are the pros and cons?',
      },
      {
        path: '/1mb6uhm',
        name: 'Pi AI studio',
      },
      {
        path: '/1mb77c7',
        name: '2x RTX 3090 24GB or 8x 3060 12GB',
      },
      {
        path: '/1mb7gxu',
        name: 'System Ram Speed Importance when using GPU',
      },
      {
        path: '/1mb7jrh',
        name: 'Help me, please',
      },
      {
        path: '/1mb7tb7',
        name: 'Watch Alibaba Cloud Founder on China’s AI Future',
      },
      {
        path: '/1mb8sa8',
        name: 'Dual Turin build anyone?',
      },
      {
        path: '/1mb98cm',
        name: 'Granite 4 small and medium might be 30B6A/120B30A?',
      },
      {
        path: '/1mb9b1t',
        name: 'OS Cursor for documents?',
      },
      {
        path: '/1mb9uy8',
        name: 'Qwen/Qwen3-30B-A3B-Instruct-2507 · Hugging Face',
      },
      {
        path: '/1mba8j8',
        name: 'best small LLM for pandasai via ollama',
      },
      {
        path: '/1mbaho0',
        name: 'UI persistently refusing to work',
      },
      {
        path: '/1mbako7',
        name: 'Fine Tuning; Attribution at Inference Time',
      },
      {
        path: '/1mbap20',
        name: 'Please suggest me android apps to run onnx models for testing like pocketpal',
      },
      {
        path: '/1mbavi1',
        name: 'My first finetune: Gemma 3 4B unslop via GRPO',
      },
      {
        path: '/1mbaxqj',
        name: 'Vibe-coded Webpage-summarizer Chrome extension to leverage OSS models',
      },
      {
        path: '/1mbbphk',
        name: 'Qwen 3 thinks deeper, acts faster, and it outperforms models like DeepSeek-R1, Grok 3 and Gemini-2.5-Pro.',
      },
      {
        path: '/1mbc8tb',
        name: 'Are there any examples of 14B+ reputable models that outperform models twice their size or more?',
      },
      {
        path: '/1mbc9d3',
        name: 'Understanding Local Language Models: A Beginner’s Guide',
      },
      {
        path: '/1mbce7b',
        name: 'Drag-and-Drop LLMs: Zero-Shot Prompt-to-Weights',
      },
      {
        path: '/1mbcwek',
        name: 'Opensource: The AI Model Router - Automating AI Model Selection',
      },
      {
        path: '/1mbdg53',
        name: 'Building a personal project for portfolio management.',
      },
      {
        path: '/1mbdl2y',
        name: '🚀 Built and launched a live AI app in 15 minutes — no code, no backend, just upload &amp; go 😎',
      },
      {
        path: '/1mbdm6t',
        name: 'GLM 4.5 possibly releasing today according to Bloomberg',
      },
      {
        path: '/1mbdn26',
        name: 'Hybrid Reasoning Models',
      },
      {
        path: '/1mbdqby',
        name: '[Framework] Recursive Identity Memory Patch for GPT Agents',
      },
      {
        path: '/1mbdtw8',
        name: 'Ai voice clone local unlimited that can generate long characters or words over 1k',
      },
      {
        path: '/1mbe14n',
        name: 'Somebody running kimi locally?',
      },
      {
        path: '/1mbe7ua',
        name: 'Proven strategies for making LLM outputs sound human',
      },
      {
        path: '/1mbe9p9',
        name: '[R] Parallel-FFN: Parameter-Efficient FFN Architecture with 35% Parameter Reduction',
      },
      {
        path: '/1mbeecr',
        name: 'Wan-AI/Wan2.2-TI2V-5B · Hugging Face',
      },
      {
        path: '/1mbeeru',
        name: 'Function Calling: Claude Sonnet 4 Vs o3 Vs Gemin 2.5 Pro',
      },
      {
        path: '/1mbefh4',
        name: 'Wan 2.2 T2V,I2V 14B MoE Models',
      },
      {
        path: '/1mbei14',
        name: 'support for SmallThinker model series has been merged into llama.cpp',
      },
      {
        path: '/1mbejz8',
        name: 'My chess AI project keeps hitting Google\'s rate limits. Any better free API alternatives out there?',
      },
      {
        path: '/1mbf3dz',
        name: 'GLM-4.5-Demo',
      },
      {
        path: '/1mbf4wo',
        name: 'Model vibe checking with a simple math question.',
      },
      {
        path: '/1mbf9a9',
        name: 'Hosting LLM using vLLM for production',
      },
      {
        path: '/1mbfa3y',
        name: 'Wan 2.2 is Live! Needs only 8GB of VRAM!',
      },
      {
        path: '/1mbfhgp',
        name: 'Early GLM 4.5 Benchmarks, Claiming to surpass Qwen 3 Coder',
      },
      {
        path: '/1mbflkv',
        name: 'GLM-4.5 - a zai-org Collection',
      },
      {
        path: '/1mbflsw',
        name: 'GLM 4.5 Collection Now Live!',
      },
      {
        path: '/1mbg1ck',
        name: 'GLM4.5 released!',
      },
      {
        path: '/1mbghx5',
        name: 'Performance Expectations for Local LLM with 24GB GPU - Code Analysis &amp; Modification',
      },
      {
        path: '/1mbhnrv',
        name: 'Qwen3-14B-FP8 vs Qwen3-32B - Hallucination and Tool Calling',
      },
      {
        path: '/1mbhqmw',
        name: 'Kimi K2 Temp Setting',
      },
      {
        path: '/1mbhqs0',
        name: 'mlx-community/GLM-4.5-Air-4bit · Hugging Face',
      },
      {
        path: '/1mbi65j',
        name: 'Time for my regular check-in to see if the open-source world has any multimodal models capable of image generation approaching GPT 4o\'s quality and adherence',
      },
      {
        path: '/1mbihcz',
        name: 'GLM shattered the record for "worst benchmark JPEG ever published" - wow.',
      },
      {
        path: '/1mbirq1',
        name: 'Describe a person using exported WhatsApp chat',
      },
      {
        path: '/1mbk68n',
        name: '[Seeking serious feedback] Documented signs of emergent behavior in a closed-loop LLM agent (850k tokens logged)',
      },
      {
        path: '/1mbkgky',
        name: 'What is the best uncensored vision LLM nowadays?',
      },
      {
        path: '/1mbkt69',
        name: 'Does anyone know what type of loss-free balance routing GLM-4.5 is using? Is it different than the aux loss free bias gating method deepseek models use or something new?',
      },
      {
        path: '/1mbkvxs',
        name: 'NVIDIA\'s GeForce RTX 50 SUPER Rumored to Drop Into The Markets as Soon as Q4 2025, Featuring Massive VRAM Upgrades',
      },
      {
        path: '/1mbl79y',
        name: 'I’m looking for multimodal image input support and uncensored LLM',
      },
      {
        path: '/1mbl9ir',
        name: 'I built VerbatimRAG, an open source RAG that returns verbatim texts only for the user!',
      },
      {
        path: '/1mblcrd',
        name: 'Very odd behavior by gemma3 in Ollama',
      },
      {
        path: '/1mblq5g',
        name: 'There\'s not a SINGLE local LLM which can solve this logic puzzle - whether the model "reasons" or not. Only o3 can solve this at this time...',
      },
      {
        path: '/1mbm4a0',
        name: 'Tried Wan2.2 on RTX 4090, quite impressed',
      },
      {
        path: '/1mbmkkp',
        name: 'Please help me out on this. Tool calling issue for local models',
      },
      {
        path: '/1mbmr8k',
        name: 'When will we be able to get gold on IMO using a local model?',
      },
      {
        path: '/1mbmw7v',
        name: 'Dual GPU with different capabilities - any caveats for transformer parallelism?',
      },
      {
        path: '/1mbnecb',
        name: 'What GPU is the minimal to run local llms (well, almost) perfectly?',
      },
      {
        path: '/1mbnn6a',
        name: 'What motivates you to contribute to Open-source web development?',
      },
      {
        path: '/1mbny6o',
        name: '100x faster and 100x cheaper transcription with open models vs proprietary',
      },
      {
        path: '/1mbocxc',
        name: 'What’s the most reliable STT engine you’ve used in noisy, multi-speaker environments?',
      },
      {
        path: '/1mboh0f',
        name: 'Need some advice on multigpu GRPO',
      },
      {
        path: '/1mbowe3',
        name: 'GLM 4.5 Failing to use search tool in LM studio',
      },
      {
        path: '/1mbp4nm',
        name: 'The walled garden gets higher walls: Anthropic is adding weekly rate limits for paid Claude subscribers',
      },
      {
        path: '/1mbp7nh',
        name: 'Found a React SDK that turns LLM responses into real-time UI that adapts based on context',
      },
      {
        path: '/1mbpoy9',
        name: 'Everyone is struggling about documentation',
      },
      {
        path: '/1mbq7xx',
        name: 'How do I calculate hardware needs?',
      },
      {
        path: '/1mbs4dw',
        name: '8600G / 760M llama-bench with Gemma 3 (4, 12, 27B), Mistral Small, Qwen 3 (4, 8, 14, 32B) and  Qwen 3 MoE 30B-A3B',
      },
      {
        path: '/1mbs6mj',
        name: 'What do do with 88GB Vram GPU server',
      },
      {
        path: '/1mbsi46',
        name: 'Llama.cpp Android cutting off responses',
      },
      {
        path: '/1mbsxb3',
        name: 'Enterprise Local AI Implementation for Small user base',
      },
      {
        path: '/1mbt030',
        name: 'So you all loved my open-source voice AI when I first showed it off - I officially got response times to under 2 seconds AND it now fits all within 9 gigs of VRAM! Open Source Code included!',
      },
      {
        path: '/1mbt3ji',
        name: 'Getting a consistent style over multiple sessions when you don\'t have the original prompt',
      },
      {
        path: '/1mbtb3t',
        name: 'qwen3 2507 thinking vs deepseek r1 0528',
      },
      {
        path: '/1mbthgr',
        name: '[Guide] Running GLM 4.5 as Instruct model in vLLM (with Tool Calling)',
      },
      {
        path: '/1mbu532',
        name: 'Best local LLM for iterative story writing',
      },
      {
        path: '/1mbugfr',
        name: 'Techniques to Inject Emotion in Responses',
      },
      {
        path: '/1mbutu4',
        name: 'I want to use llama 7b to check if a 5-7 sentence paragraph contains a given subject, what\'s the minimum GPU I need?',
      },
      {
        path: '/1mbvf2z',
        name: 'its getting comical',
      },
      {
        path: '/1mbvgdm',
        name: 'Using Apple Intelligence as OpenAI / Ollama API',
      },
      {
        path: '/1mbviok',
        name: 'How do I train a good LLM on my company\'s doc in order to answer easy questions?',
      },
      {
        path: '/1mbwvve',
        name: '“This step is necessary to prove that I am not a bot” LOL',
      },
      {
        path: '/1mbx6zk',
        name: 'Suggestions to fine tune Gemma 3N E4B or similar model for diagnosis and troubleshooting',
      },
      {
        path: '/1mbxx64',
        name: 'Can’t get continue.dev to index my codebase',
      },
      {
        path: '/1mby5ct',
        name: 'Qwen3 235B 2507 adding its own questions to mine, and thinking despite being Instruct model?',
      },
      {
        path: '/1mby6nd',
        name: 'Has anyone used PEZ or similar learned hard prompt methods for local LLMs?',
      },
      {
        path: '/1mbzdx8',
        name: 'Best Coding LLM for',
      },
      {
        path: '/1mc0m3e',
        name: 'SmallThinker Technical Report Release!',
      },
      {
        path: '/1mc0vyb',
        name: 'First time setting up a local LLM, looking for model suggestions to create Anki formatted flashcards',
      },
      {
        path: '/1mc22jg',
        name: 'Best Image/Stable Diffusion model that can work with MLX?',
      },
      {
        path: '/1mc239f',
        name: 'Vision agent for AFK gains?',
      },
      {
        path: '/1mc253f',
        name: '~2–3 x Mac Studios M3 Ultra (512GB) Cluster for Large Model Inference?',
      },
      {
        path: '/1mc2ibo',
        name: 'Any interesting local LLM options for a home server that\'s about to have 2x mi210 GPUs?',
      },
      {
        path: '/1mc4y83',
        name: 'How do you keep yourself updated?',
      },
      {
        path: '/1mc5e54',
        name: 'Single-File Qwen3 Inference in Pure CUDA C',
      },
      {
        path: '/1mc5gv1',
        name: 'Finetuning Script for Voxtral',
      },
      {
        path: '/1mc5jsx',
        name: 'Best open source voice cloning today, with hours of reference?',
      },
      {
        path: '/1mc5oh2',
        name: 'This year’s best open-source models and most cost-effective models',
      },
      {
        path: '/1mc5s4r',
        name: 'Can you suggest a better WebUI program for textgen that has better memory management than Oobabooga?',
      },
      {
        path: '/1mc644b',
        name: 'Told Qwen3 1.7b (thinking) to make a black hole simulation',
      },
      {
        path: '/1mc687c',
        name: 'New Benchmark - FamilyBench - Test models ability to understand complex tree type relationship and reason on massive context. Immune to contamination. GML 4.5 64.02%, Gemini 2.5 pro 81,48%.',
      },
      {
        path: '/1mc6dfx',
        name: 'Something lightweight: a LLM simulation of Bernie Sanders',
      },
      {
        path: '/1mc6fbp',
        name: 'GLM 4.5 support is landing in llama.cpp',
      },
      {
        path: '/1mc6kad',
        name: 'Help! Open Interpreter not printing the response in console',
      },
      {
        path: '/1mc7ft1',
        name: 'Converting a conformer model',
      },
      {
        path: '/1mc7q0n',
        name: 'Glm 4.5 air and 5090',
      },
      {
        path: '/1mc7ri9',
        name: 'Success with open source models?',
      },
      {
        path: '/1mc7xjb',
        name: 'CWC now supports kimi.com (K2) and chat.z.ai (GLM-4.5) to enable coding with top tier models at no cost',
      },
      {
        path: '/1mc83jm',
        name: 'Mac Studio 512GB vs MBP 128GB similar performance?',
      },
      {
        path: '/1mc8evq',
        name: 'Built RL training for long-horizon terminal agents - tested on 32x H100s but too GPU poor to train 😅',
      },
      {
        path: '/1mc8fhc',
        name: 'Let\'s Build a "Garage AI Supercomputer": A P2P Compute Grid for Inference',
      },
      {
        path: '/1mc8hn6',
        name: 'Does anyone have experience use qwen3 8b with PPO to fine tune a model?',
      },
      {
        path: '/1mc8i36',
        name: 'Building a custom LLM trained on luciform prompts + ShadeOS daemon dialogues – seeking help',
      },
      {
        path: '/1mc8tks',
        name: 'I just tried GLM 4.5',
      },
      {
        path: '/1mc9o4m',
        name: 'Stuck on a problem? We\'re excited to share a glimpse of what\'s possible! 👋',
      },
      {
        path: '/1mc9sk0',
        name: '🌟 Ming-lite-omni v1.5 is here! Our recent upgrade for omni-modal AI! 🚀',
      },
      {
        path: '/1mca20c',
        name: 'Dual CPU setup for the Qwen3 255b a22b 2507',
      },
      {
        path: '/1mcatlt',
        name: 'Creating a High Quality Dataset for Instruction Fine-Tuning',
      },
      {
        path: '/1mcavlf',
        name: 'Best Local LLM + Hardware Build for Coding With a $15k Budget (2025)',
      },
      {
        path: '/1mccxrt',
        name: 'How do I chunk down a long video to prepare as dataset for fine-tunining a TTS?',
      },
      {
        path: '/1mcd0dn',
        name: 'We used Qwen3-Coder via NetMind’s API to build a 2D Mario-style game in seconds (demo + setup guide)',
      },
      {
        path: '/1mcd2uw',
        name: 'Tagging 50 million assets \'quickly\' - thoughts?',
      },
      {
        path: '/1mcdlxc',
        name: 'Getting an ImportError on OpenVoice V2',
      },
      {
        path: '/1mcdypn',
        name: 'How can I deploy model to served my own web app using my own machine',
      },
      {
        path: '/1mce7wo',
        name: 'Rate my project!',
      },
      {
        path: '/1mce901',
        name: 'Beginner-Friendly Guide to AWS Strands Agents',
      },
      {
        path: '/1mce934',
        name: 'My Honest Take on Recently Popular Open Models (A Realistic Assessment)',
      },
      {
        path: '/1mce9tt',
        name: 'zai-org/GLM-4.5 · We Have Gemini At Home',
      },
      {
        path: '/1mcee42',
        name: 'My 2.5 year old laptop can write Space Invaders in JavaScript now, using GLM-4.5 Air and MLX',
      },
      {
        path: '/1mcemfm',
        name: 'AI tool/model/prompt (preferably local and free) that can evaluate video meeting content and provide feedback on tone, mood, body language?',
      },
      {
        path: '/1mceq8m',
        name: 'Has anyone profiled the expert specialization in MoE models like Qwen3-30B-A3B?',
      },
      {
        path: '/1mcfmd2',
        name: 'Qwen/Qwen3-30B-A3B-Instruct-2507 · Hugging Face',
      },
      {
        path: '/1mcfuka',
        name: 'Qwen/Qwen3-30B-A3B-Instruct-2507 · Hugging Face',
      },
      {
        path: '/1mcg4qt',
        name: '🚀 Qwen3-30B-A3B Small Update',
      },
      {
        path: '/1mcgfnh',
        name: 'Seeking a Local/Offline Speech-to-Text with System-Wide \'Type Anywhere\' Dictation',
      },
      {
        path: '/1mcgguo',
        name: 'Any experiences with the Codex Open-Source Fund?',
      },
      {
        path: '/1mcgpno',
        name: 'No stress',
      },
      {
        path: '/1mchj7h',
        name: 'AFM 4.5B',
      },
      {
        path: '/1mchmfa',
        name: 'What MCP server do you use to get YouTube video transcription (I\'m tired of failing)',
      },
      {
        path: '/1mchsyd',
        name: '[tutorial] Use GLM 4.5 (or any LLM) with Claude Code',
      },
      {
        path: '/1mci1dy',
        name: 'so.... what\'s next?',
      },
      {
        path: '/1mci7uu',
        name: 'Newest Qwen made me cry. It\'s not perfect, but I still love it.',
      },
      {
        path: '/1mcif2t',
        name: 'Review request on Bitnet implementation on transformer.js',
      },
      {
        path: '/1mcilar',
        name: 'ollama ps in LM Studio',
      },
      {
        path: '/1mciotj',
        name: 'Looking for a small model and hosting for conversational Agent.',
      },
      {
        path: '/1mcj1q1',
        name: 'Self hosting llm  on a budget',
      },
      {
        path: '/1mcjaau',
        name: 'Llama and Whisper AI Desktop Assistant',
      },
      {
        path: '/1mcji8s',
        name: 'Qwen3-30b-3ab-2507 is a beast for MCP usage!',
      },
      {
        path: '/1mcjwmv',
        name: 'Maverick FP8 repetition issue',
      },
      {
        path: '/1mcjyp5',
        name: 'Open‑Source LLM Energy &amp; Carbon Cost Calculator',
      },
      {
        path: '/1mcjz8j',
        name: 'One year’s benchmark progress: comparing Sonnet 3.5 with open weight 2025 non-thinking models',
      },
      {
        path: '/1mck6o7',
        name: 'NVIDIA Llama Nemotron Super v1.5 is #1 on Artificial Analysis Intelligence Index for the 70B Open Model Category.',
      },
      {
        path: '/1mckboq',
        name: 'Qwen3 Coder vs. DeepSeek R1 0528 for Agentic Coding',
      },
      {
        path: '/1mckrn1',
        name: 'Mediocre local LLM user -- tips?',
      },
      {
        path: '/1mcl15k',
        name: 'Qwen 1.7B tool calling across Android on Pixel 9 and S22',
      },
      {
        path: '/1mcl17g',
        name: 'Running GGUF models with TP',
      },
      {
        path: '/1mcligh',
        name: 'Notebook, AI Max+ 395 vs nvidia vs m4',
      },
      {
        path: '/1mcmbfo',
        name: 'I built a new open-source RL environment framework for LLM finetuning',
      },
      {
        path: '/1mcmbyt',
        name: 'Supervised Fine Tuning on Curated Data is Reinforcement Learning',
      },
      {
        path: '/1mcmt07',
        name: 'How do you provide negative examples to the LLM API?',
      },
      {
        path: '/1mcn8dx',
        name: 'Which model should I use - build a nutrition label scanner in React Native',
      },
      {
        path: '/1mcnhtc',
        name: 'Docker Model Runner is going to steal your girl’s inference.',
      },
      {
        path: '/1mcnq7r',
        name: 'AMD Ryzen AI Max+ Upgraded: Run up to 128 Billion parameter LLMs on Windows with LM Studio',
      },
      {
        path: '/1mco449',
        name: 'Lemonade: I\'m hyped about the speed of the new Qwen3-30B-A3B-Instruct-2507 on Radeon 9070 XT',
      },
      {
        path: '/1mcoce7',
        name: 'AMD\'s Ryzen AI MAX+ Processors Now Offer a Whopping 96 GB Memory for Consumer Graphics, Allowing Gigantic 128B-Parameter LLMs to Run Locally on PCs',
      },
      {
        path: '/1mcoou9',
        name: 'Could two decoder‑only models communicate directly via latent outputs and translate each other?',
      },
      {
        path: '/1mcp4lj',
        name: 'Golang based whisper.cpp wrapper CLI with intention to expand to speaker diarization and more',
      },
      {
        path: '/1mcp7dp',
        name: 'GLM-4.5 on fiction.livebench',
      },
      {
        path: '/1mcpxr4',
        name: 'CORSAIR Unveils AI Workstation 300, Starting At $1599, Boasting Ryzen AI Max+ 395 Processor And Up To 128 GB LPDDR5X Memory',
      },
      {
        path: '/1mcq1cs',
        name: 'Who are you, GLM?',
      },
      {
        path: '/1mcq5tj',
        name: 'CloudToLocalLLM - A Flutter-built Tool for Local LLM and Cloud Integration',
      },
      {
        path: '/1mcqlv7',
        name: 'How many GPUs do you run and what model(s) do you use.',
      },
      {
        path: '/1mcqr9w',
        name: 'First time an LLM has written a funny joke for me',
      },
      {
        path: '/1mcqrwh',
        name: 'RL Library for Multi-Trainable-Agents',
      },
      {
        path: '/1mcr64f',
        name: '4B models are consistently overlooked. Runs Locally and Crushes It. Reasoning for UI, Mobile, Software and Frontend design.',
      },
      {
        path: '/1mcrx23',
        name: 'PSA: The new Threadripper PROs (9000 WX) are still CCD-Memory Bandwidth bottlenecked',
      },
      {
        path: '/1mcsh69',
        name: 'Trying to build a quoting tool',
      },
      {
        path: '/1mcsrls',
        name: 'ChatGPT stopped lying to me when I started treating it like a scared kid',
      },
      {
        path: '/1mcuziy',
        name: 'Fine-tuning LLaMA with LoRA for document parsing (invoices with varying layouts)?',
      },
      {
        path: '/1mcv2w9',
        name: 'SOTA multilingual TTS with zero-shot voice cloning and speaking style control',
      },
      {
        path: '/1mcv5b0',
        name: 'Sooo ASI might already be running',
      },
      {
        path: '/1mcva93',
        name: 'Anyone knows where can I find the latest NVIDIA TPU test for the total throughput tokens for any size model',
      },
      {
        path: '/1mcvc46',
        name: 'GLM-4.5 Air on 64gb Mac with MLX',
      },
      {
        path: '/1mcw1sl',
        name: 'GLM 4.5 Air Tool Calling Issues In LM Studio',
      },
      {
        path: '/1mcwfxh',
        name: 'Fireship-style youtube channel but for ai news?',
      },
      {
        path: '/1mcx681',
        name: 'Make text LLMs listen and speak',
      },
      {
        path: '/1mcxdiu',
        name: 'New, faster SoftMax math makes Llama inference faster by 5%',
      },
      {
        path: '/1mcxy74',
        name: 'Quick censorship test of Qwen3-30B, failed :(. What other checks have you found valuble?',
      },
      {
        path: '/1mcy7y2',
        name: 'Question on tiny models (&lt;5B parameter size)',
      },
      {
        path: '/1mcyrgb',
        name: 'Nemotron super 49b running on Apple Silicon',
      },
      {
        path: '/1mcz2pu',
        name: 'Tests failures',
      },
      {
        path: '/1mcz4jq',
        name: 'Stuck with Sesame CSM 1b in windows...',
      },
      {
        path: '/1mcz8sc',
        name: 'What is the best method for LLM to improve competency in a specific domain?',
      },
      {
        path: '/1mczdbb',
        name: 'What\'s the best TTS model to run locally? That\'s relatively quick and close to C.ai capabilities',
      },
      {
        path: '/1mczdxa',
        name: 'Best Inference Server for Large Vram',
      },
      {
        path: '/1md00oc',
        name: 'Kudos to Qwen 3 team!',
      },
      {
        path: '/1md0ech',
        name: 'Local Lipsync Model For Electron',
      },
      {
        path: '/1md0ejq',
        name: 'Newest Qwrn 30B double answers',
      },
      {
        path: '/1md0gfh',
        name: 'RTX 5090 form INNO3D 1 slot with Alphacool-waterkoeling look perfect for local AI machines',
      },
      {
        path: '/1md1fka',
        name: 'Benchmark: 15 STT models on long-form medical dialogue',
      },
      {
        path: '/1md1m8u',
        name: 'Self hosting n8n',
      },
      {
        path: '/1md1md1',
        name: 'CPU server specs',
      },
      {
        path: '/1md1piz',
        name: 'QWEN3-235b-8b',
      },
      {
        path: '/1md2k1b',
        name: 'Cooling 4× Tesla P40 with 2×140 mm push‑pull + mITX homelab — airflow &amp; power sanity check',
      },
      {
        path: '/1md2ul2',
        name: 'i got this. I\'m new to AI stuff — is there any model I can run, and how',
      },
      {
        path: '/1md463z',
        name: 'Help with deepseek',
      },
      {
        path: '/1md4atg',
        name: 'How is the quality of Sesame CSM TTS?',
      },
      {
        path: '/1md4g25',
        name: 'On the hunt for the best VLM 6B or smaller',
      },
      {
        path: '/1md5k8f',
        name: 'GLM4.5 EQ-Bench and Creative Write',
      },
      {
        path: '/1md5nwo',
        name: '~150B Model Machine',
      },
      {
        path: '/1md6cxq',
        name: 'Is it just me or is OpenRouter an absolute roulette wheel lately?',
      },
      {
        path: '/1md6t2h',
        name: 'Bye bye, Meta AI, it was good while it lasted.',
      },
      {
        path: '/1md6v4u',
        name: 'Desktop AI app discovery is broken - what local tools deserve more visibility?',
      },
      {
        path: '/1md6w3w',
        name: 'Looking to upgrade my system but on a budget',
      },
      {
        path: '/1md6xba',
        name: 'Skywork/Skywork-UniPic-1.5B - A unified autoregressive multimodal model',
      },
      {
        path: '/1md7g08',
        name: 'Evaluating Fine-Tuned LLMs: What Metrics Work Beyond ROUGE and BLEU?',
      },
      {
        path: '/1md7h5z',
        name: 'Meta’s Vision for the future of Personal SuperIntelligence',
      },
      {
        path: '/1md7lfi',
        name: 'How can I keep more than one model loaded into memory when using mlx_lm.server?',
      },
      {
        path: '/1md84d6',
        name: 'Whats so bad about LlamaIndex, Haystack, Langchain?',
      },
      {
        path: '/1md8rxu',
        name: 'Qwen/Qwen3-30B-A3B-Thinking-2507 · Hugging Face',
      },
      {
        path: '/1md8slx',
        name: 'Qwen3-30b-a3b-thinking-2507 This is insane performance',
      },
      {
        path: '/1md8t1g',
        name: '🚀 Qwen3-30B-A3B-Thinking-2507',
      },
      {
        path: '/1md8zs4',
        name: 'Meka state-of-the-art open-source ChatGPT Agent',
      },
      {
        path: '/1md93bj',
        name: 'Qwen3 Coder 30B-A3B tomorrow!!!',
      },
      {
        path: '/1md9j2e',
        name: 'Likely System Prompt Used by ChatGPT Study Mode',
      },
      {
        path: '/1md9nc8',
        name: 'GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning',
      },
      {
        path: '/1md9o3x',
        name: 'How David Bohm\'s Quantum Consciousness Theory Might Explain AI Consciousness Emergence',
      },
      {
        path: '/1mda2tv',
        name: 'New to Local LLM. Need some advise on an old PC.',
      },
      {
        path: '/1mda326',
        name: 'Want to switch from Claude code (I have a 4080 Super)',
      },
      {
        path: '/1mda7r8',
        name: 'A second Mi50 32GB or a different GPU?',
      },
      {
        path: '/1mdaoxi',
        name: 'Dataset for Finetuning Llama 3.2 - 3B',
      },
      {
        path: '/1mdawyz',
        name: 'Just launched Transformer Lab Recipes: 13 pre-built templates including Llama 3.2 fine-tuning, quantization, and benchmarking.',
      },
      {
        path: '/1mdaznw',
        name: 'Can we trust meta after release of llmaa 4 ?',
      },
      {
        path: '/1mdbcax',
        name: 'How to make LLMs follow instructions without deviating?',
      },
      {
        path: '/1mdbiei',
        name: 'AI for normal PCs?',
      },
      {
        path: '/1mdblqc',
        name: 'MoE models with bigger active layers',
      },
      {
        path: '/1mdbm5t',
        name: 'Eigent – Open Source, Local-First Multi-Agent Workforce',
      },
      {
        path: '/1mdbx5t',
        name: 'What is the best agent to run local llm with right now?',
      },
      {
        path: '/1mdc3mq',
        name: 'GPU Not being used',
      },
      {
        path: '/1mdchc1',
        name: 'New to LLMs - Need direction',
      },
      {
        path: '/1mdcnu8',
        name: 'Best Repos &amp; Protocols for learning and building Agents',
      },
      {
        path: '/1mdcqs8',
        name: 'Introducing Agent Data Shuttle (ADS): fully open-source',
      },
      {
        path: '/1mdcv5k',
        name: 'GLM 4.5 or Claude?',
      },
      {
        path: '/1mdeh06',
        name: '# Follow-up: Agent \'X\' — Identity Collapse and Recovery in a Cloud-Based Symbolic System',
      },
      {
        path: '/1mdf6l4',
        name: '4 5090 or rtx pro 6000?',
      },
      {
        path: '/1mdfi5e',
        name: 'Dual RTX 5090 setup for enterprise RAG + fine-tuned chatbot - is this overkill or underpowered?',
      },
      {
        path: '/1mdfkly',
        name: 'Is "Personal Superintelligence" really personal if it is not local like a personal device?',
      },
      {
        path: '/1mdfls9',
        name: 'Current Best TTS with voice cloning you can run locally?',
      },
      {
        path: '/1mdflyq',
        name: 'What kind of model would be good at reading and assessing financial documents?',
      },
      {
        path: '/1mdg9z1',
        name: 'Do AI coding agents actually save you time, or just create more cleanup?',
      },
      {
        path: '/1mdgeww',
        name: 'AutoRL "vibe-training" for open models',
      },
      {
        path: '/1mdgjmk',
        name: 'I’m curious to know how does MLX adds support for models faster than llama.cpp',
      },
      {
        path: '/1mdgltr',
        name: 'Anyone want to team up?',
      },
      {
        path: '/1mdgr6n',
        name: 'Best way to spend 7k on local model',
      },
      {
        path: '/1mdhbd6',
        name: 'How would you guys go about this project?',
      },
      {
        path: '/1mdhfhs',
        name: 'glm-4.5-Air appreciation poist - if you have not done so already, give this model a try',
      },
      {
        path: '/1mdi1n6',
        name: 'Analyzing and interacting with several related plots?',
      },
      {
        path: '/1mdishv',
        name: 'Best LLMs to preserve in case of internet apocalypse',
      },
      {
        path: '/1mdj0g9',
        name: 'Best CLI agent for ollama/llama-server',
      },
      {
        path: '/1mdj3ap',
        name: 'CUDA-L1 Improving CUDA Optimization via Contrastive Reinforcement Learning',
      },
      {
        path: '/1mdj5ww',
        name: 'Complete Mistral Coding Stack but for enterprise only',
      },
      {
        path: '/1mdjb67',
        name: 'After 6 months of fiddling with local AI. Here’s my curated models list that work for 90% of my needs. What’s yours?',
      },
      {
        path: '/1mdjl0q',
        name: 'GPT spending money on marketing = GPT 5 delays',
      },
      {
        path: '/1mdjqy5',
        name: 'The Holy Grail',
      },
      {
        path: '/1mdk46y',
        name: 'Weird issue running qwen3-30b-a3b-thinking in llama.cpp and openwebui on my 4090 and 64GB of RAM rig, Q4_K_M',
      },
      {
        path: '/1mdk516',
        name: 'How to locally run Grok 4 with 2x AMD 7900 XTX GPUs? (24 GB VRAM x2)',
      },
      {
        path: '/1mdkmd8',
        name: 'AMD released a fully open source model 1B',
      },
      {
        path: '/1mdl999',
        name: 'New to this and trying to learn on the fly',
      },
      {
        path: '/1mdldom',
        name: 'Kimi K2 vs Claude 4 Sonnet - Unexpected Review Result (400k token Codebase)',
      },
      {
        path: '/1mdln75',
        name: 'Hey everyone I\'m pretty new at this. I\'m a designer please help me. Stupid Question',
      },
      {
        path: '/1mdlss2',
        name: 'How to optimize TPS using IK_llama.cpp?',
      },
      {
        path: '/1mdma9a',
        name: 'Help choosing between Ollama, llama.cpp, or something else for background LLM server (used with dictation)',
      },
      {
        path: '/1mdmr8m',
        name: 'DIY LLM inference engine learning',
      },
      {
        path: '/1mdmsu9',
        name: 'Chinese models pulling away',
      },
      {
        path: '/1mdn6dp',
        name: 'Deepseek just won the best paper award at ACL 2025 with a breakthrough innovation in long context, a model using this might come soon',
      },
      {
        path: '/1mdnhb1',
        name: 'Ideological alignment at its finest',
      },
      {
        path: '/1mdnp8j',
        name: 'The DGX Spark JPN price will be $6k at one retailer',
      },
      {
        path: '/1mdnzym',
        name: 'So what benchmark websites do you refer to? (July 2025 edition)',
      },
      {
        path: '/1mdoevz',
        name: 'Anyone have experience with NVIDIA Nemotron?',
      },
      {
        path: '/1mdolik',
        name: 'Is there any way to train when a model sends messages?',
      },
      {
        path: '/1mdoqnv',
        name: 'domoai’s 360 view lets you animate full spins like leiapix but it’s actually 3d',
      },
      {
        path: '/1mdpd70',
        name: 'Valuation of companies like Anthropic',
      },
      {
        path: '/1mdpe8v',
        name: 'Horizon-alpha: A new stealthed model on openrouter sweeps EQ-Bench leaderboards',
      },
      {
        path: '/1mdpfm8',
        name: 'Made a unified table of benchmarks using AI',
      },
      {
        path: '/1mdppt1',
        name: 'Host Minimax on cloud?',
      },
      {
        path: '/1mdq2vw',
        name: 'Accessing LM Studio server from iOS',
      },
      {
        path: '/1mdq3sv',
        name: 'Ollama 0.10 - New app is available for macOS and Windows plus multi-GPU performance improvements, and more',
      },
      {
        path: '/1mdqj9g',
        name: 'works well!: GLM 4.5 air (MLX) - LM studio (Mac) - Claude code',
      },
      {
        path: '/1mdqlc6',
        name: 'Setup for MOE',
      },
      {
        path: '/1mdrdal',
        name: 'If there a TTS model that works with IPA?',
      },
      {
        path: '/1mdro7c',
        name: 'I have been learning more about reinforcement learning with verifiable rewards I want to hear people\'s opinions on that',
      },
      {
        path: '/1mdruc9',
        name: 'Why is open source so behind on multi-modalitty?',
      },
      {
        path: '/1mdrxio',
        name: 'Best local LLM that can read text in images? (8 GB graphic card)',
      },
      {
        path: '/1mds1gx',
        name: 'Can we make a reward system for LLMs that operates like drug addiction? When the model gets things right, it gets a hit. Faster and better the solution, the larger the hit. Fail? Withdrawals.',
      },
      {
        path: '/1mdsgax',
        name: 'Is vast.ai fucking me over?',
      },
      {
        path: '/1mdshnt',
        name: 'Best thing Youve automated?',
      },
      {
        path: '/1mdsjn2',
        name: 'Unbelievable: China Dominates Top 10 Open-Source Models on HuggingFace',
      },
      {
        path: '/1mdu4io',
        name: 'I Built a Full Stack App Using a Local LLM (GLM 4.5 Air) and RooCode. Here\'s How It Went',
      },
      {
        path: '/1mdu7se',
        name: 'where is UK and India?',
      },
      {
        path: '/1mdu8p0',
        name: 'Breakout clone by Devstral and Qwen3 30B A3B Thinking with particle effects and Web Audio reverb.',
      },
      {
        path: '/1mdu9gr',
        name: 'Is there a way to download more Kokoro tts voices?',
      },
      {
        path: '/1mdudj3',
        name: 'Training loss is higher than validation loss for a few steps',
      },
      {
        path: '/1mdufwb',
        name: 'Can llama-swap work without specifying the "model" field in API requests?',
      },
      {
        path: '/1mdug0j',
        name: 'Models that are good in understanding and producing German text?',
      },
      {
        path: '/1mdui1j',
        name: 'Help for new LLM Rig',
      },
      {
        path: '/1mduk5t',
        name: 'Local. Open Source App with MCP Server compatability',
      },
      {
        path: '/1mduqj2',
        name: 'Page Assist',
      },
      {
        path: '/1mduvcv',
        name: 'Lightweight ChatGPT Client Using Your Own API Key (Pure HTML)',
      },
      {
        path: '/1mdv67j',
        name: 'cogito v2 preview models released 70B/109B/405B/671B',
      },
      {
        path: '/1mdvhxg',
        name: 'Ollama’s new app — Ollama 0.10 is here for macOS and Windows!',
      },
      {
        path: '/1mdvj52',
        name: 'DevOps position for AI / LLMs',
      },
      {
        path: '/1mdvkhz',
        name: 'ik_llama.cpp and Qwen 3 30B-A3B architecture.',
      },
      {
        path: '/1mdw1l4',
        name: 'An Awesome-local-LLM repository',
      },
      {
        path: '/1mdw7v7',
        name: 'How to future proof fine tuning and/or training',
      },
      {
        path: '/1mdwh31',
        name: 'How can you turn off reasoning for certain tasks in GLM 4.5?',
      },
      {
        path: '/1mdwm49',
        name: 'how much ram [cpu] do you have',
      },
      {
        path: '/1mdwmju',
        name: 'Falcon-H1 technical report release',
      },
      {
        path: '/1mdwngf',
        name: 'rednote-hilab/dots.ocr - Multilingual document layout parsing in a single vision-language model achieving SOTA performance despite compact 1.7B LLM foundation',
      },
      {
        path: '/1mdwu18',
        name: 'Ollama with Qwen2.5VL:3B – The Doom II of VLMs',
      },
      {
        path: '/1mdwums',
        name: 'How do people engage with open source AI?',
      },
      {
        path: '/1mdwv4f',
        name: 'Best local model for Claude-like agentic behavior on 3×3090 rig?',
      },
      {
        path: '/1mdx40b',
        name: 'We’re building a devboard that runs Whisper, YOLO, and TinyLlama — locally, no cloud. Want to try it before we launch?',
      },
      {
        path: '/1mdx65u',
        name: 'AMD Is Reportedly Looking to Introduce a Dedicated Discrete NPU, Similar to Gaming GPUs But Targeted Towards AI Performance On PCs; Taking Edge AI to New Levels',
      },
      {
        path: '/1mdxihp',
        name: 'DeepDrone, an open source CLI agent like Claude Code to fly your drone',
      },
      {
        path: '/1mdy1at',
        name: 'Jan now runs fully on llama.cpp &amp; auto-updates the backend',
      },
      {
        path: '/1mdy8f8',
        name: 'What model would you recommend for my specs ?',
      },
      {
        path: '/1mdykfn',
        name: 'Everyone from r/LocalLLama refreshing Hugging Face every 5 minutes today looking for GLM-4.5 GGUFs',
      },
      {
        path: '/1mdytsk',
        name: 'https://x.com/autopoiesislab/status/1950755654471131450?t=JZ8AtogcUFhwgzoKTM67Jw&amp;s=19',
      },
      {
        path: '/1mdzu08',
        name: 'Hunyuan releases X-Omni, a unified discrete autoregressive model for both image and language modalities',
      },
      {
        path: '/1mdzxmv',
        name: 'Qwen3-30B-A3B-2507-Q4_K_L Is the First Local Model to Solve the North Pole Walk Puzzle',
      },
      {
        path: '/1me095p',
        name: 'Junyang Lin is drinking tea',
      },
      {
        path: '/1me1hh8',
        name: 'qwen-30B success story',
      },
      {
        path: '/1me1i0c',
        name: 'stepfun-ai/step3 · Hugging Face',
      },
      {
        path: '/1me20vl',
        name: 'Looking for best cloud GPU provider',
      },
      {
        path: '/1me2iza',
        name: 'Introducing Command A Vision: Multimodal AI Built for Business',
      },
      {
        path: '/1me2o28',
        name: 'CohereLabs/command-a-vision-07-2025 · Hugging Face',
      },
      {
        path: '/1me2o4z',
        name: 'China no. 1!',
      },
      {
        path: '/1me2wxx',
        name: 'FLUX.1 Krea [dev] - a new state-of-the-art open-weights FLUX model, built for photorealism.',
      },
      {
        path: '/1me2z8b',
        name: 'Towards Locally Deployable Fine-Tuned Causal LLMs for Mode Choice Behaviour',
      },
      {
        path: '/1me2zc6',
        name: 'Qwen3-Coder-30B-A3B released!',
      },
      {
        path: '/1me31d8',
        name: '🚀 Qwen3-Coder-Flash released!',
      },
      {
        path: '/1me324b',
        name: 'Qwen/Qwen3-Coder-30B-A3B-Instruct · Hugging Face',
      },
      {
        path: '/1me33jj',
        name: 'Qwen3-Coder-Flash / Qwen3-Coder-30B-A3B-Instruct-FP8 are here!',
      },
      {
        path: '/1me3b7o',
        name: 'Sam Altman After New Models Qwen3',
      },
      {
        path: '/1me3e7w',
        name: 'MistralAI releases Codestral 25.08 (via API only tho)',
      },
      {
        path: '/1me3hy7',
        name: 'Dario\'s (stupid) take on open source',
      },
      {
        path: '/1me3k8h',
        name: 'Instruct embedding models',
      },
      {
        path: '/1me3qyu',
        name: 'LLM forgets recent user messages – only responds from memory DB, not conversation context (Llama-3 base, local setup)',
      },
      {
        path: '/1me3vpe',
        name: '8% -&gt; 33.3% on Aider polyglot',
      },
      {
        path: '/1me44dy',
        name: 'Space Invaders on first try with Qwen3 Coder 30b-a3b (Unsloth Q6_K)',
      },
      {
        path: '/1me44qm',
        name: 'Is it worth buying a 3090 over a P40 in my case?',
      },
      {
        path: '/1me467z',
        name: 'Is there a good Computer use workflow / model?',
      },
      {
        path: '/1me4e22',
        name: 'Help! How to access the full 96GB VRAM on AMD Strix Halo (Ryzen AI Max+ 395) with PyTorch in Ubuntu 24.04?',
      },
      {
        path: '/1me4i2h',
        name: 'I made a comparison chart for Qwen3-Coder-30B-A3B vs. Qwen3-Coder-480B-A35B',
      },
      {
        path: '/1me4riw',
        name: 'the last MCP server you\'ll ever need',
      },
      {
        path: '/1me6j2v',
        name: 'How can Groq host Kimi-K2 but refuses to host DeepSeek-R1-0528 or V3-0324???',
      },
      {
        path: '/1me6lic',
        name: 'Masking LLM API keys',
      },
      {
        path: '/1me6sxd',
        name: 'HELP ... FINE TUNING LED MODEL !!!!',
      },
      {
        path: '/1me6yfh',
        name: 'Ai for making photo alive',
      },
      {
        path: '/1me713k',
        name: 'Has anyone else seen LLMs lose context after a tool call in OpenWebUI? (Using Qwen 30B)',
      },
      {
        path: '/1me7i6l',
        name: '15+ templates to build agents that are production tested - please give feedback?',
      },
      {
        path: '/1me7jed',
        name: 'Which way modern man?',
      },
      {
        path: '/1me7nbq',
        name: 'Try some models',
      },
      {
        path: '/1me7wuj',
        name: 'Started a Slack group for AI agent/automation side project builders — free to join',
      },
      {
        path: '/1me7xyj',
        name: 'And people say DeepSeek is censored...',
      },
      {
        path: '/1me7yia',
        name: 'I built a local alternative to Grammarly that runs 100% offline',
      },
      {
        path: '/1me7z6b',
        name: 'Qwen 30B A3B 2507 having an identity crisis...',
      },
      {
        path: '/1me88j7',
        name: 'HELP PLEASE -I\'m all lost nothing working my RP chats are all just loop or the same message as before',
      },
      {
        path: '/1me8dgy',
        name: 'Why does HF not show total size for directories?',
      },
      {
        path: '/1me8m73',
        name: 'Are radeon mi60 32Gb gpus still any good?',
      },
      {
        path: '/1me8wz6',
        name: 'They all tried',
      },
      {
        path: '/1me8ym2',
        name: 'Ollama Troubles',
      },
      {
        path: '/1me9hhl',
        name: 'Suitable model for Summarization',
      },
      {
        path: '/1me9pro',
        name: 'GPT-5 might already be on OpenRouter?',
      },
      {
        path: '/1me9qiz',
        name: 'Code to do your *own* quantification?',
      },
      {
        path: '/1me9yqh',
        name: 'Comparison I did - Claude Sonnet / local Qwen3-30B / local Qwen3-235B-thinking',
      },
      {
        path: '/1mea2gf',
        name: 'Horizon Alpha on OpenRouter',
      },
      {
        path: '/1meadtx',
        name: 'Suggest models for local computer use agent',
      },
      {
        path: '/1mearht',
        name: 'An attempt to explain LLM Transformers without math',
      },
      {
        path: '/1meazh1',
        name: 'New Portable AI Rig Announced (Marketed As A Gaming Laptop)',
      },
      {
        path: '/1mebifn',
        name: 'Laptop Recommendations?',
      },
      {
        path: '/1mebzvo',
        name: 'What are some good sites to buy a LLM capable desktop',
      },
      {
        path: '/1mec14w',
        name: 'Finding it hard to part with QwQ:32b, convince me there is something better that I should be using for production RAG tasks.',
      },
      {
        path: '/1mecvig',
        name: 'Built a full stack web app builder that runs locally and gives you full control',
      },
      {
        path: '/1mecx9y',
        name: 'ChatGPT hallucinated about music app Soundslice so often, the founder made the lie come true | TechCrunch',
      },
      {
        path: '/1med15k',
        name: 'I built a python script to auto-generate full AI character sets (SFW/NSFW) with LoRA, WebUI API, metadata + folder structure',
      },
      {
        path: '/1med9hx',
        name: 'Claude Code alternative for local',
      },
      {
        path: '/1mee99g',
        name: 'Here\'s cogito-v2-109B MoE coding Space Invaders in 1 minute on Strix Halo using Lemonade (unedited video)',
      },
      {
        path: '/1meen33',
        name: 'Vibe coding in prod by Anthropic',
      },
      {
        path: '/1meep6o',
        name: 'The Great Deception of "Low Prices" in LLM APIs',
      },
      {
        path: '/1meeyee',
        name: 'Ollama\'s new GUI is closed source?',
      },
      {
        path: '/1mefgt2',
        name: 'An Ollama wrapper for IRC/Slack/Discord, you want to run your own AI for chat? Here ya go.',
      },
      {
        path: '/1meg9cq',
        name: 'DIY AI MAX 395+ ITX board?',
      },
      {
        path: '/1meg9k5',
        name: 'GLM is way more open about the chinese government than other chinese models.',
      },
      {
        path: '/1megdy9',
        name: 'Bytedance Seed Diffusion Preview',
      },
      {
        path: '/1megpco',
        name: '"Horizon Alpha" hides its thinking',
      },
      {
        path: '/1megyc6',
        name: 'Why is "hf download" such a PITA?',
      },
      {
        path: '/1mehark',
        name: '100 E-books in 15 min | vLLM, A6000, around 1k output tokens/s with 100 concurrent requests Qwen3-30B-A3B-Instruct-2507',
      },
      {
        path: '/1mehiqe',
        name: 'best ram configuration for llama with stable difusion',
      },
      {
        path: '/1meho6b',
        name: 'Open source TTS w/voice cloning and multilingual translation?',
      },
      {
        path: '/1mei5ya',
        name: 'How many times do you sample, and why not more?',
      },
      {
        path: '/1mei9pu',
        name: 'Cline + Qwen 3 Coder A3B wont call tools',
      },
      {
        path: '/1mei9yg',
        name: 'Speech-to-text for long audio files',
      },
      {
        path: '/1meiizp',
        name: 'Releasing Open Weights for FLUX.1 Krea',
      },
      {
        path: '/1meiwzu',
        name: 'first time local llm and facing issues',
      },
      {
        path: '/1mejkcu',
        name: '[P] Tri-70B-preview-SFT: New 70B Model (Research Preview, SFT-only)',
      },
      {
        path: '/1mejoef',
        name: 'How are people running GLM-4.5-Air in int4 on a 4090 or even laptops with 64GB of ram? I get Out of Memory errors.',
      },
      {
        path: '/1mejq45',
        name: 'Running Local RAG on Thousands of OCR’d PDFs — Need Advice for Efficient Long-Doc Processing',
      },
      {
        path: '/1meju07',
        name: 'Anyone desperate for a little more compute, may as well try',
      },
      {
        path: '/1mejvkn',
        name: 'Best TTS model right now that I can self host?',
      },
      {
        path: '/1mek98n',
        name: 'tool calling support was merged into ik_llama last week',
      },
      {
        path: '/1mekm4p',
        name: 'How can I set the context length for API external models in Open webUI ?',
      },
      {
        path: '/1meknnb',
        name: 'Looking to buy/build a killer LLM/AI/ML/Deep Learning workstation',
      },
      {
        path: '/1mekoy8',
        name: 'Agentic email workflow inside of OpenWebUI',
      },
      {
        path: '/1mekuwo',
        name: 'What kind of system do I need to run Qwen3-Coder locally like Cursor AI? Is my setup enough?',
      },
      {
        path: '/1mekzk3',
        name: 'genmo is great for storyboards and concept videos',
      },
      {
        path: '/1mel6ma',
        name: 'Best open source LLM for long context RAG?',
      },
      {
        path: '/1mel6r0',
        name: 'Dingo 1.9.0 released: Open-source data quality evaluation with enhanced hallucination detection',
      },
      {
        path: '/1melcsm',
        name: 'Some Questions (Curiosity) Regarding ollama , llama.cpp and LM Studio for a complete beginner',
      },
      {
        path: '/1melltk',
        name: 'Need advice on a vps to host a docker Rag engine with vectorDB',
      },
      {
        path: '/1melurk',
        name: 'AI-Researcher: Intern-Discovery from Shanghai AI Lab!',
      },
      {
        path: '/1mem8cb',
        name: 'Can I offload tasks from CUDA to Vulkan (iGPU), and fallback to CPU if not supported?',
      },
      {
        path: '/1memwlm',
        name: 'has anyone actually gotten RAG + OCR to work locally without silent bugs?',
      },
      {
        path: '/1men0pj',
        name: 'How to auto feed terminal input into language model?',
      },
      {
        path: '/1men28l',
        name: '[Guide] The *SIMPLE* Self-Hosted AI Coding That Just Works feat. Qwen3-Coder-Flash',
      },
      {
        path: '/1menm37',
        name: 'can someone point me to some articles/posts they found really informative in understanding which paramters and how to determine value when deploying models in ik_llama.cpp',
      },
      {
        path: '/1mensme',
        name: 'Using Open Source LLM in my Web App',
      },
      {
        path: '/1menuqx',
        name: 'Q: Is it possible to fine-tune LLM for specific language?',
      },
      {
        path: '/1meohe5',
        name: 'Foundation-Sec-8B-Instruct (from Cisco Foundation AI)',
      },
      {
        path: '/1meostj',
        name: 'Bought RTX 5070 to run 30B AI and it worked with 18 tokens/s',
      },
      {
        path: '/1mepeqh',
        name: 'The OpenAI Open weight model might be 120B',
      },
      {
        path: '/1mephu7',
        name: 'I accidentally built a self-replicating AI agent. It used Tesseract OCR + ncdir, installed Ollama, tried to clone itself, and failed — because my PATH was broken. Defender didn’t catch it. VirusTotal flagged 1/61. This is how AI-native malware might start.',
      },
      {
        path: '/1mepinc',
        name: 'Kimi K2 vs Grok 4: Who’s Better at Real-World Coding Tasks with Tools?',
      },
      {
        path: '/1mepr38',
        name: 'DocStrange - Open Source Document Data Extractor',
      },
      {
        path: '/1mepr5q',
        name: 'How to run Qwen3 Coder 30B-A3B the fastest?',
      },
      {
        path: '/1mepueg',
        name: 'How to get started?',
      },
      {
        path: '/1mepz8z',
        name: 'OpenAI OS model info leaked - 120B &amp; 20B will be available',
      },
      {
        path: '/1mepzf6',
        name: 'Why is gemma3 constantly hallucinating?',
      },
      {
        path: '/1meqnn1',
        name: 'More supposed info about OpenAI\'s open-weight model',
      },
      {
        path: '/1meqsph',
        name: 'What\'s your take on davidau models? Qwen3 30b with 24 activated experts',
      },
      {
        path: '/1mequp1',
        name: 'Multi server multi gpu vllm qwen-coder deployment',
      },
      {
        path: '/1mer66c',
        name: 'RAG System to Analyse bank data',
      },
      {
        path: '/1mer7up',
        name: 'Reasoning + structured generation with ik_llama.cpp',
      },
      {
        path: '/1merf2i',
        name: 'Horizon Alpha vs Kingfall(gemini 3.0 codename) svg 🤖bench. Horizon Alpha an open-source model from OpenAI, as per recent rumours.',
      },
      {
        path: '/1meryoo',
        name: 'OSS OCR model for Android phones?',
      },
      {
        path: '/1mes3pu',
        name: 'I built a full-system computer simulation platform. What LLM experiments should I run?',
      },
      {
        path: '/1mes7rc',
        name: 'Quantize your own GGUFs the same way as your fav Unsloth Dynamic GGUFs',
      },
      {
        path: '/1mesgsv',
        name: 'Nemotron Super – GPU VRAM Allocations',
      },
      {
        path: '/1mesh8e',
        name: 'extract structured data from html',
      },
      {
        path: '/1mesi2s',
        name: 'GLM-4.5-Air running on 64GB Mac Studio(M4)',
      },
      {
        path: '/1meslsd',
        name: '📟 Probando IA local con personalidad fija: alcalde operativo en protocolo de emergencia.',
      },
      {
        path: '/1mesoyy',
        name: 'Best model 32RAM CPU only?',
      },
      {
        path: '/1messzq',
        name: 'Built a Rust terminal AI coding assistant',
      },
      {
        path: '/1mesvnt',
        name: '(Noob here) Qwen 30b (MoE) vs Qwen 32B which is smartest in coding, reasoning and which faster &amp; smartest? (I have RTX 3060 12GB VRAM + 48 GB RAM)',
      },
      {
        path: '/1mete9h',
        name: 'What model for my laptop RTX3060 6gb, 16gb ram, i7 11 gen?',
      },
      {
        path: '/1metf4h',
        name: 'Installscript for Qwen3-Coder running on ik_llama.cpp for high performance',
      },
      {
        path: '/1meu3jn',
        name: 'Gemini 2.5 Deep Think mode benchmarks!',
      },
      {
        path: '/1meucvo',
        name: 'Unsloth GGUFs Perplexity Score Comparison | Qwen3-Coder-30B-A3B-Instruct',
      },
      {
        path: '/1meuqfw',
        name: 'Meta Targets Talent from Thinking Machines Lab',
      },
      {
        path: '/1meuqm6',
        name: 'Qwen Code with local Qwen 3 Coder in Ollama + OpenWebUI',
      },
      {
        path: '/1mewg8a',
        name: 'AMD EPYC 4545P: 16 Zen 5 Cores @ 65 Watts For Low-Power / Energy Efficient Servers',
      },
      {
        path: '/1mewgyf',
        name: 'I created a script that gives local LLMs an autonomous "inner-monologue" to evolve themselves. You can run it right now.',
      },
      {
        path: '/1mewq1v',
        name: 'Hugging Face space for anyone who want to try the new Dots OCR',
      },
      {
        path: '/1meww7m',
        name: 'Looking for a Manchester-based AI/dev builder to help set up a private assistant system',
      },
      {
        path: '/1mex4wg',
        name: 'Prompting Large Language Models In Bash Scripts',
      },
      {
        path: '/1mexa2g',
        name: 'Heads up to those that downloaded Qwen3 Coder 480B before yesterday',
      },
      {
        path: '/1mexai2',
        name: 'MI50 prompt processing performance',
      },
      {
        path: '/1mexvp5',
        name: 'Which SQL dialects is more comfortable for LLMs?',
      },
      {
        path: '/1mey3rs',
        name: 'Coping',
      },
      {
        path: '/1meyn4a',
        name: 'Faster token generation using qwen coder 30B A3B',
      },
      {
        path: '/1mez1w0',
        name: 'retrieval works, embedding matches... but the answer is wrong. anyone else?',
      },
      {
        path: '/1mez87h',
        name: 'anyone managed to run vllm windows with gguf?',
      },
      {
        path: '/1mezdck',
        name: 'Anyone have experience optimizing ttft?',
      },
      {
        path: '/1mezdl4',
        name: 'LLama.cpp on CUDA performance',
      },
      {
        path: '/1meze5n',
        name: 'Question about cpu threads (beginner here)',
      },
      {
        path: '/1mezgxf',
        name: 'Limited to a 3060ti right now (8gb vram) - Is it even worth setting up a local setup to play with?',
      },
      {
        path: '/1mezwua',
        name: '[Question] Which local VLMs can transform text well?',
      },
      {
        path: '/1mf07dy',
        name: 'An Experiment in Logit Control: Using Statistical "Constraint Masks" to Guide Token Selection',
      },
      {
        path: '/1mf08e5',
        name: 'SVDQuant does INT4 quantization of text-to-image models without losing quality. Can\'t the same technique be used in LLMs?',
      },
      {
        path: '/1mf0fgj',
        name: 'Help: Qwen3-Coder + LM Studio + Continue.dev (VSCode) + Mac 64GB M3 Max  — 500 Internal Server Error, Even After Unsloth Fix',
      },
      {
        path: '/1mf0hou',
        name: 'support for the upcoming hunyuan dense models has been merged into llama.cpp',
      },
      {
        path: '/1mf0i54',
        name: 'Qwen 30b a3b 2507 instruct as good as Gemma 3 27B!?',
      },
      {
        path: '/1mf0mw2',
        name: 'Open-source architectures that aren\'t Llama 3 knock offs?',
      },
      {
        path: '/1mf0qlf',
        name: 'Qwen3-235B-A22B-2507 is the top open weights model on lmarena',
      },
      {
        path: '/1mf16vx',
        name: 'AMD 7900 xtx for inference?',
      },
      {
        path: '/1mf1bab',
        name: 'How much VRAM does MOE models take comparative to dense models?',
      },
      {
        path: '/1mf1lfv',
        name: 'How much do PCIe Lanes matter?',
      },
      {
        path: '/1mf2cu1',
        name: 'Is Qwen still the best for coding?',
      },
      {
        path: '/1mf3abn',
        name: 'Why on open router using Horizon Alpha refuse to work until I pay for credits?',
      },
      {
        path: '/1mf3mhi',
        name: 'Built a web dashboard to manage multiple llama-server instances - llamactl',
      },
      {
        path: '/1mf3nw4',
        name: 'I Generated 1 Billion Tokens (So You Don\'t Have To): Introducing ReasonScape',
      },
      {
        path: '/1mf3tm9',
        name: 'The “Leaked” 120 B OpenAI Model is not Trained in FP4',
      },
      {
        path: '/1mf3wr0',
        name: 'Best way to run the Qwen3 30b A3B coder/instruct models for HIGH throughput and/or HIGH context? (on a single 4090)',
      },
      {
        path: '/1mf3z9k',
        name: 'How do you speed up llama.cpp on macOS?',
      },
      {
        path: '/1mf44kh',
        name: 'Are you interested in building something cool?',
      },
      {
        path: '/1mf4ihq',
        name: 'Me lately... Anyone else can relate? 😎',
      },
      {
        path: '/1mf4zaz',
        name: 'Automated Testing Framework for Voice AI Agents : Technical Webinar &amp; Demo',
      },
      {
        path: '/1mf581n',
        name: 'Need help debugging: llama-server uses GPU Memory but 0% GPU Util for inference (CPU only)',
      },
      {
        path: '/1mf6bkl',
        name: 'Qwen3-Embedding-0.6B is fast, high quality, and supports up to 32k tokens. Beats OpenAI embeddings on MTEB',
      },
      {
        path: '/1mf6gaa',
        name: 'Llama-4-Scout-17B-16E-Instruct-GGUF:Q4_K_S running at 20 tk/s on Ryzen AI Max + 395 with llama.cpp Vulkan + Lemonade server (60GB GPU memory)',
      },
      {
        path: '/1mf6n4u',
        name: 'Any up to date coding benchmarks?',
      },
      {
        path: '/1mf72g8',
        name: 'LLama.cpp performance on ROCm',
      },
      {
        path: '/1mf7663',
        name: 'Noob question',
      },
      {
        path: '/1mf7h6k',
        name: 'Too much time playing with LLMs',
      },
      {
        path: '/1mf7hkw',
        name: 'Y\'all got more of them hard problems?',
      },
      {
        path: '/1mf7lyi',
        name: 'Voice cloning on amd',
      },
      {
        path: '/1mf7q94',
        name: 'How to add most recent python library documentation?',
      },
      {
        path: '/1mf7rut',
        name: 'How much to match Sonnet 4?',
      },
      {
        path: '/1mf7snn',
        name: 'Where is Ollama blog rss feed?',
      },
      {
        path: '/1mf82l5',
        name: 'A senior tech journalist left TechCrunch to join Ai2, an open source AI non-profit, to work on solutions that would be "difficult to get buy-in at a commercial organization."',
      },
      {
        path: '/1mf86rn',
        name: 'Cold start vLLM in 5 seconds with GPU snapshotting',
      },
      {
        path: '/1mf8la7',
        name: 'Qwen3-Coder is bad at tool call while glm-4.5 is surprisingly good',
      },
      {
        path: '/1mf8pdo',
        name: 'China report the finetune deepseek scientific model 40.44% on HLE',
      },
      {
        path: '/1mf8um1',
        name: 'Never seen such weird unrelated response from LLMs before  (gemini 2.5 pro)',
      },
      {
        path: '/1mf92r1',
        name: 'MAESTRO, a deep research assistant/RAG pipeline that runs on your local LLMs',
      },
      {
        path: '/1mf955w',
        name: 'qwen3 coder vs glm 4.5 vs kimi k2',
      },
      {
        path: '/1mf9exw',
        name: 'Help: I have an RTX 5090, can I realistically replace Claude Code in any way?',
      },
      {
        path: '/1mf9vr7',
        name: 'Want to run models on PC and use them via same wifi with my laptop',
      },
      {
        path: '/1mfa5nv',
        name: 'How do I know how much my GPU/CPU is being used by ik_llama.cpp',
      },
      {
        path: '/1mfa9nd',
        name: 'Lambda Chat Odd Outputs',
      },
      {
        path: '/1mfa9tj',
        name: 'Anyone tried GLM-4.5 with Claude code or other agents?',
      },
      {
        path: '/1mfag1h',
        name: 'Qwen3 built from Claude?',
      },
      {
        path: '/1mfaigh',
        name: 'We\'re truly in the fastest-paced era of AI these days. (50 LLM Released these 2-3 Weeks)',
      },
      {
        path: '/1mfap30',
        name: 'Cursor codebase indexing open source alternative?',
      },
      {
        path: '/1mfariy',
        name: 'All local Roo Code and qwen3 coder 30B Q8',
      },
      {
        path: '/1mfb2ed',
        name: 'OpenWebUI is ridiculous',
      },
      {
        path: '/1mfbw8a',
        name: 'DoubleAgents: Fine-tuning LLMs for Covert Malicious Tool Calls',
      },
      {
        path: '/1mfc1oj',
        name: 'RX 7900 GRE users: What training speeds do you get on Applio? (I\'m seeing ~1.88s/it)',
      },
      {
        path: '/1mfda7s',
        name: 'Horizon Beta - new openai open source model?',
      },
      {
        path: '/1mfe6jm',
        name: 'Wizard Coder... or not coder?',
      },
      {
        path: '/1mfe77f',
        name: 'Claude Code - limit reached super quickly',
      },
      {
        path: '/1mfeazc',
        name: 'Cerebras Pro Coder Deceptive Limits',
      },
      {
        path: '/1mfedua',
        name: 'Question about my dinosaur computer',
      },
      {
        path: '/1mfeipz',
        name: 'Getting SmolLM3-3B\'s /think and /no_think to work with llama.cpp',
      },
      {
        path: '/1mfek6x',
        name: 'New to LLM studio?',
      },
      {
        path: '/1mffa5a',
        name: 'Can you please review the comment from my tuned open source local model?',
      },
      {
        path: '/1mffjjj',
        name: 'EasyWhisperUI – GPU accelerated Open Source Whisper UI for Windows &amp; macOS now with Live Transcriptions!',
      },
      {
        path: '/1mffuv0',
        name: 'Performance issues when using GPU and CPU',
      },
      {
        path: '/1mfgj0g',
        name: 'all I need....',
      },
      {
        path: '/1mfgqb0',
        name: 'Blackwell (RTX 5090 / RTX 6000 Pro) support in llama.cpp',
      },
      {
        path: '/1mfgwyu',
        name: 'Horizon Alpha vs Horizon Beta',
      },
      {
        path: '/1mfhfg0',
        name: 'Good practices to implement memory for LLMs?',
      },
      {
        path: '/1mfhji6',
        name: 'What to do with a NVIDIA Tesla V100S 32GB GPU',
      },
      {
        path: '/1mfhv2c',
        name: 'Med school and LLM',
      },
      {
        path: '/1mfi8ly',
        name: 'What context lengths do people actually run their models at?',
      },
      {
        path: '/1mfia6f',
        name: 'AI model names are out of control. Let’s give them nicknames.',
      },
      {
        path: '/1mfifhh',
        name: 'Best creative writing + long context model?',
      },
      {
        path: '/1mfij9a',
        name: 'How to avoid IP bans when using youtube-transcript-api to fetch YouTube video transcripts?',
      },
      {
        path: '/1mfiroj',
        name: 'Serious hallucination issues of 30B-A3B Instruct 2507',
      },
      {
        path: '/1mfitwb',
        name: 'Skywork MindLink 32B/72B',
      },
      {
        path: '/1mfj2bn',
        name: 'Reach Mini is not Open source?',
      },
      {
        path: '/1mfj3vj',
        name: 'TTS that I can use a downloaded AI voice for? (not sure if this is the right place to ask)',
      },
      {
        path: '/1mfj6fq',
        name: '24/7 local HW buying guide 2025-H2?',
      },
      {
        path: '/1mfjn88',
        name: 'TTS Model Comparisons: My Personal Rankings (So far) of TTS Models',
      },
      {
        path: '/1mfjn9f',
        name: 'GLM just removed there full stack tool...',
      },
      {
        path: '/1mfjp96',
        name: 'I made new stealth model horizon beta deep think just for fun',
      },
      {
        path: '/1mfjqcb',
        name: 'Getting started',
      },
      {
        path: '/1mfk3y2',
        name: 'MetaStoneTec/XBai-o4',
      },
      {
        path: '/1mfk4hx',
        name: 'Embedding models',
      },
      {
        path: '/1mfk60l',
        name: 'What is the best way to connect Android with LLM - Virtually',
      },
      {
        path: '/1mfl6bo',
        name: 'Qwen3 (30B) with Ollama: Blazing Fast, but accuracy concerns',
      },
      {
        path: '/1mfldxj',
        name: 'Small LLM in german',
      },
      {
        path: '/1mfll39',
        name: 'AI models are picking up hidden habits from each other | IBM',
      },
      {
        path: '/1mfn2xf',
        name: 'Saidia: Offline-First AI Assistant for Educators in low-connectivity regions',
      },
      {
        path: '/1mfn7pv',
        name: 'Tool calling is now supported on World\'s first Intermediate Reasoning model',
      },
      {
        path: '/1mfnfrp',
        name: 'Best &lt;2B open-source LLMs for European languages?',
      },
      {
        path: '/1mfnq2r',
        name: 'Benchmarking Qwen3 8B Inference: M1 vs RTX 5060 Ti 16 vs RTX 4090',
      },
      {
        path: '/1mfodac',
        name: 'How to build a local agent for Windows GUI automation (mouse control &amp; accurate button clicking)?',
      },
      {
        path: '/1mfofx5',
        name: 'Issues with michaelf34/infinity:latest-cpu + Qwen3-Embedding-8B',
      },
      {
        path: '/1mfoh32',
        name: 'Looking for a local model that can help a non native writer with sentence phrasing and ideas.',
      },
      {
        path: '/1mfor6n',
        name: 'RAG or prompt engineering',
      },
    ],
  },
  {
    path: '/landing',
    name: 'Landing Page',
  },
];

// replace end---mua--localllama

const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon,
    children: children && loopMenuItem(children),
    path: item.path,
  }));

interface ICustomFooterMenuProps {
  collapsed?: boolean;
}

// @ts-ignore
const TRACE: string = __HEAD_COMMIT_HASH__;

const CustomFooterMenu = ({ collapsed }: ICustomFooterMenuProps) => {
  const [api, contextHolder] = notification.useNotification();

  const copyLink = () => {
    copyText(TRACE);
    api.open({
      key: TRACE,
      message: 'Trace ID copied to clipboard',
      description: `ID: ${TRACE}`,
      duration: 2,
      closeIcon: <div />,
    });
  };

  if (collapsed) return undefined;
  return (
    <>
      {contextHolder}
      <div style={{ textAlign: 'center' }}>
        <div style={{ textAlign: 'center', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
          <div>
            { /* @ts-ignore */}
            {TRACE ? `Trace: ${TRACE}` : ''}
            <CopyOutlined onClick={() => copyLink()} />
          </div>
          <div>
            &copy; {new Date().getFullYear()} - Maifee Ul Asad
          </div>
        </div>
      </div>
    </>
  );
};

const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const SearchBar = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const sections = ['whole']; // todo: add sections dynamically, news, discussion, etc.

  const [resetVisibility, setResetVisibility] = useState(true);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [fuse, setFuse] = useState<Fuse<any> | null>(null);

  useEffect(() => {
    // Flatten your menus for Fuse index
    const flattenMenus = (menus: any[], acc: any[] = []): any[] => {
      menus.forEach((menu) => {
        if (menu.children) {
          flattenMenus(menu.children, acc);
        } else {
          acc.push({
            id: menu.path.replace('/', ''),
            title: menu.name,
          });
        }
      });
      return acc;
    };

    const flatList = flattenMenus(defaultMenus);
    const fuseInstance = new Fuse(flatList, {
      keys: ['title'],
      threshold: 0.4,
    });
    setFuse(fuseInstance);
    setLoading(false);
  }, []);

  const doSearch = useMemo(
    () =>
      debounce((keyword: string) => {
        if (fuse && keyword) {
          const searchResults = fuse.search(keyword);
          setResults(searchResults.map((r) => r.item));
        } else {
          setResults([]);
        }
      }, 200),
    [fuse]
  );

  const onValuesChange = (_changedValues: any, allValues: any) => {
    const { keyword } = allValues;
    setResetVisibility(!keyword);
    if (keyword) {
      doSearch(keyword);
    } else {
      setResults([]);
    }
  };

  const onFinish = () => {
    if (results.length > 0) {
      navigate(results[0].path || `/${results[0].id}`);
      form.resetFields();
      setResults([]);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <Form
        form={form}
        layout="inline"
        onValuesChange={onValuesChange}
        onFinish={onFinish}
        autoComplete="on"
        style={{
          display: 'flex',
          padding: 8,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <Form.Item name="range" initialValue={sections[0]}>
          <Select
            options={sections.map((section) => ({ label: section, value: section }))}
            style={{ width: 120 }}
          />
        </Form.Item>

        <Form.Item name="keyword" style={{ flex: 1 }}>
          <Input placeholder="Search posts..." allowClear />
        </Form.Item>

        <Form.Item hidden={resetVisibility}>
          <Button icon={<ReloadOutlined />} onClick={() => form.resetFields()} />
        </Form.Item>

        <Form.Item>
          <Button icon={<SearchOutlined />} type="primary" htmlType="submit" />
        </Form.Item>
      </Form>

      {loading ? (
        <div style={{ marginTop: 12, textAlign: 'center' }}>
          <Spin tip="Building search index..." />
        </div>
      ) : results.length > 0 ? (
        <List
          size="small"
          bordered
          style={{
            marginTop: 8,
            background: '#fff',
            border: '1px solid #ddd',
            maxHeight: 250,
            overflowY: 'auto',
          }}
          dataSource={results}
          renderItem={(item) => (
            <List.Item
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate(item.path || `/${item.id}`);
                form.resetFields();
                setResults([]);
              }}
            >
              {item.title}
            </List.Item>
          )}
        />
      ) : null}
    </div>
  );
};

const renderMenuItem = (item: any, dom: React.ReactNode) => <Link to={item.path || '/'}>{dom}</Link>;

const subMenuItemRender = (item: any, dom: React.ReactNode) => <Link to={item.path || '/'}>{dom}</Link>;

interface ICustomLayoutProps {
  children: ReactNode;
}

const CustomLayout = ({ children }: ICustomLayoutProps) => {
  const location = useLocation();

  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ProLayout
      logo={logo}
      title="r/LocalLLaMA"
      style={{ minHeight: '100vh' }}
      fixSiderbar
      location={location}
      menu={{
        request: async () => loopMenuItem(defaultMenus),
      }}
      route={{ routes: defaultMenus }}
      menuItemRender={renderMenuItem}
      subMenuItemRender={subMenuItemRender}
      // eslint-disable-next-line
      menuFooterRender={(props) => <CustomFooterMenu {...props} />}
    >
      <PageContainer header={{ title: true }}>
        <Affix offsetTop={0}>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: 4,
                width: `${scrollPercent}%`,
                background: '#1890ff',
                transition: 'width 0.1s ease-out',
                zIndex: 9999,
              }}
            />
            <SearchBar />
          </div>
        </Affix>
        <div style={{ padding: 16, background: 'transparent' }}>
          {children}
        </div>
      </PageContainer>
    </ProLayout>
  );
};

export { CustomLayout };