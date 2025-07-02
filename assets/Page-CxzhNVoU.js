import{j as e}from"./index-Dh2YTDbC.js";import{R as t}from"./RedditPostRenderer-BwWe7STC.js";import"./index-D7FMfiLd.js";const n=[{kind:"Listing",data:{after:null,dist:1,modhash:"",geo_filter:"",children:[{kind:"t3",data:{approved_at_utc:null,subreddit:"LocalLLaMA",selftext:`Hey everyone

Running MoE models on my machine, I'm constantly frustrated working with \\\`--overide-tensor\\\` regexes in llama.cpp. They're hard to maintain, break easily, and are unreadable 

I built a little cli tool which builds these \\\`--override-tensor\\\` arguments automatically for your architecture.

On my machine (Xeon e5 2699v3, 128GB DDR4, 2x3090, 1x3060) this runs Qwen3 235B Q4XL at 5.5 tok/s

    #!/bin/bash
    
    export CUDA_VISIBLE_DEVICES=2,0,1
    
    # Generate tensor overrides
    TENSOR_OVERRIDES=$(gguf-tensor-overrider -g https://huggingface.co/unsloth/Qwen3-235B-A22B-GGUF/resolve/main/UD-Q4_K_XL/Qwen3-235B-A22B-UD-Q4_K_XL-00001-of-00003.gguf -c 32000 --gpu-percentage 0.85)
    
    # Build command with tensor overrides
    CMD="/home/kevin/llama.cpp/build/bin/llama-cli \\
      -hf unsloth/Qwen3-235B-A22B-GGUF:Q4_K_XL \\
      -c 32000 \\
      -fa \\
      -sm row \\
      $TENSOR_OVERRIDES"
    
    # Execute command directly (no pipe)
    eval "$CMD"

Results:

    &gt; hey there
    &lt;think&gt;
    Okay, the user just said "hey there". That's pretty casual. I should respond in a friendly and welcoming way. Maybe ask how they're doing and offer help. Let me keep it simple and approachable.
    
    I need to make sure the response is open-ended so they feel comfortable to ask anything. Avoid any technical jargon. Just a warm greeting and an offer to assist with whatever they need. Yeah, that should work.
    &lt;/think&gt;
    
    Hello! How can I assist you today? 😊
    
    &gt;
    llama_perf_sampler_print:    sampling time =      15.58 ms /   114 runs   (    0.14 ms per token,  7318.01 tokens per second)
    llama_perf_context_print:        load time =  152623.89 ms
    llama_perf_context_print: prompt eval time =    1918.59 ms /    10 tokens (  191.86 ms per token,     5.21 tokens per second)
    llama_perf_context_print:        eval time =   18799.44 ms /   103 runs   (  182.52 ms per token,     5.48 tokens per second)
    llama_perf_context_print:       total time =   30823.94 ms /   113 tokens

These commands should also work with ik\\_llama.cpp. 5.5 tok/s is about what I was getting before with ik\\_llama.cpp.

Here is the link to the repository: [https://github.com/k-koehler/gguf-tensor-overrider](https://github.com/k-koehler/gguf-tensor-overrider/tree/main)

Hopefully some of your find this useful!`,user_reports:[],saved:!1,mod_reason_title:null,gilded:0,clicked:!1,title:"I built a cli tool to automatically figure out tensor overrides in llama.cpp",link_flair_richtext:[{e:"text",t:"Resources"}],subreddit_name_prefixed:"r/LocalLLaMA",hidden:!1,pwls:6,link_flair_css_class:"",downs:0,thumbnail_height:null,top_awarded_type:null,hide_score:!0,name:"t3_1lpmx00",quarantine:!1,link_flair_text_color:"light",upvote_ratio:1,author_flair_background_color:null,subreddit_type:"public",ups:6,total_awards_received:0,media_embed:{},thumbnail_width:null,author_flair_template_id:null,is_original_content:!1,author_fullname:"t2_o015g",secure_media:null,is_reddit_media_domain:!1,is_meta:!1,category:null,secure_media_embed:{},link_flair_text:"Resources",can_mod_post:!1,score:6,approved_by:null,is_created_from_ads_ui:!1,author_premium:!0,thumbnail:"self",edited:!1,author_flair_css_class:null,author_flair_richtext:[],gildings:{},content_categories:null,is_self:!0,mod_note:null,created:1751431108,link_flair_type:"richtext",wls:6,removed_by_category:null,banned_by:null,author_flair_type:"text",domain:"self.LocalLLaMA",allow_live_comments:!1,selftext_html:`&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Hey everyone&lt;/p&gt;

&lt;p&gt;Running MoE models on my machine, I&amp;#39;m constantly frustrated working with \`--overide-tensor\` regexes in llama.cpp. They&amp;#39;re hard to maintain, break easily, and are unreadable &lt;/p&gt;

&lt;p&gt;I built a little cli tool which builds these \`--override-tensor\` arguments automatically for your architecture.&lt;/p&gt;

&lt;p&gt;On my machine (Xeon e5 2699v3, 128GB DDR4, 2x3090, 1x3060) this runs Qwen3 235B Q4XL at 5.5 tok/s&lt;/p&gt;

&lt;pre&gt;&lt;code&gt;#!/bin/bash

export CUDA_VISIBLE_DEVICES=2,0,1

# Generate tensor overrides
TENSOR_OVERRIDES=$(gguf-tensor-overrider -g https://huggingface.co/unsloth/Qwen3-235B-A22B-GGUF/resolve/main/UD-Q4_K_XL/Qwen3-235B-A22B-UD-Q4_K_XL-00001-of-00003.gguf -c 32000 --gpu-percentage 0.85)

# Build command with tensor overrides
CMD=&amp;quot;/home/kevin/llama.cpp/build/bin/llama-cli \\
  -hf unsloth/Qwen3-235B-A22B-GGUF:Q4_K_XL \\
  -c 32000 \\
  -fa \\
  -sm row \\
  $TENSOR_OVERRIDES&amp;quot;

# Execute command directly (no pipe)
eval &amp;quot;$CMD&amp;quot;
&lt;/code&gt;&lt;/pre&gt;

&lt;p&gt;Results:&lt;/p&gt;

&lt;pre&gt;&lt;code&gt;&amp;gt; hey there
&amp;lt;think&amp;gt;
Okay, the user just said &amp;quot;hey there&amp;quot;. That&amp;#39;s pretty casual. I should respond in a friendly and welcoming way. Maybe ask how they&amp;#39;re doing and offer help. Let me keep it simple and approachable.

I need to make sure the response is open-ended so they feel comfortable to ask anything. Avoid any technical jargon. Just a warm greeting and an offer to assist with whatever they need. Yeah, that should work.
&amp;lt;/think&amp;gt;

Hello! How can I assist you today? 😊

&amp;gt;
llama_perf_sampler_print:    sampling time =      15.58 ms /   114 runs   (    0.14 ms per token,  7318.01 tokens per second)
llama_perf_context_print:        load time =  152623.89 ms
llama_perf_context_print: prompt eval time =    1918.59 ms /    10 tokens (  191.86 ms per token,     5.21 tokens per second)
llama_perf_context_print:        eval time =   18799.44 ms /   103 runs   (  182.52 ms per token,     5.48 tokens per second)
llama_perf_context_print:       total time =   30823.94 ms /   113 tokens
&lt;/code&gt;&lt;/pre&gt;

&lt;p&gt;These commands should also work with ik_llama.cpp. 5.5 tok/s is about what I was getting before with ik_llama.cpp.&lt;/p&gt;

&lt;p&gt;Here is the link to the repository: &lt;a href="https://github.com/k-koehler/gguf-tensor-overrider/tree/main"&gt;https://github.com/k-koehler/gguf-tensor-overrider&lt;/a&gt;&lt;/p&gt;

&lt;p&gt;Hopefully some of your find this useful!&lt;/p&gt;
&lt;/div&gt;&lt;!-- SC_ON --&gt;`,likes:null,suggested_sort:null,banned_at_utc:null,view_count:null,archived:!1,no_follow:!1,is_crosspostable:!1,pinned:!1,over_18:!1,all_awardings:[],awarders:[],media_only:!1,link_flair_template_id:"ab9120c4-bf8e-11ed-ae5e-2eb8b7c7e10b",can_gild:!1,spoiler:!1,locked:!1,author_flair_text:null,treatment_tags:[],visited:!1,removed_by:null,num_reports:null,distinguished:null,subreddit_id:"t5_81eyvm",author_is_blocked:!1,mod_reason_by:null,removal_reason:null,link_flair_background_color:"#ccac2b",id:"1lpmx00",is_robot_indexable:!0,num_duplicates:0,report_reasons:null,author:"kevin_1994",discussion_type:null,num_comments:0,send_replies:!0,media:null,contest_mode:!1,author_patreon_flair:!1,author_flair_text_color:null,permalink:"/r/LocalLLaMA/comments/1lpmx00/i_built_a_cli_tool_to_automatically_figure_out/",stickied:!1,url:"https://www.reddit.com/r/LocalLLaMA/comments/1lpmx00/i_built_a_cli_tool_to_automatically_figure_out/",subreddit_subscribers:493457,created_utc:1751431108,num_crossposts:0,mod_reports:[],is_video:!1}}],before:null}},{kind:"Listing",data:{after:null,dist:null,modhash:"",geo_filter:"",children:[],before:null}}],r=()=>e.jsx(t,{data:n});export{r as default};
