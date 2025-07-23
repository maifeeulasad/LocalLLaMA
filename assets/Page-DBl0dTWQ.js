import{j as e}from"./index-CWmJdUH_.js";import{R as t}from"./RedditPostRenderer-D2iunoQ9.js";import"./index-BCg9RP6g.js";const l=[{kind:"Listing",data:{after:null,dist:1,modhash:"",geo_filter:"",children:[{kind:"t3",data:{approved_at_utc:null,subreddit:"LocalLLaMA",selftext:`Hi,  
I have 2x 7900 XTX and not getting any model run with them in a docker.

    docker pull rocm/vllm:rocm6.4.1_vllm_0.9.1_20250702
    
    docker run -it \\
      --dns=1.1.1.1 \\
      --dns=8.8.8.8 \\
      --network=host \\
      --group-add=video \\
      --ipc=host \\
      --cap-add=SYS_PTRACE \\
      --security-opt seccomp=unconfined \\
      --privileged \\
      --device /dev/kfd \\
      --device /dev/dri \\
      -e ROCM_VISIBLE_DEVICES=0,1,2,3 \\
      -e HIP_VISIBLE_DEVICES=0,1,2,3 \\
      -e CUDA_VISIBLE_DEVICES=0,1,2,3 \\
      -e VLLM_USE_TRITON_FLASH_ATTN=0 \\
      -e PYTORCH_TUNABLEOP_ENABLED=1 \\
      -e HSA_OVERRIDE_GFX_VERSION=11.0.0 \\
      -e PYTORCH_ROCM_ARCH="gfx1100" \\
      -e GPU_MAX_HW_QUEUES=1 \\
      -v /home/ubuntu/vllm_models:/workspace/models \\
      rocm/vllm:rocm6.4.1_vllm_0.9.1_20250702 bash

apt update &amp;&amp; apt install -y git build-essential

pip install ninja

pip3 install -U xformers --index-url [https://download.pytorch.org/whl/rocm6.3](https://download.pytorch.org/whl/rocm6.3)

    vllm serve /workspace/models/DeepSeek-R1-Distill-Qwen-14B/ \\
      --dtype float16 \\
      --kv-cache-dtype auto \\
      --tensor-parallel-size 2 \\
      --trust-remote-code \\
      --tokenizer_mode auto \\
      --port 8000 \\
      --host 0.0.0.0 

Have tried different models, some may go to a point where vllm says "started and waiting" but then when trying to chat with it all crashes.

How this is so hard? What is AMD doing for this? Or are we dummer meant to fall back to Ollama? AMD makes me very sad.

EDIT: I trusted you AMD, I really did....`,user_reports:[],saved:!1,mod_reason_title:null,gilded:0,clicked:!1,title:"Getting a model run with vLLM and 7900 XTX",link_flair_richtext:[{e:"text",t:"Question | Help"}],subreddit_name_prefixed:"r/LocalLLaMA",hidden:!1,pwls:6,link_flair_css_class:"",downs:0,thumbnail_height:null,top_awarded_type:null,hide_score:!1,name:"t3_1m75i0b",quarantine:!1,link_flair_text_color:"dark",upvote_ratio:1,author_flair_background_color:null,subreddit_type:"public",ups:3,total_awards_received:0,media_embed:{},thumbnail_width:null,author_flair_template_id:null,is_original_content:!1,author_fullname:"t2_1jk2ep8a52",secure_media:null,is_reddit_media_domain:!1,is_meta:!1,category:null,secure_media_embed:{},link_flair_text:"Question | Help",can_mod_post:!1,score:3,approved_by:null,is_created_from_ads_ui:!1,author_premium:!1,thumbnail:"self",edited:1753272524,author_flair_css_class:null,author_flair_richtext:[],gildings:{},content_categories:null,is_self:!0,mod_note:null,created:1753266053,link_flair_type:"richtext",wls:6,removed_by_category:null,banned_by:null,author_flair_type:"text",domain:"self.LocalLLaMA",allow_live_comments:!1,selftext_html:`&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Hi,&lt;br/&gt;
I have 2x 7900 XTX and not getting any model run with them in a docker.&lt;/p&gt;

&lt;pre&gt;&lt;code&gt;docker pull rocm/vllm:rocm6.4.1_vllm_0.9.1_20250702

docker run -it \\
  --dns=1.1.1.1 \\
  --dns=8.8.8.8 \\
  --network=host \\
  --group-add=video \\
  --ipc=host \\
  --cap-add=SYS_PTRACE \\
  --security-opt seccomp=unconfined \\
  --privileged \\
  --device /dev/kfd \\
  --device /dev/dri \\
  -e ROCM_VISIBLE_DEVICES=0,1,2,3 \\
  -e HIP_VISIBLE_DEVICES=0,1,2,3 \\
  -e CUDA_VISIBLE_DEVICES=0,1,2,3 \\
  -e VLLM_USE_TRITON_FLASH_ATTN=0 \\
  -e PYTORCH_TUNABLEOP_ENABLED=1 \\
  -e HSA_OVERRIDE_GFX_VERSION=11.0.0 \\
  -e PYTORCH_ROCM_ARCH=&amp;quot;gfx1100&amp;quot; \\
  -e GPU_MAX_HW_QUEUES=1 \\
  -v /home/ubuntu/vllm_models:/workspace/models \\
  rocm/vllm:rocm6.4.1_vllm_0.9.1_20250702 bash
&lt;/code&gt;&lt;/pre&gt;

&lt;p&gt;apt update &amp;amp;&amp;amp; apt install -y git build-essential&lt;/p&gt;

&lt;p&gt;pip install ninja&lt;/p&gt;

&lt;p&gt;pip3 install -U xformers --index-url &lt;a href="https://download.pytorch.org/whl/rocm6.3"&gt;https://download.pytorch.org/whl/rocm6.3&lt;/a&gt;&lt;/p&gt;

&lt;pre&gt;&lt;code&gt;vllm serve /workspace/models/DeepSeek-R1-Distill-Qwen-14B/ \\
  --dtype float16 \\
  --kv-cache-dtype auto \\
  --tensor-parallel-size 2 \\
  --trust-remote-code \\
  --tokenizer_mode auto \\
  --port 8000 \\
  --host 0.0.0.0 
&lt;/code&gt;&lt;/pre&gt;

&lt;p&gt;Have tried different models, some may go to a point where vllm says &amp;quot;started and waiting&amp;quot; but then when trying to chat with it all crashes.&lt;/p&gt;

&lt;p&gt;How this is so hard? What is AMD doing for this? Or are we dummer meant to fall back to Ollama? AMD makes me very sad.&lt;/p&gt;

&lt;p&gt;EDIT: I trusted you AMD, I really did....&lt;/p&gt;
&lt;/div&gt;&lt;!-- SC_ON --&gt;`,likes:null,suggested_sort:null,banned_at_utc:null,view_count:null,archived:!1,no_follow:!1,is_crosspostable:!1,pinned:!1,over_18:!1,all_awardings:[],awarders:[],media_only:!1,link_flair_template_id:"2c9831e6-bf92-11ed-98e6-d2b8bcc02ae1",can_gild:!1,spoiler:!1,locked:!1,author_flair_text:null,treatment_tags:[],visited:!1,removed_by:null,num_reports:null,distinguished:null,subreddit_id:"t5_81eyvm",author_is_blocked:!1,mod_reason_by:null,removal_reason:null,link_flair_background_color:"#5a74cc",id:"1m75i0b",is_robot_indexable:!0,num_duplicates:0,report_reasons:null,author:"Rich_Artist_8327",discussion_type:null,num_comments:0,send_replies:!0,media:null,contest_mode:!1,author_patreon_flair:!1,author_flair_text_color:null,permalink:"/r/LocalLLaMA/comments/1m75i0b/getting_a_model_run_with_vllm_and_7900_xtx/",stickied:!1,url:"https://www.reddit.com/r/LocalLLaMA/comments/1m75i0b/getting_a_model_run_with_vllm_and_7900_xtx/",subreddit_subscribers:503257,created_utc:1753266053,num_crossposts:0,mod_reports:[],is_video:!1}}],before:null}},{kind:"Listing",data:{after:null,dist:null,modhash:"",geo_filter:"",children:[],before:null}}],r=()=>e.jsx(t,{data:l});export{r as default};
