import React, { ReactNode, useEffect, useState } from 'react';
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
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const contexts = import.meta.glob('../dump/*/index.json');

const SearchBar = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const sections = ['whole']; // todo: add sections dynamically, news, discussion, etc.

  const [resetVisibility, setResetVisibility] = useState(true);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [fuse, setFuse] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const posts: any[] = [];
      for (const path in contexts) {
        const data = await contexts[path]();
        const postId = path.split('/').slice(-2, -1)[0];
        // @ts-expect-error reddit should send data in a the following format
        const title = data?.[0]?.data?.children?.[0]?.data?.title || postId;
        // @ts-expect-error reddit should send data in a the following format
        const body = data?.[0]?.data?.children?.[0]?.data?.selftext || '';
        posts.push({ id: postId, title, body });
      }

      const fuseInstance = new Fuse(posts, {
        keys: ['title', 'body'],
        threshold: 0.4,
      });
      setFuse(fuseInstance);
      setLoading(false);
    };

    loadData();
  }, []);

  const doSearch = debounce((keyword: string) => {
    if (fuse && keyword) {
      const searchResults = fuse.search(keyword);
      // @ts-expect-error fuse search returns an array of objects with item property
      setResults(searchResults.map((r) => r.item));
    } else {
      setResults([]);
    }
  }, 30); // 30ms debounce

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
      navigate(`/${results[0].id}`);
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
          <Input placeholder="Search..." allowClear />
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
          <Spin tip="Loading posts for search..." />
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
                navigate(`/${item.id}`);
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
