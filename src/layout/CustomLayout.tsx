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
        name: 'NVIDIA’s Highly Anticipated “Mini-Supercomputer,” the DGX Spark, Launches This Month — Bringing Immense AI Power to Your Hands — up to 4000

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
,
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
