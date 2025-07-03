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
